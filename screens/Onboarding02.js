import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const Onboarding02 = () => {
  return (
    <View style={styles.onboarding02}>
      <Text style={[styles.mainHeadline, styles.descriptionFlexBox]}>
        See where your money is going
      </Text>
      <Text
        style={[styles.description, styles.descriptionFlexBox]}
      >{`Stay on top by effortlessly tracking your subscriptions & bills`}</Text>
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
      <Text style={[styles.text, styles.nextTypo]}>2/3</Text>
      <Text style={[styles.skip, styles.nextTypo]}>SKIP</Text>
      <Image
        style={[styles.vectorIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/vector8.png")}
      />
      <Image
        style={[styles.vectorIcon1, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/vector14.png")}
      />
      <Image
        style={styles.illustrationIcon}
        contentFit="cover"
        source={require("../assets/illustration8.png")}
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
    left: 43,
    fontSize: FontSize.size_lg,
    letterSpacing: 0,
    lineHeight: 25,
    fontFamily: FontFamily.interRegular,
    width: 328,
  },
  layerBlurIcon: {
    height: "137.17%",
    width: "177.66%",
    top: "-18.58%",
    right: "-36.17%",
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
    right: "8.21%",
    bottom: "2.34%",
    left: "69.08%",
    position: "absolute",
  },
  text: {
    top: 801,
    left: 33,
    color: Color.darkslateblue,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    letterSpacing: 3,
    fontSize: FontSize.size_sm,
  },
  skip: {
    top: 93,
    left: 341,
    color: Color.darkslateblue,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    letterSpacing: 3,
    fontSize: FontSize.size_sm,
  },
  vectorIcon: {
    height: "19.07%",
    width: "46.58%",
    top: "24.18%",
    right: "36.26%",
    bottom: "56.76%",
    left: "17.16%",
  },
  vectorIcon1: {
    height: "16.44%",
    width: "51.29%",
    top: "27.49%",
    right: "10.45%",
    bottom: "56.07%",
    left: "38.26%",
  },
  illustrationIcon: {
    top: 179,
    left: 125,
    width: 164,
    height: 164,
    position: "absolute",
  },
  onboarding02: {
    backgroundColor: Color.white,
    flex: 1,
    height: 896,
    overflow: "hidden",
    width: "100%",
  },
});

export default Onboarding02;
