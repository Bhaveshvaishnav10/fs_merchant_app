import {
  View,
  Text,
  Pressable,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import React from 'react';
import {PrimaryColor, WhiteColor} from '../../../utility/colorConstants';
import CustomText from '../custom_text';

const {width, height} = Dimensions.get('window');
const CustomButton = ({
  title,
  style,
  onPress,
  backgroundColor,
  textStyle,
  icon,
  loading = false,
  disabled,
}) => {
  return (
    <Pressable
      style={{
        backgroundColor: backgroundColor ? backgroundColor : PrimaryColor,
        width: '100%',
        paddingVertical: 15,
        paddingHorizontal: 10,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        height: 55,
        ...style,
      }}
      onPress={onPress}
      disabled={loading || disabled ? true : false}
      android_ripple={{
        color: 'lightgrey',
      }}>
      {icon}
      {loading ? (
        <ActivityIndicator color={WhiteColor} size={20} />
      ) : (
        <CustomText
          style={{
            fontSize: 16,
            color: WhiteColor,
            fontFamily: 'Poppins-SemiBold',
            letterSpacing: 0.5,
            ...textStyle,
          }}>
          {title}
        </CustomText>
      )}
    </Pressable>
  );
};

export default CustomButton;
