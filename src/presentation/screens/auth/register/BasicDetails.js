import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import CustomButton from '../../../components/custom_button';
import CustomInput from '../../../components/custom_input';
import CustomText from '../../../components/custom_text';

const BasicDetails = ({onNext}) => {
  const [address, setAddress] = useState('');
  return (
    <View style={{marginTop: 20, height: '100%'}}>
      <View style={{marginBottom: 20}}>
        <CustomText
          style={{
            fontSize: 14,
            color: '#223263',
            fontFamily: 'Poppins-SemiBold',
            letterSpacing: 0.5,
            marginBottom: 5,
          }}>
          First Name
        </CustomText>
        <CustomInput
          onChange={text => {
            setAddress(text);
          }}
          value={address}
          placeholder="First Name"
          maxLength={10}
          style={{
            borderWidth: 1,
            borderColor: '#EBF0FF',
            borderRadius: 12,
            padding: 10,
            height: 55,
          }}
          placeholderTextColor={'#6F6F6F'}
        />
      </View>

      <View style={{marginBottom: 20}}>
        <CustomText
          style={{
            fontSize: 14,
            color: '#223263',
            fontFamily: 'Poppins-SemiBold',
            letterSpacing: 0.5,
            marginBottom: 5,
          }}>
          Last Name
        </CustomText>
        <CustomInput
          onChange={text => {
            setAddress(text);
          }}
          value={address}
          placeholder="Last Name"
          maxLength={10}
          style={{
            borderWidth: 1,
            borderColor: '#EBF0FF',
            borderRadius: 12,
            padding: 10,
            height: 55,
          }}
          placeholderTextColor={'#6F6F6F'}
        />
      </View>
      <View style={{marginBottom: 20}}>
        <CustomText
          style={{
            fontSize: 14,
            color: '#223263',
            fontFamily: 'Poppins-SemiBold',
            letterSpacing: 0.5,
            marginBottom: 5,
          }}>
          Business Name
        </CustomText>
        <CustomInput
          onChange={text => {
            setAddress(text);
          }}
          value={address}
          placeholder="Business Name"
          maxLength={10}
          style={{
            borderWidth: 1,
            borderColor: '#EBF0FF',
            borderRadius: 12,
            padding: 10,
            height: 55,
          }}
          placeholderTextColor={'#6F6F6F'}
        />
      </View>

      <View
        style={{
          width: '100%',
          justifyContent: 'flex-end',
          alignItems: 'flex-end',
        }}>
        <CustomButton
          title="Continue"
          style={{}}
          onPress={() => {
            onNext();
            // navigation.navigate(REGISTER_ACCOUNT_SCREEN);
            // onClickVerifyotp();
          }}></CustomButton>
      </View>
    </View>
  );
};

export default BasicDetails;

const styles = StyleSheet.create({});
