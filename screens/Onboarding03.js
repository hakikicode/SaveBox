import * as React from "react";
import { Text, StyleSheet, Pressable, View } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import ContainerFrame from "../components/ContainerFrame";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const Onboarding03 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.onboarding03}>
      <Text style={[styles.description, styles.skip1FlexBox]}>
        Use the smart saving features to manage your future goals and needs
      </Text>
      <Pressable
        style={styles.skip}
        onPress={() => navigation.navigate("Welcome")}
      >
        <Text style={[styles.skip1, styles.skip1FlexBox]}>SKIP</Text>
      </Pressable>
      <View style={styles.frame}>
        <Text style={[styles.mainHeadline, styles.skip1FlexBox]}>
          Reach your goals with ease
        </Text>
        <Image
          style={[styles.vectorIcon, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/vector12.png")}
        />
        <Image
          style={[styles.vectorIcon1, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/vector13.png")}
        />
        <Image
          style={styles.illustrationIcon}
          contentFit="cover"
          source={require("../assets/illustration7.png")}
        />
      </View>
      <ContainerFrame
        fractionText="3/3"
        onFramePress={() => navigation.navigate("Welcome")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  skip1FlexBox: {
    textAlign: "center",
    color: Color.darkslateblue,
  },
  vectorIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  description: {
    top: 602,
    left: 56,
    fontSize: FontSize.size_lg,
    letterSpacing: 0,
    lineHeight: 25,
    fontFamily: FontFamily.interRegular,
    width: 303,
    position: "absolute",
  },
  skip1: {
    fontSize: FontSize.size_sm,
    letterSpacing: 3,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
  },
  skip: {
    left: 342,
    top: 93,
    position: "absolute",
  },
  mainHeadline: {
    top: 278,
    left: 0,
    fontSize: FontSize.size_25xl,
    lineHeight: 49,
    fontFamily: FontFamily.robotoRegular,
    width: 323,
    position: "absolute",
  },
  vectorIcon: {
    height: "36.04%",
    width: "52.18%",
    top: "17.37%",
    right: "40.03%",
    bottom: "46.59%",
    left: "7.79%",
  },
  vectorIcon1: {
    height: "42.28%",
    width: "55.54%",
    top: "19.05%",
    right: "5.39%",
    bottom: "38.67%",
    left: "39.07%",
  },
  illustrationIcon: {
    top: 0,
    left: 76,
    width: 150,
    height: 150,
    position: "absolute",
  },
  frame: {
    top: 174,
    left: 46,
    width: 335,
    height: 376,
    position: "absolute",
    overflow: "hidden",
  },
  onboarding03: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    height: 896,
    overflow: "hidden",
  },
});

export default Onboarding03;
