import {
  Image,
  Keyboard,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import CustomText from "../../components/custom_text";
import {
  BlackColor,
  PrimaryColor,
  WhiteColor,
} from "../../../utility/colorConstants";
import {
  DonationsPng,
  HomePng,
  ProfilePng,
  ShopPng,
  TransactionsPng,
} from "../../../utility/assetsManager";
import {
  CURRENT_KYC,
  DONATION_SCREEN_MAIN_AUTH,
  FULL_KYC,
  HOME_SCREEN_MAIN_AUTH,
  PROFILE_SCREEN_MAIN_AUTH,
  SHOP_SCREEN_MAIN_AUTH,
  TRANSACTION_SCREEN_MAIN_AUTH,
} from "../../../utility/valueConstants";
import { useDispatch } from "react-redux";
import { showGlobalModal } from "../../../data/redux/slice/globalModalSlice";
import { getAsyncStorageData } from "../../../utility/asyncStorage";
import { useIsFocused } from "@react-navigation/native";
// import { NavigationActions } from "react-navigation";

const Tabbar = ({ state, navigation, preferences }) => {
  const [keyBoardFocus, setKeyboardFocus] = useState(true);
  const dispatch = useDispatch();
  const isFocused = useIsFocused();

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        setKeyboardFocus(false); // or some other action
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setKeyboardFocus(true); // or some other action
      }
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  return (
    <View
      style={{
        width: "100%",
        backgroundColor: "red",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: WhiteColor,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          height: keyBoardFocus ? 70 : 0,
          alignItems: "center",
          justifyContent: "space-around",
          backgroundColor: WhiteColor,
          shadowOpacity: 0.18,
          shadowRadius: 16.0,
          shadowOffset: {
            width: 0,
            height: 12,
          },
          elevation: 24,
          display: keyBoardFocus ? "flex" : "none",
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
          width: "95%",
        }}
      >
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
          style={styles.tabStyles}
        >
          <Image
            source={HomePng}
            style={{
              width: 20,
              height: 20,
              resizeMode: "contain",
            }}
          />
          <CustomText
            style={{
              ...styles.tabTextStyle,
              color: state.index === 0 ? PrimaryColor : BlackColor,
              fontFamily:
                state.index === 0
                  ? "Montserrat-SemiBold"
                  : "Montserrat-Regular",
            }}
          >
            Home
          </CustomText>
        </Pressable>

        {/* transactions  */}
        <Pressable
          onPress={() => {
            navigation.navigate(TRANSACTION_SCREEN_MAIN_AUTH);
          }}
          style={styles.tabStyles}
        >
          <Image
            source={TransactionsPng}
            style={{
              width: 20,
              height: 20,
              resizeMode: "contain",
            }}
          />
          <CustomText
            style={{
              ...styles.tabTextStyle,
              color: state.index === 1 ? PrimaryColor : BlackColor,

              fontFamily:
                state.index === 1
                  ? "Montserrat-SemiBold"
                  : "Montserrat-Regular",
            }}
          >
            Transactions
          </CustomText>
        </Pressable>

        {/* shop  */}

        {/* <Pressable
          onPress={() => {

            navigation.navigate(SHOP_SCREEN_MAIN_AUTH);
          }}
          style={styles.tabStyles}
        >
          <Image
            source={ShopPng}
            style={{
              width: 20,
              height: 20,
              resizeMode: "contain",
            }}
          />
          <CustomText
            style={{
              ...styles.tabTextStyle,
              color: state.index === 2 ? PrimaryColor : BlackColor,
              fontFamily:
                state.index === 2
                  ? "Montserrat-SemiBold"
                  : "Montserrat-Regular",
            }}
          >
            Shop
          </CustomText>
        </Pressable> */}

        {/* Donation  */}
        <Pressable
          onPress={() => {
            navigation.navigate(DONATION_SCREEN_MAIN_AUTH);
          }}
          style={styles.tabStyles}
        >
          <Image
            source={DonationsPng}
            style={{
              width: 20,
              height: 20,
              resizeMode: "contain",
            }}
          />
          <CustomText
            style={{
              ...styles.tabTextStyle,
              color: state.index === 3 ? PrimaryColor : BlackColor,
              fontFamily:
                state.index === 3
                  ? "Montserrat-SemiBold"
                  : "Montserrat-Regular",
            }}
          >
            Donation
          </CustomText>
        </Pressable>

        {/* profile  */}
        <Pressable
          onPress={() => {
            navigation.navigate(PROFILE_SCREEN_MAIN_AUTH);
          }}
          style={styles.tabStyles}
        >
          <Image
            source={ProfilePng}
            style={{
              width: 20,
              height: 20,
              resizeMode: "contain",
            }}
          />
          <CustomText
            style={{
              ...styles.tabTextStyle,
              color: state.index === 4 ? PrimaryColor : BlackColor,
              fontFamily:
                state.index === 4
                  ? "Montserrat-SemiBold"
                  : "Montserrat-Regular",
            }}
          >
            Profile
          </CustomText>
        </Pressable>
      </View>
    </View>
  );
};

export default Tabbar;

const styles = StyleSheet.create({
  tabStyles: { flex: 1, justifyContent: "center", alignItems: "center" },
  iconStyles: { width: 22, height: 22, resizeMode: "contain" },
  tabTextStyle: {
    color: "#1E1E1E",
    fontSize: 12,
    marginTop: 5,
  },
});
