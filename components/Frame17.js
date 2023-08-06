import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const Frame17 = () => {
  return (
    <View style={[styles.frame, styles.frameLayout]}>
      <Text style={[styles.send, styles.sendTypo]}>Transactions</Text>
      <Image
        style={[styles.frameChild, styles.frameLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-68.png")}
      />
      <View style={styles.backBtn}>
        <Image
          style={styles.image15Icon}
          contentFit="cover"
          source={require("../assets/image-15.png")}
        />
      </View>
      <Image
        style={styles.settingsBtnIcon}
        contentFit="cover"
        source={require("../assets/settings-btn.png")}
      />
      <Text style={[styles.send1, styles.sendPosition]}>$2,52,00.00</Text>
      <Text style={[styles.send2, styles.sendPosition]}>
        USD BALANCE AVAILABLE
      </Text>
      <Text style={[styles.send3, styles.sendPosition]}>See Bank Details</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  frameLayout: {
    height: 304,
    width: 376,
    position: "absolute",
  },
  sendTypo: {
    fontWeight: "600",
    marginTop: 94,
  },
  sendPosition: {
    textAlign: "center",
    top: "50%",
    position: "absolute",
  },
  send: {
    left: "3.72%",
    fontSize: FontSize.size_17xl,
    fontFamily: FontFamily.notoSerifSemiBold,
    color: Color.gray_200,
    textAlign: "left",
    letterSpacing: 0,
    top: "50%",
    fontWeight: "600",
    marginTop: 94,
    position: "absolute",
  },
  frameChild: {
    top: 0,
    left: 0,
    borderRadius: Border.br_6xl,
  },
  image15Icon: {
    width: 16,
    height: 16,
  },
  backBtn: {
    top: 41,
    left: 22,
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
    width: 47,
    height: 47,
    padding: Padding.p_mini,
    alignItems: "flex-end",
    justifyContent: "flex-end",
    position: "absolute",
  },
  settingsBtnIcon: {
    top: 6,
    left: 242,
    width: 134,
    height: 177,
    position: "absolute",
  },
  send1: {
    marginTop: -8,
    left: "17.02%",
    fontSize: FontSize.size_27xl,
    fontFamily: FontFamily.robotoRegular,
    color: Color.darkslateblue,
    textAlign: "center",
  },
  send2: {
    marginTop: -29,
    left: "22.87%",
    fontSize: FontSize.size_base,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: Color.darkslateblue,
    textAlign: "center",
    letterSpacing: 0,
  },
  send3: {
    left: "30.59%",
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.interSemiBold,
    color: Color.slateblue_100,
    fontWeight: "600",
    marginTop: 94,
    textAlign: "center",
  },
  frame: {
    top: 17,
    left: 19,
    overflow: "hidden",
  },
});

export default Frame17;
