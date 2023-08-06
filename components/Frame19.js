import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const Frame19 = () => {
  return (
    <View style={styles.frame}>
      <View style={styles.frameChild} />
      <View style={styles.frameItem} />
      <View style={[styles.rectangle, styles.rectanglePosition]} />
      <Image
        style={[styles.rectangleIcon, styles.rectanglePosition]}
        contentFit="cover"
        source={require("../assets/rectangle.png")}
      />
      <Text style={[styles.send, styles.sendTypo1]}>Expense</Text>
      <Text style={[styles.send1, styles.sendTypo1]}>Income</Text>
      <Text style={[styles.send2, styles.sendTypo]}>$2,500</Text>
      <Text style={[styles.send3, styles.sendTypo]}>$42,500</Text>
      <Image
        style={[styles.frameInner, styles.arrowIconLayout]}
        contentFit="cover"
        source={require("../assets/arrow-1.png")}
      />
      <Image
        style={[styles.arrowIcon, styles.arrowIconLayout]}
        contentFit="cover"
        source={require("../assets/arrow-1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  rectanglePosition: {
    bottom: "24.14%",
    top: "0%",
    width: "48.65%",
    height: "75.86%",
    borderRadius: Border.br_5xs,
    position: "absolute",
  },
  sendTypo1: {
    textAlign: "center",
    color: Color.white,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    letterSpacing: 0,
    fontSize: FontSize.size_sm,
    top: "50%",
    marginTop: -39,
    position: "absolute",
  },
  sendTypo: {
    textAlign: "left",
    fontFamily: FontFamily.notoSerifSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_5xl,
    marginTop: -22,
    color: Color.white,
    letterSpacing: 0,
    top: "50%",
    position: "absolute",
  },
  arrowIconLayout: {
    height: 45,
    width: 15,
    top: 21,
    position: "absolute",
  },
  frameChild: {
    top: 72,
    left: 181,
    backgroundColor: Color.slateblue_400,
    width: 139,
    height: 32,
    position: "absolute",
  },
  frameItem: {
    top: 75,
    left: 16,
    backgroundColor: Color.mediumslateblue_300,
    width: 125,
    height: 41,
    borderRadius: Border.br_5xs,
    position: "absolute",
  },
  rectangle: {
    right: "51.35%",
    left: "0%",
    backgroundColor: Color.mediumslateblue_100,
  },
  rectangleIcon: {
    right: "0%",
    left: "51.35%",
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  send: {
    left: "18.62%",
  },
  send1: {
    left: "71.17%",
  },
  send2: {
    left: "14.11%",
  },
  send3: {
    left: "65.47%",
  },
  frameInner: {
    left: 17,
  },
  arrowIcon: {
    left: 188,
  },
  frame: {
    top: 132,
    left: 41,
    width: 333,
    height: 116,
    overflow: "hidden",
    position: "absolute",
  },
});

export default Frame19;
