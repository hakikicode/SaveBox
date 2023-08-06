import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { Border, FontSize, FontFamily, Color } from "../GlobalStyles";

const BTNMedium3 = () => {
  return (
    <View style={styles.btnMedium}>
      <View style={styles.rectangleParent}>
        <Image
          style={styles.rectangleIcon}
          contentFit="cover"
          source={require("../assets/rectangle1.png")}
        />
        <Text style={styles.signUp}>Back</Text>
      </View>
      <View style={styles.btnMediumChild} />
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleIcon: {
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: Border.br_5xs,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    position: "absolute",
  },
  signUp: {
    top: "30.36%",
    left: "38.38%",
    fontSize: FontSize.size_lg,
    letterSpacing: 0,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    color: Color.white,
    textAlign: "center",
    position: "absolute",
  },
  rectangleParent: {
    alignSelf: "stretch",
    height: 56,
  },
  btnMediumChild: {
    backgroundColor: Color.slateblue_400,
    width: 139,
    height: 32,
    marginTop: -15,
  },
  btnMedium: {
    top: 614,
    left: 115,
    width: 185,
    alignItems: "center",
    position: "absolute",
  },
});

export default BTNMedium3;
