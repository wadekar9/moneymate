import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react';
import HeaderComponent from '../Component/HeaderComponent';
import CommonContainer from '../Component/CommonContainer';
import { RightChevronIcon, LeftChevronIcon, SmallOutlineIcon, CashIcon, BankIcon, WalletIcon, CafeIcon, GroceriesIcon, ElectronicsIcon, PlusIcon } from '../Assets/Icons/index';
import { moderateScale, Fonts, Colors } from '../Config/Theme';
import { useNavigation, CommonActions } from '@react-navigation/native';
import { StackNavigationKeys } from '../Navigation/NavigationKeys';
import DateTimePicker from '@react-native-community/datetimepicker';
import dayjs from 'dayjs';

const HomeScreen = () => {

	const [showDatePicker, setShowDatePicker] = useState(false);
    const [selectedDate, setSelectedDate] = useState(new Date());
	const navigation = useNavigation();

	const onChange = (event, selectedDate) => {
        setShowDatePicker(false)
        setSelectedDate(selectedDate);
    };

	return (
		<CommonContainer
			customStyles={{paddingHorizontal : moderateScale(10)}}
		>
			<HeaderComponent />

			<ScrollView
				showsVerticalScrollIndicator={false}
				alwaysBounceVertical={false}
			>
				<View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', height: moderateScale(48) }}>
					<TouchableOpacity
						activeOpacity={0.8}
						accessibilityRole={'tab'}
					>
						<LeftChevronIcon />
					</TouchableOpacity>
					<TouchableOpacity
						style={styles.calendarContainer}
						activeOpacity={0.8}
						accessibilityRole={'tab'}
						onPress={() => setShowDatePicker(true)}
					>
						<SmallOutlineIcon />
						<Text style={styles.selectedDateStyle}>{dayjs(selectedDate).format('MMM YYYY')}</Text>
					</TouchableOpacity>
					<TouchableOpacity
						activeOpacity={0.8}
						accessibilityRole={'tab'}
					>
						<RightChevronIcon />
					</TouchableOpacity>
				</View>

				<View style={{ ...styles.container, flexDirection: 'row', height: moderateScale(94) }}>
					<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
						<CashIcon />
						<View style={{ marginTop: moderateScale(2), alignItems: 'center', justifyContent: 'center' }}>
							<Text style={[styles.amountStyle, { color: Colors.RED_600 }]}>12,000</Text>
							<Text style={styles.labelStyle}>Expenses</Text>
						</View>
					</View>
					<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
						<WalletIcon />
						<View style={{ marginTop: moderateScale(2), alignItems: 'center', justifyContent: 'center' }}>
							<Text style={[styles.amountStyle, { color: Colors.GREEN_600 }]}>12,000</Text>
							<Text style={styles.labelStyle}>Balance</Text>
						</View>
					</View>
					<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
						<BankIcon />
						<View style={{ marginTop: moderateScale(2), alignItems: 'center', justifyContent: 'center' }}>
							<Text style={[styles.amountStyle, { color: Colors.GREY_900 }]}>12,000</Text>
							<Text style={styles.labelStyle}>Income</Text>
						</View>
					</View>
				</View>

				<View style={{ ...styles.container, paddingVertical: moderateScale(10), paddingHorizontal: moderateScale(10) }}>
					<View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', height: moderateScale(32) }}>
						<Text style={styles.listContainerLabelAndAmount}>Today</Text>
						<Text style={styles.listContainerLabelAndAmount}>-1,234</Text>
					</View>
					<View>
						{
							(new Array(3)).fill('_').map((_, index) => {
								return (
									<View key={index} style={styles.listChildContainer}>
										<View style={{ flex: 0.82, flexDirection: 'row', alignItems: 'center' }}>
											<View style={{ alignItems: 'flex-start', justifyContent: 'center', flex: 0.17 }}>
												<CafeIcon />
											</View>
											<View style={{ flex: 0.83 }}>
												<Text style={styles.listTitleName}>Egg and Vegies</Text>
												<Text style={styles.listCategoryName}>Bar & Cafe</Text>
											</View>
										</View>
										<View style={{ flex: 0.18, alignSelf: 'center', alignItems: 'flex-end' }}>
											<Text style={styles.listAmountStyle}>-300$</Text>
										</View>
									</View>
								)
							})
						}
					</View>
				</View>

				<View style={{ ...styles.container, paddingVertical: moderateScale(10), paddingHorizontal: moderateScale(10) }}>
					<View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', height: moderateScale(32) }}>
						<Text style={styles.listContainerLabelAndAmount}>Today</Text>
						<Text style={styles.listContainerLabelAndAmount}>-1,234</Text>
					</View>
					<View>
						{
							(new Array(3)).fill('_').map((_, index) => {
								return (
									<View key={index} style={styles.listChildContainer}>
										<View style={{ flex: 0.82, flexDirection: 'row', alignItems: 'center' }}>
											<View style={{ alignItems: 'flex-start', justifyContent: 'center', flex: 0.17 }}>
												<GroceriesIcon />
											</View>
											<View style={{ flex: 0.83 }}>
												<Text style={styles.listTitleName}>Egg and Vegies</Text>
												<Text style={styles.listCategoryName}>Bar & Cafe</Text>
											</View>
										</View>
										<View style={{ flex: 0.18, alignSelf: 'center', alignItems: 'flex-end' }}>
											<Text style={styles.listAmountStyle}>-300$</Text>
										</View>
									</View>
								)
							})
						}
					</View>
				</View>

				<View style={{ ...styles.container, paddingVertical: moderateScale(10), paddingHorizontal: moderateScale(10) }}>
					<View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', height: moderateScale(32) }}>
						<Text style={styles.listContainerLabelAndAmount}>Today</Text>
						<Text style={styles.listContainerLabelAndAmount}>-1,234</Text>
					</View>
					<View>
						{
							(new Array(3)).fill('_').map((_, index) => {
								return (
									<View key={index} style={styles.listChildContainer}>
										<View style={{ flex: 0.82, flexDirection: 'row', alignItems: 'center' }}>
											<View style={{ alignItems: 'flex-start', justifyContent: 'center', flex: 0.17 }}>
												<ElectronicsIcon />
											</View>
											<View style={{ flex: 0.83 }}>
												<Text style={styles.listTitleName}>Egg and Vegies</Text>
												<Text style={styles.listCategoryName}>Bar & Cafe</Text>
											</View>
										</View>
										<View style={{ flex: 0.18, alignSelf: 'center', alignItems: 'flex-end' }}>
											<Text style={styles.listAmountStyle}>-300$</Text>
										</View>
									</View>
								)
							})
						}
					</View>
				</View>
			</ScrollView>

			<TouchableOpacity
				style={styles.buttonContainer}
				activeOpacity={0.9}
				accessibilityRole={'button'}
				onPress={() => navigation.dispatch(CommonActions.navigate(StackNavigationKeys.AddIncomeExpense))}
			>
				<PlusIcon />
				<Text style={styles.buttonContainerText}>Add New</Text>
			</TouchableOpacity>

			{
                showDatePicker &&
                <DateTimePicker
                    testID="dateTimePicker"
                    value={selectedDate}
                    maximumDate={new Date()}
                    mode={'date'}
                    is24Hour={true}
                    onChange={onChange}
                />
            }
		</CommonContainer>
	)
}

