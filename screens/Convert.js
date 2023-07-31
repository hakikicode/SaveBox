import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, Border, FontSize, Padding } from "../GlobalStyles";

const Convert = () => {
  return (
    <View style={styles.convert}>
      <Text style={[styles.mainHeadline, styles.send1Position]}>Convert</Text>
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
        <Text style={[styles.send, styles.sendFlexBox]}>Continue</Text>
      </View>
      <Text style={[styles.send1, styles.send1Position]}>
        <Text style={styles.youHave}>{`You  have  `}</Text>
        <Text style={styles.eurTypo}>4930 EUR</Text>
        <Text style={[styles.text, styles.feeTypo1]}>{` `}</Text>
        <Text style={styles.youHave}>in your balance</Text>
      </Text>
      <View style={[styles.frame, styles.frameLayout3]}>
        <Image
          style={[styles.settingsBtnIcon, styles.frameLayout3]}
          contentFit="cover"
          source={require("../assets/settings-btn.png")}
        />
        <View style={styles.backBtn}>
          <Image
            style={styles.image15Icon}
            contentFit="cover"
            source={require("../assets/image-15.png")}
          />
        </View>
      </View>
      <View style={[styles.frame1, styles.frameLayout2]}>
        <View style={styles.frameChild} />
        <View style={[styles.frameItem, styles.frameShadowBox]} />
        <Text style={[styles.usd080, styles.sendFlexBox]}>
          1 USD = 0,80 EUR
        </Text>
        <Text style={[styles.pastMonth, styles.feeTypo]}>
          - 0.22 past month
        </Text>
      </View>
      <View style={[styles.frame2, styles.frameFlexBox]}>
        <Text style={[styles.fee, styles.feeTypo]}>Fee</Text>
        <Text style={[styles.eur1, styles.eur1Typo]}>1.14 EUR</Text>
      </View>
      <View style={[styles.frame3, styles.frameFlexBox]}>
        <Text style={[styles.fee, styles.feeTypo]}>Amount converted</Text>
        <Text style={[styles.eur1, styles.eur1Typo]}>276.86 EUR</Text>
      </View>
      <View style={[styles.frame4, styles.frameFlexBox]}>
        <Text style={[styles.fee, styles.feeTypo]}>Rate</Text>
        <Text style={[styles.eur1, styles.eur1Typo]}>0.22</Text>
      </View>
      <View style={[styles.frame5, styles.framePosition]}>
        <Image
          style={styles.maskGroupIcon}
          contentFit="cover"
          source={require("../assets/mask-group2.png")}
        />
        <View style={[styles.frame6, styles.frameLayout1]}>
          <Image
            style={[styles.frameIcon, styles.frameIconLayout]}
            contentFit="cover"
            source={require("../assets/frame3.png")}
          />
          <Text style={[styles.usd, styles.feeTypo1]}>USD</Text>
        </View>
        <View style={[styles.frame7, styles.frameLayout1]}>
          <View style={styles.frame8}>
            <Text style={[styles.text2, styles.eur1Typo]}>{`    `}</Text>
            <View style={[styles.frame9, styles.frameLayout]}>
              <Image
                style={styles.frameLayout}
                contentFit="cover"
                source={require("../assets/group-60.png")}
              />
              <Text style={[styles.usd, styles.feeTypo1]}>EUR</Text>
            </View>
          </View>
          <Image
            style={[styles.frameIcon1, styles.frameIconLayout]}
            contentFit="cover"
            source={require("../assets/frame4.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  send1Position: {
    left: "8.21%",
    top: "50%",
    textAlign: "left",
    color: Color.darkslateblue,
    position: "absolute",
  },
  btnLargeChildLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  sendFlexBox: {
    textAlign: "center",
    color: Color.white,
    position: "absolute",
  },
  feeTypo1: {
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
  },
  frameLayout3: {
    height: 47,
    position: "absolute",
  },
  frameLayout2: {
    width: 322,
    position: "absolute",
  },
  frameShadowBox: {
    elevation: 60,
    shadowRadius: 60,
    left: 0,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    borderRadius: Border.br_5xs,
  },
  feeTypo: {
    fontSize: FontSize.size_mini,
    textAlign: "left",
  },
  frameFlexBox: {
    justifyContent: "space-between",
    flexDirection: "row",
    left: 53,
    alignItems: "center",
    position: "absolute",
    overflow: "hidden",
  },
  eur1Typo: {
    fontSize: FontSize.size_sm,
    fontWeight: "600",
  },
  framePosition: {
    left: 52,
    overflow: "hidden",
  },
  frameLayout1: {
    width: 127,
    alignItems: "center",
    position: "absolute",
    overflow: "hidden",
  },
  frameIconLayout: {
    alignSelf: "stretch",
    maxWidth: "100%",
    overflow: "hidden",
    width: "100%",
  },
  frameLayout: {
    height: 88,
    width: 57,
  },
  mainHeadline: {
    marginTop: -336,
    fontSize: 48,
    fontFamily: FontFamily.gilroyBold,
    textAlign: "left",
    color: Color.darkslateblue,
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
    top: "0%",
    right: "0%",
    bottom: "26.74%",
    left: "0%",
    borderRadius: Border.br_3xs,
    shadowColor: "rgba(154, 137, 137, 0.2)",
    shadowRadius: 8,
    elevation: 8,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    backgroundColor: Color.royalblue_100,
    position: "absolute",
    width: "100%",
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
    letterSpacing: 0,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    fontSize: FontSize.size_lg,
  },
  btnLarge: {
    top: 773,
    left: 40,
    width: 341,
    height: 86,
    position: "absolute",
  },
  youHave: {
    fontFamily: FontFamily.interRegular,
  },
  eurTypo: {
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  text: {
    fontFamily: FontFamily.interSemiBold,
  },
  send1: {
    marginTop: -262,
    fontSize: FontSize.size_mid,
    textAlign: "left",
    color: Color.darkslateblue,
  },
  settingsBtnIcon: {
    left: 236,
    width: 112,
    top: 0,
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
    left: 0,
    top: 0,
    height: 47,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
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
    borderRadius: Border.br_5xs,
    position: "absolute",
  },
  frameItem: {
    shadowColor: "rgba(163, 171, 178, 0.2)",
    height: 95,
    width: 322,
    position: "absolute",
    top: 0,
    backgroundColor: Color.royalblue_100,
    shadowRadius: 60,
  },
  usd080: {
    top: 17,
    left: 30,
    fontSize: 30,
    fontFamily: FontFamily.notoSerifRegular,
  },
  pastMonth: {
    top: 61,
    left: 90,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    color: Color.white,
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  frame1: {
    top: 400,
    height: 115,
    left: 52,
    overflow: "hidden",
  },
  fee: {
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    color: Color.darkslateblue,
  },
  eur1: {
    textAlign: "right",
    fontFamily: FontFamily.interSemiBold,
    color: Color.darkslateblue,
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
  maskGroupIcon: {
    top: 75,
    left: 146,
    width: 19,
    height: 19,
    position: "absolute",
  },
  frameIcon: {
    height: 57,
  },
  usd: {
    marginTop: 9,
    fontFamily: FontFamily.interSemiBold,
    fontSize: FontSize.size_lg,
    textAlign: "left",
    color: Color.darkslateblue,
  },
  frame6: {
    top: 15,
    shadowColor: "rgba(138, 149, 158, 0.15)",
    paddingLeft: 32,
    paddingTop: Padding.p_3xl,
    paddingRight: 35,
    paddingBottom: Padding.p_3xl,
    elevation: 60,
    shadowRadius: 60,
    left: 0,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    borderRadius: Border.br_5xs,
    backgroundColor: Color.white,
    width: 127,
  },
  text2: {
    fontFamily: FontFamily.poppinsSemiBold,
    color: Color.black,
    textAlign: "left",
  },
  frame9: {
    marginTop: 16,
    alignItems: "center",
    height: 88,
    overflow: "hidden",
  },
  frame8: {
    height: 125,
    justifyContent: "center",
    width: 57,
    alignItems: "center",
    overflow: "hidden",
  },
  frameIcon1: {
    marginTop: -110,
    height: 149,
    borderRadius: Border.br_5xs,
  },
  frame7: {
    left: 184,
    top: 0,
  },
  frame5: {
    top: 225,
    width: 311,
    height: 149,
    position: "absolute",
  },
  convert: {
    flex: 1,
    height: 896,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default Convert;
