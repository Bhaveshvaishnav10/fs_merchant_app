import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import {
  ADD_FUND_SCREEN,
  ADD_FUND_STEPS_SCREEN,
  CARD_CONTROL_SCREEN,
  CONFIRM_PIN_SCREEN,
  DINE_IN_OFFERS,
  FULL_KYC_SUCCESS_SCREEN,
  HOME_CARD_CONFIRM_SCREEN,
  HOME_CARD_INDEX_SCREEN,
  HOME_CARD_ORDER_SCREEN,
  HOME_MAIN_SCREEN,
  KYC_WEBVIEW_SCREEN,
  KYC_WEBVIEW_SCREEN_HOME,
  MANAGE_CARD_SCREEN,
  NEW_PIN_SCREEN,
  NOTIFICATIONS,
  OFFERS_FOR_YOU,
  OTP_PIN_SCREEN,
  RESET_CARD_PIN_SCREEN,
  SEND_MONEY_SCREEN,
} from "../../../utility/valueConstants";
import HomeIndex from "../../screens/main/home_page";
import ManageCardIndex from "../../screens/main/home_page/mange_card";
import CardControl from "../../screens/main/home_page/mange_card/card_controls/CardControl";
import ResetPin from "../../screens/main/home_page/mange_card/reset_pin";
import NewPin from "../../screens/main/home_page/mange_card/reset_pin/NewPin";
import ConfirmPin from "../../screens/main/home_page/mange_card/reset_pin/ConfirmPin";
import OtpPin from "../../screens/main/home_page/mange_card/reset_pin/OtpPin";
import DineInOffers from "../../screens/main/home_page/offers/DineInOffers";
import OffersForYou from "../../screens/main/home_page/offers/OffersForYou";
import NotificationIndex from "../../screens/main/home_page/notifications";
import AddFundIndex from "../../screens/main/home_page/add_funds";
import AddFundSteps from "../../screens/main/home_page/add_funds/AddFundSteps";
import SendMoneyIndex from "../../screens/main/home_page/send_money";
import { WhiteColor } from "../../../utility/colorConstants";

import OrderCardIndex from "../../screens/main/home_page/mange_card/order_card/OrderCardIndex";
import OrderCardPage from "../../screens/main/home_page/mange_card/order_card/OrderCardPage";
import OrderConfirmation from "../../screens/main/home_page/mange_card/order_card/OrderConfirmation";
import WebViewKycHome from "../../screens/main/home_page/WebKycHome";

const Stack = createNativeStackNavigator();

function HomeMainAuth() {
  return (
    <Stack.Navigator
      initialRouteName={HOME_MAIN_SCREEN}
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: WhiteColor,
        },
      }}
    >
      <Stack.Screen
        name={HOME_MAIN_SCREEN}
        component={HomeIndex}
        options={{}}
      />
      <Stack.Screen name={MANAGE_CARD_SCREEN} component={ManageCardIndex} />
      <Stack.Screen name={CARD_CONTROL_SCREEN} component={CardControl} />
      <Stack.Screen name={RESET_CARD_PIN_SCREEN} component={ResetPin} />

      <Stack.Screen name={NEW_PIN_SCREEN} component={NewPin} />
      <Stack.Screen name={CONFIRM_PIN_SCREEN} component={ConfirmPin} />
      <Stack.Screen name={OTP_PIN_SCREEN} component={OtpPin} />

      <Stack.Screen name={DINE_IN_OFFERS} component={DineInOffers} />
      <Stack.Screen name={OFFERS_FOR_YOU} component={OffersForYou} />
      <Stack.Screen name={NOTIFICATIONS} component={NotificationIndex} />
      <Stack.Screen name={ADD_FUND_SCREEN} component={AddFundIndex} />
      <Stack.Screen name={ADD_FUND_STEPS_SCREEN} component={AddFundSteps} />

      <Stack.Screen name={SEND_MONEY_SCREEN} component={SendMoneyIndex} />

      <Stack.Screen
        name={HOME_CARD_INDEX_SCREEN}
        component={OrderCardIndex}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={HOME_CARD_ORDER_SCREEN}
        component={OrderCardPage}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={HOME_CARD_CONFIRM_SCREEN}
        component={OrderConfirmation}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

export default HomeMainAuth;
