import { StyleSheet, Text, View } from "react-native";
import React from "react";
import CustomButton from "./custom_button";
import {
  BlackColor,
  PrimaryColor,
  WhiteColor,
} from "../../utility/colorConstants";

const RowButton = ({
  titleLeft,
  titleRight,
  styleLeft,
  styleRight,
  style,
  onPressRight,
  onPressLeft,
}) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginVertical: 10,
        marginHorizontal: 10,
        ...style,
      }}
    >
      <CustomButton
        title={titleLeft}
        style={{
          width: "46%",
          ...styleLeft,
          borderWidth: 1,
          borderColor: PrimaryColor,
        }}
        textStyle={{
          color: BlackColor,
          fontSize: 15,
          fontWeight: "500",
        }}
        onPress={onPressLeft}
        backgroundColor={WhiteColor}
      ></CustomButton>
      <CustomButton
        title={titleRight}
        style={{
          width: "46%",
          ...styleRight,
        }}
        textStyle={{
          color: WhiteColor,
          fontSize: 15,
          fontWeight: "800",
        }}
        onPress={onPressRight}
      ></CustomButton>
    </View>
  );
};

export default RowButton;

const styles = StyleSheet.create({});
