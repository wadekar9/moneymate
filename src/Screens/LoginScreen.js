import { ScrollView, StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react';
import CommonContainer from '../Components/CommonContainer';
import ScreenLoader from '../Components/ScreenLoader';
import { BRAND_LOGO } from '../Assets/Images/index';
import { moderateScale, Fonts, Colors } from '../Config/Theme';
import { EmailIcon, LockIcon, EyeIcon, EyeOffIcon } from '../Assets/Icons/index';
import { StackActions, useNavigation } from '@react-navigation/native';
import { StackNavigationKeys } from '../Navigation/NavigationKeys';
import { useDispatch, useSelector } from 'react-redux';
import { triggerSnackMessage } from '../Services/HelperMethod';
import { createEmailSession } from '../Redux/Actions/Authentication/CreateEmailSession';

const LoginInputComponent = ({ value, icon, onChange, isPassword = false, placeholder, keyBoard = 'default', autoFocus = false, autoComplete }) => {

	const LeftIcon = icon;

	const [isFocused, setIsFocused] = useState(false)
	const [hide, setHide] = useState(isPassword);

	return (
		<View style={[styles.loginInputContainer, isFocused && { borderColor: Colors.BLUE_500 }]}>
			<View style={{ flex: 0.1, alignItems: 'center', justifyContent: 'center' }}>
				<LeftIcon />
			</View>
			<View style={{ flex: 0.9, justifyContent: 'center' }}>
				<TextInput
					value={value}
					onChangeText={onChange}
					placeholder={placeholder}
					autoComplete={autoComplete}
					autoFocus={autoFocus}
					autoCapitalize={'none'}
					autoCorrect={false}
					placeholderTextColor={Colors.GREY_700}
					secureTextEntry={hide}
					keyboardType={keyBoard}
					style={styles.textInputStyle}
					onFocus={() => setIsFocused(true)}
					onBlur={() => setIsFocused(false)}
				/>

				<TouchableOpacity
					style={styles.eyeButtonContainer}
					onPress={() => setHide(!hide)}
				>
					{
						(isPassword) ?
							(hide) ? <EyeIcon /> : <EyeOffIcon /> : null
					}
				</TouchableOpacity>
			</View>
		</View>
	)
}

const LoginScreen = () => {

	const dispatch = useDispatch();
	const navigation = useNavigation();

	const { userDetails, isUserLoggedIn, isLoading, loginDetails } = useSelector((state) => state.AuthenticationReducer);

	const [details, setDetails] = useState({
		email: '',
		password: ''
	})

	useEffect(() => {
		setDetails((prev) => ({ ...prev, email : loginDetails.email }))
	},[loginDetails]);

	useEffect(() => {
		if(userDetails != null && isUserLoggedIn){
			navigation.dispatch(StackActions.replace(StackNavigationKeys.BottomTabNavigator));
		}
	},[isUserLoggedIn])

	const loginRequestHandler = () => {
		if(details.email.trim().length == 0){
			triggerSnackMessage({
				message : 'Please enter email'
			})
			return;
		}

		if(details.password.trim().length < 8){
			triggerSnackMessage({
				message : 'Please enter password'
			});
			return;
		}

		dispatch(createEmailSession(details))
	}

	return (
		<CommonContainer>

			<ScreenLoader isVisiable={isLoading} />

			<ScrollView
				showsVerticalScrollIndicator={false}
				contentContainerStyle={{ flexGrow: 1 }}
				keyboardDismissMode={'interactive'}
				keyboardShouldPersistTaps={'always'}
			>
				<View style={{ flex: 1}}>
					<View style={{ marginVertical: moderateScale(20) }}>
						<Image
							source={BRAND_LOGO}
							style={{
								width: '50%',
								height: undefined,
								aspectRatio: 3
							}}
							resizeMode={'contain'}
						/>
					</View>

					<View style={{ padding: moderateScale(15) }}>
						<Text style={styles.titleStyle}>Let's get you Login!</Text>
						<Text style={styles.subTitleStyle}>Enter your information below</Text>
					</View>

					<View style={{ paddingHorizontal: moderateScale(15) }}>
						<View>
							<LoginInputComponent
								value={details.email}
								onChange={(e) => setDetails((prev) => ({ ...prev, email: e }))}
								placeholder={'Enter email'}
								keyBoard={'email-address'}
								icon={EmailIcon}
								autoComplete={'email'}
								autoFocus={true}
							/>
						</View>
						<View>
							<LoginInputComponent
								value={details.password}
								onChange={(e) => setDetails((prev) => ({ ...prev, password: e }))}
								placeholder={'Enter password'}
								autoComplete={'password'}
								isPassword={true}
								icon={LockIcon}
							/>
						</View>
					</View>

					<View style={{ padding: moderateScale(15), alignItems: 'flex-end' }}>
						<TouchableOpacity
							activeOpacity={0.8}
							accessibilityRole={'button'}
							onPress={() => navigation.navigate(StackNavigationKeys.ForgotPassword)}
						>
							<Text style={styles.forgotPasswordStyle}>Forgot Password ?</Text>
						</TouchableOpacity>
					</View>

					<View style={{ paddingHorizontal : moderateScale(15) }}>
						<TouchableOpacity
							style={styles.buttonContainer}
							activeOpacity={0.8}
							accessibilityRole={'button'}
							onPress={() => loginRequestHandler()}
						>
							<Text style={styles.buttonContainerText}>Login</Text>
						</TouchableOpacity>
					</View>
				</View>

				<View style={{flexDirection : 'row',alignItems : 'center',justifyContent:'center',marginBottom : moderateScale(18)}}>
					<Text style={{fontFamily : Fonts.Medium, fontSize : moderateScale(14), color : Colors.GREY_700}}>New to moneymate ?</Text>
					<TouchableOpacity
						activeOpacity={0.8}
						onPress={() => navigation.navigate(StackNavigationKeys.Registration)}
						accessibilityRole={'button'}
					>
						<Text style={{fontFamily : Fonts.Medium, fontSize : moderateScale(14), color : Colors.BLUE_500, marginLeft : moderateScale(8)}}>Registre Now</Text>
					</TouchableOpacity>
				</View>
			</ScrollView>
		</CommonContainer>
	)
}

export default LoginScreen

const styles = StyleSheet.create({
	titleStyle: {
		fontFamily: Fonts.Bold,
		fontSize: moderateScale(22),
		color: Colors.BLACK
	},
	subTitleStyle: {
		fontFamily: Fonts.Medium,
		fontSize: moderateScale(13),
		color: Colors.GREY_500
	},
	loginInputContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		borderWidth: moderateScale(1),
		borderColor: Colors.GREY_150,
		marginVertical: moderateScale(10),
		paddingHorizontal: moderateScale(10),
		height : moderateScale(55),
		borderRadius: moderateScale(8)
	},
	textInputStyle: {
		fontFamily: Fonts.Medium,
		fontSize: moderateScale(15),
		color: Colors.BLACK
	},
	eyeButtonContainer: {
		position: 'absolute',
		right: moderateScale(5),
		alignSelf: 'center'
	},
	forgotPasswordStyle: {
		fontFamily: Fonts.Medium,
		fontSize: moderateScale(13),
		color: Colors.BLUE_500
	},
	buttonContainer: {
		width: '100%',
		alignItems: 'center',
		justifyContent: 'center',
		height: moderateScale(50),
		backgroundColor: Colors.BLUE_500,
		borderRadius : moderateScale(5)
	},
	buttonContainerText : {
		fontFamily : Fonts.SemiBold,
		fontSize : moderateScale(16),
		color : Colors.WHITE
	}
})