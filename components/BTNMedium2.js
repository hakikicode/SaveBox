import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const BTNMedium2 = () => {
  return (
    <View style={styles.btnMedium}>
      <View style={styles.signUpWrapper}>
        <Text style={styles.signUp}>Back</Text>
      </View>
      <View style={styles.btnMediumChild} />
    </View>
  );
};

const styles = StyleSheet.create({
  signUp: {
    fontSize: FontSize.size_lg,
    letterSpacing: 0,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    color: Color.darkslateblue,
    textAlign: "center",
    alignSelf: "stretch",
  },
  signUpWrapper: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.white,
    paddingHorizontal: Padding.p_51xl,
    paddingVertical: Padding.p_0,
    alignItems: "flex-end",
    justifyContent: "center",
    alignSelf: "stretch",
  },
  btnMediumChild: {
    backgroundColor: Color.gray_300,
    width: 139,
    height: 32,
    marginTop: -15,
  },
  btnMedium: {
    position: "absolute",
    top: 614,
    left: 115,
    width: 185,
    alignItems: "center",
  },
});

export default BTNMedium2;
