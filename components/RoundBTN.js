import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const RoundBTN = () => {
  return (
    <View style={styles.roundBtn}>
      <Image
        style={[styles.layerBlurIcon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/layer-blur.png")}
      />
      <Image
        style={[styles.ovalIcon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/oval.png")}
      />
      <Text style={styles.next}>NEXT</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  iconPosition: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    right: "0%",
    top: "0%",
    position: "absolute",
  },
  layerBlurIcon: {
    height: "100%",
    width: "141.49%",
    bottom: "0%",
    left: "-41.49%",
  },
  ovalIcon: {
    height: "83.19%",
    width: "100%",
    bottom: "16.81%",
    left: "0%",
  },
  next: {
    top: "34.51%",
    left: "26.6%",
    fontSize: FontSize.size_sm,
    letterSpacing: 3,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: Color.white,
    textAlign: "center",
    position: "absolute",
  },
  roundBtn: {
    width: 94,
    height: 113,
  },
});

export default RoundBTN;
