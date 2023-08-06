import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import GroupComponent from "../components/GroupComponent";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const MainScreen = () => {
  return (
    <View style={styles.mainScreen}>
      <View style={styles.mainScreenChild} />
      <Text style={styles.send}>Domhnall Gleeson</Text>
      <Text style={styles.send1}>account ending with 1545</Text>
      <Image
        style={styles.mainScreenItem}
        contentFit="cover"
        source={require("../assets/rectangle-361.png")}
      />
      <Text style={styles.send2}>Recent transactions</Text>
      <Text style={[styles.send3, styles.sendTypo2]}>Behance Project</Text>
      <Text style={[styles.send4, styles.sendTypo]}>23rd march 2021</Text>
      <Text style={[styles.send5, styles.sendTypo2]}>Uber Monthly</Text>
      <Text style={[styles.send6, styles.sendTypo2]}>ATM Withdraws</Text>
      <Text style={[styles.send7, styles.sendTypo]}>INR ACCOUNT</Text>
      <Text style={[styles.send8, styles.sendTypo2]}>Transfer Money</Text>
      <Text style={[styles.send9, styles.sendTypo]}>BDT ACCOUNT</Text>
      <Text style={[styles.pleaseEnterYour, styles.pleaseTypo]}>$320</Text>
      <Text style={[styles.pleaseEnterYour1, styles.pleaseTypo]}>$650</Text>
      <Text style={[styles.pleaseEnterYour2, styles.pleaseTypo]}>$330</Text>
      <Text style={[styles.pleaseEnterYour3, styles.pleaseTypo]}>$100</Text>
      <Text style={[styles.send10, styles.sendTypo]}>04th february 2021</Text>
      <View style={[styles.rectangleParent, styles.parentLayout]}>
        <View style={styles.frameChildShadowBox} />
        <View style={[styles.frameItem, styles.framePosition]} />
      </View>
      <View style={[styles.rectangleGroup, styles.parentLayout]}>
        <View style={styles.frameChildShadowBox} />
        <View style={[styles.frameItem, styles.framePosition]} />
      </View>
      <Image
        style={[styles.mainScreenInner, styles.rectangleIconLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-431.png")}
      />
      <Image
        style={[styles.rectangleIcon, styles.rectangleIconLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-441.png")}
      />
      <View style={[styles.rectangleContainer, styles.parentLayout]}>
        <View style={styles.frameChildShadowBox} />
        <Image
          style={[styles.frameItem, styles.framePosition]}
          contentFit="cover"
          source={require("../assets/rectangle-341.png")}
        />
      </View>
      <View style={[styles.image16Parent, styles.parentLayout]}>
        <Image
          style={styles.image16Icon}
          contentFit="cover"
          source={require("../assets/image-16.png")}
        />
        <View style={[styles.frame, styles.framePosition]} />
        <View style={[styles.frame, styles.framePosition]}>
          <View style={styles.frameChildShadowBox} />
          <View style={[styles.frameItem, styles.framePosition]} />
        </View>
      </View>
      <Image
        style={[styles.menuBtnIcon, styles.btnIconLayout]}
        contentFit="cover"
        source={require("../assets/menu-btn.png")}
      />
      <Image
        style={[styles.settingsBtnIcon, styles.btnIconLayout]}
        contentFit="cover"
        source={require("../assets/settings-btn.png")}
      />
      <Image
        style={[styles.ovalIcon, styles.ovalIconLayout]}
        contentFit="cover"
        source={require("../assets/oval2.png")}
      />
      <Image
        style={[styles.ovalIcon1, styles.ovalIconLayout]}
        contentFit="cover"
        source={require("../assets/oval2.png")}
      />
      <Image
        style={[styles.ovalIcon2, styles.ovalIconLayout]}
        contentFit="cover"
        source={require("../assets/oval2.png")}
      />
      <Image
        style={[styles.ovalIcon3, styles.ovalIconLayout]}
        contentFit="cover"
        source={require("../assets/oval2.png")}
      />
      <Image
        style={[styles.ovalIcon4, styles.ovalIconLayout]}
        contentFit="cover"
        source={require("../assets/oval2.png")}
      />
      <Text style={[styles.transfer, styles.sentTypo]}>Transfer</Text>
      <Text style={[styles.shopping, styles.sentTypo]}>Shopping</Text>
      <Text style={[styles.sent, styles.sentTypo]}>Sent</Text>
      <Text style={[styles.bill, styles.sentTypo]}>Bill</Text>
      <Text style={[styles.vouchers, styles.sentTypo]}>Vouchers</Text>
      <Image
        style={styles.maskGroupIcon}
        contentFit="cover"
        source={require("../assets/mask-group21.png")}
      />
      <Image
        style={[styles.maskGroupIcon1, styles.maskGroupLayout1]}
        contentFit="cover"
        source={require("../assets/mask-group8.png")}
      />
      <Image
        style={[styles.maskGroupIcon2, styles.maskGroupLayout1]}
        contentFit="cover"
        source={require("../assets/mask-group9.png")}
      />
      <Image
        style={[styles.maskGroupIcon3, styles.maskGroupLayout]}
        contentFit="cover"
        source={require("../assets/mask-group10.png")}
      />
      <Image
        style={[styles.maskGroupIcon4, styles.maskGroupLayout]}
        contentFit="cover"
        source={require("../assets/mask-group111.png")}
      />
      <GroupComponent />
    </View>
  );
};

const styles = StyleSheet.create({
  sendTypo2: {
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_lg,
    textAlign: "left",
    letterSpacing: 0,
    top: "50%",
    position: "absolute",
  },
  sendTypo: {
    color: Color.slategray_100,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    letterSpacing: 0,
    top: "50%",
    position: "absolute",
  },
  pleaseTypo: {
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    lineHeight: 25,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    color: Color.darkslateblue,
    letterSpacing: 0,
    position: "absolute",
  },
  parentLayout: {
    height: 52,
    width: 54,
    left: 41,
    position: "absolute",
  },
  framePosition: {
    top: 0,
    left: 0,
    height: 52,
    width: 54,
    position: "absolute",
  },
  rectangleIconLayout: {
    height: 33,
    width: 34,
    left: 51,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  btnIconLayout: {
    height: 177,
    width: 153,
    top: 23,
    position: "absolute",
  },
  ovalIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    bottom: "61.27%",
    top: "32.81%",
    width: "12.8%",
    height: "5.92%",
    position: "absolute",
    overflow: "hidden",
  },
  sentTypo: {
    top: 355,
    fontSize: FontSize.size_xs,
    color: Color.darkslateblue,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    textAlign: "center",
    position: "absolute",
  },
  maskGroupLayout1: {
    height: 16,
    width: 16,
    top: 313,
    position: "absolute",
  },
  maskGroupLayout: {
    height: 17,
    width: 17,
    top: 312,
    position: "absolute",
  },
  mainScreenChild: {
    top: 133,
    backgroundColor: Color.ghostwhite_100,
    width: 332,
    height: 135,
    borderRadius: Border.br_3xs,
    left: 41,
    position: "absolute",
  },
  send: {
    marginTop: -266,
    left: "23.43%",
    textAlign: "center",
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_7xl,
    top: "50%",
    color: Color.gray_200,
    position: "absolute",
  },
  send1: {
    marginTop: -226,
    left: "27.29%",
    fontSize: FontSize.size_base,
    color: Color.darkslateblue,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    letterSpacing: 0,
    textAlign: "center",
    top: "50%",
    position: "absolute",
  },
  mainScreenItem: {
    top: 105,
    left: 173,
    width: 68,
    height: 65,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  send2: {
    marginTop: 45,
    left: "9.9%",
    textAlign: "left",
    color: Color.gray_200,
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_7xl,
    top: "50%",
    position: "absolute",
  },
  send3: {
    marginTop: 111,
    left: "25.6%",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_lg,
    color: Color.darkslateblue,
  },
  send4: {
    marginTop: 136,
    fontFamily: FontFamily.interRegular,
    color: Color.slategray_100,
    fontSize: FontSize.size_xs,
    left: "26.09%",
  },
  send5: {
    marginTop: 198,
    left: "26.09%",
    color: Color.gray_200,
  },
  send6: {
    marginTop: 284,
    left: "25.6%",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_lg,
    color: Color.gray_200,
  },
  send7: {
    marginTop: 398,
    color: Color.slategray_100,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    left: "25.6%",
  },
  send8: {
    marginTop: 371,
    left: "25.6%",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_lg,
    color: Color.gray_200,
  },
  send9: {
    marginTop: 309,
    left: "26.33%",
    fontFamily: FontFamily.interRegular,
    color: Color.slategray_100,
    fontSize: FontSize.size_xs,
  },
  pleaseEnterYour: {
    top: 567,
    left: 338,
  },
  pleaseEnterYour1: {
    top: 654,
    left: 338,
  },
  pleaseEnterYour2: {
    top: 741,
    left: 340,
  },
  pleaseEnterYour3: {
    top: 828,
    left: 339,
  },
  send10: {
    marginTop: 223,
    fontFamily: FontFamily.interRegular,
    color: Color.slategray_100,
    fontSize: FontSize.size_xs,
    left: "26.09%",
  },
  frameChildShadowBox: {
    shadowOpacity: 1,
    elevation: 30,
    shadowRadius: 30,
    shadowOffset: {
      width: 0,
      height: 15,
    },
    shadowColor: "rgba(49, 75, 206, 0.15)",
    left: 0,
    top: 0,
    height: 52,
    width: 54,
    borderRadius: Border.br_3xs,
    position: "absolute",
    backgroundColor: Color.white,
  },
  frameItem: {
    left: 0,
    borderRadius: Border.br_3xs,
  },
  rectangleParent: {
    top: 726,
  },
  rectangleGroup: {
    top: 811,
  },
  mainScreenInner: {
    top: 736,
  },
  rectangleIcon: {
    top: 821,
  },
  rectangleContainer: {
    top: 552,
  },
  image16Icon: {
    top: 18,
    left: 5,
    width: 44,
    height: 15,
    position: "absolute",
  },
  frame: {
    left: 0,
    overflow: "hidden",
  },
  image16Parent: {
    top: 639,
  },
  menuBtnIcon: {
    left: 0,
  },
  settingsBtnIcon: {
    left: 261,
  },
  ovalIcon: {
    right: "77.05%",
    left: "10.14%",
  },
  ovalIcon1: {
    right: "60.39%",
    left: "26.81%",
  },
  ovalIcon2: {
    right: "43.48%",
    left: "43.72%",
  },
  ovalIcon3: {
    right: "26.57%",
    left: "60.63%",
  },
  ovalIcon4: {
    right: "9.9%",
    left: "77.29%",
  },
  transfer: {
    left: 45,
  },
  shopping: {
    left: 180,
  },
  sent: {
    left: 124,
  },
  bill: {
    left: 269,
  },
  vouchers: {
    left: 319,
  },
  maskGroupIcon: {
    left: 59,
    width: 19,
    height: 19,
    top: 312,
    position: "absolute",
  },
  maskGroupIcon1: {
    left: 130,
  },
  maskGroupIcon2: {
    left: 200,
  },
  maskGroupIcon3: {
    left: 269,
  },
  maskGroupIcon4: {
    left: 338,
  },
  mainScreen: {
    flex: 1,
    width: "100%",
    height: 896,
    overflow: "hidden",
    backgroundColor: Color.white,
  },
});

export default MainScreen;
