import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const BTNLarge3 = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.btnLarge}
      onPress={() =>
        navigation.navigate("CreateAccountEnterPhoneNumberEmptyState")
      }
    >
      <View style={styles.frame}>
        <View style={styles.frameChild} />
        <View style={styles.frameItem} />
      </View>
      <Text style={styles.next}>Next</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  frameChild: {
    backgroundColor: Color.royalblue_100,
    height: 56,
    borderRadius: Border.br_5xs,
    alignSelf: "stretch",
  },
  frameItem: {
    backgroundColor: Color.cornflowerblue_100,
    width: 234,
    height: 41,
    marginTop: -21,
    borderRadius: Border.br_5xs,
  },
  frame: {
    overflow: "hidden",
    alignSelf: "stretch",
    alignItems: "center",
  },
  next: {
    fontSize: FontSize.size_lg,
    lineHeight: 18,
    fontFamily: FontFamily.damion,
    color: Color.white,
    textAlign: "left",
    marginTop: -57,
  },
  btnLarge: {
    width: 332,
    justifyContent: "flex-end",
    alignItems: "center",
  },
});

export default BTNLarge3;
