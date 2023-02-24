import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import {
  APP_INFO_SCREEN,
  FAQ_SCREEN,
  NEED_HELP_SCREEN,
  PRIVACY_SCREEN,
  PROFILE_CHANGE_MPIN,
  PROFILE_MAIN_SCREEN,
  PROFILE_SCREEN_MAIN_AUTH,
  TERMS_AND_CONDITION_SCREEN,
} from "../../../utility/valueConstants";
import ProfileIndex from "../../screens/main/profile";
import AppInfo from "../../screens/main/profile/AppInfo";
import FaqScreen from "../../screens/main/profile/FaqScreen";
import NeedHelp from "../../screens/main/profile/NeedHelp";
import PrivacyPolicy from "../../screens/main/profile/PrivacyPolicy";
import TermsAndCondition from "../../screens/main/profile/TermsAndCondition";
import { WhiteColor } from "../../../utility/colorConstants";
import MpinSet from "../../screens/main/profile/MpinSet";

const Stack = createNativeStackNavigator();

function ProfileMainStack() {
  return (
    <Stack.Navigator
      initialRouteName={PROFILE_MAIN_SCREEN}
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: WhiteColor,
        },
      }}
    >
      <Stack.Screen name={PROFILE_MAIN_SCREEN} component={ProfileIndex} />
      <Stack.Screen
        name={TERMS_AND_CONDITION_SCREEN}
        component={TermsAndCondition}
      />
      <Stack.Screen name={PRIVACY_SCREEN} component={PrivacyPolicy} />
      <Stack.Screen name={APP_INFO_SCREEN} component={AppInfo} />
      <Stack.Screen name={FAQ_SCREEN} component={FaqScreen} />
      <Stack.Screen name={NEED_HELP_SCREEN} component={NeedHelp} />
      <Stack.Screen name={PROFILE_CHANGE_MPIN} component={MpinSet} />
    </Stack.Navigator>
  );
}

export default ProfileMainStack;
