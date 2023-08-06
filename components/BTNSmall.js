import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const BTNSmall = () => {
  return (
    <View style={[styles.btnSmall, styles.btnSmallFlexBox]}>
      <View style={[styles.signUpWrapper, styles.btnSmallFlexBox]}>
        <Text style={styles.signUp}>Invited</Text>
      </View>
      <View style={styles.btnSmallChild} />
    </View>
  );
};

const styles = StyleSheet.create({
  btnSmallFlexBox: {
    alignItems: "center",
    width: 110,
  },
  signUp: {
    fontSize: FontSize.size_xs,
    letterSpacing: 0,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    color: Color.white,
    textAlign: "center",
  },
  signUpWrapper: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.royalblue_100,
    height: 33,
    paddingHorizontal: Padding.p_0,
    paddingVertical: 8,
    justifyContent: "flex-end",
  },
  btnSmallChild: {
    backgroundColor: Color.slateblue_400,
    width: 83,
    height: 19,
    marginTop: -8,
  },
  btnSmall: {
    position: "absolute",
    top: 8,
    left: 197,
    height: 43,
  },
});

export default BTNSmall;
