import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react';
import CommonContainer from '../Components/CommonContainer';
import CommonHeader from '../Components/CommonHeader';
import ScreenLoader from '../Components/ScreenLoader';
import { moderateScale, Fonts, Colors } from '../Config/Theme';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { triggerAlertMessage } from '../Services/HelperMethod';
import { updateUserDocument } from '../Redux/Actions/Authentication/UpdateUserDocument';

const CurrencyScreen = () => {

	const dispatch = useDispatch();
	const navigation = useNavigation();
	const { userDetails, isUpdateLoading } = useSelector((state) => state.AuthenticationReducer);

	const [selectedCurrency, setSelectedCurrency] = useState(userDetails?.currency)
	const [currencyData, setCurrencyData] = useState([
		{
			currenctName: 'USD',
			currenctSymbol: '$'
		},
		{
			currenctName: 'INR',
			currenctSymbol: '₹'
		},
		{
			currenctName: 'EUR',
			currenctSymbol: '€'
		},
		{
			currenctName: 'PND',
			currenctSymbol: '£'
		},
		{
			currenctName: 'YEN',
			currenctSymbol: '¥'
		}

	]);

	const currencyItemContainer = ({ item }) => {
		return (
			<TouchableOpacity
				activeOpacity={0.8}
				onPress={() => setSelectedCurrency(item.currenctName)}
				style={[styles.itemContainer, selectedCurrency === (item.currenctName) && { ...styles.itemSelectionStyle }]}
			>
				<Text style={styles.itemContainerText}>{item.currenctSymbol}</Text>
				<Text style={[styles.itemContainerText, { marginLeft: moderateScale(8) }]}>{item.currenctName}</Text>
			</TouchableOpacity>
		)
	}

	const updateCurrencyHandler = () => {

		let msg = 'Are you sure to update your currency ?';
		triggerAlertMessage(msg, "Update", () => { dispatch(updateUserDocument({ currency: selectedCurrency }, userDetails.$id, () => { navigation.goBack() })) });
	}

	return (
		<CommonContainer>
			<CommonHeader headerLabel={'Choose Currency'} />

			<ScreenLoader isVisiable={isUpdateLoading} />

			<View style={{ flex: 1 }}>
				<FlatList
					numColumns={2}
					data={currencyData}
					contentContainerStyle={{
						padding: moderateScale(10),
						flexGrow: 1
					}}
					alwaysBounceVertical={false}
					renderItem={currencyItemContainer}
					showsVerticalScrollIndicator={false}
					keyExtractor={(_, index) => index.toString()}
				/>

				<TouchableOpacity
					style={[styles.buttonContainer, { opacity: selectedCurrency !== userDetails.currency ? 1 : 0.6 }]}
					disabled={selectedCurrency === null || selectedCurrency === userDetails.currency}
					activeOpacity={0.9}
					accessibilityRole={'button'}
					onPress={() => updateCurrencyHandler()}
				>
					<Text style={styles.buttonContainerText}>Update Currency</Text>
				</TouchableOpacity>
			</View>
		</CommonContainer>
	)
}

export default CurrencyScreen

const styles = StyleSheet.create({
	itemContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		height: moderateScale(40),
		flex: 1,
		margin: moderateScale(5),
		borderWidth: moderateScale(1),
		borderRadius: moderateScale(5),
		backgroundColor: Colors.WHITE,
		borderColor: Colors.GREY_150,
		elevation: 1,
		shadowColor: Colors.BLACK
	},
	itemSelectionStyle: {
		backgroundColor: Colors.BLUR_BLUE,
		borderColor: Colors.BLUE_500
	},
	itemContainerText: {
		fontFamily: Fonts.Medium,
		fontSize: moderateScale(14),
		color: Colors.GREY_700,
		letterSpacing: moderateScale(1)
	},
	buttonContainer: {
		position: 'absolute',
		alignSelf: 'center',
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'row',
		backgroundColor: Colors.BLUE_500,
		height: moderateScale(48),
		width: '48%',
		borderRadius: moderateScale(44),
		bottom: moderateScale(22),
		elevation: 1.2,
		shadowColor: Colors.BLACK
	},
	buttonContainerText: {
		fontFamily: Fonts.Medium,
		fontSize: moderateScale(14),
		color: Colors.WHITE
	}
})