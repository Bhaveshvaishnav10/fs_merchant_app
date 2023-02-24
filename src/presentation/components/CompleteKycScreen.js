import {
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { OnboardPng } from "../../utility/assetsManager";
import CustomText from "./custom_text";
import { TextLightColor } from "../../utility/colorConstants";
import CustomButton from "./custom_button";
import CloseIcon from "react-native-vector-icons/EvilIcons";
import { SvgUri } from "react-native-svg";
const { width, height } = Dimensions.get("window");
const CompleteKycScreen = ({ onPress, onClickClose }) => {
  return (
    <View
      style={{
        // height: height * 0.5,
        width: width * 0.6,
        alignItems: "center",
      }}
    >
      <Pressable
        style={{
          alignItems: "flex-end",
          width: width * 0.7,
          top: -20,
          position: "absolute",
        }}
        onPress={onClickClose}
      >
        <CloseIcon name="close-o" size={30} />
      </Pressable>
      {/* <Image
        source={OnboardPng}
     
      /> */}
      <SvgUri
        uri={
          "https://neokredwebsite.s3.ap-south-1.amazonaws.com/giverly/Signup-Giverly-3.svg"
        }
        height={width * 0.6}
        width={width * 0.6}
      />
      <View>
        <CustomText style={styles.header}>Full KYC is pending</CustomText>
        <CustomText style={styles.subtitle}>
          Complete your Full KYC to unlock full benefits of your Giverly Card
        </CustomText>

        <CustomButton
          title="Complete your KYC"
          style={{
            width: width * 0.7,
            marginTop: 20,
          }}
          onPress={onPress}
        />
      </View>
    </View>
  );
};

export default CompleteKycScreen;

const styles = StyleSheet.create({
  header: {
    fontFamily: "Montserrat-Bold",
    fontSize: 24,
    textAlign: "center",
  },
  subtitle: {
    fontFamily: "Montserrat-Medium",
    textAlign: "center",
    marginTop: 10,
    color: TextLightColor,
    fontSize: 14,
  },
});
