import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const Welcome = () => {
  return (
    <View style={styles.welcome}>
      <View style={styles.rectangle} />
      <Text style={[styles.mainHeadline, styles.descriptionPosition]}>
        Welcome
      </Text>
      <Text
        style={[styles.description, styles.descriptionPosition]}
      >{`Stay on top by effortlessly tracking your subscriptions & bills`}</Text>
      <Image
        style={[styles.layerBlurIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/layer-blur2.png")}
      />
      <Image
        style={[styles.ovalIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/oval3.png")}
      />
      <Image
        style={[styles.groupIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/group6.png")}
      />
      <Image
        style={[styles.vectorIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/vector2.png")}
      />
      <Image
        style={[styles.vectorIcon1, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/vector3.png")}
      />
      <Image
        style={styles.illustrationIcon}
        contentFit="cover"
        source={require("../assets/illustration6.png")}
      />
      <Image
        style={[styles.welcomeChild, styles.welcomeLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-23.png")}
      />
      <Image
        style={[styles.welcomeItem, styles.welcomeLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-23.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  descriptionPosition: {
    textAlign: "left",
    color: Color.white,
    left: 41,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  welcomeLayout: {
    height: 12,
    width: 12,
    position: "absolute",
  },
  rectangle: {
    top: 0,
    left: 0,
    backgroundColor: Color.royalblue_100,
    width: 414,
    position: "absolute",
    height: 896,
  },
  mainHeadline: {
    top: 541,
    fontSize: FontSize.size_25xl,
    lineHeight: 49,
    fontFamily: FontFamily.gilroyBold,
  },
  description: {
    top: 613,
    fontSize: FontSize.size_lg,
    letterSpacing: 0,
    lineHeight: 25,
    fontFamily: FontFamily.interRegular,
    width: 328,
  },
  layerBlurIcon: {
    height: "16.41%",
    width: "47.1%",
    top: "83.59%",
    right: "24.15%",
    bottom: "0%",
    left: "28.74%",
  },
  ovalIcon: {
    height: "10.49%",
    width: "22.71%",
    top: "85.04%",
    right: "38.65%",
    bottom: "4.46%",
    left: "38.65%",
  },
  groupIcon: {
    height: "2.56%",
    width: "6.15%",
    top: "89.07%",
    right: "46.93%",
    bottom: "8.37%",
    left: "46.93%",
  },
  vectorIcon: {
    height: "19.07%",
    width: "46.58%",
    top: "32.44%",
    right: "39.4%",
    bottom: "48.5%",
    left: "14.02%",
  },
  vectorIcon1: {
    height: "16.44%",
    width: "51.29%",
    top: "35.75%",
    right: "13.59%",
    bottom: "47.81%",
    left: "35.12%",
  },
  illustrationIcon: {
    top: 195,
    left: 102,
    width: 214,
    height: 214,
    position: "absolute",
  },
  welcomeChild: {
    top: 203,
    left: 250,
  },
  welcomeItem: {
    top: 403,
    left: 90,
  },
  welcome: {
    backgroundColor: Color.slateblue_100,
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: 896,
  },
});

export default Welcome;
