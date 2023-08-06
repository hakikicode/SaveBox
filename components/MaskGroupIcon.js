import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet } from "react-native";

const MaskGroupIcon = () => {
  return (
    <Image
      style={styles.maskGroupIcon}
      contentFit="cover"
      source={require("../assets/mask-group3.png")}
    />
  );
};

const styles = StyleSheet.create({
  maskGroupIcon: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 329,
    height: 188,
  },
});

export default MaskGroupIcon;
