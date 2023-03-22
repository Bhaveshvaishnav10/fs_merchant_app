import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {WhiteColor} from '../../../utility/colorConstants';
import {
  PRODUCT_ADD_SCREEN,
  PRODUCT_INFO_SCREEN,
  PRODUCT_MAIN_SCREEN,
} from '../../../utility/valueConstants';
import ProductIndex from '../../screens/main/products';
import ProductAdd from '../../screens/main/products/ProductAdd';
import ProductInfo from '../../screens/main/products/ProductInfo';

const Stack = createNativeStackNavigator();

function ProductMainAuth() {
  return (
    <Stack.Navigator
      initialRouteName={PRODUCT_MAIN_SCREEN}
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: WhiteColor,
        },
      }}>
      <Stack.Screen
        name={PRODUCT_MAIN_SCREEN}
        component={ProductIndex}
        options={{}}
      />

      <Stack.Screen
        name={PRODUCT_INFO_SCREEN}
        component={ProductInfo}
        options={{}}
      />

      <Stack.Screen
        name={PRODUCT_ADD_SCREEN}
        component={ProductAdd}
        options={{}}
      />
    </Stack.Navigator>
  );
}

export default ProductMainAuth;
