import { Dimensions, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import LinearGradient from "react-native-linear-gradient";

const { width, height } = Dimensions.get("window");

const LinearGradientContainer = ({
  linearGradientArray = [],
  children,
  containerStyle,
  linearGradientStyle,
  style,
}) => {
  return (
    <View
      style={{
        flex: 1,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        ...style,
      }}
    >
      <LinearGradient
        colors={
          linearGradientArray
            ? ["#03C590", "#02B382", "#008661"]
            : linearGradientArray
        }
        start={{ x: 0.9, y: 0.1 }}
        end={{ x: 0.1, y: 0.1 }}
        style={{ ...styles.linearGradient, ...linearGradientStyle }}
      >
        <View style={{ ...styles.overlay, ...containerStyle }}>{children}</View>
      </LinearGradient>
    </View>
  );
};

export default LinearGradientContainer;

const styles = StyleSheet.create({
  linearGradient: {
    paddingLeft: 15,
    paddingRight: 15,
    // minHeight: 200,
    width: width * 0.9,
    borderRadius: 10,
    overflow: "scroll",
    maxHeight: 400,
    elevation: 3,
    flex: 1,
  },
  overlay: {
    // position: "absolute",
    overflow: "scroll",
  },
});
