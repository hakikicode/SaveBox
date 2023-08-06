import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const BalanceCard = () => {
  return (
    <View style={styles.balanceCard}>
      <Image
        style={styles.frameIcon}
        contentFit="cover"
        source={require("../assets/frame7.png")}
      />
      <View style={styles.frame}>
        <Text style={[styles.text, styles.textTypo]}>585.00</Text>
        <Text style={[styles.eurBalance, styles.textTypo]}>EUR Balance</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textTypo: {
    textAlign: "left",
    fontWeight: "600",
  },
  frameIcon: {
    width: 36,
    height: 36,
    overflow: "hidden",
  },
  text: {
    fontSize: FontSize.size_lgi,
    fontFamily: FontFamily.notoSerifSemiBold,
    color: Color.darkslateblue,
  },
  eurBalance: {
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.interSemiBold,
    color: Color.gray_100,
  },
  frame: {
    alignSelf: "stretch",
    marginTop: 16,
    overflow: "hidden",
  },
  balanceCard: {
    position: "absolute",
    height: "29.47%",
    width: "34.31%",
    top: "52.09%",
    right: "59.84%",
    bottom: "18.45%",
    left: "5.85%",
    borderRadius: Border.br_mini,
    backgroundColor: Color.white,
    shadowColor: "rgba(111, 136, 157, 0.25)",
    shadowOffset: {
      width: 0,
      height: 30,
    },
    shadowRadius: 65,
    elevation: 65,
    shadowOpacity: 1,
    paddingLeft: Padding.p_xl,
    paddingTop: Padding.p_mid,
    paddingRight: Padding.p_lgi,
    paddingBottom: Padding.p_mid,
  },
});

export default BalanceCard;
