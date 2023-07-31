import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Splash = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.splash, styles.frameFlexBox]}>
      <View style={[styles.frame, styles.frameFlexBox]}>
        <View style={styles.frame1}>
          <Text
            style={[styles.description, styles.logoNameClr]}
          >{`Money Transfer, Wallet & Finance UI Kit`}</Text>
          <View style={[styles.btnLarge, styles.frameFlexBox]}>
            <View style={styles.frame1}>
              <View style={styles.frameChild} />
              <View style={styles.frameItem} />
            </View>
            <Text style={styles.getStartedNow}>Get Started Now</Text>
          </View>
        </View>
        <Pressable
          style={[styles.frame3, styles.frameFlexBox]}
          onPress={() => navigation.navigate("Onboarding01")}
        >
          <Text style={[styles.logoName, styles.logoNameClr]}>Wallet</Text>
          <Pressable
            style={styles.background}
            onPress={() => navigation.navigate("Onboarding01")}
          />
        </Pressable>
      </View>
      <Image
        style={styles.logoIcon}
        contentFit="cover"
        source={require("../assets/logo.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  frameFlexBox: {
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logoNameClr: {
    color: Color.white,
    textAlign: "center",
  },
  description: {
    letterSpacing: 0,
    fontFamily: FontFamily.interRegular,
    width: 230,
    textAlign: "center",
    fontSize: FontSize.size_lg,
  },
  frameChild: {
    backgroundColor: Color.white,
    height: 56,
    borderRadius: Border.br_5xs,
    alignSelf: "stretch",
  },
  frameItem: {
    backgroundColor: "rgba(49, 75, 206, 0.38)",
    width: 234,
    height: 41,
    marginTop: -21,
    borderRadius: Border.br_5xs,
  },
  frame1: {
    alignSelf: "stretch",
    alignItems: "center",
    overflow: "hidden",
  },
  getStartedNow: {
    lineHeight: 18,
    fontWeight: "700",
    fontFamily: FontFamily.sFProDisplay,
    color: Color.royalblue_100,
    marginTop: -57,
    textAlign: "center",
    fontSize: FontSize.size_lg,
  },
  btnLarge: {
    marginTop: 78,
    alignSelf: "stretch",
  },
  logoName: {
    fontSize: 65,
    letterSpacing: 2,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
    textAlign: "center",
  },
  background: {
    backgroundColor: Color.royalblue_100,
    height: 896,
    marginTop: -508,
    alignSelf: "stretch",
  },
  frame3: {
    marginTop: -430,
    alignSelf: "stretch",
    overflow: "hidden",
    justifyContent: "flex-end",
  },
  frame: {
    alignSelf: "stretch",
    overflow: "hidden",
    justifyContent: "flex-end",
  },
  logoIcon: {
    width: 135,
    height: 147,
    marginTop: -679,
  },
  splash: {
    backgroundColor: "#900e02",
    flex: 1,
    width: "100%",
    overflow: "hidden",
    justifyContent: "flex-end",
  },
});

export default Splash;
