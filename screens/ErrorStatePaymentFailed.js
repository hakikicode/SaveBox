import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import BTNMedium3 from "../components/BTNMedium3";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const ErrorStatePaymentFailed = () => {
  return (
    <View style={styles.errorStatePaymentFailed}>
      <Text style={[styles.mainHeadline, styles.descriptionFlexBox]}>
        Payment Failed
      </Text>
      <Text
        style={[styles.description, styles.descriptionFlexBox]}
      >{`Hmm. Looks like your location access is turned off. `}</Text>
      <BTNMedium3 />
      <Image
        style={[styles.vectorIcon, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector8.png")}
      />
      <Image
        style={[styles.vectorIcon1, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector9.png")}
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
  descriptionFlexBox: {
    textAlign: "center",
    color: Color.darkslateblue,
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
    fontFamily: FontFamily.robotoRegular,
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
    width: "100%",
    height: 896,
    overflow: "hidden",
  },
});

export default ErrorStatePaymentFailed;
