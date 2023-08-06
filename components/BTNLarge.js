import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const BTNLarge = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.btnLarge}
      onPress={() => navigation.navigate("Onboarding01")}
    >
      <View style={styles.frame}>
        <View style={styles.frameChild} />
        <View style={styles.frameItem} />
      </View>
      <Text style={styles.getStartedNow}>Get Started Now</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  frameChild: {
    backgroundColor: Color.slateblue_500,
    width: 234,
    height: 41,
    borderRadius: Border.br_5xs,
  },
  frameItem: {
    backgroundColor: Color.white,
    height: 56,
    marginTop: -21,
    borderRadius: Border.br_5xs,
    alignSelf: "stretch",
  },
  frame: {
    overflow: "hidden",
    alignSelf: "stretch",
    alignItems: "center",
  },
  getStartedNow: {
    fontSize: FontSize.size_17xl,
    lineHeight: 36,
    fontFamily: FontFamily.damion,
    color: Color.royalblue_100,
    textAlign: "center",
    width: 264,
    height: 38,
    marginTop: -57,
  },
  btnLarge: {
    flex: 1,
    width: "100%",
    justifyContent: "flex-end",
    alignItems: "center",
  },
});

export default BTNLarge;
