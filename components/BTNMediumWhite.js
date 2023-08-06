import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const BTNMediumWhite = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.btnMediumWhite}
      onPress={() => navigation.navigate("SignInEmpty")}
    >
      <View style={styles.signUpWrapper}>
        <Text style={styles.signUp}>Get Started</Text>
      </View>
      <View style={styles.btnMediumWhiteChild} />
    </Pressable>
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
  },
  signUpWrapper: {
    alignSelf: "stretch",
    borderRadius: Border.br_5xs,
    backgroundColor: Color.white,
    height: 56,
    justifyContent: "center",
    alignItems: "center",
  },
  btnMediumWhiteChild: {
    backgroundColor: Color.gray_300,
    width: 139,
    height: 32,
    marginTop: -15,
  },
  btnMediumWhite: {
    position: "absolute",
    top: 614,
    left: 115,
    width: 185,
    alignItems: "center",
  },
});

export default BTNMediumWhite;
