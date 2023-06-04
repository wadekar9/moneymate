import { StyleSheet, Text, ScrollView, View, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';
import CommonContainer from '../Component/CommonContainer';
import CommonHeader from '../Component/CommonHeader';
import TextInputComponent from '../Component/TextInputComponent';
import { Colors, moderateScale, Fonts } from '../Config/Theme';
import { EditIcon } from '../Assets/Icons/index';
import { PersonImage } from '../Assets/Images/index'
import ImagePicker from 'react-native-image-crop-picker';

const ProfileScreen = () => {

	const [details, setDetails] = useState({
		name: '',
		email: '',
		imagePath: null
	})

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
			<CommonHeader headerLabel='Account' />

			<View style={{ flex: 1 }}>
				<ScrollView
					showsVerticalScrollIndicator={false}
					keyboardDismissMode={'interactive'}
					contentContainerStyle={{
						flexGrow: 1,
						paddingHorizontal: moderateScale(15)
					}}
				>
					<View style={{ flex: 1 }}>
						<View style={{ marginVertical: moderateScale(40), alignSelf: 'center' }}>
							<View style={styles.imageContainer}>
								<Image
									source={ !details.imagePath ? PersonImage : { uri : details.imagePath } }
									style={{
										height : '100%',
										width : '100%'
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
					</View>

					<TouchableOpacity
						style={[styles.buttonContainer]}
						activeOpacity={0.9}
						accessibilityRole={'button'}
						onPress={() => navigation.goBack()}
					>
						<Text style={styles.buttonContainerText}>Update Profile</Text>
					</TouchableOpacity>
				</ScrollView>
			</View>
		</CommonContainer>
	)
}

export default ProfileScreen;

const styles = StyleSheet.create({
	buttonContainer: {
		alignSelf: 'center',
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'row',
		backgroundColor: Colors.BLUE_500,
		height: moderateScale(48),
		width: '90%',
		borderRadius: moderateScale(44),
		bottom: moderateScale(22),
		elevation: 1.2,
		shadowColor: Colors.BLACK
	},
	buttonContainerText: {
		fontFamily: Fonts.Medium,
		fontSize: moderateScale(14),
		color: Colors.WHITE
	},
	imageContainer: {
		borderWidth: moderateScale(1),
		borderColor: Colors.GREY_150,
		height: moderateScale(130),
		width: moderateScale(130),
		borderRadius: moderateScale(65),
		alignSelf: 'center',
		overflow : 'hidden'
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
	}
})