import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react';
import CommonContainer from '../Components/CommonContainer';
import CommonHeader from '../Components/CommonHeader';
import { moderateScale, Colors, Fonts } from '../Config/Theme';
import DropdownComponent from '../Components/DropdownComponent';
import TextInputComponent from '../Components/TextInputComponent';
import RBSheet from 'react-native-raw-bottom-sheet';
import { GroceriesIcon } from '../Assets/Icons/index';
import { StackNavigationKeys } from '../Navigation/NavigationKeys';
import { CommonActions, useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import ScreenLoader from '../Components/ScreenLoader';
import { triggerSnackMessage } from '../Services/HelperMethod';
import { AddIncomeExpense } from '../Redux/Actions/IncomeExpense/AddIncomeExpense';
import { getUserCategories } from '../Redux/Actions/Category/GetUserCategories';
import CategoryIcon from '../Components/CategoryIcon';

const DropdownData = [
	{ label: 'Income', value: 'income' },
	{ label: 'Expense', value: 'expense' }
]

const AddIncomeExpenseScreen = () => {

	const bottomSheetRef = useRef(null);
	const navigation = useNavigation();
	const dispatch = useDispatch();

	const { addIncomeExpenseLoading } = useSelector((state) => state.IncomeExpenseReducer);
	const { userDetails } = useSelector((state) => state.AuthenticationReducer);
	const { manageCategories } = useSelector((state) => state.CategoryReducer);

	const [selectedType, setSelectedType] = useState('income');
	const [details, setDetails] = useState({
		categoryName: 'Select Category',
		selectedCategory : null,
		amount: '',
		description: ''
	});

	useEffect(() => {
		getUserCategory();
	},[]);

	const getUserCategory = () => dispatch(getUserCategories(userDetails?.user_id));

	const handleAddIncomeExpense = () => {
		if(details.selectedCategory == null){
			triggerSnackMessage({
				message : 'Please select category'
			});
			return;
		}

		if(details.amount.trim().length == 0){
			triggerSnackMessage({
				message : 'Please enter amount'
			});
			return;
		}

		const incomeExpenseObject = {
			type : selectedType,
			category : details.categoryName,
			amount : details.amount.trim(),
			description : details.description.trim(),
			date_time : new Date(),
			user_id : userDetails.user_id
		}

		dispatch(
			AddIncomeExpense(
				incomeExpenseObject,
				() => {
					navigation.goBack();
				}
			)
		);
	}

	return (
		<CommonContainer>

			<ScreenLoader isVisiable={addIncomeExpenseLoading} />

			<CommonHeader />

			<ScrollView
				showsVerticalScrollIndicator={false}
				keyboardShouldPersistTaps={'always'}
				keyboardDismissMode={'interactive'}
				contentContainerStyle={{
					padding: moderateScale(10),
					flexGrow: 1
				}}
			>
				<View style={{ flex: 1 }}>
					<View>
						<DropdownComponent
							label={'Select type'}
							data={DropdownData}
							value={selectedType}
							isRequired={true}
							onChange={(e) => setSelectedType(e)}
						/>
					</View>

					<View>
						<View style={styles.labelContainer}>
							<Text style={styles.labelContainerText}>Category Name</Text>
							<Text style={{ fontFamily: Fonts.Medium, fontSize: moderateScale(15), color: Colors.RED_600, marginLeft: moderateScale(5) }}>*</Text>
						</View>
						<TouchableOpacity
							style={styles.container}
							activeOpacity={0.8}
							accessibilityRole={'tab'}
							onPress={() => bottomSheetRef.current.open()}
						>
							<Text style={styles.containerTextStyle}>{details.categoryName}</Text>
						</TouchableOpacity>
					</View>

					<View>
						<TextInputComponent
							label={'Amount'}
							value={details.amount}
							isRequired={true}
							onChange={(e) => setDetails((prev) => ({ ...prev, amount: e }))}
							placeholder={'Enter Amount'}
							keyboard={'number-pad'}
						/>
					</View>

					<View>
						<TextInputComponent
							label={'Description'}
							value={details.description}
							onChange={(e) => setDetails((prev) => ({ ...prev, description: e }))}
							placeholder={'Descrition (Optional)'}
							multiline={true}
						/>
					</View>
				</View>

				<TouchableOpacity
					activeOpacity={0.8}
					accessibilityRole={'button'}
					style={styles.buttonContainer}
					onPress={() =>  handleAddIncomeExpense()}
				>
					<Text style={styles.buttonContainerText}>Add New {selectedType}</Text>
				</TouchableOpacity>
			</ScrollView>

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
				height={moderateScale(215)}
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
					style={{flex: 1}}
				>
					<Text style={styles.bottomHeader}>CHOOSE CATEGORY</Text>
					
					<TouchableOpacity
						activeOpacity={0.8}
						accessibilityRole={'button'}
						onPress={() => {
							bottomSheetRef.current.close();
							setTimeout(() => {
								navigation.dispatch(CommonActions.navigate(StackNavigationKeys.AddCategory));
							},500);
						}}
						style={styles.bottomSheetButtonContainer}
					>
						<Text style={styles.bottomSheetButtonContainerText}>Add New Category</Text>
					</TouchableOpacity>

					<ScrollView
						horizontal
						showsHorizontalScrollIndicator={false}
						scrollEventThrottle={16}
						contentContainerStyle={{paddingHorizontal : moderateScale(5),marginTop : moderateScale(12)}}
					>
						{
							([...manageCategories].map((item, index) => {
								return (
									<TouchableOpacity
										key={index}
										activeOpacity={0.75}
										onPress={() => {
											bottomSheetRef.current.close();
											setDetails((prev) => ({ ...prev, categoryName : item, selectedCategory : item }))
										}}
										style={styles.modalChildContainer}
									>
										<CategoryIcon type={item} />

										<Text style={styles.groceryName}>{item}</Text>
									</TouchableOpacity>
								)
							}))
						}
					</ScrollView>
				</View>
			</RBSheet>
		</CommonContainer>
	)
}

export default AddIncomeExpenseScreen

const styles = StyleSheet.create({
	buttonContainer: {
		backgroundColor: Colors.BLUE_500,
		height: moderateScale(48),
		borderRadius: moderateScale(84),
		marginVertical: moderateScale(5),
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
	container: {
		height: moderateScale(50),
		marginVertical: moderateScale(5),
		borderRadius: moderateScale(4),
		borderWidth: moderateScale(1),
		borderColor: Colors.GREY_600,
		justifyContent: 'center',
		paddingHorizontal: moderateScale(10)
	},
	labelContainer: {
		flexDirection: 'row',
		alignItems: 'flex-start',
		justifyContent: 'center',
		alignSelf: 'flex-start',
		paddingLeft: moderateScale(5)
	},
	labelContainerText: {
		fontFamily: Fonts.Regular,
		fontSize: moderateScale(15),
		color: Colors.GREY_800
	},
	containerTextStyle: {
		fontFamily: Fonts.Regular,
		fontSize: moderateScale(15),
		color: Colors.GREY_900,
		textTransform : 'capitalize',
		textAlign : 'left'
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
		width: moderateScale(90),
		height: moderateScale(90),
		borderWidth: 0.5,
		borderRadius: moderateScale(4),
		backgroundColor : Colors.WHITE,
		elevation : 2.5,
		shadowColor : Colors.BLACK,
		margin: moderateScale(5),
		alignItems : 'center',
		justifyContent : 'space-evenly'
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
	groceryName : {
		fontFamily : Fonts.Regular,
		fontSize : moderateScale(13),
		color : Colors.GREY_800,
		textTransform : 'capitalize',
		textAlign : 'center'
	},
	bottomSheetButtonContainer : {
		width : '70%',
		height : moderateScale(35),
		alignItems : 'center',
		justifyContent : 'center',
		alignSelf : 'center',
		borderRadius : moderateScale(4),
		borderWidth : moderateScale(0.8),
		borderColor : Colors.GREY_500
	},
	bottomSheetButtonContainerText : {
		fontFamily : Fonts.Medium,
		fontSize : moderateScale(13.5),
		color : Colors.BLUE_500
	}
})