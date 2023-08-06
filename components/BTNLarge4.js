import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const BTNLarge4 = () => {
  return (
    <View style={styles.btnLarge}>
      <Image
        style={[styles.btnLargeChild, styles.btnLargeChildLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-46.png")}
      />
      <View style={styles.btnLargeItem} />
      <Image
        style={[styles.inviteFriendArrow, styles.btnLargeChildLayout]}
        contentFit="cover"
        source={require("../assets/invite-friend-arrow1.png")}
      />
      <Text style={styles.send}>Continue</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  btnLargeChildLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  btnLargeChild: {
    height: "148.84%",
    width: "102.35%",
    top: "-5.81%",
    right: "-0.59%",
    bottom: "-43.02%",
    left: "-1.76%",
    borderRadius: Border.br_5xs,
  },
  btnLargeItem: {
    height: "73.26%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "26.74%",
    left: "0%",
    borderRadius: Border.br_3xs,
    backgroundColor: Color.royalblue_100,
    shadowColor: "rgba(154, 137, 137, 0.2)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 8,
    elevation: 8,
    shadowOpacity: 1,
    position: "absolute",
  },
  inviteFriendArrow: {
    height: "49.27%",
    width: "12.9%",
    top: "11.63%",
    right: "2.93%",
    bottom: "39.1%",
    left: "84.16%",
  },
  send: {
    top: "23.26%",
    left: "38.12%",
    fontSize: FontSize.size_lg,
    letterSpacing: 0,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: Color.white,
    textAlign: "center",
    position: "absolute",
  },
  btnLarge: {
    top: 773,
    left: 40,
    width: 341,
    height: 86,
    position: "absolute",
  },
});

export default BTNLarge4;
