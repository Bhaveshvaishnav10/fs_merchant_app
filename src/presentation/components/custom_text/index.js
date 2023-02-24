import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { BlackColor } from "../../../utility/colorConstants";

const CustomText = ({ children, style, ...others }) => {
  return (
    <Text
      allowFontScaling={false}
      style={{
        fontFamily: "Montserrat-Regular",
        color: BlackColor,
        ...style,
      }}
      {...others}
    >
      {children}
    </Text>
  );
};

export default CustomText;

const styles = StyleSheet.create({});
