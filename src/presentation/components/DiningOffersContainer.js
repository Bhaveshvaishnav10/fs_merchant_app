import {
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import CustomText from "./custom_text";
import { PrimaryColor } from "../../utility/colorConstants";
import { HotelPng } from "../../utility/assetsManager";

const { width, height } = Dimensions.get("window");

const DiningOffersContainer = ({ onPress, name }) => {
  return (
    <Pressable
      style={{
        minHeight: 150,
        borderRadius: 15,
        marginHorizontal: 10,
        borderColor: "rgba(49, 51, 54 , 0.2)",
        borderWidth: 1,
        marginVertical: 10,
        width: width * 0.45,
      }}
      onPress={() => {
        onPress();
      }}
    >
      <View
        style={{
          width: "100%",
          height: height * 0.2,
          borderRadius: 15,
        }}
      >
        <Image
          source={HotelPng}
          style={{
            height: "100%",
            width: "100%",
            resizeMode: "cover",
            borderTopLeftRadius: 13,
            borderTopRightRadius: 13,
          }}
        />
      </View>
      <View
        style={{
          paddingHorizontal: 15,
          paddingVertical: 10,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 5,
          }}
        >
          <CustomText
            style={{
              fontFamily: "Montserrat-Bold",
            }}
          >
            {name}
          </CustomText>
        </View>
        <CustomText
          style={{
            color: "#989898",
            fontSize: 12,
          }}
        >
          DLF Cyber City, Gurgaon
        </CustomText>

        <View>
          <CustomText
            style={{
              fontSize: 12,
              marginVertical: 5,
              color: PrimaryColor,
              fontFamily: "Montserrat-SemiBold",
            }}
          >
            Flat 10% off the total bill
          </CustomText>
        </View>
      </View>
    </Pressable>
  );
};

export default DiningOffersContainer;

const styles = StyleSheet.create({});
