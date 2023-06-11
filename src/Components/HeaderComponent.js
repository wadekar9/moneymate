import { Image, StyleSheet, View, TouchableOpacity, Text } from 'react-native'
import React, { memo } from 'react'
import { moderateScale, Colors, Fonts } from '../Config/Theme';
import { SearchIcon } from '../Assets/Icons/index';
import { StackNavigationKeys } from '../Navigation/NavigationKeys';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';

const HeaderComponent = () => {

    const { userDetails } = useSelector((state) => state.AuthenticationReducer);
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View
                accessibilityRole={'tab'}
                style={styles.profileContainer}
            >
                <Text style={styles.profileContainerChildText}>{userDetails?.userName?.charAt(0)}</Text>
            </View>
            <View style={{ flex: 1, alignItems: 'flex-end' }}>
                <TouchableOpacity
                    activeOpacity={0.8}
                    accessibilityRole={'tab'}
                    style={styles.searchIconContainer}
                    onPress={() => navigation.navigate(StackNavigationKeys.Search)}
                >
                    <SearchIcon />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default memo(HeaderComponent);

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        height: moderateScale(48)
    },
    profileContainer: {
		height : moderateScale(48),
		width : moderateScale(48),
		borderRadius : moderateScale(48/2),
		overflow : 'hidden',
		alignItems : 'center',
		justifyContent : 'center',
		backgroundColor : Colors.GREY_800,
		borderWidth : moderateScale(0.8),
		borderColor : Colors.GREY_150
	},
	profileContainerChildText : {
		fontFamily : Fonts.SemiBold,
		fontSize : moderateScale(18),
		color : Colors.WHITE,
		textTransform : 'uppercase'
	},
    searchIconContainer: {
        alignItems: 'center',
        justifyContent: 'center'
    }
})