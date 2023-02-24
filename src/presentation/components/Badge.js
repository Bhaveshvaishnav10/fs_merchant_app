import { StyleSheet, Text, View } from "react-native";
import React from "react";
import CustomText from "./custom_text";
import { WhiteColor } from "../../utility/colorConstants";

const Badge = ({ size = 15, backgroundColor = "red", number = 1 }) => {
  return (
    <View
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor: backgroundColor,
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        right: 0,
        top: -5,
      }}
    >
      <CustomText
        style={{
          fontSize: 8,
          color: WhiteColor,
        }}
      >
        {Number(number) > 9 ? "9+" : number}
      </CustomText>
    </View>
  );
};

export default Badge;

const styles = StyleSheet.create({});
