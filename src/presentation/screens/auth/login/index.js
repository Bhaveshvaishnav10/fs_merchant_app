import React from 'react';
import {ScrollView} from 'react-native';
import SignUp from './SignUp';

function LoginIndex() {
  return (
    <ScrollView
      style={{
        flex: 1,
      }}>
      <SignUp />
    </ScrollView>
  );
}

export default LoginIndex;
