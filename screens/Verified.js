import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const Verified = () => {
  return (
    <View style={styles.verified}>
      <Text style={styles.mainHeadline}>Welcome Mickey!</Text>
      <Text style={[styles.description, styles.signUpTypo]}>
        It seems everything went well and your app is ready to work with you
      </Text>
      <View style={[styles.btnMediumWhite, styles.btnMediumWhiteLayout]}>
        <View style={[styles.btnMediumWhiteChild, styles.rectanglePosition]} />
        <View style={[styles.rectangleParent, styles.btnMediumWhiteLayout]}>
          <View style={[styles.rectangle, styles.rectanglePosition]} />
          <Text style={[styles.signUp, styles.signUpTypo]}>Get Started</Text>
        </View>
      </View>
      <Image
        style={[styles.vectorIcon, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector2.png")}
      />
      <Image
        style={[styles.vectorIcon1, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector3.png")}
      />
      <Image
        style={[styles.illustrationIcon, styles.verifiedChildPosition]}
        contentFit="cover"
        source={require("../assets/illustration5.png")}
      />
      <Image
        style={[styles.verifiedChild, styles.verifiedChildPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-14.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  signUpTypo: {
    letterSpacing: 0,
    fontSize: FontSize.size_lg,
    textAlign: "center",
    position: "absolute",
  },
  btnMediumWhiteLayout: {
    width: 185,
    position: "absolute",
  },
  rectanglePosition: {
    bottom: "0%",
    position: "absolute",
  },
  vectorIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  verifiedChildPosition: {
    top: 172,
    position: "absolute",
  },
  mainHeadline: {
    top: 448,
    left: 18,
    fontSize: FontSize.size_23xl,
    lineHeight: 54,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
    textAlign: "center",
    position: "absolute",
    color: Color.white,
  },
  description: {
    top: 525,
    left: 44,
    lineHeight: 25,
    fontFamily: FontFamily.interRegular,
    width: 327,
    color: Color.white,
    fontSize: FontSize.size_lg,
  },
  btnMediumWhiteChild: {
    height: "43.84%",
    width: "75.14%",
    top: "56.16%",
    right: "14.59%",
    left: "10.27%",
    backgroundColor: Color.gray_300,
  },
  rectangle: {
    height: "100%",
    top: "0%",
    right: "0%",
    left: "0%",
    borderRadius: Border.br_5xs,
    backgroundColor: Color.white,
    width: "100%",
    bottom: "0%",
  },
  signUp: {
    top: "30.36%",
    left: "22.16%",
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    color: Color.darkslateblue,
  },
  rectangleParent: {
    top: 0,
    left: 0,
    height: 56,
  },
  btnMediumWhite: {
    top: 614,
    left: 115,
    height: 73,
  },
  vectorIcon: {
    height: "19.07%",
    width: "46.58%",
    top: "28.75%",
    right: "39.64%",
    bottom: "52.18%",
    left: "13.77%",
  },
  vectorIcon1: {
    height: "16.44%",
    width: "51.29%",
    top: "32.07%",
    right: "13.84%",
    bottom: "51.49%",
    left: "34.87%",
  },
  illustrationIcon: {
    left: 108,
    width: 192,
    height: 192,
  },
  verifiedChild: {
    left: 216,
    width: 14,
    height: 14,
  },
  verified: {
    backgroundColor: Color.royalblue_100,
    flex: 1,
    height: 896,
    overflow: "hidden",
    width: "100%",
  },
});

export default Verified;
