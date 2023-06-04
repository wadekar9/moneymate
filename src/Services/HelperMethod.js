import Snackbar from 'react-native-snackbar';
import { Fonts } from '../Config/Theme';

export const triggerSnackMessage = ({ bgColor = 'red', message }) => {
    setTimeout(() => {
      Snackbar.show({
        text : message,
        backgroundColor : bgColor,
        duration : Snackbar.LENGTH_LONG,
        fontFamily : Fonts.Medium,
        textColor : '#ffffff'
      })
    }, 800);
  }