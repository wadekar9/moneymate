import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react';
import { moderateScale, Fonts, Colors } from '../Config/Theme';
import { ArrowBackIcon } from '../Assets/Icons/index';
import { useNavigation } from '@react-navigation/native';

const CommonHeader = ({ headerLabel = 'Add New' }) => {

    const navigation  = useNavigation();

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.iconContainer}
                accessibilityRole={'button'}
                activeOpacity={0.8}
                onPress={() => navigation.goBack()}
            >
                <ArrowBackIcon />
            </TouchableOpacity>
            <View style={{flex : 0.85}}>
                <Text style={styles.headerLabel}>{headerLabel}</Text>
            </View>
        </View>
    )
}

export default CommonHeader

const styles = StyleSheet.create({
    container: {
        height: moderateScale(50),
        backgroundColor: Colors.GREY_100,
        flexDirection: 'row',
        alignItems: 'center'
    },
    iconContainer : {
        flex : 0.15,
        alignItems : 'center',
        justifyContent : 'center'
    },
    headerLabel : {
        fontFamily : Fonts.Regular,
        fontSize : moderateScale(16),
        color : Colors.GREY_800
    }
})