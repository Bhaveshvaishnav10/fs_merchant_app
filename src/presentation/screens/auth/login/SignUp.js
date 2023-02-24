import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {Dimensions, Linking, StyleSheet, View} from 'react-native';
import Snackbar from 'react-native-snackbar';
import {useDispatch} from 'react-redux';
import {BlackColor, TextLightColor} from '../../../../utility/colorConstants';
import {
  ERROR_COLOR,
  LOGIN_VERIFY_OTP,
  SUCCESS_COLOR,
} from '../../../../utility/valueConstants';
import CustomButton from '../../../components/custom_button';
import CustomInput from '../../../components/custom_input';
import CustomText from '../../../components/custom_text';

const {width, height} = Dimensions.get('window');
const SignUp = () => {
  const [mobileNumber, setMobileNumber] = useState('');
  const navigation = useNavigation();

  const [loading1, setLoading1] = useState(false);
  const dispatch = useDispatch();

  const sendOtp = data => {};

  return (
    <View
      style={{
        width: '100%',
        padding: 20,
      }}>
      <View style={{marginTop: 20}}>
        <CustomText
          style={{
            color: BlackColor,
            fontSize: 20,
            fontFamily: 'Raleway-SemiBold',
          }}>
          Login Account
        </CustomText>

        <CustomText
          style={{
            color: TextLightColor,
            fontSize: 13,
            fontFamily: 'Poppins-Regular',
          }}>
          Hello , welcome back to our account !
        </CustomText>

        <View style={{marginTop: 40}}>
          <CustomInput
            onChange={text => {
              setMobileNumber(text);
            }}
            value={mobileNumber}
            placeholder="Enter Phone Number"
            validator="number"
            keyboardType="number-pad"
            maxLength={10}
            style={{
              borderWidth: 1,
              borderColor: '#818181',
              borderRadius: 12,
              padding: 10,
              height: 55,
            }}
            placeholderTextColor={'#6F6F6F'}
          />
        </View>
      </View>
      <CustomButton
        title="Send OTP"
        onPress={async () => {
          if (mobileNumber.length !== 10) {
            Snackbar.show({
              text: 'Please enter mobile number',
              duration: Snackbar.LENGTH_LONG,
              backgroundColor: ERROR_COLOR,
              fontFamily: 'Poppins-Medium',
            });
          } else {
            // getUserDetails(mobileNumber);
            navigation.navigate(LOGIN_VERIFY_OTP);
          }
        }}
        style={{
          width: '100%',
          marginTop: 20,
        }}
      />
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    width,
    height,
    flex: 1,
  },
  successMessage: {
    duration: Snackbar.LENGTH_LONG,
    backgroundColor: SUCCESS_COLOR,
    fontFamily: 'Poppins-Medium',
  },
  failureMessage: {
    duration: Snackbar.LENGTH_LONG,
    backgroundColor: ERROR_COLOR,
    fontFamily: 'Poppins-Medium',
  },
});
