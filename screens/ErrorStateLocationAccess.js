import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Color, FontSize, FontFamily, Border, Padding } from "../GlobalStyles";

const ErrorStateLocationAccess = () => {
  return (
    <View style={styles.errorStateLocationAccess}>
      <Text
        style={[styles.description, styles.descriptionClr]}
      >{`Hmm. Looks like your location access is turned off. `}</Text>
      <View style={styles.btnMedium}>
        <View style={styles.signUpWrapper}>
          <Text style={[styles.signUp, styles.signUpTypo]}>Back</Text>
        </View>
        <View style={styles.btnMediumChild} />
      </View>
      <View style={styles.frame}>
        <Text style={[styles.mainHeadline, styles.descriptionClr]}>
          Location Access
        </Text>
        <Image
          style={[styles.vectorIcon, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/vector.png")}
        />
        <Image
          style={[styles.vectorIcon1, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/vector1.png")}
        />
        <Image
          style={styles.illustrationIcon}
          contentFit="cover"
          source={require("../assets/illustration.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  descriptionClr: {
    color: Color.white,
    textAlign: "center",
    position: "absolute",
  },
  signUpTypo: {
    letterSpacing: 0,
    fontSize: FontSize.size_lg,
  },
  vectorIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  description: {
    top: 497,
    left: 44,
    lineHeight: 25,
    fontFamily: FontFamily.interRegular,
    width: 327,
    textAlign: "center",
    letterSpacing: 0,
    fontSize: FontSize.size_lg,
  },
  signUp: {
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    color: Color.darkslateblue,
    alignSelf: "stretch",
    textAlign: "center",
  },
  signUpWrapper: {
    borderRadius: Border.br_5xs,
    paddingHorizontal: Padding.p_51xl,
    paddingVertical: 0,
    alignItems: "flex-end",
    justifyContent: "center",
    alignSelf: "stretch",
    backgroundColor: Color.white,
  },
  btnMediumChild: {
    backgroundColor: Color.gray_300,
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
  mainHeadline: {
    top: 258,
    left: 13,
    fontSize: FontSize.size_23xl,
    lineHeight: 54,
    fontFamily: FontFamily.gilroyBold,
    textAlign: "center",
  },
  vectorIcon: {
    height: "41.86%",
    width: "53.11%",
    top: "33.7%",
    right: "42.39%",
    bottom: "24.44%",
    left: "4.51%",
  },
  vectorIcon1: {
    height: "51.34%",
    width: "55.77%",
    top: "21.5%",
    right: "3.45%",
    bottom: "27.16%",
    left: "40.78%",
  },
  illustrationIcon: {
    top: 0,
    left: 71,
    width: 196,
    height: 196,
    position: "absolute",
  },
  frame: {
    top: 162,
    left: 38,
    width: 331,
    height: 312,
    position: "absolute",
    overflow: "hidden",
  },
  errorStateLocationAccess: {
    flex: 1,
    width: "100%",
    height: 896,
    overflow: "hidden",
    backgroundColor: Color.white,
  },
});

export default ErrorStateLocationAccess;
