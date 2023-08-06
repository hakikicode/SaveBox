import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Border, FontFamily, FontSize, Color, Padding } from "../GlobalStyles";

const Frame20 = () => {
  return (
    <View style={[styles.frame, styles.frameLayout]}>
      <Text style={styles.send}>Transactions</Text>
      <Image
        style={[styles.frameChild, styles.frameLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-681.png")}
      />
      <View style={styles.backBtn}>
        <Image
          style={styles.image15Icon}
          contentFit="cover"
          source={require("../assets/image-15.png")}
        />
      </View>
      <Image
        style={styles.settingsBtnIcon}
        contentFit="cover"
        source={require("../assets/settings-btn.png")}
      />
      <Text style={styles.mainHeadline}>Account Details</Text>
      <Text style={styles.send1}>Share Details</Text>
      <View style={[styles.rectangle, styles.rectangleLayout]} />
      <View style={[styles.rectangle1, styles.rectangleLayout]} />
      <Text style={[styles.send2, styles.sendTypo]}>Transfered</Text>
      <Text style={[styles.send3, styles.sendTypo]}>Received</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  frameLayout: {
    height: 313,
    width: 376,
    position: "absolute",
  },
  rectangleLayout: {
    borderRadius: Border.br_5xs,
    position: "absolute",
  },
  sendTypo: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_lg,
    marginTop: 51.5,
    textAlign: "center",
    color: Color.darkslateblue,
    letterSpacing: 0,
    top: "50%",
    position: "absolute",
  },
  send: {
    marginTop: 89.5,
    left: "3.72%",
    fontSize: FontSize.size_17xl,
    fontFamily: FontFamily.notoSerifSemiBold,
    color: Color.gray_200,
    textAlign: "left",
    fontWeight: "600",
    letterSpacing: 0,
    top: "50%",
    position: "absolute",
  },
  frameChild: {
    top: 0,
    left: 0,
    borderRadius: Border.br_6xl,
  },
  image15Icon: {
    width: 16,
    height: 16,
  },
  backBtn: {
    top: 41,
    left: 22,
    borderRadius: Border.br_mini,
    shadowColor: "rgba(111, 136, 157, 0.25)",
    shadowRadius: 65,
    elevation: 65,
    width: 47,
    height: 47,
    padding: Padding.p_mini,
    alignItems: "flex-end",
    justifyContent: "flex-end",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 30,
    },
    backgroundColor: Color.white,
    position: "absolute",
  },
  settingsBtnIcon: {
    top: 6,
    left: 242,
    width: 134,
    height: 177,
    position: "absolute",
  },
  mainHeadline: {
    marginTop: -46.5,
    fontSize: FontSize.size_23xl,
    fontFamily: FontFamily.robotoRegular,
    color: Color.darkslateblue,
    left: "5.85%",
    width: "88.3%",
    textAlign: "left",
    top: "50%",
    position: "absolute",
  },
  send1: {
    marginTop: 130.5,
    left: "39.89%",
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.interSemiBold,
    color: Color.slateblue_100,
    textAlign: "center",
    fontWeight: "600",
    top: "50%",
    position: "absolute",
  },
  rectangle: {
    height: "23.32%",
    top: "58.15%",
    right: "5.85%",
    bottom: "18.53%",
    shadowColor: "rgba(138, 149, 158, 0.25)",
    shadowRadius: 60,
    elevation: 60,
    left: "5.85%",
    width: "88.3%",
    borderRadius: Border.br_5xs,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 30,
    },
    backgroundColor: Color.white,
  },
  rectangle1: {
    height: "16.93%",
    width: "43.09%",
    top: "61.34%",
    right: "48.14%",
    bottom: "21.73%",
    left: "8.78%",
    backgroundColor: Color.ghostwhite_100,
  },
  send2: {
    left: "18.35%",
  },
  send3: {
    left: "63.3%",
  },
  frame: {
    top: 17,
    left: 19,
    overflow: "hidden",
  },
});

export default Frame20;
