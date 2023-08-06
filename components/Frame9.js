import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import MaskGroupIcon from "./MaskGroupIcon";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Frame9 = ({ propTop }) => {
  const frame7Style = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
    };
  }, [propTop]);

  return (
    <View style={[styles.frame, frame7Style]}>
      <MaskGroupIcon />
      <Image
        style={styles.image5Icon}
        contentFit="cover"
        source={require("../assets/image-5.png")}
      />
      <Text style={[styles.send, styles.sendTypo2]}>Account Holder</Text>
      <Text style={[styles.send1, styles.sendPosition]}>Valid Till</Text>
      <Text style={[styles.send2, styles.sendTypo2]}>Account Number</Text>
      <Text style={[styles.send3, styles.sendTypo]}>MASTERCARD</Text>
      <Text style={[styles.send4, styles.sendTypo]}>Domhnall Gleeson</Text>
      <Text style={[styles.send5, styles.sendTypo]}>10.10.2022</Text>
      <Text style={[styles.send6, styles.sendTypo]}>023 456 789 123</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  sendTypo2: {
    textAlign: "left",
    color: Color.white,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    top: "50%",
    position: "absolute",
  },
  sendPosition: {
    left: "57.45%",
    letterSpacing: 0,
    fontSize: FontSize.size_3xs,
  },
  sendTypo: {
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    textAlign: "left",
    color: Color.white,
    top: "50%",
    position: "absolute",
  },
  image5Icon: {
    top: 147,
    left: 279,
    width: 29,
    height: 29,
    position: "absolute",
  },
  send: {
    letterSpacing: 0,
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    color: Color.white,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    left: "6.99%",
    top: "50%",
    marginTop: 45,
  },
  send1: {
    textAlign: "left",
    color: Color.white,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    top: "50%",
    position: "absolute",
    marginTop: 45,
    left: "57.45%",
  },
  send2: {
    marginTop: -20,
    fontSize: FontSize.size_xs,
    letterSpacing: 0,
    left: "6.99%",
    textAlign: "left",
    color: Color.white,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    top: "50%",
  },
  send3: {
    marginTop: -69,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    left: "6.99%",
  },
  send4: {
    marginTop: 57,
    fontSize: FontSize.size_sm,
    letterSpacing: 0,
    left: "6.99%",
  },
  send5: {
    marginTop: 62,
    left: "57.45%",
    letterSpacing: 0,
    fontSize: FontSize.size_3xs,
  },
  send6: {
    marginTop: -5,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    left: "6.99%",
    letterSpacing: 0,
  },
  frame: {
    top: 568,
    left: 45,
    borderRadius: Border.br_6xl,
    backgroundColor: Color.slateblue_100,
    width: 329,
    height: 188,
    overflow: "hidden",
    position: "absolute",
  },
});

export default Frame9;
