import {
  Dimensions,
  Image,
  Linking,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import {
  BlackColor,
  DodgerColor,
  PrimaryColor,
  WhiteColor,
} from "../../utility/colorConstants";
import LinearGradient from "react-native-linear-gradient";
import CustomText from "./custom_text";
import {
  CardsuccessPng,
  PaymentSuccessPng,
  PaymentfailedPng,
} from "../../utility/assetsManager";
import { RUPEES, SEND_MONEY_SCREEN } from "../../utility/valueConstants";
import { useNavigation, useRoute } from "@react-navigation/native";
import { formatter } from "../../utility/convertors";
import { SvgUri } from "react-native-svg";

const { width, height } = Dimensions.get("window");

const PaymentFailed = ({}) => {
  const route = useRoute();
  const navigation = useNavigation();
  const { amount, to } = route.params;
  return (
    <ScrollView
      style={{
        flex: 1,
      }}
    >
      <View style={styles.linearGradient}>
        <View style={styles.container2}>
          {/* <Image
            source={PaymentfailedPng}
            style={{
              ...styles.imageStyle,
              top: -height * 0.08,
            }}
          /> */}
          <SvgUri
            uri={
              "https://neokredwebsite.s3.ap-south-1.amazonaws.com/giverly/Payment-Successful-Giverly-1.svg"
            }
            style={{
              ...styles.imageStyle,
              top: -height * 0.08,
            }}
          />
          <View>
            <View
              style={{
                flexDirection: "row",
              }}
            >
              <CustomText style={styles.title}>{`Payment`}</CustomText>
              <CustomText
                style={{ ...styles.title, marginLeft: 9, color: "#EB2121" }}
              >{`Failed`}</CustomText>
            </View>

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

        {/* <Pressable
          style={{
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CustomText
            style={{
              backgroundColor: PrimaryColor,
              paddingVertical: 5,
              paddingHorizontal: 10,
              color: WhiteColor,
              borderRadius: 15,
            }}
          >
            Having some trouble? Talk to us
          </CustomText>
        </Pressable> */}
        {/* <Pressable
          style={{
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={() => {
            navigation.navigate(SEND_MONEY_SCREEN);
          }}
        >
          <CustomText
            style={{
              color: DodgerColor,
              fontSize: 14,
              fontWeight: "bold",
              textDecorationLine: "underline",
              marginTop: 10,
              letterSpacing: 1,
            }}
          >
            Retry
          </CustomText>
        </Pressable> */}

        <Pressable
          style={{
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={() => {
            navigation.navigate(SEND_MONEY_SCREEN);
          }}
        >
          <CustomText
            style={{
              backgroundColor: PrimaryColor,
              paddingVertical: 5,
              paddingHorizontal: 20,
              color: WhiteColor,
              borderRadius: 15,
            }}
          >
            Try Again
          </CustomText>
        </Pressable>

        <Pressable
          style={{
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={() => {
            Linking.openURL(`tel:${"7597182222"}`);
          }}
        >
          <CustomText
            style={{
              color: DodgerColor,
              fontSize: 14,
              fontWeight: "bold",
              textDecorationLine: "underline",
              marginTop: 10,
              letterSpacing: 0.9,
            }}
          >
            Having some trouble? Talk to us
          </CustomText>
        </Pressable>
      </View>
    </ScrollView>
  );
};

export default PaymentFailed;

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
    fontSize: 30,
    fontFamily: "Montserrat-Bold",
  },
  subtitle: {
    fontSize: 18,
    fontFamily: "Montserrat-SemiBold",
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
