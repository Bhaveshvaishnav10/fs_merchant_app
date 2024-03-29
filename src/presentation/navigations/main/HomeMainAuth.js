import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {WhiteColor} from '../../../utility/colorConstants';
import {HOME_MAIN_SCREEN} from '../../../utility/valueConstants';
import HomeIndex from '../../screens/main/home';

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
      }}>
      <Stack.Screen
        name={HOME_MAIN_SCREEN}
        component={HomeIndex}
        options={{}}
      />
    </Stack.Navigator>
  );
}

export default HomeMainAuth;
