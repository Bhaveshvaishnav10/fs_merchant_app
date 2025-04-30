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
        // alignItems: 'center',
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
      <View
        style={{
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        <Image
          source={ShopDummyIcon}
          style={{borderRadius: 8, width: 60, height: 60}}
        />

        <View style={{marginLeft: 10}}>
          <CustomText style={{fontFamily: 'Poppins-Medium', fontSize: 14}}>
            Product Name
          </CustomText>

          <CustomText
            style={{fontFamily: 'Poppins-Regular', fontSize: 14, opacity: 0.6}}>
            ₹ Price
          </CustomText>
        </View>
      </View>
      <View
        style={{
          borderColor: '#eaeaea',
          borderTopWidth: 1,
          marginVertical: 10,
        }}></View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <View>
          <CustomText
            style={{
              fontFamily: 'Poppins-Medium',
              fontSize: 14,
            }}>
            35pcs
          </CustomText>

          <CustomText
            style={{fontFamily: 'Poppins-Regular', fontSize: 12, opacity: 0.5}}>
            In Stock
          </CustomText>
        </View>
        <View>
          <CustomText
            style={{
              fontFamily: 'Poppins-Medium',
              fontSize: 14,
              textAlign: 'right',
            }}>
            35pcs
          </CustomText>

          <CustomText
            style={{fontFamily: 'Poppins-Regular', fontSize: 12, opacity: 0.5}}>
            Total unit sold
          </CustomText>
        </View>
      </View>
    </Pressable>
  );
};

export default ProductContainer;

const styles = StyleSheet.create({});
