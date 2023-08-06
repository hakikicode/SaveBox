import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const Welcome = () => {
  return (
    <View style={styles.welcome}>
      <Image
        style={[styles.frameIcon, styles.frameIconPosition]}
        contentFit="cover"
        source={require("../assets/frame3.png")}
      />
      <View style={[styles.frame, styles.frameIconPosition]}>
        <Text style={[styles.mainHeadline, styles.descriptionPosition]}>
          Welcome
        </Text>
        <Text
          style={[styles.description, styles.descriptionPosition]}
        >{`Stay on top by effortlessly tracking your subscriptions & bills`}</Text>
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
      <Image
        style={[styles.frameIcon1, styles.frameIconPosition]}
        contentFit="cover"
        source={require("../assets/frame4.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  frameIconPosition: {
    position: "absolute",
    overflow: "hidden",
  },
  descriptionPosition: {
    textAlign: "left",
    color: Color.white,
    left: 11,
    position: "absolute",
  },
  vectorIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  frameIcon: {
    top: 195,
    left: 90,
    width: 226,
    height: 220,
  },
  mainHeadline: {
    top: 288,
    fontSize: FontSize.size_25xl,
    lineHeight: 49,
    fontFamily: FontFamily.robotoRegular,
  },
  description: {
    top: 360,
    fontSize: FontSize.size_lg,
    letterSpacing: 0,
    lineHeight: 25,
    fontFamily: FontFamily.interRegular,
    width: 328,
  },
  vectorIcon: {
    height: "41.67%",
    width: "55.1%",
    top: "9.18%",
    right: "36.89%",
    bottom: "49.15%",
    left: "8.01%",
  },
  vectorIcon1: {
    height: "35.93%",
    width: "60.67%",
    top: "16.42%",
    right: "6.37%",
    bottom: "47.65%",
    left: "32.96%",
  },
  frame: {
    top: 253,
    left: 30,
    width: 350,
    height: 410,
  },
  frameIcon1: {
    top: 762,
    left: 160,
    width: 94,
    height: 117,
  },
  welcome: {
    backgroundColor: Color.slateblue_100,
    flex: 1,
    width: "100%",
    height: 896,
    overflow: "hidden",
  },
});

export default Welcome;
