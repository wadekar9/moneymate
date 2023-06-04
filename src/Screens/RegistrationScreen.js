import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react';
import CommonContainer from '../Component/CommonContainer';
import TextInputComponent from '../Component/TextInputComponent';
import { moderateScale, Fonts, Colors } from '../Config/Theme';
import { BrandLogo, PersonImage } from '../Assets/Images/index';
import { EditIcon } from '../Assets/Icons';
import ImagePicker from 'react-native-image-crop-picker';
import { useNavigation } from '@react-navigation/native';
import { requestMultiplePermissions } from '../Services/RequestPermissions';

const RegistrationScreen = () => {

	const navigation = useNavigation();

	const [details, setDetails] = useState({
		name: '',
		email: '',
		imagePath: null,
		password: ''
	});

	useEffect(() => {
		requestMultiplePermissions()
	},[])

	const uploadProfileImage = async () => {
		await ImagePicker.openPicker({
			width: 350,
			height: 350,
			maxFiles: 1,
			minFiles: 1,
			includeBase64: false,
			cropping: true
		})
			.then((image) => {
				setDetails((prev) => ({
					...prev,
					imagePath: image.path
				}));
			})
			.catch((error) => {
				console.log(error)
			})
	}

	return (
		<CommonContainer>
			<ScrollView
				contentContainerStyle={{ flexGrow: 1 }}
				showsVerticalScrollIndicator={false}
				keyboardDismissMode={'interactive'}
				keyboardShouldPersistTaps={'handled'}
			>
				<View style={{ marginVertical: moderateScale(20) }}>
					<Image
						source={BrandLogo}
						style={{
							width: '50%',
							height: undefined,
							aspectRatio: 3
						}}
						resizeMode={'contain'}
					/>
				</View>

				<View style={{ padding: moderateScale(15) }}>
					<View>
						<Text style={styles.titleStyle}>Register your new account</Text>
						<Text style={styles.subTitleStyle}>Enter your information below</Text>
					</View>

					<View style={{ marginVertical: moderateScale(10), alignSelf: 'center' }}>
						<View style={styles.imageContainer}>
							<Image
								source={!details.imagePath ? PersonImage : { uri: details.imagePath }}
								style={{
									height: '100%',
									width: '100%'
								}}
								resizeMode={'cover'}
							/>
						</View>

						<TouchableOpacity
							style={styles.editIconContainer}
							activeOpacity={0.8}
							onPress={() => uploadProfileImage()}
						>
							<EditIcon />
						</TouchableOpacity>
					</View>

					<TextInputComponent
						label={'Name'}
						isRequired={true}
						value={details.name}
						placeholder={'Enter your name'}
						onChange={(e) => setDetails((prev) => ({ ...prev, name: e }))}
					/>

					<TextInputComponent
						label={'Email'}
						isRequired={true}
						value={details.email}
						keyboard={'email-address'}
						placeholder={'Enter your email'}
						onChange={(e) => setDetails((prev) => ({ ...prev, email: e }))}
					/>

					<TextInputComponent
						label={'Password'}
						isRequired={true}
						isPassword={true}
						value={details.password}
						placeholder={'Create your password'}
						onChange={(e) => setDetails((prev) => ({ ...prev, password: e }))}
					/>

					<TouchableOpacity
						style={styles.buttonContainer}
						activeOpacity={0.8}
						accessibilityRole={'button'}
					>
						<Text style={styles.buttonContainerText}>Register</Text>
					</TouchableOpacity>

					<View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginBottom: moderateScale(18) }}>
						<Text style={{ fontFamily: Fonts.Medium, fontSize: moderateScale(14), color: Colors.GREY_700 }}>Already a Member ?</Text>
						<TouchableOpacity
							activeOpacity={0.8}
							onPress={() => navigation.goBack()}
							accessibilityRole={'button'}
						>
							<Text style={{ fontFamily: Fonts.Medium, fontSize: moderateScale(14), color: Colors.BLUE_500, marginLeft: moderateScale(8) }}>Login</Text>
						</TouchableOpacity>
					</View>

				</View>
			</ScrollView>
		</CommonContainer>
	)
}

export default RegistrationScreen

const styles = StyleSheet.create({
	titleStyle: {
		fontFamily: Fonts.Bold,
		fontSize: moderateScale(22),
		color: Colors.BLACK
	},
	subTitleStyle: {
		fontFamily: Fonts.Medium,
		fontSize: moderateScale(13),
		color: Colors.GREY_500,
		marginVertical: moderateScale(5)
	},
	imageContainer: {
		borderWidth: moderateScale(1),
		borderColor: Colors.GREY_150,
		height: moderateScale(130),
		width: moderateScale(130),
		borderRadius: moderateScale(65),
		alignSelf: 'center',
		overflow: 'hidden'
	},
	editIconContainer: {
		position: 'absolute',
		alignItems: 'center',
		justifyContent: 'center',
		height: moderateScale(35),
		width: moderateScale(35),
		borderRadius: moderateScale(35 / 2),
		backgroundColor: Colors.GREY_200,
		bottom: 0,
		right: 10,
		zIndex: 1000
	},
	buttonContainer: {
		width: '100%',
		alignItems: 'center',
		justifyContent: 'center',
		height: moderateScale(50),
		backgroundColor: Colors.BLUE_500,
		borderRadius: moderateScale(5),
		marginVertical: moderateScale(15)
	},
	buttonContainerText: {
		fontFamily: Fonts.SemiBold,
		fontSize: moderateScale(16),
		color: Colors.WHITE
	}
})