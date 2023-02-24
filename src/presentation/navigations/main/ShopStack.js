import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import {
  SHOP_MAIN_SCREEN,
  SHOP_SCREEN_MAIN_AUTH,
} from "../../../utility/valueConstants";
import ShopMainPage from "../../screens/main/shop";
import { WhiteColor } from "../../../utility/colorConstants";

const Stack = createNativeStackNavigator();

function ShopMainStack() {
  return (
    <Stack.Navigator
      initialRouteName={SHOP_MAIN_SCREEN}
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: WhiteColor,
        },
      }}
    >
      <Stack.Screen name={SHOP_MAIN_SCREEN} component={ShopMainPage} />
    </Stack.Navigator>
  );
}

export default ShopMainStack;
