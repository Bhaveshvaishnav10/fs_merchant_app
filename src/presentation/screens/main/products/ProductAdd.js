import {
  Image,
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {launchImageLibrary} from 'react-native-image-picker';
import Header from '../../../components/Header';
import Icon from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';
import CustomInput from '../../../components/custom_input';
import CustomText from '../../../components/custom_text';
import {WhiteColor} from '../../../../utility/colorConstants';
import CustomButton from '../../../components/custom_button';

const ProductAdd = () => {
  const navigation = useNavigation();
  const [productTitle, setProductTitle] = useState('');
  const [description, setDescription] = useState('');
  const [productImage, setProductImage] = useState({});
  const [modalVisible, setModalVisible] = useState(false);
  const [variantSize, setVariantSize] = useState('');
  const [variantAmount, setVariantAmount] = useState('');
  const [stock, setStock] = useState(0);
  const [variants, setVariants] = useState([]);
  const selectFile = () => {
    var options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    launchImageLibrary(options, res => {
      console.log('Response = ', res);
      if (res.didCancel) {
        console.log('User cancelled image picker');
      } else if (res.error) {
        console.log('ImagePicker Error: ', res.error);
      } else if (res.customButton) {
        console.log('User tapped custom button: ', res.customButton);
        alert(res.customButton);
      } else {
        const source = {uri: res.assets[0].uri};

        console.log('Source', source);
        console.log('response', JSON.stringify(res));

        setProductImage({
          filePath: res,
          fileData: res.data,
          fileUri: res.assets[0].uri,
        });
      }
    });
  };

  return (
    <ScrollView style={{backgroundColor: '#FFFFFF', flex: 1}}>
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
        </View>

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
            justifyContent: 'center',
          }}>
          <Pressable
            style={{
              borderColor: '#babfc3',
              borderWidth: 1,
              borderStyle: 'dashed',
              borderRadius: 10,
              width: '100%',
              height: 100,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={() => {
              selectFile();
            }}>
            <CustomText
              style={{
                fontSize: 14,
                color: '#223263',
                fontFamily: 'Poppins-SemiBold',
                letterSpacing: 0.5,
                marginBottom: 5,
              }}>
              Add Images
            </CustomText>
          </Pressable>
          {/* {productImage.fileUri ? (
              <>
                <Image source={{uri: productImage.fileUri}} />
                <CustomText
                  style={{
                    fontSize: 14,
                    color: '#223263',
                    fontFamily: 'Poppins-SemiBold',
                    letterSpacing: 0.5,
                    marginBottom: 5,
                  }}>
                  {productImage.fileUri}
                </CustomText>
              </>
            ) : (
              <CustomText
                style={{
                  fontSize: 14,
                  color: '#223263',
                  fontFamily: 'Poppins-SemiBold',
                  letterSpacing: 0.5,
                  marginBottom: 5,
                }}>
                {productImage.fileUri}
              </CustomText>
            )} */}
        </View>

        <View style={{marginBottom: 20, marginTop: 20}}>
          <CustomText
            style={{
              fontSize: 14,
              color: '#223263',
              fontFamily: 'Poppins-SemiBold',
              letterSpacing: 0.5,
              marginBottom: 5,
            }}>
            Product Category
          </CustomText>
          <CustomInput
            onChange={text => {
              setProductTitle(text);
            }}
            value={productTitle}
            placeholder="Category"
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
            Product Sub Category
          </CustomText>
          <CustomInput
            onChange={text => {
              setProductTitle(text);
            }}
            value={productTitle}
            placeholder="Sun Category"
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
            Pricing
          </CustomText>
          <CustomInput
            onChange={text => {
              setProductTitle(text);
            }}
            value={productTitle}
            placeholder="Pricing"
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
            Compare at price
          </CustomText>
          <CustomInput
            onChange={text => {
              setProductTitle(text);
            }}
            value={productTitle}
            placeholder="0.00"
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
            alignItems: 'center',
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
            justifyContent: 'center',
            marginBottom: 20,
            flexDirection: 'column',
          }}>
          {variants.length > 0 &&
            variants.map((data, index) => {
              return (
                <Pressable
                  style={{
                    borderColor: '#babfc3',
                    borderWidth: 1,
                    borderRadius: 10,
                    width: '100%',
                    height: 50,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginBottom: 20,
                  }}
                  onPress={() => {}}>
                  <CustomText>{data?.variantSize}</CustomText>
                </Pressable>
              );
            })}
          <Pressable
            style={{
              borderColor: '#babfc3',
              borderWidth: 1,
              borderStyle: 'dashed',
              borderRadius: 10,
              width: 120,
              height: 50,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={() => {
              setModalVisible(true);
            }}>
            <CustomText
              style={{
                fontSize: 14,
                color: '#223263',
                fontFamily: 'Poppins-SemiBold',
                letterSpacing: 0.5,
              }}>
              Add Variants
            </CustomText>
          </Pressable>
        </View>

        <CustomButton title="Add Product" />
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Add Variant</Text>
            <View style={{marginBottom: 20}}>
              <CustomText
                style={{
                  fontSize: 14,
                  color: '#223263',
                  fontFamily: 'Poppins-SemiBold',
                  letterSpacing: 0.5,
                  marginBottom: 5,
                }}>
                Variant Size
              </CustomText>
              <CustomInput
                onChange={text => {
                  setVariantSize(text);
                }}
                value={variantSize}
                placeholder="Small"
                maxLength={10}
                style={{
                  borderWidth: 1,
                  borderColor: '#EBF0FF',
                  borderRadius: 12,
                  padding: 10,
                  height: 55,
                  width: 300,
                }}
                containerStyle={{
                  width: 300,
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
                Variant amount
              </CustomText>
              <CustomInput
                onChange={text => {
                  setVariantAmount(text);
                }}
                value={variantAmount}
                placeholder="0.00"
                maxLength={10}
                style={{
                  borderWidth: 1,
                  borderColor: '#EBF0FF',
                  borderRadius: 12,
                  padding: 10,
                  height: 55,
                  width: 300,
                }}
                containerStyle={{width: 300}}
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
                In Stock
              </CustomText>
              <CustomInput
                onChange={text => {
                  setStock(text);
                }}
                value={stock}
                placeholder="0"
                maxLength={10}
                style={{
                  borderWidth: 1,
                  borderColor: '#EBF0FF',
                  borderRadius: 12,
                  padding: 10,
                  height: 55,
                  width: 300,
                }}
                containerStyle={{width: 300}}
                placeholderTextColor={'#6F6F6F'}
              />
            </View>

            <CustomButton
              title="Add Variant"
              onPress={() => {
                setVariants([...variants, {variantAmount, variantSize, stock}]);
                setModalVisible(false);
              }}
            />
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

export default ProductAdd;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    color: 'black',
    fontFamily: 'Poppins-Regular',
  },
});
