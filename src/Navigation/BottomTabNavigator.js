import React from 'react';
import { BottomTabRoutes } from './Routes';
import { BottomTabNavigationKeys } from './NavigationKeys';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Colors, Fonts, moderateScale } from '../Config/Theme';
import {
	HomeFillIcon,
	HomeOutlineIcon,
	PieChartFillIcon,
	PieChartOutlineIcon,
	SettingFillIcon,
	SettingOutlineIcon
} from '../Assets/Icons/index';

const Tab = createBottomTabNavigator();

const CustomTabButton = ({ accessibilityState, onLongPress, onPress, routeName, focusedIcon, unFocusedIcon }) => {

	const isFocused = accessibilityState.selected;
	const FillIcon = focusedIcon;
	const OutlineIcon = unFocusedIcon;

	return(
		<TouchableOpacity
			activeOpacity={0.7}
			accessibilityRole={'tab'}
			style={{flex : 1,alignItems:'center',justifyContent:'center'}}
			onPress={() => onPress()}
			onLongPress={() => onLongPress()}
		>
			{ isFocused ? <FillIcon /> : <OutlineIcon /> }
			<Text style={styles.routeNameStyle}>{routeName}</Text>
		</TouchableOpacity>
	)
}

const BottomTabNavigator = () => {
	return (
		<Tab.Navigator
			screenOptions={{
				headerShown : false,
				tabBarStyle : styles.tabBarStyle
			}}
		>
			<Tab.Screen
				name={BottomTabNavigationKeys.Home}
				component={BottomTabRoutes.HomeScreen}
				options={{
					tabBarButton : (props) => <CustomTabButton 
						routeName={BottomTabNavigationKeys.Home}
						{...props}
						focusedIcon={HomeFillIcon}
						unFocusedIcon={HomeOutlineIcon}
					/>
				}}
			/>
			<Tab.Screen
				name={BottomTabNavigationKeys.Report}
				component={BottomTabRoutes.ReportScreen}
				options={{
					tabBarButton : (props) => <CustomTabButton 
						routeName={BottomTabNavigationKeys.Report}
						{...props}
						focusedIcon={PieChartFillIcon}
						unFocusedIcon={PieChartOutlineIcon}
					/>
				}}
			/>
			<Tab.Screen
				name={BottomTabNavigationKeys.Settings}
				component={BottomTabRoutes.SettingScreen}
				options={{
					tabBarButton : (props) => <CustomTabButton 
						routeName={BottomTabNavigationKeys.Settings}
						{...props}
						focusedIcon={SettingFillIcon}
						unFocusedIcon={SettingOutlineIcon}
					/>
				}}
			/>
		</Tab.Navigator>
	)
}

export default BottomTabNavigator;

const styles = StyleSheet.create({
	tabBarStyle : {
		height : moderateScale(60)
	},
	routeNameStyle : {
		fontFamily : Fonts.Regular,
		fontSize : moderateScale(12),
		color : Colors.GREY_800,
		marginTop : moderateScale(3)
	}
})