import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { Border, FontSize, FontFamily, Color } from "../GlobalStyles";

const BTNSmallOrange = () => {
  return (
    <View style={styles.btnSmallOrange}>
      <View style={styles.rectangleParent}>
        <Image
          style={styles.rectangleIcon}
          contentFit="cover"
          source={require("../assets/rectangle4.png")}
        />
        <Text style={styles.signUp}>Invite</Text>
      </View>
      <View style={styles.btnSmallOrangeChild} />
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
    left: "35.45%",
    fontSize: FontSize.size_xs,
    letterSpacing: 0,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    color: Color.white,
    textAlign: "center",
    position: "absolute",
  },
  rectangleParent: {
    height: 33,
    width: 110,
  },
  btnSmallOrangeChild: {
    backgroundColor: Color.salmon_200,
    width: 83,
    height: 19,
    marginTop: -8,
  },
  btnSmallOrange: {
    top: 5,
    left: 197,
    height: 43,
    alignItems: "center",
    width: 110,
    position: "absolute",
  },
});

export default BTNSmallOrange;
