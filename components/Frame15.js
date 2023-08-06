import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import BTNLarge3 from "./BTNLarge3";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const Frame15 = () => {
  return (
    <View style={styles.frame}>
      <BTNLarge3 />
      <Text style={styles.register}>Register</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  register: {
    fontSize: FontSize.size_lg,
    lineHeight: 18,
    fontFamily: FontFamily.damion,
    color: Color.white,
    textAlign: "left",
    width: 37,
    marginTop: 19,
  },
  frame: {
    position: "absolute",
    top: 671,
    left: 41,
    width: 332,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
});

export default Frame15;
