import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const BTNLarge2 = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.btnLarge}
      onPress={() => navigation.navigate("VerifyCodeEmpty")}
    >
      <View style={[styles.btnLargeChild, styles.childLayout]} />
      <View style={styles.frame}>
        <Text style={styles.next}>Next</Text>
        <View style={[styles.frameChild, styles.childLayout]} />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  childLayout: {
    borderRadius: Border.br_5xs,
    alignSelf: "stretch",
  },
  btnLargeChild: {
    backgroundColor: Color.royalblue_100,
    height: 56,
  },
  next: {
    fontSize: FontSize.size_lg,
    lineHeight: 18,
    fontFamily: FontFamily.damion,
    color: Color.white,
    textAlign: "left",
  },
  frameChild: {
    backgroundColor: Color.royalblue_300,
    height: 41,
    marginTop: -2,
  },
  frame: {
    width: 234,
    overflow: "hidden",
    justifyContent: "center",
    marginTop: -37,
    alignItems: "center",
  },
  btnLarge: {
    position: "absolute",
    top: 557,
    left: 41,
    width: 332,
    alignItems: "center",
  },
});

export default BTNLarge2;
