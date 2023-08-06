import React, { useMemo } from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const ContainerFrame = ({ fractionText, propLeft, onFramePress }) => {
  const frame2Style = useMemo(() => {
    return {
      ...getStyleValue("left", propLeft),
    };
  }, [propLeft]);

  return (
    <Pressable style={[styles.frame, frame2Style]} onPress={onFramePress}>
      <Text style={styles.text}>{fractionText}</Text>
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
  );
};

const styles = StyleSheet.create({
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
    top: 39,
    left: 25,
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
    width: 347,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
});

export default ContainerFrame;
