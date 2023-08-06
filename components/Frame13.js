import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const Frame13 = () => {
  return (
    <View style={[styles.frame, styles.framePosition]}>
      <View style={styles.frameChild} />
      <View style={styles.rectangle} />
      <Image
        style={[styles.frameItem, styles.frameLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-347.png")}
      />
      <Text style={[styles.send, styles.sendPosition]}>Krish Kendall</Text>
      <Text style={[styles.send1, styles.sendPosition]}>Canada</Text>
      <View style={[styles.frameInner, styles.frameLayout]} />
      <Image
        style={[styles.vectorIcon, styles.framePosition]}
        contentFit="cover"
        source={require("../assets/vector2.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  framePosition: {
    overflow: "hidden",
    position: "absolute",
  },
  frameLayout: {
    height: 42,
    width: 44,
    top: 15,
    borderRadius: Border.br_5xs,
    position: "absolute",
  },
  sendPosition: {
    color: Color.white,
    letterSpacing: 0,
    left: "21.39%",
    top: "50%",
    position: "absolute",
  },
  frameChild: {
    top: 56,
    backgroundColor: Color.royalblue_500,
    width: 234,
    height: 41,
    borderRadius: Border.br_5xs,
    left: 41,
    position: "absolute",
  },
  rectangle: {
    height: "75.26%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "24.74%",
    left: "0%",
    borderRadius: Border.br_8xs,
    backgroundColor: Color.royalblue_100,
    position: "absolute",
  },
  frameItem: {
    left: 12,
  },
  send: {
    marginTop: -31.5,
    fontSize: FontSize.size_base,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    textAlign: "left",
  },
  send1: {
    marginTop: -9.5,
    fontSize: FontSize.size_xs,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    textAlign: "center",
  },
  frameInner: {
    left: 275,
    backgroundColor: Color.white,
  },
  vectorIcon: {
    height: "15.85%",
    width: "5.12%",
    top: "30.15%",
    right: "7.98%",
    bottom: "53.99%",
    left: "86.9%",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  frame: {
    top: 573,
    width: 332,
    height: 97,
    left: 41,
    overflow: "hidden",
  },
});

export default Frame13;
