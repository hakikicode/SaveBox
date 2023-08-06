import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import BTNMedium1 from "../components/BTNMedium1";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const ErrorStateLocationAccess = () => {
  return (
    <View style={styles.errorStateLocationAccess}>
      <Text
        style={[styles.description, styles.descriptionFlexBox]}
      >{`Hmm. Looks like your location access is turned off. `}</Text>
      <BTNMedium1 />
      <View style={styles.frame}>
        <Text style={[styles.mainHeadline, styles.descriptionFlexBox]}>
          Location Access
        </Text>
        <Image
          style={[styles.vectorIcon, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/vector7.png")}
        />
        <Image
          style={[styles.vectorIcon1, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/vector11.png")}
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
  descriptionFlexBox: {
    textAlign: "center",
    color: Color.white,
    position: "absolute",
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
    fontSize: FontSize.size_lg,
    letterSpacing: 0,
    lineHeight: 25,
    fontFamily: FontFamily.interRegular,
    width: 327,
  },
  mainHeadline: {
    top: 258,
    left: 13,
    fontSize: FontSize.size_23xl,
    lineHeight: 54,
    fontFamily: FontFamily.robotoRegular,
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
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    height: 896,
    overflow: "hidden",
  },
});

export default ErrorStateLocationAccess;
