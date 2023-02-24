import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import CustomInput from '../../../components/custom_input';
import CustomButton from '../../../components/custom_button';

const height = Dimensions.get('window').height;

const GstValidation = ({onNext}) => {
  const [gstNumber, setGstNumber] = useState('');
  return (
    <View
      style={{
        marginTop: 20,
        justifyContent: 'space-between',
        height: height * 0.75,
      }}>
      <CustomInput
        onChange={text => {
          setGstNumber(text);
        }}
        value={gstNumber}
        placeholder="Enter Gst Number"
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

export default GstValidation;

const styles = StyleSheet.create({});
