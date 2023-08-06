import React, { useMemo } from "react";
import { StyleSheet, View, Text, ImageSourcePropType } from "react-native";
import { Image } from "expo-image";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Frame6 = ({ carMileage, dimensionLabel, currencySymbol, propLeft }) => {
  const frame6Style = useMemo(() => {
    return {
      ...getStyleValue("left", propLeft),
    };
  }, [propLeft]);

  return (
    <View style={[styles.frame, styles.frameLayout1, frame6Style]}>
      <View style={[styles.frameChild, styles.frameLayout]} />
      <Text style={[styles.send, styles.sendPosition]}>{carMileage}</Text>
      <Image
        style={[styles.frameItem, styles.frameLayout]}
        contentFit="cover"
        source={dimensionLabel}
      />
      <Text style={[styles.send1, styles.sendPosition]}>{currencySymbol}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  frameLayout1: {
    height: 157,
    width: 138,
  },
  frameLayout: {
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  sendPosition: {
    fontWeight: "600",
    letterSpacing: 0,
    left: "16.67%",
    top: "50%",
    position: "absolute",
  },
  frameChild: {
    top: 0,
    left: 0,
    backgroundColor: Color.white,
    shadowColor: "rgba(138, 149, 158, 0.1)",
    shadowOffset: {
      width: 0,
      height: 15,
    },
    shadowRadius: 30,
    elevation: 30,
    shadowOpacity: 1,
    height: 157,
    width: 138,
  },
  send: {
    marginTop: -6.5,
    fontSize: FontSize.size_9xl,
    fontFamily: FontFamily.notoSerifSemiBold,
    color: Color.gray_200,
    textAlign: "center",
  },
  frameItem: {
    top: 18,
    left: 23,
    width: 42,
    height: 42,
  },
  send1: {
    marginTop: 42.5,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.interSemiBold,
    color: Color.slategray_100,
    textAlign: "left",
  },
  frame: {
    top: 1,
    left: 161,
    overflow: "hidden",
    position: "absolute",
    height: 157,
    width: 138,
  },
});

export default Frame6;
