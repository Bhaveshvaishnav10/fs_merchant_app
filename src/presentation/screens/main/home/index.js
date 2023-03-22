import {FlatList, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../../../components/Header';
import {WhiteColor} from '../../../../utility/colorConstants';
import CustomText from '../../../components/custom_text';
import ProductContainer from '../products/ProductContainer';

const productList = new Array(5).fill(10);

const HomeIndex = () => {
  return (
    <View style={{backgroundColor: '#f0f4f7', flex: 1}}>
      <Header />
      <ScrollView
        style={{
          paddingHorizontal: 20,
          marginTop: 10,
        }}>
        <View
          style={{
            backgroundColor: WhiteColor,
            height: 50,
            justifyContent: 'center',
            padding: 10,
            borderRadius: 10,
          }}>
          <CustomText style={{fontSize: 18, fontFamily: 'Poppins-Medium'}}>
            10 orders to be fullfilled
          </CustomText>
        </View>

        <View
          style={{
            backgroundColor: WhiteColor,
            height: 50,
            justifyContent: 'center',
            padding: 10,
            borderRadius: 10,
            marginTop: 10,
          }}>
          <CustomText style={{fontSize: 18, fontFamily: 'Poppins-Medium'}}>
            6 payments to be capture
          </CustomText>
        </View>

        <View style={{marginTop: 20}}>
          <CustomText style={{fontFamily: 'Poppins-Medium', fontSize: 16}}>
            Trending Products
          </CustomText>
          <FlatList
            nestedScrollEnabled={true}
            style={{flexGrow: 0}}
            contentContainerStyle={{
              marginTop: 20,
            }}
            data={productList}
            keyExtractor={item => item.key}
            renderItem={({item, index}) => {
              return <ProductContainer key={index} />;
            }}
          />
        </View>

        <View style={{marginTop: 20}}>
          <CustomText style={{fontFamily: 'Poppins-Medium', fontSize: 16}}>
            Running out of stock
          </CustomText>
          <FlatList
            nestedScrollEnabled={true}
            style={{flexGrow: 0}}
            contentContainerStyle={{
              marginTop: 20,
            }}
            data={productList}
            keyExtractor={item => item.key}
            renderItem={({item, index}) => {
              return <ProductContainer key={index} />;
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeIndex;

const styles = StyleSheet.create({});
