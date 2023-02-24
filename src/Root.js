import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {SafeAreaView} from 'react-native';

import Route from './Route';

const Root = () => {
  return (
    <NavigationContainer>
      <SafeAreaView
        style={{
          flex: 1,
        }}>
        <Route />
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default Root;
