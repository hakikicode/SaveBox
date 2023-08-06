import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const SendMoney = () => {
  return (
    <View style={styles.sendMoney}>
      <View style={styles.sendMoneyChild} />
      <View style={[styles.sendMoneyItem, styles.maskGroupPosition]} />
      <Text style={[styles.send, styles.sendPosition2]}>USD</Text>
      <Text style={[styles.send1, styles.sendPosition1]}>$200.00</Text>
      <Image
        style={[styles.backArrowBlackCopy, styles.rectangleIconLayout]}
        contentFit="cover"
        source={require("../assets/back-arrow-black-copy.png")}
      />
      <View style={styles.maskGroupPosition}>
        <Image
          style={[styles.maskGroupChild, styles.childLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-59.png")}
        />
        <Text style={[styles.send2, styles.sendTypo]}>Yamilet</Text>
      </View>
      <View style={[styles.sendMoneyInner, styles.sendLayout]} />
      <Image
        style={[styles.menuBtnIcon, styles.btnIconPosition]}
        contentFit="cover"
        source={require("../assets/menu-btn.png")}
      />
      <Image
        style={[styles.settingsBtnIcon, styles.btnIconPosition]}
        contentFit="cover"
        source={require("../assets/settings-btn.png")}
      />
      <View style={styles.rectangleView} />
      <View style={[styles.local, styles.localLayout]}>
        <View style={[styles.rectangle, styles.rectanglePosition]} />
        <Text style={[styles.send3, styles.sendTypo1]}>Local</Text>
      </View>
      <View style={[styles.international, styles.localLayout]}>
        <Image
          style={[styles.rectangleIcon, styles.rectanglePosition]}
          contentFit="cover"
          source={require("../assets/rectangle2.png")}
        />
        <Text style={[styles.send4, styles.send4Position]}>International</Text>
      </View>
      <Text style={[styles.send5, styles.sendTypo1]}>YOU ARE SENDING</Text>
      <View style={[styles.sendMoneyChild1, styles.sendLayout]} />
      <Text style={[styles.send6, styles.sendPosition2]}>Send to</Text>
      <Image
        style={[styles.sendMoneyChild2, styles.sendChildPosition]}
        contentFit="cover"
        source={require("../assets/rectangle-38.png")}
      />
      <Text style={[styles.send7, styles.sendPosition]}>Yamilet</Text>
      <Image
        style={[styles.sendMoneyChild3, styles.sendChildPosition]}
        contentFit="cover"
        source={require("../assets/rectangle-37.png")}
      />
      <Text style={[styles.send8, styles.sendPosition]}>Alexa</Text>
      <Text style={[styles.send9, styles.sendPosition]}>Winn</Text>
      <Text style={[styles.send10, styles.sendPosition]}>Krishha</Text>
      <Image
        style={[styles.sendMoneyChild4, styles.sendChildPosition]}
        contentFit="cover"
        source={require("../assets/rectangle-36.png")}
      />
      <Image
        style={[styles.sendMoneyChild5, styles.sendChildPosition]}
        contentFit="cover"
        source={require("../assets/rectangle-343.png")}
      />
      <Text style={[styles.pleaseEnterYour, styles.pleaseLayout]}>
        SHOULD BE DELIVERED BY
      </Text>
      <Text style={[styles.pleaseEnterYour1, styles.pleaseLayout]}>
        27 APRIL 2020
      </Text>
      <View style={styles.sendMoneyChild6} />
      <View style={[styles.btnMedium, styles.btnLayout]}>
        <Image
          style={[styles.rectangleIcon, styles.rectanglePosition]}
          contentFit="cover"
          source={require("../assets/rectangle3.png")}
        />
        <Text style={[styles.signUp, styles.send4Position]}>Transfer</Text>
      </View>
      <View style={[styles.btnMedium1, styles.btnLayout]}>
        <View style={[styles.rectangle1, styles.rectanglePosition]} />
        <Text style={[styles.signUp1, styles.sendPosition1]}>Cancel</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  maskGroupPosition: {
    height: 136,
    top: 487,
    width: 332,
    left: 39,
    position: "absolute",
  },
  sendPosition2: {
    textAlign: "left",
    top: "50%",
    letterSpacing: 0,
    position: "absolute",
  },
  sendPosition1: {
    textAlign: "center",
    top: "50%",
    position: "absolute",
  },
  rectangleIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  childLayout: {
    width: 54,
    borderRadius: Border.br_3xs,
  },
  sendTypo: {
    color: Color.gray_200,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  sendLayout: {
    height: 2,
    width: 234,
    position: "absolute",
  },
  btnIconPosition: {
    height: 177,
    top: 23,
    position: "absolute",
  },
  localLayout: {
    height: 44,
    width: 162,
    top: 124,
    position: "absolute",
  },
  rectanglePosition: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    borderRadius: Border.br_5xs,
    position: "absolute",
    width: "100%",
  },
  sendTypo1: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  send4Position: {
    color: Color.white,
    textAlign: "center",
    letterSpacing: 0,
    top: "50%",
    position: "absolute",
  },
  sendChildPosition: {
    height: 54,
    top: 533,
    position: "absolute",
  },
  sendPosition: {
    marginTop: 144,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    letterSpacing: 0,
    top: "50%",
    position: "absolute",
  },
  pleaseLayout: {
    lineHeight: 28,
    textAlign: "center",
    position: "absolute",
  },
  btnLayout: {
    height: 56,
    top: 772,
    width: 162,
    position: "absolute",
  },
  sendMoneyChild: {
    top: 227,
    height: 243,
    width: 332,
    backgroundColor: Color.ghostwhite_100,
    borderRadius: Border.br_3xs,
    left: 39,
    position: "absolute",
  },
  sendMoneyItem: {
    backgroundColor: Color.ghostwhite_100,
    borderRadius: Border.br_3xs,
    top: 487,
  },
  send: {
    marginTop: -60,
    left: "22.22%",
    color: Color.slategray_100,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_lg,
  },
  send1: {
    marginTop: -168,
    left: "22.46%",
    fontSize: 60,
    fontFamily: FontFamily.robotoRegular,
    color: Color.darkslateblue,
  },
  backArrowBlackCopy: {
    height: "0.71%",
    width: "2.57%",
    top: "44.68%",
    right: "22.31%",
    bottom: "54.61%",
    left: "75.12%",
    position: "absolute",
  },
  maskGroupChild: {
    top: 54,
    left: 313,
    height: 49,
    position: "absolute",
  },
  send2: {
    marginTop: 39.7,
    width: "12.05%",
    left: "96.39%",
    height: 14,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    top: "50%",
    letterSpacing: 0,
    position: "absolute",
  },
  sendMoneyInner: {
    top: 424,
    left: 92,
    backgroundColor: "rgba(127, 129, 146, 0.2)",
  },
  menuBtnIcon: {
    left: 0,
    width: 151,
  },
  settingsBtnIcon: {
    left: 259,
    width: 155,
  },
  rectangleView: {
    top: 162,
    left: 228,
    backgroundColor: "rgba(255, 137, 126, 0.35)",
    width: 119,
    height: 26,
    borderRadius: Border.br_5xs,
    position: "absolute",
  },
  rectangle: {
    backgroundColor: "#f1f2f7",
  },
  send3: {
    left: "37.65%",
    fontSize: FontSize.size_base,
    marginTop: -11,
    textAlign: "center",
    top: "50%",
    position: "absolute",
    color: Color.darkslateblue,
    letterSpacing: 0,
  },
  local: {
    left: 39,
  },
  rectangleIcon: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  send4: {
    marginTop: -9,
    left: "22.84%",
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  international: {
    left: 209,
  },
  send5: {
    marginTop: -183,
    left: "33.09%",
    fontSize: FontSize.size_base,
    textAlign: "center",
    top: "50%",
    position: "absolute",
    color: Color.darkslateblue,
    letterSpacing: 0,
  },
  sendMoneyChild1: {
    top: 357,
    left: 90,
    backgroundColor: "#d8def6",
  },
  send6: {
    marginTop: 51,
    left: "14.01%",
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    fontSize: FontSize.size_base,
    color: Color.darkslateblue,
  },
  sendMoneyChild2: {
    left: 58,
    width: 54,
    borderRadius: Border.br_3xs,
  },
  send7: {
    left: "15.7%",
    color: Color.gray_200,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  sendMoneyChild3: {
    left: 131,
    width: 54,
    borderRadius: Border.br_3xs,
  },
  send8: {
    left: "34.54%",
    color: Color.slateblue_100,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  send9: {
    left: "52.42%",
    color: Color.gray_200,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  send10: {
    left: "68.6%",
    color: Color.gray_200,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  sendMoneyChild4: {
    left: 204,
    width: 54,
    borderRadius: Border.br_3xs,
  },
  sendMoneyChild5: {
    left: 277,
    width: 56,
    borderRadius: Border.br_5xs,
  },
  pleaseEnterYour: {
    top: 649,
    left: 97,
    letterSpacing: 3,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_xs,
    color: Color.slategray_100,
  },
  pleaseEnterYour1: {
    top: 678,
    left: 128,
    fontSize: FontSize.size_3xl,
    color: Color.darkslateblue,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  sendMoneyChild6: {
    top: 812,
    left: 71,
    backgroundColor: Color.slateblue_400,
    width: 139,
    height: 32,
    position: "absolute",
  },
  signUp: {
    left: "27.16%",
    marginTop: -11,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_lg,
  },
  btnMedium: {
    left: 39,
  },
  rectangle1: {
    backgroundColor: Color.ghostwhite_100,
  },
  signUp1: {
    left: "30.86%",
    marginTop: -11,
    color: Color.slategray_100,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    letterSpacing: 0,
    textAlign: "center",
    fontSize: FontSize.size_lg,
  },
  btnMedium1: {
    left: 209,
  },
  sendMoney: {
    backgroundColor: Color.white,
    flex: 1,
    height: 896,
    overflow: "hidden",
    width: "100%",
  },
});

export default SendMoney;
