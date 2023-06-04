import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, Alert } from 'react-native'
import React from 'react';
import CommonContainer from '../Component/CommonContainer';
import { Colors, Fonts, moderateScale } from '../Config/Theme';
import { PersonImage } from '../Assets/Images/index';
import { CategoryIcon, PDFIcon, DollerIcon, LanguageIcon, FAQIcon, LogOutIcon, SecondaryChevronIcon, ProfileIcon } from '../Assets/Icons/index';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationKeys } from '../Navigation/NavigationKeys';
import Constant from '../Config/Constant';

const SettingScreen = () => {

	const navigation = useNavigation();

	const LOCAL_ROUTES_LIST = [
		{
			icon : ProfileIcon,
			label : 'Account',
			isLogOut : false,
			onPressEvent : () => navigation.navigate(StackNavigationKeys.Profile)
		},
		{
			icon : CategoryIcon,
			label : 'Manage categories',
			isLogOut : false,
			onPressEvent : () => navigation.navigate(StackNavigationKeys.ManageCategory)
		},
		{
			icon : PDFIcon,
			label : 'Export to PDF',
			isLogOut : false,
			onPressEvent : () => console.log('LLLLL')
		},
		{
			icon : DollerIcon,
			label : 'Choose currency',
			isLogOut : false,
			onPressEvent : () => navigation.navigate(StackNavigationKeys.Currency)
		},
		{
			icon : LogOutIcon,
			label : 'Log Out',
			isLogOut : true,
			onPressEvent : () => handleLogOut()
		}
	]

	const handleLogOut = () => {
		Alert.alert(
			Constant.APP_NAME,
			'Are you sure to log out ?',
			[
				{
					text : 'Cancel',
					style : 'cancel'
				},
				{
					text : 'Log Out',
					style : 'destructive'
				}
			]
		)
	}

	return (
		<CommonContainer>
			<ScrollView
				showsVerticalScrollIndicator={false}
				alwaysBounceVertical={false}
			>
				<View style={styles.container}>
					<View style={{height : moderateScale(48)}}>
						<Text style={styles.labelStyle}>Settings</Text>
					</View>

					<View style={{flexDirection : 'row',alignItems:'center'}}>
						<View style={styles.imageContainer}>
							<Image
								source={PersonImage}
								style={{
									height : '100%',
									width : '100%'
								}}
								alt={'Profile Image'}
								resizeMode={'cover'}
							/>
						</View>
						<View style={{marginLeft : moderateScale(15),flex : 1}}>
							<Text style={styles.nameStyle}>John Doe</Text>
							<Text style={styles.emailStyle}>john.doe123@gmail.com</Text>
						</View>
					</View>
				</View>

				<View>
					{
						LOCAL_ROUTES_LIST.map((element, index) => {

							const RouteIcon = element.icon;
							const PressEvent = element.onPressEvent;

							return(

								<TouchableOpacity
									key={index}
									activeOpacity={0.8}
									accessibilityRole={'button'}
									style={styles.listContainer}
									onPress={() => PressEvent()}
								>
									<View style={{flex : 0.13,alignItems:'center',justifyContent:'center'}}>
										<RouteIcon />
									</View>
									<View style={{flex : 0.77}}>
										<Text style={styles.listLabelStyle}>{element.label}</Text>
									</View>
									<View style={{flex : 0.10}}>
										{
											(!element.isLogOut) ? <SecondaryChevronIcon /> : null
										}
									</View>
								</TouchableOpacity>
							)
						})
					}
				</View>
			</ScrollView>
		</CommonContainer>
	)
}

export default SettingScreen

const styles = StyleSheet.create({
	container: {
		backgroundColor : Colors.GREY_200,
		height : moderateScale(136),
		padding : moderateScale(12),
		marginBottom : moderateScale(5)
	},
	labelStyle : {
		fontFamily : Fonts.Bold,
		fontSize : moderateScale(20),
		color : Colors.GREY_800
	},
	imageContainer : {
		height : moderateScale(48),
		width : moderateScale(48),
		borderRadius : moderateScale(48/2),
		overflow : 'hidden'
	},
	nameStyle : {
		fontFamily : Fonts.Regular,
		fontSize : moderateScale(16),
		color : Colors.GREY_900,
		textTransform : 'capitalize',
		letterSpacing : 0.6
	},
	emailStyle : {
		fontFamily : Fonts.Regular,
		fontSize : moderateScale(12),
		color : Colors.GREY_700
	},
	listContainer : {
		height : moderateScale(48),
		flexDirection : 'row',
		alignItems : 'center'
	},
	listLabelStyle : {
		fontFamily : Fonts.Regular,
		fontSize : moderateScale(14),
		color : Colors.GREY_900,
		textAlign : 'left'
	}
})