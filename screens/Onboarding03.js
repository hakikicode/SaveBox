import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const Onboarding03 = () => {
  return (
    <View style={styles.onboarding03}>
      <Text style={[styles.mainHeadline, styles.descriptionFlexBox]}>
        Reach your goals with ease
      </Text>
      <Text style={[styles.description, styles.descriptionFlexBox]}>
        Use the smart saving features to manage your future goals and needs
      </Text>
      <View style={styles.roundBtn}>
        <Image
          style={[styles.layerBlurIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/layer-blur.png")}
        />
        <Image
          style={[styles.ovalIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/oval.png")}
        />
        <Text style={[styles.next, styles.nextTypo]}>NEXT</Text>
      </View>
      <Text style={[styles.text, styles.nextTypo]}>3/3</Text>
      <Text style={[styles.skip, styles.nextTypo]}>SKIP</Text>
      <Image
        style={[styles.vectorIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/vector12.png")}
      />
      <Image
        style={[styles.vectorIcon1, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/vector13.png")}
      />
      <Image
        style={styles.illustrationIcon}
        contentFit="cover"
        source={require("../assets/illustration7.png")}
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
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  nextTypo: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    letterSpacing: 3,
    fontSize: FontSize.size_sm,
    textAlign: "center",
    position: "absolute",
  },
  mainHeadline: {
    top: 452,
    left: 46,
    fontSize: FontSize.size_25xl,
    lineHeight: 49,
    fontFamily: FontFamily.gilroyBold,
    width: 323,
  },
  description: {
    top: 602,
    left: 56,
    fontSize: FontSize.size_lg,
    letterSpacing: 0,
    lineHeight: 25,
    fontFamily: FontFamily.interRegular,
    width: 303,
  },
  layerBlurIcon: {
    height: "137.17%",
    width: "176.6%",
    top: "-18.58%",
    right: "-35.11%",
    bottom: "-18.58%",
    left: "-41.49%",
  },
  ovalIcon: {
    height: "83.19%",
    top: "0%",
    right: "0%",
    bottom: "16.81%",
    left: "0%",
    width: "100%",
    maxWidth: "100%",
  },
  next: {
    top: 39,
    left: 25,
    color: Color.white,
  },
  roundBtn: {
    height: "12.61%",
    width: "22.71%",
    top: "85.04%",
    right: "7.97%",
    bottom: "2.34%",
    left: "69.32%",
    position: "absolute",
  },
  text: {
    top: 801,
    left: 34,
    color: Color.darkslateblue,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    letterSpacing: 3,
    fontSize: FontSize.size_sm,
  },
  skip: {
    top: 93,
    left: 342,
    color: Color.darkslateblue,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    letterSpacing: 3,
    fontSize: FontSize.size_sm,
  },
  vectorIcon: {
    height: "15.12%",
    width: "42.19%",
    top: "26.71%",
    right: "40.4%",
    bottom: "58.17%",
    left: "17.41%",
  },
  vectorIcon1: {
    height: "17.74%",
    width: "44.9%",
    top: "27.42%",
    right: "12.4%",
    bottom: "54.84%",
    left: "42.7%",
  },
  illustrationIcon: {
    top: 174,
    left: 122,
    width: 150,
    height: 150,
    position: "absolute",
  },
  onboarding03: {
    backgroundColor: Color.white,
    flex: 1,
    height: 896,
    overflow: "hidden",
    width: "100%",
  },
});

export default Onboarding03;
