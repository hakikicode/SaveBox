import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const Frame22 = () => {
  return (
    <View style={[styles.frame, styles.frameLayout1]}>
      <View style={[styles.frameChild, styles.frameLayout1]} />
      <Text style={styles.send}>395,42.00</Text>
      <Text style={styles.send1}>US Dollars</Text>
      <Image
        style={[styles.menuBtnIcon, styles.btnIconLayout]}
        contentFit="cover"
        source={require("../assets/menu-btn.png")}
      />
      <Image
        style={[styles.settingsBtnIcon, styles.btnIconLayout]}
        contentFit="cover"
        source={require("../assets/settings-btn.png")}
      />
      <View style={styles.frameItem} />
      <View style={[styles.frameInner, styles.frameLayout]} />
      <Image
        style={[styles.rectangleIcon, styles.frameChild1Layout]}
        contentFit="cover"
        source={require("../assets/rectangle-64.png")}
      />
      <Image
        style={[styles.frameChild1, styles.frameChild1Layout]}
        contentFit="cover"
        source={require("../assets/rectangle-65.png")}
      />
      <Text style={[styles.send2, styles.sendTypo]}>Send</Text>
      <Text style={[styles.send3, styles.sendTypo]}>Convert</Text>
      <Image
        style={styles.maskGroupIcon}
        contentFit="cover"
        source={require("../assets/mask-group2.png")}
      />
      <Image
        style={styles.maskGroupIcon1}
        contentFit="cover"
        source={require("../assets/mask-group11.png")}
      />
      <Image
        style={[styles.frameChild2, styles.frameLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-342.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  frameLayout1: {
    width: 332,
    position: "absolute",
  },
  btnIconLayout: {
    height: 142,
    width: 112,
    top: 0,
    position: "absolute",
  },
  frameLayout: {
    height: 64,
    position: "absolute",
  },
  frameChild1Layout: {
    height: 87,
    width: 89,
    top: 216,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  sendTypo: {
    color: Color.white,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_base,
    textAlign: "center",
    top: "50%",
    position: "absolute",
  },
  frameChild: {
    top: 75,
    backgroundColor: Color.ghostwhite_100,
    height: 176,
    borderRadius: Border.br_3xs,
    left: 0,
  },
  send: {
    marginTop: -40,
    fontSize: FontSize.size_15xl,
    fontFamily: FontFamily.robotoRegular,
    textAlign: "center",
    color: Color.darkslateblue,
    top: "50%",
    left: "27.11%",
    position: "absolute",
  },
  send1: {
    marginTop: 10,
    left: "38.55%",
    letterSpacing: 0,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    fontSize: FontSize.size_base,
    textAlign: "center",
    color: Color.darkslateblue,
    top: "50%",
    position: "absolute",
  },
  menuBtnIcon: {
    left: 0,
  },
  settingsBtnIcon: {
    left: 220,
  },
  frameItem: {
    top: 267,
    left: 68,
    borderRadius: Border.br_5xs,
    backgroundColor: Color.mediumslateblue_200,
    width: 97,
    height: 61,
    position: "absolute",
  },
  frameInner: {
    top: 260,
    left: 191,
    backgroundColor: Color.slateblue_700,
    width: 88,
  },
  rectangleIcon: {
    left: 66,
  },
  frameChild1: {
    left: 178,
  },
  send2: {
    marginTop: 104,
    left: "27.11%",
    color: Color.white,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  send3: {
    marginTop: 103,
    left: "57.53%",
  },
  maskGroupIcon: {
    left: 84,
    width: 51,
    height: 51,
    top: 216,
    position: "absolute",
  },
  maskGroupIcon1: {
    top: 228,
    left: 209,
    width: 28,
    height: 28,
    position: "absolute",
  },
  frameChild2: {
    top: 47,
    left: 134,
    width: 64,
    borderRadius: Border.br_3xs,
  },
  frame: {
    top: 58,
    left: 41,
    height: 328,
    overflow: "hidden",
  },
});

export default Frame22;
