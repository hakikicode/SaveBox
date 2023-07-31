import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const ErrorStatePaymentFailed = () => {
  return (
    <View style={styles.errorStatePaymentFailed}>
      <Text style={styles.mainHeadline}>Payment Failed</Text>
      <Text
        style={[styles.description, styles.signUpTypo]}
      >{`Hmm. Looks like your location access is turned off. `}</Text>
      <View style={styles.btnMedium}>
        <View style={styles.rectangleParent}>
          <Image
            style={[styles.rectangleIcon, styles.vectorIconLayout]}
            contentFit="cover"
            source={require("../assets/rectangle1.png")}
          />
          <Text style={[styles.signUp, styles.signUpTypo]}>Back</Text>
        </View>
        <View style={styles.btnMediumChild} />
      </View>
      <Image
        style={[styles.vectorIcon, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector4.png")}
      />
      <Image
        style={[styles.vectorIcon1, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector5.png")}
      />
      <Image
        style={styles.illustrationIcon}
        contentFit="cover"
        source={require("../assets/illustration2.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  signUpTypo: {
    letterSpacing: 0,
    fontSize: FontSize.size_lg,
    textAlign: "center",
    position: "absolute",
  },
  vectorIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  mainHeadline: {
    top: 420,
    left: 56,
    fontSize: FontSize.size_23xl,
    lineHeight: 54,
    fontFamily: FontFamily.gilroyBold,
    textAlign: "center",
    color: Color.darkslateblue,
    position: "absolute",
  },
  description: {
    top: 497,
    left: 44,
    lineHeight: 25,
    fontFamily: FontFamily.interRegular,
    width: 327,
    color: Color.darkslateblue,
    fontSize: FontSize.size_lg,
  },
  rectangleIcon: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: Border.br_5xs,
    width: "100%",
    maxWidth: "100%",
  },
  signUp: {
    top: "30.36%",
    left: "38.38%",
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    color: Color.white,
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
  vectorIcon: {
    height: "19.07%",
    width: "46.58%",
    top: "28.75%",
    right: "39.64%",
    bottom: "52.18%",
    left: "13.77%",
  },
  vectorIcon1: {
    height: "16.44%",
    width: "51.29%",
    top: "32.07%",
    right: "13.84%",
    bottom: "51.49%",
    left: "34.87%",
  },
  illustrationIcon: {
    top: 186,
    left: 102,
    width: 211,
    height: 211,
    position: "absolute",
  },
  errorStatePaymentFailed: {
    backgroundColor: Color.white,
    flex: 1,
    height: 896,
    overflow: "hidden",
    width: "100%",
  },
});

export default ErrorStatePaymentFailed;
