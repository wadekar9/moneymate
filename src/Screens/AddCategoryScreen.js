import { ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useState, useRef } from 'react';
import CommonContainer from '../Components/CommonContainer';
import CommonHeader from '../Components/CommonHeader';
import TextInputComponent from '../Components/TextInputComponent';
import { moderateScale, Colors, Fonts, DEVICE_STYLES } from '../Config/Theme';
import { PlusCircleIcon, GroceriesIcon } from '../Assets/Icons/index';
import RBSheet from 'react-native-raw-bottom-sheet';
import { triggerSnackMessage } from '../Services/HelperMethod';
import ScreenLoader from '../Components/ScreenLoader';
import { useSelector } from 'react-redux';

const AddCategoryScreen = () => {

	const { } = useSelector((state) => state)
	const bottomSheetRef = useRef(null);

	const [categoryIcon, setCategoryIcon] = useState(null);
	const [categoryName, setCategoryName] = useState('Demo Grocery Category');

	return (
		<CommonContainer>

			<ScreenLoader isVisiable={false} />

			<CommonHeader headerLabel={'Add new category'} />

			<View style={{ flex: 1 }}>
				<ScrollView
					showsVerticalScrollIndicator={false}
					contentContainerStyle={{
						flexGrow: 1,
						paddingTop: moderateScale(20),
						paddingHorizontal: moderateScale(15)
					}}
				>
					<View style={{ flex: 1 }}>
						<TouchableOpacity
							style={styles.iconContainer}
							activeOpacity={0.8}
							accessibilityRole={'button'}
							onPress={() => bottomSheetRef.current.open()}
						>
							<PlusCircleIcon />
						</TouchableOpacity>

						<View>
							<TextInputComponent
								label={'Category Name'}
								value={categoryName}
								onChange={setCategoryName}
								placeholder={"Enter cateory name"}
							/>
						</View>
					</View>

					<TouchableOpacity
						activeOpacity={0.8}
						accessibilityRole={'button'}
						style={styles.buttonContainer}
						onPress={() => triggerSnackMessage({
							bgColor : Colors.DARK_GREEN,
							message : 'New category added successfully.'
						})}
					>
						<Text style={styles.buttonContainerText}>Add New Category</Text>
					</TouchableOpacity>
				</ScrollView>
			</View>

			<RBSheet
				ref={bottomSheetRef}
				closeOnDragDown={true}
				closeOnPressBack={true}
				closeOnPressMask={true}
				dragFromTopOnly={true}
				openDuration={600}
				closeDuration={300}
				keyboardAvoidingViewEnabled={true}
				animationType={'slide'}
				height={moderateScale(DEVICE_STYLES.SCREEN_HEIGHT * 0.55)}
				customStyles={{
					wrapper: {
						backgroundColor: "transparent"
					},
					draggableIcon: {
						backgroundColor: Colors.GREY_500
					},
					container: styles.bottomSheetContainer
				}}
			>
				<View
					style={{ flex: 1 }}
				>
					<Text style={styles.bottomHeader}>CHOOSE CATEGORY</Text>

					<ScrollView
						style={{ flexGrow: 1 }}
						showsVerticalScrollIndicator={false}
						alwaysBounceVertical={false}
						contentContainerStyle={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-evenly' }}
					>
						{
							(new Array(15).fill('_').map((_, index) => {
								return (
									<View key={index} style={[styles.modalChildContainer, { borderColor: Colors.GREY_200 }]}>
										<TouchableOpacity
											activeOpacity={0.8}
											onPress={() => console.log('kkkk')}
										>
											<GroceriesIcon />
										</TouchableOpacity>
									</View>
								)
							}))
						}
					</ScrollView>
				</View>
			</RBSheet>
		</CommonContainer>
	)
}

export default AddCategoryScreen

const styles = StyleSheet.create({
	iconContainer: {
		height: moderateScale(55),
		width: moderateScale(55),
		borderRadius: moderateScale(55 / 2),
		borderWidth: moderateScale(1.1),
		borderStyle: 'dashed',
		marginVertical: moderateScale(12),
		alignSelf: 'center',
		alignItems: 'center',
		justifyContent: 'center'
	},
	buttonContainer: {
		backgroundColor: Colors.BLUE_500,
		height: moderateScale(48),
		borderRadius: moderateScale(84),
		marginVertical: moderateScale(15),
		width: '100%',
		alignSelf: 'center',
		alignItems: 'center',
		justifyContent: 'center',
	},
	buttonContainerText: {
		fontFamily: Fonts.Medium,
		fontSize: moderateScale(15),
		color: Colors.WHITE,
		textTransform: 'capitalize'
	},
	bottomHeader: {
		fontFamily: Fonts.Medium,
		fontSize: moderateScale(10),
		color: Colors.GREY_700,
		letterSpacing: 1.2,
		alignSelf: 'center',
		marginVertical: moderateScale(8)
	},
	modalChildContainer: {
		width: '22%',
		height: undefined,
		aspectRatio: 1,
		marginVertical: moderateScale(8),
		backgroundColor: Colors.WHITE,
		alignItems: 'center',
		justifyContent: 'space-evenly'
	},
	bottomSheetContainer: {
		borderTopLeftRadius: moderateScale(12),
		borderTopRightRadius: moderateScale(12),
		elevation: 20,
		shadowColor: '#000',
		borderTopWidth: 1.5,
		borderLeftWidth: 1,
		borderRightWidth: 1,
		borderColor: Colors.GREY_200,
		overflow: 'hidden'
	},
	groceryName: {
		fontFamily: Fonts.Regular,
		fontSize: moderateScale(12),
		color: Colors.GREY_800
	},
	bottomSheetButtonContainer: {
		width: '70%',
		height: moderateScale(35),
		alignItems: 'center',
		justifyContent: 'center',
		alignSelf: 'center',
		borderRadius: moderateScale(4),
		borderWidth: moderateScale(0.8),
		borderColor: Colors.GREY_500
	},
	bottomSheetButtonContainerText: {
		fontFamily: Fonts.Medium,
		fontSize: moderateScale(13.5),
		color: Colors.BLUE_500
	}
})