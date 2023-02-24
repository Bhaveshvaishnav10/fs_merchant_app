import {
  Dimensions,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import {
  BlackColor,
  PrimaryColor,
  WhiteColor,
} from "../../utility/colorConstants";
import LinearGradient from "react-native-linear-gradient";
import CustomText from "./custom_text";
import { CardsuccessPng, PaymentSuccessPng } from "../../utility/assetsManager";
import { RUPEES } from "../../utility/valueConstants";
import { useRoute } from "@react-navigation/native";
import { formatter } from "../../utility/convertors";
import { SvgUri } from "react-native-svg";

const { width, height } = Dimensions.get("window");

const PaymentSuccess = ({}) => {
  const route = useRoute();

  const { amount, to } = route.params;
  return (
    <ScrollView
      style={{
        flex: 1,
      }}
    >
      <View style={styles.container}>
        <LinearGradient
          colors={["#05C591", "#4DD3AF", "#DAF2EC"]}
          style={styles.linearGradient}
          start={{
            x: 0.65,
            y: 0.3,
          }}
          end={{
            x: 0.65,
            y: 0.65,
          }}
        >
          <View style={styles.container2}>
            {/* <Image
              source={PaymentSuccessPng}

            /> */}

            <SvgUri
              uri={
                "https://neokredwebsite.s3.ap-south-1.amazonaws.com/giverly/Payment-Successful-Giverly.svg"
              }
              style={{
                ...styles.imageStyle,
                top: -height * 0.08,
              }}
            />
            <View>
              <CustomText
                style={styles.title}
              >{`Payment Successful`}</CustomText>
              <CustomText
                style={{
                  ...styles.title,
                  textAlign: "center",
                  marginVertical: 15,
                }}
              >{`${RUPEES} ${formatter(amount, false)}`}</CustomText>

              <CustomText
                style={{
                  ...styles.subtitle,
                  textAlign: "center",
                  marginTop: 0,
                }}
              >{`To ${to}`}</CustomText>
            </View>
          </View>

          <Pressable
            style={{
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CustomText
              style={{
                backgroundColor: WhiteColor,
                paddingVertical: 5,
                paddingHorizontal: 10,
                color: PrimaryColor,
                borderRadius: 15,
              }}
            >
              Having some trouble? Talk to us
            </CustomText>
          </Pressable>
        </LinearGradient>
      </View>
    </ScrollView>
  );
};

export default PaymentSuccess;

const styles = StyleSheet.create({
  container: {
    width,
    height,
    flex: 1,
  },
  linearGradient: {
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
    height: "100%",
    flex: 1,
  },
  container1: {
    flex: 0.3,
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  container2: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    height: height * 0.7,
  },
  title: {
    color: WhiteColor,
    fontSize: 30,
    fontFamily: "Montserrat-Bold",
  },
  subtitle: {
    color: WhiteColor,
    fontFamily: "Montserrat-SemiBold",
    fontSize: 18,
  },
  imageStyle: {
    width: width,
    resizeMode: "contain",
    height: height * 0.3,
  },
  textTitle: {
    color: BlackColor,
    fontWeight: "bold",
    fontSize: 17,
    fontFamily: "Montserrat-ExtraBold",
  },
  textSubtitle: {
    color: BlackColor,
    fontWeight: "700",
    fontSize: 16,
    marginBottom: 15,
    marginTop: 5,
  },
});
