import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const BTNLarge1 = () => {
  return (
    <View style={styles.btnLarge}>
      <View style={[styles.btnLargeChild, styles.btnLayout]} />
      <Image
        style={[styles.btnLargeItem, styles.btnLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-16.png")}
      />
      <Text style={styles.send}>Send</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  btnLayout: {
    borderRadius: Border.br_5xs,
    position: "absolute",
  },
  btnLargeChild: {
    height: "53.95%",
    width: "70.48%",
    top: "46.05%",
    right: "15.66%",
    bottom: "0%",
    left: "13.86%",
    backgroundColor: Color.salmon_100,
  },
  btnLargeItem: {
    height: "73.68%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "26.32%",
    left: "0%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  send: {
    top: "25%",
    left: "43.67%",
    fontSize: FontSize.size_lg,
    lineHeight: 18,
    fontFamily: FontFamily.damion,
    color: Color.white,
    textAlign: "left",
    position: "absolute",
  },
  btnLarge: {
    alignSelf: "stretch",
    height: 76,
  },
});

export default BTNLarge1;
