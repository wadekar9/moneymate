import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react';
import { moderateScale, Fonts, Colors } from '../Config/Theme';
import { EyeIcon, EyeOffIcon } from '../Assets/Icons/index';

const TextInputComponent = ({
    inputRef,
    value,
    onChange,
    onSubmit,
    keyboard = 'default',
    label,
    placeholder,
    maxLength = undefined,
    isRequired = false,
    multiline = false,
    isPassword = false
}) => {

    const [focused, setFocused] = useState(false);
    const [hide, setHide] = useState(isPassword);

    return (
        <View style={{ marginVertical: moderateScale(5) }}>
            <View style={styles.labelContainer}>
                <Text style={styles.labelContainerText}>{label}</Text>
                {(isRequired) ?
                    <Text style={{ fontFamily: Fonts.Medium, fontSize: moderateScale(15), color: Colors.RED_600, marginLeft: moderateScale(5) }}>*</Text>
                    : null
                }
            </View>
            <View style={[styles.container, focused && { borderColor: Colors.BLUE_500 }]}>
                <View style={{flex : 1}}>
                    <TextInput
                        ref={inputRef}
                        value={value}
                        onChangeText={(e) => onChange(e)}
                        keyboardType={keyboard}
                        onSubmitEditing={() => onSubmit()}
                        maxLength={maxLength}
                        multiline={multiline}
                        placeholder={placeholder}
                        placeholderTextColor={Colors.GREY_700}
                        autoCapitalize={'none'}
                        autoCorrect={false}
                        secureTextEntry={hide}
                        style={[styles.containerTextStyle, { textAlignVertical: multiline ? 'top' : 'auto', height: multiline ? moderateScale(120) : moderateScale(50) }]}
                        onFocus={() => setFocused(true)}
                        onBlur={() => setFocused(false)}
                    />
                </View>

                <TouchableOpacity
                    style={styles.eyeButtonContainer}
                    onPress={() => setHide(!hide)}
                >
                    {
                        (isPassword) ?
                            (hide) ? <EyeIcon /> : <EyeOffIcon /> : null
                    }
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default TextInputComponent

const styles = StyleSheet.create({
    container: {
        marginVertical: moderateScale(5),
        borderRadius: moderateScale(4),
        borderWidth: moderateScale(1),
        borderColor: Colors.GREY_600,
        flexDirection: 'row',
        alignItems: 'center'
    },
    containerTextStyle: {
        fontFamily: Fonts.Regular,
        fontSize: moderateScale(15),
        color: Colors.GREY_900,
        paddingHorizontal: moderateScale(12)
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
    eyeButtonContainer: {
        position: 'absolute',
        right: moderateScale(15),
        alignSelf: 'center'
    },
})