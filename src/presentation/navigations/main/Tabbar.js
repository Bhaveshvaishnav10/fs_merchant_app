import {Image, Keyboard, Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import CustomText from '../../components/custom_text';
import {
  BlackColor,
  PrimaryColor,
  WhiteColor,
} from '../../../utility/colorConstants';

import {
  HOME_SCREEN_MAIN_AUTH,
  INVENTORY_SCREEN_MAIN_AUTH,
  ORDERS_SCREEN_MAIN_AUTH,
  PRODUCT_SCREEN_MAIN_AUTH,
} from '../../../utility/valueConstants';
import {useDispatch} from 'react-redux';
import {useIsFocused} from '@react-navigation/native';
import {
  TabHomeActive,
  TabHomeInActive,
  TabInventoryActive,
  TabInventoryInActive,
  TabOrderActive,
  TabOrderInActive,
  TabProductActive,
  TabProductInActive,
} from '../../../utility/assetsManager';
// import { NavigationActions } from "react-navigation";

const Tabbar = ({state, navigation, preferences}) => {
  const [keyBoardFocus, setKeyboardFocus] = useState(true);
  const dispatch = useDispatch();
  const isFocused = useIsFocused();

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardFocus(false); // or some other action
      },
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardFocus(true); // or some other action
      },
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  return (
    <View
      style={{
        width: '100%',
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: WhiteColor,
      }}>
      <View
        style={{
          flexDirection: 'row',
          height: keyBoardFocus ? 70 : 0,
          alignItems: 'center',
          justifyContent: 'space-around',
          backgroundColor: WhiteColor,
          shadowOpacity: 0.18,
          shadowRadius: 16.0,
          shadowOffset: {
            width: 0,
            height: 12,
          },
          elevation: 24,
          display: keyBoardFocus ? 'flex' : 'none',
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
          width: '100%',
        }}>
        <Pressable
          onPress={() => {
            navigation.navigate(HOME_SCREEN_MAIN_AUTH);

            // navigation.dispatch(
            //   NavigationActions.reset({
            //     index: 0,
            //     actions: [
            //       NavigationActions.navigate({
            //         routeName: HOME_SCREEN_MAIN_AUTH,
            //       }), // go to first screen of the StackNavigator
            //     ],
            //   })
            // );
          }}
          style={styles.tabStyles}>
          <Image
            source={state.index === 0 ? TabHomeActive : TabHomeInActive}
            style={{
              width: 20,
              height: 20,
              resizeMode: 'contain',
            }}
          />
          <CustomText
            style={{
              ...styles.tabTextStyle,
              color: state.index === 0 ? PrimaryColor : BlackColor,
              fontFamily:
                state.index === 0
                  ? 'Montserrat-SemiBold'
                  : 'Montserrat-Regular',
            }}>
            Home
          </CustomText>
        </Pressable>

        {/* transactions  */}
        <Pressable
          onPress={() => {
            navigation.navigate(PRODUCT_SCREEN_MAIN_AUTH);
          }}
          style={styles.tabStyles}>
          <Image
            source={state.index === 1 ? TabProductActive : TabProductInActive}
            style={{
              width: 20,
              height: 20,
              resizeMode: 'contain',
            }}
          />
          <CustomText
            style={{
              ...styles.tabTextStyle,
              color: state.index === 1 ? PrimaryColor : BlackColor,

              fontFamily:
                state.index === 1
                  ? 'Montserrat-SemiBold'
                  : 'Montserrat-Regular',
            }}>
            Products
          </CustomText>
        </Pressable>

        {/* shop  */}

        <Pressable
          onPress={() => {
            navigation.navigate(INVENTORY_SCREEN_MAIN_AUTH);
          }}
          style={styles.tabStyles}>
          <Image
            source={
              state.index === 2 ? TabInventoryActive : TabInventoryInActive
            }
            style={{
              width: 20,
              height: 20,
              resizeMode: 'contain',
            }}
          />
          <CustomText
            style={{
              ...styles.tabTextStyle,
              color: state.index === 2 ? PrimaryColor : BlackColor,
              fontFamily:
                state.index === 2
                  ? 'Montserrat-SemiBold'
                  : 'Montserrat-Regular',
            }}>
            Inventory
          </CustomText>
        </Pressable>

        {/* Donation  */}
        <Pressable
          onPress={() => {
            navigation.navigate(ORDERS_SCREEN_MAIN_AUTH);
          }}
          style={styles.tabStyles}>
          <Image
            source={state.index === 3 ? TabOrderActive : TabOrderInActive}
            style={{
              width: 20,
              height: 20,
              resizeMode: 'contain',
            }}
          />
          <CustomText
            style={{
              ...styles.tabTextStyle,
              color: state.index === 3 ? PrimaryColor : BlackColor,
              fontFamily:
                state.index === 3
                  ? 'Montserrat-SemiBold'
                  : 'Montserrat-Regular',
            }}>
            Orders
          </CustomText>
        </Pressable>
      </View>
    </View>
  );
};

export default Tabbar;

const styles = StyleSheet.create({
  tabStyles: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  iconStyles: {width: 22, height: 22, resizeMode: 'contain'},
  tabTextStyle: {
    color: '#1E1E1E',
    fontSize: 12,
    marginTop: 5,
  },
});
