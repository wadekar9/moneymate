import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react';
import CommonContainer from '../Components/CommonContainer';
import { EMAIL } from '../Assets/Images';
import TextInputComponent from '../Components/TextInputComponent';
import { moderateScale, Fonts, Colors } from '../Config/Theme';

const ForgotPasswordScreen = () => {

  const [email, setEmail] = useState('');

  return (
    <CommonContainer>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          flexGrow: 1,
          padding: moderateScale(20)
        }}
      >
        <Image
          source={EMAIL}
          style={{
            width: '80%',
            height: undefined,
            aspectRatio: 1,
            alignSelf: 'center'
          }}
          resizeMode={'contain'}
        />

        <View style={{ marginVertical: moderateScale(10) }}>
          <TextInputComponent
            value={email}
            onChange={setEmail}
            placeholder={'Enter your registered email'}
            keyboard={'email-address'}
            label={'Email'}
            isRequired={true}
          />
        </View>

        <View>
          <TouchableOpacity
            style={styles.buttonContainer}
            activeOpacity={0.8}
            accessibilityRole={'button'}
          >
            <Text style={styles.buttonContainerText}>Send Mail</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </CommonContainer>
  )
}

export default ForgotPasswordScreen

const styles = StyleSheet.create({
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    height: moderateScale(50),
    backgroundColor: Colors.BLUE_500,
    borderRadius: moderateScale(5)
  },
  buttonContainerText: {
    fontFamily: Fonts.SemiBold,
    fontSize: moderateScale(16),
    color: Colors.WHITE
  }
})