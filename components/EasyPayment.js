import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Border, FontFamily, Color, FontSize } from "../GlobalStyles";

const EasyPayment = () => {
  return (
    <View style={styles.easyPayment}>
      <View style={[styles.easyPaymentChild, styles.rectangleLayout]} />
      <View style={[styles.rectangle, styles.rectangleLayout]} />
      <Text style={[styles.send, styles.sendTypo]}>Easy Payment</Text>
      <Text style={[styles.send1, styles.sendTypo]}>
        Check out new features
      </Text>
      <Image
        style={styles.inviteFriendArrow}
        contentFit="cover"
        source={require("../assets/invite-friend-arrow1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleLayout: {
    borderRadius: Border.br_5xs,
    position: "absolute",
  },
  sendTypo: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    letterSpacing: 0,
    left: "8.43%",
    position: "absolute",
  },
  easyPaymentChild: {
    height: "44.09%",
    width: "75%",
    top: "55.91%",
    right: "8.43%",
    bottom: "0%",
    left: "16.57%",
    backgroundColor: Color.royalblue_400,
  },
  rectangle: {
    height: "78.49%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "21.51%",
    left: "0%",
    backgroundColor: Color.royalblue_100,
  },
  send: {
    top: "20.43%",
    fontSize: FontSize.size_lg,
    color: Color.white,
    textAlign: "center",
  },
  send1: {
    top: "46.24%",
    fontSize: FontSize.size_sm,
    color: Color.whitesmoke_100,
    textAlign: "left",
  },
  inviteFriendArrow: {
    height: "45.56%",
    width: "13.25%",
    top: "17.2%",
    right: "3.31%",
    bottom: "37.24%",
    left: "83.43%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    position: "absolute",
  },
  easyPayment: {
    top: 503,
    left: 171,
    width: 332,
    height: 93,
    position: "absolute",
  },
});

export default EasyPayment;
