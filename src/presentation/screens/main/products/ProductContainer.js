import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ShopDummyIcon} from '../../../../utility/assetsManager';
import CustomText from '../../../components/custom_text';
import {WhiteColor} from '../../../../utility/colorConstants';
import ActionButton from 'react-native-action-button';

const ProductContainer = ({onPress}) => {
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
          style={{fontFamily: 'Poppins-Medium', fontSize: 16, marginTop: 5}}>
          Product Description
        </CustomText>

        <CustomText
          style={{fontFamily: 'Poppins-Medium', fontSize: 16, marginTop: 10}}>
          ₹ Price
        </CustomText>
      </View>
    </Pressable>
  );
};

export default ProductContainer;

const styles = StyleSheet.create({});
