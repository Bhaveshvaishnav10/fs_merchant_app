import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import CustomInput from "./custom_input";
import { BlackColor, PrimaryColor } from "../../utility/colorConstants";
import CustomText from "./custom_text";

const Counter = ({
  onChange,
  disabled,
  leftstyle,
  rightstyle,
  centerstyle,
  containerstyle,
  textstyle,
  val,
}) => {
  const [value, setValue] = useState(val ? Number(val) : 1);
  const maxValue = 10;

  useEffect(() => {
    onChange(value);
  }, [value]);
  return (
    <View
      style={{
        flexDirection: "row",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        height: 50,
        marginHorizontal: 10,
        ...containerstyle,
      }}
    >
      <Pressable
        style={{ ...styles.leftCounter, ...leftstyle }}
        android_ripple={{
          color: "#3133360D",
          borderless: true,
          radius: 20,
        }}
        onPress={() => {
          if (value !== Number(0)) {
            setValue((val) => Number(val) - 1);
          }
        }}
        disabled={disabled}
      >
        <CustomText style={{ ...styles.text, ...textstyle }}>-</CustomText>
      </Pressable>

      <View
        style={{
          ...styles.textInput,
          justifyContent: "center",
          alignItems: "center",
          ...centerstyle,
        }}
      >
        <CustomText>{value}</CustomText>
      </View>
      <Pressable
        style={{ ...styles.rightCounter, ...rightstyle }}
        onPress={() => {
          if (value < maxValue) {
            setValue((val) => Number(val) + 1);
          }
        }}
        android_ripple={{
          color: "#3133360D",
          borderless: true,
          radius: 20,
        }}
        disabled={disabled}
      >
        <CustomText style={{ ...styles.text, ...textstyle }}>+</CustomText>
      </Pressable>
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({
  counterContainer: {},
  text: {
    fontSize: 30,
    color: PrimaryColor,
    textAlign: "center",
    alignSelf: "center",
  },
  leftCounter: {
    borderWidth: 1,
    borderColor: "#31333626",
    justifyContent: "center",
    alignItems: "center",
    width: 40,
    height: 40,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    borderRightWidth: 0,
  },
  rightCounter: {
    borderWidth: 1,
    borderColor: "#31333626",
    justifyContent: "center",
    alignItems: "center",
    width: 40,
    height: 40,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    borderLeftWidth: 0,
  },
  textInput: {
    borderColor: "#31333626",
    borderWidth: 1,
    width: 40,
    height: 40,
  },
});
