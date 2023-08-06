import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import BTNMediumWhite from "../components/BTNMediumWhite";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const Verified = () => {
  return (
    <View style={styles.verified}>
      <BTNMediumWhite />
      <Image
        style={[styles.frameIcon, styles.framePosition]}
        contentFit="cover"
        source={require("../assets/frame1.png")}
      />
      <View style={[styles.frame, styles.framePosition]}>
        <Text style={[styles.mainHeadline, styles.descriptionFlexBox]}>
          Welcome Mickey!
        </Text>
        <Text style={[styles.description, styles.descriptionFlexBox]}>
          It seems everything went well and your app is ready to work with you
        </Text>
        <Image
          style={[styles.vectorIcon, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/vector3.png")}
        />
        <Image
          style={[styles.vectorIcon1, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/vector4.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  framePosition: {
    position: "absolute",
    overflow: "hidden",
  },
  descriptionFlexBox: {
    textAlign: "center",
    color: Color.white,
    position: "absolute",
  },
  vectorIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  frameIcon: {
    top: 172,
    left: 108,
    width: 192,
    height: 192,
  },
  mainHeadline: {
    top: 228,
    left: 0,
    fontSize: FontSize.size_23xl,
    lineHeight: 54,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
  },
  description: {
    top: 305,
    left: 26,
    fontSize: FontSize.size_lg,
    letterSpacing: 0,
    lineHeight: 25,
    fontFamily: FontFamily.interRegular,
    width: 327,
  },
  vectorIcon: {
    height: "48.13%",
    width: "50.88%",
    top: "10.6%",
    right: "38.82%",
    bottom: "41.28%",
    left: "10.3%",
  },
  vectorIcon1: {
    height: "41.5%",
    width: "56.03%",
    top: "18.96%",
    right: "10.63%",
    bottom: "39.53%",
    left: "33.35%",
  },
  frame: {
    top: 220,
    left: 18,
    width: 379,
    height: 355,
  },
  verified: {
    backgroundColor: Color.royalblue_100,
    flex: 1,
    width: "100%",
    height: 896,
    overflow: "hidden",
  },
});

export default Verified;
