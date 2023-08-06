import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { Border, FontSize, FontFamily, Color, Padding } from "../GlobalStyles";

const FrameComponent = () => {
  return (
    <View style={styles.rectangleParent}>
      <Image
        style={styles.componentChild}
        contentFit="cover"
        source={require("../assets/rectangle-41.png")}
      />
      <View style={styles.frame}>
        <Text style={[styles.send, styles.sendTypo]}>18,42</Text>
        <Text style={[styles.send1, styles.sendTypo]}>Euro Bal</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  sendTypo: {
    fontWeight: "600",
    letterSpacing: 0,
  },
  componentChild: {
    width: 42,
    height: 42,
    borderRadius: Border.br_3xs,
  },
  send: {
    fontSize: FontSize.size_9xl,
    fontFamily: FontFamily.notoSerifSemiBold,
    color: Color.gray_200,
    textAlign: "center",
  },
  send1: {
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.interSemiBold,
    color: Color.slategray_100,
    textAlign: "left",
    marginTop: 9,
  },
  frame: {
    width: 69,
    height: 64,
    overflow: "hidden",
    marginTop: 16,
  },
  rectangleParent: {
    position: "absolute",
    height: "100%",
    width: "30.53%",
    top: "0%",
    right: "69.47%",
    bottom: "0%",
    left: "0%",
    backgroundColor: Color.white,
    shadowColor: "rgba(138, 149, 158, 0.1)",
    shadowOffset: {
      width: 0,
      height: 15,
    },
    shadowRadius: 30,
    elevation: 30,
    shadowOpacity: 1,
    paddingHorizontal: Padding.p_4xl,
    paddingTop: Padding.p_lg,
    paddingBottom: Padding.p_mid,
    borderRadius: Border.br_3xs,
  },
});

export default FrameComponent;
