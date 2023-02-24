import React from 'react';
import AuthNavigation from '.';
import {LOGIN_MAIN_AUTH} from '../../../utility/valueConstants';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function LoginMainAuth() {
  return (
    <Stack.Navigator initialRouteName={LOGIN_MAIN_AUTH}>
      <Stack.Screen
        name={LOGIN_MAIN_AUTH}
        component={AuthNavigation}
        options={{
          headerShown: false,
        }}
      />
      {/* <Stack.Screen
        name={FULL_KYC_SUCCESS_SCREEN}
        component={FullKycSuccess}
        options={{
          headerShown: false,
        }}
      /> */}
    </Stack.Navigator>
  );
}

export default LoginMainAuth;
