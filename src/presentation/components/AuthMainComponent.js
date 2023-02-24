import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useState } from "react";
import { PrimaryColor, WhiteColor } from "../../utility/colorConstants";
import { GiverlyPng } from "../../utility/assetsManager";
import LinearGradient from "react-native-linear-gradient";
import { SvgUri, SvgXml } from "react-native-svg";

const { width, height } = Dimensions.get("window");
const AuthMainComponent = ({
  mainImageUrl,
  children,
  isBorderRequired = false,
  style,
  isLinearGradientRequired = true,
  linearGradientArray = ["white", "white"],
  containerStyle,
}) => {
  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: WhiteColor,
      }}
    >
      <View style={styles.container}>
        <LinearGradient
          colors={
            isLinearGradientRequired
              ? ["#05C591", "#4DD3AF", "#DAF2EC"]
              : linearGradientArray
          }
          style={styles.linearGradient}
        >
          <View
            style={{
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <Image
              source={GiverlyPng}
              style={{
                width: width * 0.4,
                height: width * 0.27,
                resizeMode: "contain",
              }}
            />

            {/* <Image
              source={mainImageUrl}
              style={{
                width: width * 0.8,
                resizeMode: "contain",
                height: height * 0.4,
              }}
            /> */}
            <SvgUri
              uri={mainImageUrl}
              width={width * 0.8}
              height={height * 0.4}
            />
          </View>
        </LinearGradient>

        <View
          style={{
            alignItems: "center",
            paddingHorizontal: 10,
            flex: 1,
            backgroundColor: "white",
            borderTopLeftRadius: isBorderRequired ? 20 : 0,
            borderTopRightRadius: isBorderRequired ? 20 : 0,
            bottom: isBorderRequired ? 30 : 0,
            // elevation: isBorderRequired ? 30 : 0,
            ...containerStyle,
          }}
        >
          {children}
        </View>
      </View>
    </ScrollView>
  );
};

export default AuthMainComponent;

const styles = StyleSheet.create({
  container: {
    width,
    height: height,
  },
  linearGradient: {
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
    backgroundColor: WhiteColor,
  },
});
