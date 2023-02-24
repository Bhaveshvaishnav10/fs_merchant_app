import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { PrimaryColor } from "../../utility/colorConstants";

const Bar = ({ maxValue, currentValue }) => {
  return (
    <View
      style={{
        width: "100%",
        backgroundColor: "#31333612",
        borderRadius: 10,
      }}
    >
      <View
        style={{
          backgroundColor: PrimaryColor,
          width: `${(Number(currentValue) / Number(maxValue)) * 100}%`,
          height: 8,
          borderRadius: 10,
        }}
      ></View>
    </View>
  );
};

export default Bar;

const styles = StyleSheet.create({});
