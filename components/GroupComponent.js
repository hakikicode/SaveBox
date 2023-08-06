import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const GroupComponent = () => {
  return (
    <View style={styles.rectangleParent}>
      <View style={styles.componentChild} />
      <View style={styles.componentItem} />
      <View style={[styles.rectangle, styles.rectanglePosition]} />
      <View style={[styles.rectangle1, styles.rectanglePosition]} />
      <Text style={[styles.send, styles.sendTypo1]}>Salary</Text>
      <Text style={[styles.send1, styles.sendTypo1]}>Transfers</Text>
      <Text style={[styles.send2, styles.sendTypo]}>$255,500</Text>
      <Text style={[styles.send3, styles.sendTypo]}>$42,500</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  rectanglePosition: {
    bottom: "19.75%",
    top: "0%",
    width: "48.65%",
    height: "80.25%",
    borderRadius: Border.br_5xs,
    position: "absolute",
  },
  sendTypo1: {
    textAlign: "center",
    color: Color.white,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    letterSpacing: 0,
    fontSize: FontSize.size_sm,
    top: "12.35%",
    position: "absolute",
  },
  sendTypo: {
    textAlign: "left",
    fontFamily: FontFamily.notoSerifSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_5xl,
    top: "30.86%",
    color: Color.white,
    letterSpacing: 0,
    position: "absolute",
  },
  componentChild: {
    height: "50.62%",
    width: "39.64%",
    top: "49.38%",
    right: "53.15%",
    left: "7.21%",
    backgroundColor: Color.salmon_100,
    borderRadius: Border.br_5xs,
    bottom: "0%",
    position: "absolute",
  },
  componentItem: {
    height: "39.51%",
    width: "41.74%",
    top: "60.49%",
    right: "3.9%",
    left: "54.35%",
    backgroundColor: Color.slateblue_400,
    bottom: "0%",
    position: "absolute",
  },
  rectangle: {
    right: "51.35%",
    left: "0%",
    backgroundColor: Color.mediumslateblue_100,
  },
  rectangle1: {
    right: "0%",
    left: "51.35%",
    backgroundColor: Color.royalblue_100,
  },
  send: {
    left: "18.32%",
  },
  send1: {
    left: "66.67%",
  },
  send2: {
    left: "9.61%",
  },
  send3: {
    left: "63.06%",
  },
  rectangleParent: {
    top: 407,
    left: 40,
    width: 333,
    height: 81,
    position: "absolute",
  },
});

export default GroupComponent;
