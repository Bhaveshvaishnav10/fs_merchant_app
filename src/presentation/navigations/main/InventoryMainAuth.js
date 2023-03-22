import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {WhiteColor} from '../../../utility/colorConstants';
import {INVENTORY_MAIN_SCREEN} from '../../../utility/valueConstants';
import InventoryIndex from '../../screens/main/inventory';

const Stack = createNativeStackNavigator();

function InventoryMainAuth() {
  return (
    <Stack.Navigator
      initialRouteName={INVENTORY_MAIN_SCREEN}
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: WhiteColor,
        },
      }}>
      <Stack.Screen
        name={INVENTORY_MAIN_SCREEN}
        component={InventoryIndex}
        options={{}}
      />
    </Stack.Navigator>
  );
}

export default InventoryMainAuth;
