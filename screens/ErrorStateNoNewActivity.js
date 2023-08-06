import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import BTNMedium2 from "../components/BTNMedium2";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const ErrorStateNoNewActivity = () => {
  return (
    <View style={styles.errorStateNoNewActivity}>
      <Text style={[styles.mainHeadline, styles.descriptionFlexBox]}>
        No New Activity
      </Text>
      <Text style={[styles.description, styles.descriptionFlexBox]}>
        It seems everything went well and your app is ready to work with you
      </Text>
      <BTNMedium2 />
      <Image
        style={[styles.vectorIcon, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector3.png")}
      />
      <Image
        style={[styles.vectorIcon1, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector4.png")}
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
  mainHeadline: {
    top: 420,
    left: 54,
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
    top: 195,
    left: 112,
    width: 190,
    height: 190,
    position: "absolute",
  },
  errorStateNoNewActivity: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    height: 896,
    overflow: "hidden",
  },
});

export default ErrorStateNoNewActivity;
