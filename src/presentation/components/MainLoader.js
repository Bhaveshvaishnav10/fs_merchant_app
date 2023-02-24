import {
  ActivityIndicator,
  Dimensions,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { PrimaryColor } from "../../utility/colorConstants";

const { width, height } = Dimensions.get("window");
const FullScreenLoader = ({ visible, backgroundColor, loaderColor, style }) => {
  return (
    <View
      style={{
        height,
        width,
        backgroundColor: backgroundColor ? backgroundColor : "transparent",
        position: "absolute",
        zIndex: 100,
        justifyContent: "center",
        alignItems: "center",
        display: visible ? "flex" : "none",
        ...style,
      }}
    >
      <ActivityIndicator
        size={50}
        color={loaderColor ? loaderColor : PrimaryColor}
      />
    </View>
  );
};

export default FullScreenLoader;

const styles = StyleSheet.create({});
