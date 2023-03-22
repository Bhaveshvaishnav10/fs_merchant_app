import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {
  HOME_SCREEN_MAIN_AUTH,
  INVENTORY_SCREEN_MAIN_AUTH,
  ORDERS_SCREEN_MAIN_AUTH,
  PRODUCT_SCREEN_MAIN_AUTH,
} from '../../../utility/valueConstants';
import HomeMainAuth from './HomeMainAuth';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Tabbar from './Tabbar';
import {WhiteColor} from '../../../utility/colorConstants';
import ProductIndex from '../../screens/main/products';
import InventoryIndex from '../../screens/main/inventory';
import OrderIndex from '../../screens/main/orders';
import ProductMainAuth from './ProductMainAuth';
import InventoryMainAuth from './InventoryMainAuth';
import OrdersMainAuth from './OrdersMainAuth';

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
      tabBar={props => <Tabbar {...props} />}>
      <Stack.Screen name={HOME_SCREEN_MAIN_AUTH} component={HomeMainAuth} />
      <Stack.Screen
        name={PRODUCT_SCREEN_MAIN_AUTH}
        component={ProductMainAuth}
        options={{}}
      />
      <Stack.Screen
        name={INVENTORY_SCREEN_MAIN_AUTH}
        component={InventoryMainAuth}
        options={{}}
      />
      <Stack.Screen
        name={ORDERS_SCREEN_MAIN_AUTH}
        component={OrdersMainAuth}
        options={{}}
      />
    </Stack.Navigator>
  );
}

export default BottomStack;
