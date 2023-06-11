import Snackbar from 'react-native-snackbar';
import { Colors, Fonts } from '../Config/Theme';

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