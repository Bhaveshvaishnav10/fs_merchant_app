import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {WhiteColor} from '../../../../utility/colorConstants';
import CustomText from '../../../components/custom_text';
import {ShopDummyIcon} from '../../../../utility/assetsManager';
import Icon from 'react-native-vector-icons/Feather';
import CustomInput from '../../../components/custom_input';

const OrderContainer = ({onPress, count = 1}) => {
  const [pcount, setPcount] = useState('count');

  useEffect(() => {
    setPcount('count');
  }, []);
  return (
    <Pressable
      style={{
        width: '100%',
        marginBottom: 20,
        alignItems: 'center',
        backgroundColor: 'red',
        flexDirection: 'row',
        padding: 10,
        borderRadius: 8,
        backgroundColor: WhiteColor,
        shadowOpacity: 0.1,
        shadowRadius: 1.0,
        shadowOffset: {
          width: 0,
          height: 1,
        },
        elevation: 4,
        width: '100%',
      }}
      onPress={onPress}>
      <Image
        source={ShopDummyIcon}
        style={{borderRadius: 8, width: 100, height: 100}}
      />

      <View style={{marginLeft: 10}}>
        <CustomText style={{fontFamily: 'Poppins-Medium', fontSize: 16}}>
          Brand
        </CustomText>

        <CustomText
          style={{
            fontFamily: 'Poppins-Medium',
            fontSize: 14,
            color: '#6d7175',
          }}>
          Sku
        </CustomText>

        <View style={{flexDirection: 'row', gap: 10}}>
          <View
            style={{
              backgroundColor: '#e4e5e7',
              borderRadius: 12,
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'row',
              paddingHorizontal: 10,
              paddingVertical: 2,
            }}>
            <View
              style={{
                backgroundColor: 'grey',
                borderRadius: 12,
                alignItems: 'center',
                justifyContent: 'center',
                width: 8,
                height: 8,
                marginRight: 5,
                borderWidth: 2,
                borderColor: 'grey',
              }}></View>
            <CustomText style={{fontFamily: 'Poppins-Regular', fontSize: 12}}>
              Paid
            </CustomText>
          </View>

          <View
            style={{
              backgroundColor: '#ffea8a',
              borderRadius: 12,
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'row',
              paddingHorizontal: 10,
              paddingVertical: 2,
            }}>
            <View
              style={{
                backgroundColor: '#ffea8a',
                borderRadius: 12,
                alignItems: 'center',
                justifyContent: 'center',
                width: 8,
                height: 8,
                marginRight: 5,
                borderWidth: 2,
                borderColor: '#8a6116',
              }}></View>
            <CustomText style={{fontFamily: 'Poppins-Regular', fontSize: 12}}>
              Unfullfilled
            </CustomText>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

export default OrderContainer;

const styles = StyleSheet.create({});
