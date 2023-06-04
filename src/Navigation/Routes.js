
//Stack Navigator Routes
import SplashScreen from '../Screens/SplashScreen';
import AddCategoryScreen from '../Screens/AddCategoryScreen';
import AddIncomeExpenseScreen from '../Screens/AddIncomeExpenseScreen';
import LoginScreen from '../Screens/LoginScreen';
import RegistrationScreen from '../Screens/RegistrationScreen';
import ForgotPasswordScreen from '../Screens/ForgotPasswordScreen';
import ManageCategoryScreen from '../Screens/ManageCategoryScreen';
import ProfileScreen from '../Screens/ProfileScreen';
import SearchScreen from '../Screens/SearchScreen';
import CurrencyScreen from '../Screens/CurrencyScreen';

//Bottom Navigator Routes
import HomeScreen from '../Screens/HomeScreen';;
import ReportScreen from '../Screens/ReportScreen';
import SettingScreen from '../Screens/SettingScreen';

//Navigators
import BottomTabNavigator from './BottomTabNavigator';

export const StackRoutes = {
    SplashScreen,
    AddCategoryScreen,
    AddIncomeExpenseScreen,
    LoginScreen,
    RegistrationScreen,
    ForgotPasswordScreen,
    ManageCategoryScreen,
    ProfileScreen,
    SearchScreen,
    BottomTabNavigator,
    CurrencyScreen
}

export const BottomTabRoutes = {
    HomeScreen,
    ReportScreen,
    SettingScreen
}