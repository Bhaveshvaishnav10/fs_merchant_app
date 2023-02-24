import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { WhiteColor } from "../../../utility/colorConstants";
import {
  BIOMETRIC_LOGIN_SCREEN,
  PIN_LOGIN_SCREEN,
  SET_MPIN_AUTH_SCREEN,
} from "../../../utility/valueConstants";
import Biometric from "../../screens/auth/login/BiometricLogin";
import SetMpinAuth from "../../screens/auth/login/SetMpinAuth";
import LoginWithPin from "../../screens/auth/login/LoginWithPin";

const Stack = createNativeStackNavigator();

const SecondLoginStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={BIOMETRIC_LOGIN_SCREEN}
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: WhiteColor,
        },
      }}
    >
      <Stack.Screen
        name={BIOMETRIC_LOGIN_SCREEN}
        component={Biometric}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={SET_MPIN_AUTH_SCREEN}
        component={SetMpinAuth}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={PIN_LOGIN_SCREEN}
        component={LoginWithPin}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default SecondLoginStack;

const styles = StyleSheet.create({});
