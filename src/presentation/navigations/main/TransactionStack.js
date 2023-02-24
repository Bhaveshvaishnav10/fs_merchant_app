import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import {
  TRANSACTION_DETAIL_SCREEN,
  TRANSACTION_MAIN_SCREEN,
} from "../../../utility/valueConstants";
import TransactionPage from "../../screens/main/transactions";
import TransactionDetails from "../../screens/main/transactions/TransactionDetails";
import { WhiteColor } from "../../../utility/colorConstants";

const Stack = createNativeStackNavigator();

function TransactionMainStack() {
  return (
    <Stack.Navigator
      initialRouteName={TRANSACTION_MAIN_SCREEN}
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: WhiteColor,
        },
      }}
    >
      <Stack.Screen
        name={TRANSACTION_MAIN_SCREEN}
        component={TransactionPage}
      />
      <Stack.Screen
        name={TRANSACTION_DETAIL_SCREEN}
        component={TransactionDetails}
      />
    </Stack.Navigator>
  );
}

export default TransactionMainStack;
