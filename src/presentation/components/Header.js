import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CustomText from './custom_text';
import {WhiteColor} from '../../utility/colorConstants';
import {FashoIcon} from '../../utility/assetsManager';

const Header = ({
  title = 'Fasho',
  leftComponent,
  headerTitleRequired = true,
  rightComponent,
}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        height: 60,
        paddingHorizontal: 20,
        elevation: 10,
        backgroundColor: WhiteColor,
        justifyContent: 'space-between',
      }}>
      {leftComponent ? leftComponent : null}
      {headerTitleRequired && (
        <CustomText
          style={{
            fontFamily: 'Poppins-Medium',
            fontSize: 18,
            color: '#272728',
          }}>
          {title}
        </CustomText>
      )}
      {rightComponent
        ? rightComponent
        : // <Icon
          //   name="search"
          //   color={'#3E3E40'}
          //   size={24}
          //   style={{position: 'absolute', right: 20}}
          // />
          null}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
