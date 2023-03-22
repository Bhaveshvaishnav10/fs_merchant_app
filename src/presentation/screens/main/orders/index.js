import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import Header from '../../../components/Header';
import {PrimaryColor, WhiteColor} from '../../../../utility/colorConstants';
import CustomInput from '../../../components/custom_input';
import {ProductSearchIcon} from '../../../../utility/assetsManager';
import ActionButton from 'react-native-action-button';
import {useNavigation} from '@react-navigation/native';
import {
  PRODUCT_ADD_SCREEN,
  PRODUCT_INFO_SCREEN,
} from '../../../../utility/valueConstants';
import InventoryContainer from '../inventory/InventoryContainer';
import OrderContainer from './OrderContainer';

const productList = new Array(10).fill(10);

const OrdersIndex = () => {
  const [searchProducts, setSearchProducts] = useState('');
  const navigation = useNavigation();
  return (
    <View style={{backgroundColor: '#FFFFFF', flex: 1}}>
      <Header title="Orders" />
      <View style={{paddingHorizontal: 20}}>
        <View
          style={{
            borderWidth: 1,
            width: '100%',
            borderColor: '#EBF0FF',
            borderRadius: 5,
            height: 50,
            marginTop: 20,
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 10,
            backgroundColor: 'white',
          }}>
          <Image source={ProductSearchIcon} style={{width: 25, height: 25}} />
          <CustomInput
            onChange={text => {
              setSearchProducts(text);
            }}
            value={searchProducts}
            placeholder="Search Orders"
            maxLength={10}
            style={{
              borderWidth: 0,
              borderColor: '#EBF0FF',
              padding: 10,
              height: 50,
              width: '80%',
            }}
            containerStyle={{
              height: 50,
            }}
            placeholderTextColor={'#6F6F6F'}
          />
        </View>

        <FlatList
          nestedScrollEnabled={true}
          style={{flexGrow: 0}}
          contentContainerStyle={{
            marginTop: 20,
          }}
          data={productList}
          keyExtractor={item => item.key}
          renderItem={({item, index}) => {
            return (
              <OrderContainer
                key={index}
                // onPress={() => navigation.navigate(PRODUCT_INFO_SCREEN)}
              />
            );
          }}
        />
      </View>
    </View>
  );
};

export default OrdersIndex;

const styles = StyleSheet.create({});
