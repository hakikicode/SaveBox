import React, { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Border, FontSize, FontFamily, Color } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const UberMonthlyForm = ({ propTop, propLeft }) => {
  const frame5Style = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
      ...getStyleValue("left", propLeft),
    };
  }, [propTop, propLeft]);

  return (
    <View style={[styles.frame, frame5Style]}>
      <Text style={[styles.pleaseEnterYour, styles.sendFlexBox]}>$650</Text>
      <View style={[styles.frameParent, styles.frameLayout1]}>
        <View style={[styles.frame1, styles.frameLayout1]}>
          <View style={[styles.frameChild, styles.frameLayout]} />
          <View style={[styles.frameItem, styles.frameLayout]} />
        </View>
        <Image
          style={styles.image16Icon}
          contentFit="cover"
          source={require("../assets/image-16.png")}
        />
      </View>
      <View style={styles.frame2}>
        <Text style={[styles.send, styles.sendFlexBox]}>Uber Monthly</Text>
        <Text style={[styles.send1, styles.sendFlexBox]}>
          04th february 2021
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  sendFlexBox: {
    textAlign: "left",
    letterSpacing: 0,
  },
  frameLayout1: {
    alignItems: "center",
    width: 54,
    height: 52,
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
  frame1: {
    overflow: "hidden",
  },
  image16Icon: {
    width: 44,
    height: 15,
    marginTop: -34,
  },
  frameParent: {
    top: 0,
    left: 0,
    justifyContent: "flex-end",
    position: "absolute",
  },
  send: {
    fontSize: FontSize.size_lg,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    color: Color.gray_200,
  },
  send1: {
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.interRegular,
    color: Color.slategray_100,
    marginTop: 3,
  },
  frame2: {
    top: 7,
    left: 67,
    width: 114,
    height: 40,
    overflow: "hidden",
    position: "absolute",
  },
  frame: {
    top: 831,
    left: 41,
    width: 333,
    overflow: "hidden",
    height: 52,
    position: "absolute",
  },
});

export default UberMonthlyForm;
