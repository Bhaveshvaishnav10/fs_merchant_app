import {BackHandler, Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import {useNavigation} from '@react-navigation/native';

import Snackbar from 'react-native-snackbar';
import CustomText from '../../../components/custom_text';
import CustomButton from '../../../components/custom_button';
import {BlackColor, DodgerColor} from '../../../../utility/colorConstants';
import {
  ERROR_COLOR,
  REGISTER_ACCOUNT_SCREEN,
  SUCCESS_COLOR,
} from '../../../../utility/valueConstants';

const VerifyOtpPage = ({route}) => {
  const [otp, setOtp] = useState('');
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const [loading1, setLoading1] = useState(false);

  return (
    <View
      style={{
        flex: 1,
        padding: 20,
      }}>
      <View
        style={{
          flex: 0.9,
          marginVertical: 10,
        }}>
        <View
          style={{
            paddingHorizontal: 20,
            alignItems: 'center',
            marginTop: 60,
          }}>
          <CustomText
            style={{
              fontSize: 16,
              marginBottom: 10,
              fontFamily: 'Raleway-Bold',
            }}>
            Enter confirmation code
          </CustomText>
          <CustomText
            style={{
              fontSize: 13,
              marginBottom: 40,
              fontFamily: 'Poppins-Regular',
              color: '#71727A',
              textAlign: 'center',
              width: 200,
            }}>
            A 4-digit code was sent to lucasscott3@email.com
          </CustomText>
          <OTPInputView
            style={{
              width: '90%',
              height: 50,
              minWidth: 250,
              maxWidth: 250,
            }}
            pinCount={4}
            codeInputFieldStyle={styles.underlineStyleBase}
            codeInputHighlightStyle={styles.underlineStyleHighLighted}
            onCodeChanged={code => {
              if (/^[0-9]+$/.test(code) && code.length <= 4) {
                setOtp(code);
              }
              if (code === '') {
                setOtp('');
              }
            }}
            onCodeFilled={code => {
              setOtp(code);
            }}
            code={otp}
            autoFocusOnLoad={false}
          />
        </View>
      </View>

      <View
        style={{
          width: '100%',
          paddingHorizontal: 20,
          marginVertical: 30,
          alignItems: 'center',
        }}>
        <Pressable onPress={() => {}}>
          <CustomText
            style={{
              color: '#006FFD',
              fontFamily: 'Raleway-Medium',
            }}>
            Resend Code
          </CustomText>
        </Pressable>
      </View>

      <View
        style={{
          width: '100%',
          justifyContent: 'flex-end',
          alignItems: 'center',
        }}>
        <CustomButton
          title="Continue"
          style={{}}
          onPress={() => {
            navigation.navigate(REGISTER_ACCOUNT_SCREEN);
            // onClickVerifyotp();
          }}
          loading={loading}></CustomButton>
      </View>
    </View>
  );
};

export default VerifyOtpPage;

const styles = StyleSheet.create({
  borderStyleBase: {
    width: 30,
    height: 45,
  },

  borderStyleHighLighted: {
    borderColor: '#C5C6CC',
  },

  underlineStyleBase: {
    width: 48,
    height: 48,
    borderWidth: 1.2,
    borderRadius: 12,
    color: BlackColor,
    fontWeight: 'bold',
  },

  underlineStyleHighLighted: {
    borderColor: '#006FFD',
  },
  successMessage: {
    duration: Snackbar.LENGTH_LONG,
    backgroundColor: SUCCESS_COLOR,
    fontFamily: 'Montserrat-SemiBold',
  },
  failureMessage: {
    duration: Snackbar.LENGTH_LONG,
    backgroundColor: ERROR_COLOR,
    fontFamily: 'Montserrat-SemiBold',
  },
});
