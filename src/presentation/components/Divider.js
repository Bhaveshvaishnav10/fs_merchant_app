import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Divider = ({ style, backgroundColor, width = "100%" }) => {
  return (
    <View
      style={{
        ...styles.divider,
        ...style,
        backgroundColor: backgroundColor ? backgroundColor : "#707070",
        width: width,
        alignSelf: "center",
      }}
    ></View>
  );
};

export default Divider;

const styles = StyleSheet.create({
  divider: {
    width: "100%",
    height: 1,
  },
});
