import * as React from "react";
import { Text, StyleSheet, Pressable, View } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import ContainerFrame from "../components/ContainerFrame";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const Onboarding02 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.onboarding02}>
      <Text
        style={[styles.description, styles.skip1FlexBox]}
      >{`Stay on top by effortlessly tracking your subscriptions & bills`}</Text>
      <Pressable
        style={styles.skip}
        onPress={() => navigation.navigate("Welcome")}
      >
        <Text style={[styles.skip1, styles.skip1FlexBox]}>SKIP</Text>
      </Pressable>
      <Image
        style={[styles.illustrationIcon, styles.framePosition]}
        contentFit="cover"
        source={require("../assets/illustration8.png")}
      />
      <View style={[styles.frame, styles.framePosition]}>
        <Text style={[styles.mainHeadline, styles.skip1FlexBox]}>
          See where your money is going
        </Text>
        <Image
          style={[styles.vectorIcon, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/vector.png")}
        />
        <Image
          style={[styles.vectorIcon1, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/vector5.png")}
        />
      </View>
      <ContainerFrame
        fractionText="2/3"
        propLeft={33}
        onFramePress={() => navigation.navigate("Onboarding03")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  skip1FlexBox: {
    textAlign: "center",
    color: Color.darkslateblue,
  },
  framePosition: {
    top: 179,
    position: "absolute",
  },
  vectorIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  description: {
    top: 602,
    fontSize: FontSize.size_lg,
    letterSpacing: 0,
    lineHeight: 25,
    fontFamily: FontFamily.interRegular,
    width: 328,
    left: 43,
    position: "absolute",
  },
  skip1: {
    fontSize: FontSize.size_sm,
    letterSpacing: 3,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
  },
  skip: {
    left: 341,
    top: 93,
    position: "absolute",
  },
  illustrationIcon: {
    left: 125,
    width: 164,
    height: 164,
  },
  mainHeadline: {
    top: 273,
    left: 3,
    fontSize: FontSize.size_25xl,
    lineHeight: 49,
    fontFamily: FontFamily.robotoRegular,
    width: 323,
    position: "absolute",
  },
  vectorIcon: {
    height: "46.05%",
    width: "55.1%",
    top: "10.14%",
    right: "36.89%",
    bottom: "43.81%",
    left: "8.01%",
  },
  vectorIcon1: {
    height: "39.71%",
    width: "60.67%",
    top: "18.15%",
    right: "6.37%",
    bottom: "42.14%",
    left: "32.97%",
  },
  frame: {
    width: 350,
    height: 371,
    left: 43,
    overflow: "hidden",
  },
  onboarding02: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    height: 896,
    overflow: "hidden",
  },
});

export default Onboarding02;
