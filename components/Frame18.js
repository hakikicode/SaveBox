import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import FrameComponent from "./FrameComponent";
import { Padding, Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const Frame18 = () => {
  return (
    <View style={styles.frame}>
      <FrameComponent />
      <View style={[styles.frame1, styles.framePosition]}>
        <View style={styles.frame2}>
          <Image
            style={styles.frameChild}
            contentFit="cover"
            source={require("../assets/rectangle-34.png")}
          />
          <Text style={[styles.send, styles.sendTypo1]}>121k</Text>
        </View>
        <Text style={[styles.send1, styles.sendTypo]}>British Bal</Text>
      </View>
      <View style={[styles.frame3, styles.framePosition]}>
        <Image
          style={styles.frameChild}
          contentFit="cover"
          source={require("../assets/rectangle-40.png")}
        />
        <View style={styles.frame4}>
          <Text style={styles.sendTypo1}>352k</Text>
          <Text style={styles.sendTypo}>US Bal</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  framePosition: {
    paddingBottom: Padding.p_mid,
    paddingTop: Padding.p_lg,
    width: 138,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 30,
    },
    backgroundColor: Color.white,
    top: 0,
    borderRadius: Border.br_3xs,
    overflow: "hidden",
    position: "absolute",
  },
  sendTypo1: {
    textAlign: "center",
    color: Color.gray_200,
    fontFamily: FontFamily.notoSerifSemiBold,
    fontWeight: "600",
    letterSpacing: 0,
    fontSize: FontSize.size_9xl,
  },
  sendTypo: {
    marginTop: 9,
    textAlign: "left",
    color: Color.slategray_100,
    fontFamily: FontFamily.interSemiBold,
    fontSize: FontSize.size_sm,
    fontWeight: "600",
    letterSpacing: 0,
  },
  frameChild: {
    width: 42,
    height: 42,
    borderRadius: Border.br_3xs,
  },
  send: {
    marginTop: 16,
  },
  frame2: {
    height: 96,
    alignSelf: "stretch",
    overflow: "hidden",
  },
  send1: {
    alignSelf: "stretch",
  },
  frame1: {
    left: 158,
    shadowColor: "rgba(138, 149, 158, 0.15)",
    shadowRadius: 60,
    elevation: 60,
    paddingLeft: Padding.p_5xl,
    paddingRight: Padding.p_31xl,
    justifyContent: "flex-end",
  },
  frame4: {
    width: 63,
    height: 64,
    marginTop: 16,
    overflow: "hidden",
  },
  frame3: {
    left: 314,
    shadowColor: "rgba(138, 149, 158, 0.1)",
    shadowRadius: 30,
    elevation: 30,
    paddingHorizontal: Padding.p_4xl,
    height: 157,
  },
  frame: {
    top: 508,
    left: 41,
    width: 452,
    overflow: "hidden",
    height: 157,
    position: "absolute",
  },
});

export default Frame18;
