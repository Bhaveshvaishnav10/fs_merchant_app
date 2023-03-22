import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {WhiteColor} from '../../../../utility/colorConstants';
import CustomText from '../../../components/custom_text';
import {ShopDummyIcon} from '../../../../utility/assetsManager';
import Icon from 'react-native-vector-icons/Feather';
import CustomInput from '../../../components/custom_input';

const InventoryContainer = ({onPress, count = 1}) => {
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

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Pressable
            style={{
              borderWidth: 1,
              borderColor: '#6d7175',
              width: 25,
              height: 25,
              borderRadius: 2,
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onPress={() => {
              setPcount(parseInt(pcount) - 1);
            }}>
            <Icon name="minus" color={'#6d7175'} size={18} />
          </Pressable>

          <CustomInput
            onChange={text => {
              setPcount(parseInt(text));
            }}
            value={pcount}
            placeholder="Count"
            maxLength={10}
            style={{
              borderWidth: 0.2,
              borderColor: '#8c9196',
              padding: 10,
              height: 40,
              width: 100,
            }}
            keyboardType={'numeric'}
            containerStyle={{
              height: 40,
              marginHorizontal: 10,
              width: 100,
            }}
            placeholderTextColor={'#6F6F6F'}
          />

          <Pressable
            style={{
              borderWidth: 1,
              borderColor: '#6d7175',
              width: 25,
              height: 25,
              borderRadius: 2,
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onPress={() => {
              setPcount(parseInt(pcount) + 1);
            }}>
            <Icon name="plus" color={'#6d7175'} size={18} />
          </Pressable>
        </View>
      </View>
    </Pressable>
  );
};

export default InventoryContainer;

const styles = StyleSheet.create({});
