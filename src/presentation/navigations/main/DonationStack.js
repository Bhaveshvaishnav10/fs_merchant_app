import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import {
  ALL_CAMPAIGN_SCREEN,
  CHECKOUT_CART_SCREEN,
  DONATION_CART_SCREEN,
  DONATION_HISTORY_SCREEN,
  DONATION_KNOW_MORE_SCREEN,
  DONATION_MAIN_SCREEN,
} from "../../../utility/valueConstants";
import DonationPage from "../../screens/main/donation";
import DonationKnowMore from "../../screens/main/donation/DonationKnowMore";
import AllCampaings from "../../screens/main/donation/AllCampaings";
import DonationCart from "../../screens/main/donation/DonationCart";
import { WhiteColor } from "../../../utility/colorConstants";
import CheckoutPage from "../../screens/main/donation/CheckoutPage";
import DonationHistory from "../../screens/main/donation/DonationHistory";

const Stack = createNativeStackNavigator();

function DonationMainStack() {
  return (
    <Stack.Navigator
      initialRouteName={DONATION_MAIN_SCREEN}
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: WhiteColor,
        },
      }}
    >
      <Stack.Screen name={DONATION_MAIN_SCREEN} component={DonationPage} />
      <Stack.Screen
        name={DONATION_KNOW_MORE_SCREEN}
        component={DonationKnowMore}
      />
      <Stack.Screen name={ALL_CAMPAIGN_SCREEN} component={AllCampaings} />
      <Stack.Screen name={DONATION_CART_SCREEN} component={DonationCart} />
      <Stack.Screen name={CHECKOUT_CART_SCREEN} component={CheckoutPage} />
      <Stack.Screen
        name={DONATION_HISTORY_SCREEN}
        component={DonationHistory}
      />
    </Stack.Navigator>
  );
}

export default DonationMainStack;
