import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { WhiteColor } from "../../../utility/colorConstants";
import {
  BIOMETRIC_LOGIN_SCREEN,
  BOTTOM_STACK,
  CAMERA_SCREEN,
  COMPLETE_FULLKYC_BANNER_SCREEN,
  FAILURE_SCREEN,
  FULL_KYC_SUCCESS_SCREEN,
  KYC_EDIT_SCREEN,
  KYC_WEBVIEW_SCREEN,
  KYC_WEBVIEW_SCREEN_HOME,
  PIN_LOGIN_SCREEN,
  SET_MPIN_AUTH_SCREEN,
  SUCCESS_SCREEN,
} from "../../../utility/valueConstants";
import PaymentFailed from "../../components/PaymentFailed";
import PaymentSuccess from "../../components/PaymentSuccess";
import Biometric from "../../screens/auth/login/BiometricLogin";
import LoginWithPin from "../../screens/auth/login/LoginWithPin";
import SetMpinAuth from "../../screens/auth/login/SetMpinAuth";
import CameraScreen from "../../screens/auth/onboard/fullkyc/CameraScreen";
import CompleteFullKycBanner from "../../screens/auth/onboard/fullkyc/CompleteFullKycBanner";
import FullKycSuccess from "../../screens/auth/onboard/fullkyc/FullKycSuccess";
import KycEditDetails from "../../screens/auth/onboard/fullkyc/KycEditDetails";
import WebViewKyc from "../../screens/auth/onboard/fullkyc/WebViewKyc";
import KycSuccess from "../../screens/main/home_page/KycSuccess";
import WebViewKycHome from "../../screens/main/home_page/WebKycHome";
import BottomStack from "./BottomStack";

const Stack = createNativeStackNavigator();
function MainNavigation() {
  return (
    <Stack.Navigator
      initialRouteName={BOTTOM_STACK}
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: WhiteColor,
        },
      }}
    >
      <Stack.Screen name={BOTTOM_STACK} component={BottomStack} />
      <Stack.Screen name={SUCCESS_SCREEN} component={PaymentSuccess} />
      <Stack.Screen name={FAILURE_SCREEN} component={PaymentFailed} />

      <Stack.Screen
        name={COMPLETE_FULLKYC_BANNER_SCREEN}
        component={CompleteFullKycBanner}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={KYC_EDIT_SCREEN}
        component={KycEditDetails}
        options={{
          headerShown: false,
        }}
      />
      {/* <Stack.Screen
        name={FULL_KYC_SUCCESS_SCREEN}
        component={KycSuccess}
        options={{
          headerShown: false,
        }}
      /> */}

      <Stack.Screen
        name={CAMERA_SCREEN}
        component={CameraScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={KYC_WEBVIEW_SCREEN_HOME}
        component={WebViewKycHome}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={FULL_KYC_SUCCESS_SCREEN}
        component={KycSuccess}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

export default MainNavigation;
