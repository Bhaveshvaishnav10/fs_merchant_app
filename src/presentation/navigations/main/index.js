import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {WhiteColor} from '../../../utility/colorConstants';
import {BOTTOM_STACK} from '../../../utility/valueConstants';
import BottomStack from './BottomStack';

const Stack = createNativeStackNavigator();
function MainNavigation() {
  return (
    <Stack.Navigator
      initialRouteName={BOTTOM_STACK}
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: WhiteColor,
        },
      }}>
      <Stack.Screen name={BOTTOM_STACK} component={BottomStack} />
    </Stack.Navigator>
  );
}

export default MainNavigation;
