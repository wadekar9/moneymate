import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { StackRoutes } from './Routes';
import { StackNavigationKeys } from './NavigationKeys';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator
          initialRouteName={StackNavigationKeys.Login}
          screenOptions={{
            headerShown : false,
            animation : 'slide_from_right',
            orientation : 'portrait'
          }}
        >
            <Stack.Screen
              name={StackNavigationKeys.Splash}
              component={StackRoutes.SplashScreen}
            />
            <Stack.Screen
              name={StackNavigationKeys.Login}
              component={StackRoutes.LoginScreen}
            />
            <Stack.Screen
              name={StackNavigationKeys.Registration}
              component={StackRoutes.RegistrationScreen}
            />
            <Stack.Screen
              name={StackNavigationKeys.ForgotPassword}
              component={StackRoutes.ForgotPasswordScreen}
            />
            <Stack.Screen
              name={StackNavigationKeys.BottomTabNavigator}
              component={StackRoutes.BottomTabNavigator}
            />
            <Stack.Screen
              name={StackNavigationKeys.AddCategory}
              component={StackRoutes.AddCategoryScreen}
            />
            <Stack.Screen
              name={StackNavigationKeys.AddIncomeExpense}
              component={StackRoutes.AddIncomeExpenseScreen}
              options={{
                animation : 'fade_from_bottom'
              }}
            />
            <Stack.Screen
              name={StackNavigationKeys.ManageCategory}
              component={StackRoutes.ManageCategoryScreen}
            />
            <Stack.Screen
              name={StackNavigationKeys.Profile}
              component={StackRoutes.ProfileScreen}
            />
            <Stack.Screen
              name={StackNavigationKeys.Currency}
              component={StackRoutes.CurrencyScreen}
            />
            <Stack.Screen
              name={StackNavigationKeys.Search}
              component={StackRoutes.SearchScreen}
              options={{
                animation : 'fade_from_bottom'
              }}
            />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default RootNavigator