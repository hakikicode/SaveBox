import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const StaticButton = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.staticButton}
      onPress={() => navigation.navigate("CreateAccountEnterPhoneNumber")}
    >
      <Text style={styles.register}>Register</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  register: {
    fontSize: FontSize.size_lg,
    lineHeight: 18,
    fontFamily: FontFamily.damion,
    color: Color.white,
    textAlign: "left",
  },
  staticButton: {
    alignSelf: "stretch",
    borderRadius: Border.br_5xs,
    backgroundColor: Color.royalblue_100,
    height: 56,
    paddingHorizontal: Padding.p_113xl,
    paddingVertical: Padding.p_0,
    justifyContent: "center",
  },
});

export default StaticButton;
