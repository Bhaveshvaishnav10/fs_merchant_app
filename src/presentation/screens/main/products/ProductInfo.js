import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import Header from '../../../components/Header';
import Icon from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';
import CustomInput from '../../../components/custom_input';
import CustomText from '../../../components/custom_text';
import {WhiteColor} from '../../../../utility/colorConstants';

const ProductInfo = () => {
  const navigation = useNavigation();
  const [productTitle, setProductTitle] = useState('');
  const [description, setDescription] = useState('');
  return (
    <View style={{backgroundColor: '#FFFFFF', flex: 1}}>
      <Header
        title="Products"
        leftComponent={
          <Pressable
            style={{marginRight: 10}}
            onPress={() => {
              navigation.goBack();
            }}>
            <Icon name="arrow-left" color={'#3E3E40'} size={18} />
          </Pressable>
        }
      />
      <View style={{paddingHorizontal: 20, marginTop: 20}}>
        <View style={{marginBottom: 20}}>
          <CustomText
            style={{
              fontSize: 14,
              color: '#223263',
              fontFamily: 'Poppins-SemiBold',
              letterSpacing: 0.5,
              marginBottom: 5,
            }}>
            Title
          </CustomText>
          <CustomInput
            onChange={text => {
              setProductTitle(text);
            }}
            value={productTitle}
            placeholder="Title"
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
            Description
          </CustomText>
          <CustomInput
            onChange={text => {
              setDescription(text);
            }}
            value={description}
            placeholder="Description"
            style={{
              borderWidth: 1,
              borderColor: '#EBF0FF',
              borderRadius: 12,
              padding: 10,
              textAlignVertical: 'top',
              height: 200,
            }}
            placeholderTextColor={'#6F6F6F'}
            multiline={true}
          />
        </View>
        <View style={{marginBottom: 20, marginTop: 140}}>
          <CustomText
            style={{
              fontSize: 14,
              color: '#223263',
              fontFamily: 'Poppins-SemiBold',
              letterSpacing: 0.5,
              marginBottom: 5,
            }}>
            Media
          </CustomText>

          <View
            style={{
              width: '100%',

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
            }}></View>
        </View>
      </View>
    </View>
  );
};

export default ProductInfo;

const styles = StyleSheet.create({});
