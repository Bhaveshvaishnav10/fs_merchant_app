import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {WhiteColor} from '../../../utility/colorConstants';
import {ORDERS_MAIN_SCREEN} from '../../../utility/valueConstants';
import OrderIndex from '../../screens/main/orders';

const Stack = createNativeStackNavigator();

function OrdersMainAuth() {
  return (
    <Stack.Navigator
      initialRouteName={ORDERS_MAIN_SCREEN}
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: WhiteColor,
        },
      }}>
      <Stack.Screen
        name={ORDERS_MAIN_SCREEN}
        component={OrderIndex}
        options={{}}
      />
    </Stack.Navigator>
  );
}

export default OrdersMainAuth;
