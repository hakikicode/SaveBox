import * as React from "react";
import { Text, StyleSheet } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const SavBox = () => {
  return <Text style={styles.savbox}>SavBox</Text>;
};

const styles = StyleSheet.create({
  savbox: {
    fontSize: FontSize.size_23xl,
    lineHeight: 54,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
    color: Color.white,
    textAlign: "center",
  },
});

export default SavBox;
