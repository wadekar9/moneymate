import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useEffect } from 'react';
import { getCurrentAccount } from '../Redux/Actions/Authentication/GetCurrentSession';
import { useDispatch, useSelector } from 'react-redux';
import CommonContainer from '../Components/CommonContainer';
import { BRAND_LOGO } from '../Assets/Images';
import { StackActions, useNavigation } from '@react-navigation/native';
import { StackNavigationKeys } from '../Navigation/NavigationKeys';

const SplashScreen = () => {

  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { userDetails, isUserLoggedIn } = useSelector((state) => state.AuthenticationReducer);

  useEffect(() => {

    if(userDetails != null && isUserLoggedIn){
      navigation.dispatch(StackActions.replace(StackNavigationKeys.BottomTabNavigator));
      return;
    }

    dispatch(getCurrentAccount(() => { navigation.dispatch(StackActions.replace(StackNavigationKeys.Login)) }));
  },[isUserLoggedIn]);

  return (
    <CommonContainer>
      <View style={{flex : 1,alignItems:'center',justifyContent:'center'}}>
        <Image
          source={BRAND_LOGO}
          style={{
            width : '80%',
            height : undefined,
            aspectRatio : 3
          }}
          resizeMode={'contain'}
        />
      </View>
    </CommonContainer>
  )
}

export default SplashScreen;