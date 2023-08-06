import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const GroupComponent1 = () => {
  return (
    <View style={styles.layerBlurParent}>
      <Image
        style={[styles.layerBlurIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/layer-blur.png")}
      />
      <Image
        style={[styles.ovalIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/oval.png")}
      />
      <Text style={styles.add}>ADD</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  layerBlurIcon: {
    height: "135.4%",
    width: "185.11%",
    top: "-18.58%",
    right: "-43.62%",
    bottom: "-16.81%",
    left: "-41.49%",
  },
  ovalIcon: {
    height: "83.19%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "16.81%",
    left: "0%",
  },
  add: {
    top: "34.51%",
    left: "30.85%",
    fontSize: FontSize.size_sm,
    letterSpacing: 3,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: Color.white,
    textAlign: "center",
    position: "absolute",
  },
  layerBlurParent: {
    top: 764,
    left: 279,
    width: 94,
    height: 113,
    position: "absolute",
  },
});

export default GroupComponent1;
