import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import {
  DONATION_SCREEN_MAIN_AUTH,
  HOME_SCREEN_MAIN_AUTH,
  PROFILE_SCREEN_MAIN_AUTH,
  SHOP_SCREEN_MAIN_AUTH,
  TRANSACTION_SCREEN_MAIN_AUTH,
} from "../../../utility/valueConstants";
import HomeMainAuth from "./HomeMainAuth";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TransactionMainStack from "./TransactionStack";
import ShopMainStack from "./ShopStack";
import DonationMainStack from "./DonationStack";
import ProfileMainStack from "./ProfileStack";
import Tabbar from "./Tabbar";
import { WhiteColor } from "../../../utility/colorConstants";

const Stack = createBottomTabNavigator();
function BottomStack() {
  return (
    <Stack.Navigator
      initialRouteName={HOME_SCREEN_MAIN_AUTH}
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: WhiteColor,
        },
        unmountOnBlur: true,
      }}
      tabBar={(props) => <Tabbar {...props} />}
    >
      <Stack.Screen name={HOME_SCREEN_MAIN_AUTH} component={HomeMainAuth} />
      <Stack.Screen
        name={TRANSACTION_SCREEN_MAIN_AUTH}
        component={TransactionMainStack}
      />
      <Stack.Screen name={SHOP_SCREEN_MAIN_AUTH} component={ShopMainStack} />
      <Stack.Screen
        name={DONATION_SCREEN_MAIN_AUTH}
        component={DonationMainStack}
      />
      <Stack.Screen
        name={PROFILE_SCREEN_MAIN_AUTH}
        component={ProfileMainStack}
      />
    </Stack.Navigator>
  );
}

export default BottomStack;
