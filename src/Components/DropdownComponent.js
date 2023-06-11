import React, { memo, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { Colors, Fonts, moderateScale } from '../Config/Theme';

const DropdownComponent = ({label, value, onChange, data = [], placeholder, isRequired = false}) => {

    const [isFocus, setIsFocus] = useState(false);

    return (
        <View style={{marginVertical : moderateScale(10)}}>
            <View style={styles.labelContainer}>
                <Text style={styles.labelContainerText}>{label}</Text>
                { (isRequired) ? 
                    <Text style={{fontFamily : Fonts.Medium, fontSize : moderateScale(15), color : Colors.RED_600, marginLeft : moderateScale(5)}}>*</Text>
                    : null 
                }
            </View>
            <Dropdown
                style={[styles.dropdown, isFocus && { borderColor: Colors.BLUE_500 }]}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                itemTextStyle={styles.itemTextStyle}
                itemContainerStyle={styles.itemContainerStyle}
                data={data}
                search={false}
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={!isFocus ? placeholder : '...'}
                value={value}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={item => {
                    onChange(item.value);
                    setIsFocus(false);
                }}
            />
        </View>
    );
};

export default memo(DropdownComponent);

const styles = StyleSheet.create({

    itemContainerStyle : {
        backgroundColor: Colors.WHITE
    },
    itemTextStyle : {
        fontFamily : Fonts.Regular,
        fontSize : moderateScale(16),
        color : Colors.GREY_900,
        textTransform : 'capitalize'
    },
    dropdown: {
        borderColor: Colors.GREY_600,
        borderWidth: moderateScale(1),
        borderRadius: moderateScale(4),
        height : moderateScale(53),
        paddingHorizontal : moderateScale(12),
        marginTop : moderateScale(5)
    },
    placeholderStyle: {
        fontFamily: Fonts.Regular,
        fontSize: moderateScale(16),
        textTransform : 'capitalize'
    },
    selectedTextStyle: {
        fontFamily : Fonts.Regular,
        fontSize : moderateScale(16),
        color : Colors.GREY_900,
        textTransform : 'capitalize'
    },
    labelContainer : {
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'center',
        alignSelf: 'flex-start',
        paddingLeft : moderateScale(5)
    },
    labelContainerText : {
        fontFamily : Fonts.Regular,
        fontSize : moderateScale(15),
        color : Colors.GREY_800
    }
});