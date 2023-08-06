import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const Frame = () => {
  return (
    <View style={styles.frame}>
      <Text
        style={styles.description}
      >{`Savings, Transfer, Wallet, Learn & Earn`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  description: {
    fontSize: FontSize.size_lg,
    letterSpacing: 0,
    fontFamily: FontFamily.interRegular,
    color: Color.white,
    textAlign: "center",
    width: 230,
  },
  frame: {
    flex: 1,
    width: "100%",
    overflow: "hidden",
    alignItems: "center",
  },
});

export default Frame;
