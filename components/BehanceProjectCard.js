import React, { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Border, FontSize, FontFamily, Color } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const BehanceProjectCard = ({ propTop, propLeft }) => {
  const frame4Style = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
      ...getStyleValue("left", propLeft),
    };
  }, [propTop, propLeft]);

  return (
    <View style={[styles.frame, styles.framePosition, frame4Style]}>
      <Text style={[styles.pleaseEnterYour, styles.sendFlexBox]}>$320</Text>
      <View style={styles.rectangleParent}>
        <View style={[styles.frameChild, styles.frameLayout]} />
        <Image
          style={[styles.frameItem, styles.frameLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-341.png")}
        />
      </View>
      <View style={[styles.frame1, styles.framePosition]}>
        <Text style={[styles.send, styles.sendFlexBox]}>Behance Project</Text>
        <Text style={[styles.send1, styles.sendFlexBox]}>23rd march 2021</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  framePosition: {
    overflow: "hidden",
    position: "absolute",
  },
  sendFlexBox: {
    textAlign: "left",
    letterSpacing: 0,
  },
  frameLayout: {
    borderRadius: Border.br_3xs,
    width: 54,
    height: 52,
  },
  pleaseEnterYour: {
    top: 15,
    left: 297,
    fontSize: FontSize.size_sm,
    lineHeight: 25,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    color: Color.darkslateblue,
    textAlign: "left",
    letterSpacing: 0,
    position: "absolute",
  },
  frameChild: {
    backgroundColor: Color.white,
    shadowColor: "rgba(49, 75, 206, 0.15)",
    shadowOffset: {
      width: 0,
      height: 15,
    },
    shadowRadius: 30,
    elevation: 30,
    shadowOpacity: 1,
  },
  frameItem: {
    marginTop: -52,
  },
  rectangleParent: {
    top: 0,
    left: 0,
    alignItems: "center",
    width: 54,
    height: 52,
    position: "absolute",
  },
  send: {
    alignSelf: "stretch",
    fontSize: FontSize.size_lg,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    color: Color.darkslateblue,
    textAlign: "left",
    letterSpacing: 0,
  },
  send1: {
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.interRegular,
    color: Color.slategray_100,
    marginTop: 3,
    textAlign: "left",
    letterSpacing: 0,
  },
  frame1: {
    top: 7,
    left: 65,
    width: 136,
  },
  frame: {
    top: 744,
    left: 41,
    width: 333,
    height: 52,
    overflow: "hidden",
  },
});

export default BehanceProjectCard;