export default HomeScreen

const styles = StyleSheet.create({
	calendarContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		height: moderateScale(34),
		width: '35%',
		borderRadius: moderateScale(50),
		backgroundColor: '#F5F5F5'
	},
	selectedDateStyle: {
		fontFamily: Fonts.Medium,
		fontSize: moderateScale(14),
		color: Colors.GREY_800,
		textTransform: 'capitalize',
		marginLeft: moderateScale(8)
	},
	container: {
		width: '100%',
		borderWidth: moderateScale(1),
		borderColor: '#E0E0E0',
		borderRadius: moderateScale(8),
		marginVertical: moderateScale(8)
	},
	labelStyle: {
		fontFamily: Fonts.Regular,
		fontSize: moderateScale(12),
		color: Colors.GREY_700,
		textTransform: 'capitalize'
	},
	amountStyle: {
		fontFamily: Fonts.Medium,
		fontSize: moderateScale(14),
		textTransform: 'capitalize'
	},
	listContainerLabelAndAmount: {
		fontFamily: Fonts.Medium,
		fontSize: moderateScale(10),
		color: Colors.GREY_800,
		textTransform: 'uppercase',
		letterSpacing: 1.3
	},
	listChildContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		height: moderateScale(56)
	},
	listAmountStyle: {
		fontFamily: Fonts.Regular,
		fontSize: moderateScale(14),
		color: Colors.RED_600
	},
	listTitleName: {
		fontFamily: Fonts.Regular,
		fontSize: moderateScale(14),
		color: Colors.GREY_900,
		textTransform: 'capitalize'
	},
	listCategoryName: {
		fontFamily: Fonts.Regular,
		fontSize: moderateScale(12),
		color: Colors.GREY_700,
		textTransform: 'capitalize'
	},
	buttonContainer : {
		position : 'absolute',
		alignSelf : 'center',
		alignItems : 'center',
		justifyContent : 'center',
		flexDirection : 'row',
		backgroundColor : Colors.BLUE_500,
		height : moderateScale(48),
		width : '38%',
		borderRadius : moderateScale(44),
		bottom : moderateScale(22),
		elevation : 3,
		shadowColor : Colors.BLACK
	},
	buttonContainerText : {
		fontFamily : Fonts.Medium,
		fontSize : moderateScale(14),
		color : Colors.WHITE,
		marginLeft : moderateScale(8)
	}
})