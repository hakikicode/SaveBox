import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import BalanceCard from "./BalanceCard";
import { Color, Border, FontSize, FontFamily, Padding } from "../GlobalStyles";

const Frame26 = () => {
  return (
    <View style={[styles.frame, styles.frameLayout]}>
      <Image
        style={[styles.frameChild, styles.frameLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-682.png")}
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
      <Text style={styles.mainHeadline}>Balances</Text>
      <View style={[styles.frameItem, styles.frameShadowBox]} />
      <Text style={[styles.send, styles.sendClr]}>See Balance Details</Text>
      <Text style={[styles.usdBalance, styles.balanceTypo]}>USD Balance</Text>
      <View style={styles.maskGroup}>
        <View style={[styles.frameParent, styles.frameShadowBox]}>
          <Image
            style={styles.frameIcon}
            contentFit="cover"
            source={require("../assets/frame51.png")}
          />
          <View style={styles.frame1}>
            <Text style={[styles.text, styles.textTypo]}>585.00</Text>
            <Text style={[styles.gbpBalance, styles.balanceTypo]}>
              GBP Balance
            </Text>
          </View>
        </View>
      </View>
      <Image
        style={styles.frameInner}
        contentFit="cover"
        source={require("../assets/ellipse-5.png")}
      />
      <Text style={[styles.text1, styles.textTypo]}>654.00</Text>
      <Text style={[styles.text2, styles.sendClr]}>$</Text>
      <BalanceCard />
    </View>
  );
};

const styles = StyleSheet.create({
  frameLayout: {
    height: 431,
    width: 376,
    position: "absolute",
  },
  frameShadowBox: {
    width: 129,
    shadowOpacity: 1,
    elevation: 65,
    shadowRadius: 65,
    shadowOffset: {
      width: 0,
      height: 30,
    },
    shadowColor: "rgba(111, 136, 157, 0.25)",
    backgroundColor: Color.white,
    borderRadius: Border.br_mini,
    position: "absolute",
  },
  sendClr: {
    color: Color.royalblue_100,
    position: "absolute",
  },
  balanceTypo: {
    color: Color.gray_100,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    textAlign: "left",
  },
  textTypo: {
    fontFamily: FontFamily.notoSerifSemiBold,
    fontSize: FontSize.size_lgi,
    fontWeight: "600",
    textAlign: "left",
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
    width: 47,
    height: 47,
    padding: Padding.p_mini,
    alignItems: "flex-end",
    justifyContent: "flex-end",
    shadowOpacity: 1,
    elevation: 65,
    shadowRadius: 65,
    shadowOffset: {
      width: 0,
      height: 30,
    },
    shadowColor: "rgba(111, 136, 157, 0.25)",
    backgroundColor: Color.white,
    borderRadius: Border.br_mini,
    position: "absolute",
  },
  settingsBtnIcon: {
    top: 6,
    left: 242,
    width: 134,
    height: 177,
    position: "absolute",
  },
  mainHeadline: {
    marginTop: -95.5,
    left: "5.85%",
    fontSize: FontSize.size_27xl,
    fontFamily: FontFamily.robotoRegular,
    textAlign: "left",
    color: Color.darkslateblue,
    top: "50%",
    position: "absolute",
  },
  frameItem: {
    top: 219,
    left: 164,
    height: 138,
  },
  send: {
    marginTop: 177.5,
    left: "26.86%",
    fontSize: FontSize.size_lg,
    textAlign: "center",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    color: Color.royalblue_100,
    top: "50%",
  },
  usdBalance: {
    top: 314,
    left: 181,
    position: "absolute",
  },
  frameIcon: {
    width: 36,
    height: 36,
    overflow: "hidden",
  },
  text: {
    color: Color.darkslateblue,
  },
  gbpBalance: {
    alignSelf: "stretch",
  },
  frame1: {
    marginTop: 16,
    alignSelf: "stretch",
    overflow: "hidden",
  },
  frameParent: {
    top: -137,
    left: -244,
    paddingLeft: Padding.p_xl,
    paddingTop: Padding.p_mid,
    paddingRight: Padding.p_lgi,
    paddingBottom: Padding.p_mid,
  },
  maskGroup: {
    top: 178,
    left: 275,
    width: 101,
    height: 195,
    position: "absolute",
  },
  frameInner: {
    top: 206,
    left: 142,
    width: 116,
    height: 116,
    position: "absolute",
  },
  text1: {
    top: 288,
    color: Color.black,
    left: 181,
    position: "absolute",
  },
  text2: {
    top: 243,
    left: 195,
    fontSize: FontSize.size_mid,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    textAlign: "left",
  },
  frame: {
    top: 17,
    left: 20,
    overflow: "hidden",
  },
});

export default Frame26;
