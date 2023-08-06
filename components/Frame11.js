import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import BTNSmall from "./BTNSmall";
import { FontFamily, Border, FontSize, Color } from "../GlobalStyles";

const Frame11 = () => {
  return (
    <View style={[styles.frame, styles.framePosition]}>
      <Image
        style={styles.frameChild}
        contentFit="cover"
        source={require("../assets/rectangle-38.png")}
      />
      <BTNSmall />
      <View style={[styles.frame1, styles.framePosition]}>
        <Text style={[styles.send, styles.sendTypo]}>Yamilet Booker</Text>
        <Text style={[styles.send1, styles.sendTypo]}>+000 00 0000</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  framePosition: {
    overflow: "hidden",
    position: "absolute",
  },
  sendTypo: {
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    letterSpacing: 0,
  },
  frameChild: {
    top: 0,
    left: 0,
    borderRadius: Border.br_3xs,
    width: 54,
    height: 54,
    position: "absolute",
  },
  send: {
    fontSize: FontSize.size_sm,
    color: Color.gray_200,
    textAlign: "left",
  },
  send1: {
    fontSize: FontSize.size_3xs,
    color: Color.slategray_100,
    textAlign: "center",
    marginTop: 4,
  },
  frame1: {
    top: 13,
    left: 65,
    width: 96,
    height: 33,
  },
  frame: {
    top: 91,
    left: 15,
    width: 307,
    height: 54,
  },
});

export default Frame11;
