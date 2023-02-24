import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useState } from "react";
import CustomText from "./custom_text";
import randomColor from "randomcolor";

const Avatar = ({
  size = 50,
  imageUrl = "",
  title = "A",
  isOnPressRequired = false,
  onPress,
  style,
  textStyle,
  backgroundColor = "white",
}) => {
  return (
    <Pressable
      onPress={() => {
        if (isOnPressRequired) onPress();
      }}
      style={{
        height: size,
        width: size,
        borderRadius: size / 2,
        backgroundColor: backgroundColor,
        justifyContent: "center",
        alignItems: "center",
        ...style,
      }}
    >
      {imageUrl !== "" ? (
        <ImageBackground
          source={{
            uri: imageUrl,
          }}
          style={{
            height: "100%",
            width: "100%",
          }}
          imageStyle={{ borderRadius: size / 2, resizeMode: "cover" }}
        />
      ) : (
        <CustomText
          style={{
            fontSize: 17,
            fontWeight: "bold",
            fontFamily: "Montserrat-SemiBold",
            ...textStyle,
          }}
        >
          {title}
        </CustomText>
      )}
    </Pressable>
  );
};

export default Avatar;

const styles = StyleSheet.create({});
