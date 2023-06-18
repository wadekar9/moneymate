import Snackbar from 'react-native-snackbar';
import { Colors, Fonts } from '../Config/Theme';
import { Alert } from 'react-native';
import { Constant } from '../Config/Constant';

export const triggerSnackMessage = ({ bgColor = 'red', message, isPositive = false }) => {
  setTimeout(() => {
    Snackbar.show({
      text: message,
      backgroundColor: isPositive ? Colors.DARK_GREEN : Colors.RED_600,
      duration: Snackbar.LENGTH_SHORT,
      fontFamily: Fonts.SemiBold,
      textColor: '#ffffff'
    })
  }, 800);
}


export const triggerAlertMessage = (message = '',label1 = 'Ok', callback) => {
  Alert.alert(
    Constant.APP_NAME,
    message,
    [
      {
        text : 'Cancel',
        style : 'cancel',
        onPress : () => null
      },
      {
        text : label1,
        style : 'default',
        onPress : () => callback()
      }
    ]
  )
}