import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import BTNLarge4 from "../components/BTNLarge4";
import Frame25 from "../components/Frame25";
import { Color, Border, FontSize, FontFamily, Padding } from "../GlobalStyles";

const Convert = () => {
  return (
    <View style={styles.convert}>
      <Text style={[styles.mainHeadline, styles.sendPosition]}>Convert</Text>
      <BTNLarge4 />
      <Text style={[styles.send, styles.sendPosition]}>
        <Text style={styles.youHave}>{`You  have  `}</Text>
        <Text style={styles.eurTypo}>4930 EUR</Text>
        <Text style={styles.feeTypo1}>{` `}</Text>
        <Text style={styles.youHave}>in your balance</Text>
      </Text>
      <View style={[styles.frame, styles.frameLayout1]}>
        <Image
          style={styles.settingsBtnIcon}
          contentFit="cover"
          source={require("../assets/settings-btn.png")}
        />
        <View style={[styles.backBtn, styles.backBtnShadowBox]}>
          <Image
            style={styles.image15Icon}
            contentFit="cover"
            source={require("../assets/image-15.png")}
          />
        </View>
      </View>
      <View style={styles.frame1}>
        <View style={[styles.frameChild, styles.frameLayout]} />
        <View style={[styles.frameItem, styles.frameLayout]} />
        <Text style={[styles.usd080, styles.usd080Clr]}>1 USD = 0,80 EUR</Text>
        <Text style={[styles.pastMonth, styles.feeTypo]}>
          - 0.22 past month
        </Text>
      </View>
      <View style={[styles.frame2, styles.frameFlexBox]}>
        <Text style={[styles.fee, styles.feeTypo]}>Fee</Text>
        <Text style={[styles.eur1, styles.feeTypo1]}>1.14 EUR</Text>
      </View>
      <View style={[styles.frame3, styles.frameFlexBox]}>
        <Text style={[styles.fee, styles.feeTypo]}>Amount converted</Text>
        <Text style={[styles.eur1, styles.feeTypo1]}>276.86 EUR</Text>
      </View>
      <View style={[styles.frame4, styles.frameFlexBox]}>
        <Text style={[styles.fee, styles.feeTypo]}>Rate</Text>
        <Text style={[styles.eur1, styles.feeTypo1]}>0.22</Text>
      </View>
      <Frame25 />
    </View>
  );
};

const styles = StyleSheet.create({
  sendPosition: {
    textAlign: "left",
    left: "8.21%",
    top: "50%",
    color: Color.darkslateblue,
    position: "absolute",
  },
  frameLayout1: {
    height: 47,
    position: "absolute",
  },
  backBtnShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 30,
    },
    left: 0,
    top: 0,
  },
  frameLayout: {
    borderRadius: Border.br_5xs,
    position: "absolute",
  },
  usd080Clr: {
    color: Color.white,
    position: "absolute",
  },
  feeTypo: {
    fontSize: FontSize.size_mini,
    textAlign: "left",
  },
  frameFlexBox: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    left: 53,
    position: "absolute",
    overflow: "hidden",
  },
  feeTypo1: {
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  mainHeadline: {
    marginTop: -336,
    fontSize: 48,
    fontFamily: FontFamily.robotoRegular,
  },
  youHave: {
    fontFamily: FontFamily.interRegular,
  },
  eurTypo: {
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  send: {
    marginTop: -262,
    fontSize: FontSize.size_mid,
  },
  settingsBtnIcon: {
    left: 236,
    width: 112,
    top: 0,
    height: 47,
    position: "absolute",
  },
  image15Icon: {
    width: 16,
    height: 16,
  },
  backBtn: {
    borderRadius: Border.br_mini,
    shadowColor: "rgba(111, 136, 157, 0.25)",
    shadowRadius: 65,
    elevation: 65,
    width: 47,
    padding: Padding.p_mini,
    alignItems: "flex-end",
    justifyContent: "flex-end",
    height: 47,
    position: "absolute",
    backgroundColor: Color.white,
  },
  frame: {
    top: 58,
    left: 34,
    width: 348,
    overflow: "hidden",
  },
  frameChild: {
    top: 74,
    left: 32,
    backgroundColor: "rgba(87, 113, 249, 0.29)",
    width: 249,
    height: 41,
  },
  frameItem: {
    backgroundColor: Color.royalblue_100,
    shadowColor: "rgba(163, 171, 178, 0.2)",
    shadowRadius: 60,
    elevation: 60,
    height: 95,
    width: 322,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 30,
    },
    left: 0,
    top: 0,
  },
  usd080: {
    top: 17,
    left: 30,
    fontSize: 30,
    fontFamily: FontFamily.notoSerifRegular,
    textAlign: "center",
  },
  pastMonth: {
    top: 61,
    left: 90,
    color: Color.white,
    position: "absolute",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  frame1: {
    top: 400,
    left: 52,
    height: 115,
    width: 322,
    position: "absolute",
    overflow: "hidden",
  },
  fee: {
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    color: Color.darkslateblue,
  },
  eur1: {
    fontSize: FontSize.size_sm,
    textAlign: "right",
    color: Color.darkslateblue,
    fontWeight: "600",
  },
  frame2: {
    top: 549,
    width: 320,
  },
  frame3: {
    top: 583,
    width: 321,
  },
  frame4: {
    top: 617,
    width: 319,
  },
  convert: {
    flex: 1,
    width: "100%",
    height: 896,
    overflow: "hidden",
    backgroundColor: Color.white,
  },
});

export default Convert;
