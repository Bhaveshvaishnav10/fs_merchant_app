import { Dimensions, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import CustomText from "./custom_text";
import BackArrrow from "react-native-vector-icons/MaterialIcons";
import { BlackColor } from "../../utility/colorConstants";
import { useNavigation } from "@react-navigation/native";
const { width, height } = Dimensions.get("window");
const TopNavBar = ({
  headerTitle,
  isNavigationRequired = false,
  onPress,
  icon,
  style,
}) => {
  const navigation = useNavigation();
  return (
    <View style={{ ...styles.container, ...style }}>
      <Pressable
        onPress={() => {
          if (isNavigationRequired) {
            onPress();
          } else {
            navigation.goBack();
          }
        }}
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingRight: 25,
        }}
      >
        <BackArrrow
          name="keyboard-arrow-left"
          size={30}
          color="rgba(18, 18, 18 ,0.7)"
        />
        <CustomText style={styles.text}>{headerTitle}</CustomText>
      </Pressable>

      {icon ? icon : null}
    </View>
  );
};

export default TopNavBar;

const styles = StyleSheet.create({
  container: {
    width,
    height: 50,
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 10,
    elevation: 0.3,
    justifyContent: "space-between",
  },
  text: {
    fontSize: 16,
    marginLeft: 10,
    color: "rgba(18, 18, 18 ,0.7)",
    fontFamily: "Montserrat-SemiBold",
  },
});
