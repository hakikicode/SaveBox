import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import BTNMedium from "../components/BTNMedium";
import Frame13 from "../components/Frame13";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const PaymentSuccessful = () => {
  return (
    <View style={styles.paymentSuccessful}>
      <Text style={styles.pleaseEnterYour}>SHOULD ARRIVED BY</Text>
      <Text style={[styles.pleaseEnterYour1, styles.descriptionClr]}>
        27 JULY 2023
      </Text>
      <BTNMedium />
      <Image
        style={styles.frameIcon}
        contentFit="cover"
        source={require("../assets/frame.png")}
      />
      <View style={styles.frame}>
        <Text style={[styles.mainHeadline, styles.descriptionClr]}>{`Payment
Successful`}</Text>
        <Text style={[styles.description, styles.descriptionClr]}>
          Your Payment was successful. Make this user in your favourite list
        </Text>
        <Image
          style={[styles.vectorIcon, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/vector.png")}
        />
        <Image
          style={[styles.vectorIcon1, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/vector1.png")}
        />
        <Image
          style={styles.illustrationIcon}
          contentFit="cover"
          source={require("../assets/illustration3.png")}
        />
      </View>
      <Frame13 />
    </View>
  );
};

const styles = StyleSheet.create({
  descriptionClr: {
    color: Color.darkslateblue,
    textAlign: "center",
    position: "absolute",
  },
  vectorIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  pleaseEnterYour: {
    top: 683,
    left: 120,
    fontSize: FontSize.size_xs,
    letterSpacing: 3,
    color: Color.slategray_100,
    textAlign: "center",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    lineHeight: 28,
    position: "absolute",
  },
  pleaseEnterYour1: {
    top: 712,
    left: 132,
    fontSize: FontSize.size_3xl,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    lineHeight: 28,
    color: Color.darkslateblue,
  },
  frameIcon: {
    top: 58,
    left: 41,
    width: 332,
    height: 47,
    position: "absolute",
    overflow: "hidden",
  },
  mainHeadline: {
    marginTop: 31.5,
    top: "50%",
    left: "18.29%",
    fontSize: FontSize.size_25xl,
    fontFamily: FontFamily.robotoRegular,
  },
  description: {
    top: 357,
    left: 3,
    fontSize: FontSize.size_lg,
    letterSpacing: 0,
    width: 344,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    color: Color.darkslateblue,
    lineHeight: 28,
  },
  vectorIcon: {
    height: "41.37%",
    width: "55.1%",
    top: "12.74%",
    right: "36.89%",
    bottom: "45.89%",
    left: "8.01%",
  },
  vectorIcon1: {
    height: "35.67%",
    width: "60.67%",
    top: "19.93%",
    right: "6.37%",
    bottom: "44.39%",
    left: "32.97%",
  },
  illustrationIcon: {
    top: 0,
    left: 70,
    width: 210,
    height: 210,
    position: "absolute",
  },
  frame: {
    top: 128,
    left: 32,
    width: 350,
    height: 413,
    position: "absolute",
    overflow: "hidden",
  },
  paymentSuccessful: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    height: 896,
    overflow: "hidden",
  },
});

export default PaymentSuccessful;
