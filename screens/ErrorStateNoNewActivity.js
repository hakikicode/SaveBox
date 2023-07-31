import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const ErrorStateNoNewActivity = () => {
  return (
    <View style={styles.errorStateNoNewActivity}>
      <Text style={styles.mainHeadline}>No New Activity</Text>
      <Text style={[styles.description, styles.signUpTypo]}>
        It seems everything went well and your app is ready to work with you
      </Text>
      <View style={styles.btnMedium}>
        <View style={styles.signUpWrapper}>
          <Text style={[styles.signUp, styles.signUpTypo]}>Back</Text>
        </View>
        <View style={styles.btnMediumChild} />
      </View>
      <Image
        style={[styles.vectorIcon, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector2.png")}
      />
      <Image
        style={[styles.vectorIcon1, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector3.png")}
      />
      <Image
        style={styles.illustrationIcon}
        contentFit="cover"
        source={require("../assets/illustration1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  signUpTypo: {
    letterSpacing: 0,
    fontSize: FontSize.size_lg,
    textAlign: "center",
  },
  vectorIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  mainHeadline: {
    top: 420,
    left: 54,
    fontSize: FontSize.size_23xl,
    lineHeight: 54,
    fontFamily: FontFamily.gilroyBold,
    textAlign: "center",
    color: Color.white,
    position: "absolute",
  },
  description: {
    top: 497,
    left: 44,
    lineHeight: 25,
    fontFamily: FontFamily.interRegular,
    width: 327,
    color: Color.white,
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  signUp: {
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    color: Color.darkslateblue,
    alignSelf: "stretch",
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
    top: 195,
    left: 112,
    width: 190,
    height: 190,
    position: "absolute",
  },
  errorStateNoNewActivity: {
    flex: 1,
    width: "100%",
    height: 896,
    overflow: "hidden",
    backgroundColor: Color.white,
  },
});

export default ErrorStateNoNewActivity;
