import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const Onboarding01 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.onboarding01}>
      <Text style={styles.mainHeadline}>Take hold of your finances</Text>
      <Text style={styles.description}>
        Running your finances is easier with xyz
      </Text>
      <Text style={styles.skip}>SKIP</Text>
      <Image
        style={styles.frameIcon}
        contentFit="cover"
        source={require("../assets/frame.png")}
      />
      <Pressable style={styles.frame} onPress={() => navigation.goBack()}>
        <Text style={styles.text}>1/3</Text>
        <View style={styles.roundBtn}>
          <Image
            style={styles.layerBlurIcon}
            contentFit="cover"
            source={require("../assets/layer-blur.png")}
          />
          <Image
            style={styles.ovalIcon}
            contentFit="cover"
            source={require("../assets/oval.png")}
          />
          <Text style={styles.next}>NEXT</Text>
        </View>
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
    fontFamily: FontFamily.gilroyBold,
    color: Color.darkslateblue,
    textAlign: "center",
    width: 316,
  },
  description: {
    position: "absolute",
    top: 602,
    left: 46,
    fontSize: FontSize.size_lg,
    letterSpacing: 0,
    lineHeight: 25,
    fontFamily: FontFamily.interRegular,
    color: Color.darkslateblue,
    textAlign: "center",
  },
  skip: {
    position: "absolute",
    top: 93,
    left: 341,
    fontSize: FontSize.size_sm,
    letterSpacing: 3,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: Color.darkslateblue,
    textAlign: "center",
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
  layerBlurIcon: {
    position: "absolute",
    height: "100%",
    width: "141.49%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "-41.49%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  ovalIcon: {
    position: "absolute",
    height: "83.19%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "16.81%",
    left: "0%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  next: {
    position: "absolute",
    top: "34.51%",
    left: "26.6%",
    fontSize: FontSize.size_sm,
    letterSpacing: 3,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: Color.white,
    textAlign: "center",
  },
  roundBtn: {
    position: "relative",
    width: 94,
    height: 113,
  },
  frame: {
    position: "absolute",
    top: 762,
    left: 34,
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
