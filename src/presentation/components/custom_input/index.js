import {Dimensions, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import {
  BlackColor,
  TextPlaceholderColor,
} from '../../../utility/colorConstants';
import {validate} from './Validator';
import {Dropdown} from 'react-native-element-dropdown';

const {width, height} = Dimensions.get('window');
const CustomInput = ({
  value,
  onChange,
  style,
  placeholder,
  placeholderTextColor,
  selectTextOnFocus,
  keyboardType,
  maxLength,
  innerRef,
  containerStyle,
  validator,
  multiline = false,
  type = 'input',
  options = [],
  selectPlaceholder = '',
  isSearchRequired = false,
  autoCapitalize = 'none',
  autoCorrect = true,
}) => {
  const [isFocus, setIsFocus] = useState(false);
  const [date, setDate] = useState(new Date());

  switch (type) {
    case 'input':
      return (
        <View
          style={{
            width: width * 0.9,
            height: 60,
            ...containerStyle,
          }}>
          <TextInput
            value={value}
            onChangeText={val => {
              validate(validator, val, onChange);
            }}
            style={{
              color: BlackColor,
              fontFamily: 'Montserrat-Medium',
              fontSize: 15,
              ...style,
            }}
            placeholder={placeholder}
            placeholderTextColor={
              placeholderTextColor ? placeholderTextColor : TextPlaceholderColor
            }
            selectTextOnFocus={selectTextOnFocus}
            keyboardType={keyboardType}
            maxLength={maxLength}
            ref={innerRef}
            multiline={multiline}
            allowFontScaling={false}
            autoCapitalize={autoCapitalize}
            autoCorrect={autoCorrect}
          />
        </View>
      );

    case 'select':
      return (
        <View
          style={{
            width: width * 0.9,
            height: 60,
            ...containerStyle,
          }}>
          <Dropdown
            style={[styles.dropdown]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={options}
            search={isSearchRequired}
            maxHeight={300}
            labelField="label"
            valueField="value"
            containerStyle={{}}
            itemContainerStyle={{}}
            placeholder={!isFocus ? selectPlaceholder : '...'}
            searchPlaceholder="Search..."
            itemTextStyle={{
              color: 'black',
            }}
            value={value}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={item => {
              setIsFocus(false);
              onChange(item);
            }}
          />
        </View>
      );

    case 'datepicker':
      return (
        <View
          style={{
            width: width * 0.9,
            height: 60,
            ...containerStyle,
          }}></View>
      );
  }
};

export default CustomInput;

const styles = StyleSheet.create({
  dropdown: {
    height: 50,
    borderColor: 'gray',
    // borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
    width: '100%',
    backgroundColor: '#F5F5F5',
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    color: 'black',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
    color: 'black',
  },
  placeholderStyle: {
    fontSize: 16,
    color: '#747981',
    fontFamily: 'Montserrat-Medium',
    paddingLeft: 7,
    fontSize: 15,
  },
  selectedTextStyle: {
    color: 'black',
    fontFamily: 'Montserrat-Medium',
    paddingLeft: 7,
    fontSize: 15,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
    width: '100%',
    color: 'black',
  },
});
