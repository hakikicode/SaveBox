import * as React from "react";
import { Text, StyleSheet, Pressable, View } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import RoundBTN from "../components/RoundBTN";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const Onboarding01 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.onboarding01}>
      <Text style={styles.mainHeadline}>Take hold of your finances</Text>
      <Text style={styles.description}>
        Running your finances is easier with SavBox
      </Text>
      <Pressable
        style={styles.skip}
        onPress={() => navigation.navigate("Welcome")}
      >
        <Text style={styles.skip1}>SKIP</Text>
      </Pressable>
      <Image
        style={styles.frameIcon}
        contentFit="cover"
        source={require("../assets/frame6.png")}
      />
      <Pressable
        style={styles.frame}
        onPress={() => navigation.navigate("Onboarding02")}
      >
        <Text style={styles.text}>1/3</Text>
        <RoundBTN />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  mainHeadline: {
    position: "absolute",
    top: 452,
    left: 49,
    fontSize: FontSize.size_25xl,
    lineHeight: 56,
    fontFamily: FontFamily.robotoRegular,
    color: Color.darkslateblue,
    textAlign: "center",
    width: 316,
  },
  description: {
    position: "absolute",
    top: 602,
    left: 30,
    fontSize: FontSize.size_lg,
    letterSpacing: 0,
    lineHeight: 25,
    fontFamily: FontFamily.interRegular,
    color: Color.darkslateblue,
    textAlign: "center",
  },
  skip1: {
    fontSize: FontSize.size_sm,
    letterSpacing: 3,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: Color.darkslateblue,
    textAlign: "center",
  },
  skip: {
    position: "absolute",
    left: 341,
    top: 93,
  },
  frameIcon: {
    position: "absolute",
    top: 120,
    left: 59,
    width: 282,
    height: 279,
    overflow: "hidden",
  },
  text: {
    fontSize: FontSize.size_sm,
    letterSpacing: 3,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: Color.darkslateblue,
    textAlign: "center",
    width: 56,
    marginTop: 39,
  },
  frame: {
    position: "absolute",
    top: 758,
    left: 39,
    width: 346,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  onboarding01: {
    position: "relative",
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    height: 896,
    overflow: "hidden",
  },
});

export default Onboarding01;
