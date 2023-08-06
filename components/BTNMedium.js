import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const BTNMedium = () => {
  return (
    <View style={styles.btnMedium}>
      <View style={[styles.frame, styles.framePosition]}>
        <View style={[styles.frameChild, styles.frameChildPosition]} />
      </View>
      <View style={[styles.rectangleParent, styles.framePosition]}>
        <Image
          style={[styles.rectangleIcon, styles.frameChildPosition]}
          contentFit="cover"
          source={require("../assets/rectangle1.png")}
        />
        <Text style={styles.signUp}>Track</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  framePosition: {
    left: 0,
    position: "absolute",
  },
  frameChildPosition: {
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  frameChild: {
    width: "81.29%",
    left: "18.71%",
    backgroundColor: Color.slateblue_400,
  },
  frame: {
    top: 40,
    width: 171,
    height: 32,
    overflow: "hidden",
  },
  rectangleIcon: {
    width: "100%",
    left: "0%",
    borderRadius: Border.br_5xs,
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  signUp: {
    top: "30.36%",
    left: "36.76%",
    fontSize: FontSize.size_lg,
    letterSpacing: 0,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    color: Color.white,
    textAlign: "center",
    position: "absolute",
  },
  rectangleParent: {
    top: 0,
    height: 56,
    width: 185,
  },
  btnMedium: {
    top: 774,
    left: 119,
    height: 72,
    width: 185,
    position: "absolute",
  },
});

export default BTNMedium;
