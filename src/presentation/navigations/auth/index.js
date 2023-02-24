import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {
  LOGIN_MAIN_SCREEN,
  LOGIN_VERIFY_OTP,
  REGISTER_ACCOUNT_SCREEN,
} from '../../../utility/valueConstants';
import LoginIndex from '../../screens/auth/login';
import VerifyOtpPage from '../../screens/auth/login/VerifyOtpScreen';
import RegisterAccount from '../../screens/auth/register';

const Stack = createNativeStackNavigator();

function AuthNavigation() {
  return (
    //LOGIN_MAIN_SCREEN
    <Stack.Navigator initialRouteName={LOGIN_MAIN_SCREEN}>
      <Stack.Screen
        name={LOGIN_MAIN_SCREEN}
        component={LoginIndex}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={LOGIN_VERIFY_OTP}
        component={VerifyOtpPage}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={REGISTER_ACCOUNT_SCREEN}
        component={RegisterAccount}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

export default AuthNavigation;
