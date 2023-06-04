import { Image, StyleSheet, View, TouchableOpacity } from 'react-native'
import React, { memo } from 'react'
import { moderateScale, Colors } from '../Config/Theme';
import { BrandLogo, PersonImage } from '../Assets/Images/index';
import { SearchIcon } from '../Assets/Icons/index';
import { StackNavigationKeys } from '../Navigation/NavigationKeys';
import { useNavigation } from '@react-navigation/native';

const HeaderComponent = () => {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View
                accessibilityRole={'tab'}
                style={styles.profileContainer}
            >
                <Image
                    source={PersonImage}
                    style={{
                        height: '100%',
                        width: '100%',
                        aspectRatio: 1
                    }}
                    resizeMode={'cover'}
                />
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
        height: moderateScale(33),
        width: moderateScale(33),
        borderRadius: moderateScale(16),
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.GRAY_200,
        overflow: 'hidden'
    },
    searchIconContainer: {
        alignItems: 'center',
        justifyContent: 'center'
    }
})