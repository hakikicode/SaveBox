import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, Border, FontSize } from "../GlobalStyles";

const SideManu = () => {
  return (
    <View style={[styles.sideManu, styles.sideLayout1]}>
      <View style={styles.sideManuChild} />
      <Text style={[styles.send, styles.sendTypo2]}>121k</Text>
      <Image
        style={[styles.sideManuItem, styles.sideLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-34.png")}
      />
      <Text style={[styles.send1, styles.sendPosition5]}>British Pound</Text>
      <View style={[styles.sideManuInner, styles.sideManuInnerShadowBox]} />
      <Text style={[styles.send2, styles.sendPosition4]}>352k</Text>
      <Image
        style={[styles.rectangleIcon, styles.sideLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-40.png")}
      />
      <Text style={[styles.send3, styles.sendPosition4]}>US Dollar</Text>
      <View style={[styles.rectangleView, styles.sideManuInnerShadowBox]} />
      <Text style={[styles.send4, styles.sendPosition3]}>18,42</Text>
      <Image
        style={[styles.sideManuChild1, styles.sideLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-41.png")}
      />
      <Text style={[styles.send5, styles.sendPosition3]}>Euro</Text>
      <Text style={[styles.send6, styles.sendTypo1]}>MENU</Text>
      <Text style={[styles.send7, styles.sendTypo2]}>Transactions</Text>
      <Image
        style={[styles.akarIconssearch, styles.akarIconssearchLayout]}
        contentFit="cover"
        source={require("../assets/akariconssearch.png")}
      />
      <Text style={[styles.send8, styles.sendPosition5]}>Behance Project</Text>
      <Text style={[styles.send9, styles.sendTypo]}>23rd march 2021</Text>
      <Text style={[styles.pleaseEnterYour, styles.pleaseTypo1]}>$320</Text>
      <View style={[styles.rectangleParent, styles.frameParentLayout]}>
        <View style={styles.frameChildShadowBox} />
        <Image
          style={styles.frameItem}
          contentFit="cover"
          source={require("../assets/rectangle-341.png")}
        />
      </View>
      <Text style={[styles.send10, styles.sendPosition2]}>Uber Monthly</Text>
      <Text style={[styles.pleaseEnterYour1, styles.pleaseTypo]}>$650</Text>
      <Text style={[styles.send11, styles.sendPosition2]}>
        04th february 2021
      </Text>
      <View style={[styles.frameParent, styles.frameParentLayout]}>
        <View style={[styles.frame, styles.frameParentLayout]}>
          <View style={styles.frameChildShadowBox} />
          <View style={styles.frameItem} />
        </View>
        <Image
          style={styles.image16Icon}
          contentFit="cover"
          source={require("../assets/image-16.png")}
        />
      </View>
      <Text style={[styles.send12, styles.sendPosition1]}>ATM Withdraws</Text>
      <Text style={[styles.send13, styles.sendPosition2]}>BDT ACCOUNT</Text>
      <Text style={[styles.pleaseEnterYour2, styles.pleaseTypo1]}>$330</Text>
      <View style={[styles.rectangleGroup, styles.rectanglePosition]}>
        <View style={styles.frameChildShadowBox} />
        <View style={styles.frameItem} />
      </View>
      <Image
        style={[styles.sideManuChild2, styles.sideChildLayout2]}
        contentFit="cover"
        source={require("../assets/rectangle-431.png")}
      />
      <Text style={[styles.send14, styles.sendPosition1]}>INR ACCOUNT</Text>
      <Text style={[styles.send15, styles.sendPosition1]}>Transfer Money</Text>
      <Text style={[styles.pleaseEnterYour3, styles.pleaseTypo]}>$100</Text>
      <View style={[styles.rectangleContainer, styles.rectanglePosition]}>
        <View style={styles.frameChildShadowBox} />
        <View style={styles.frameItem} />
      </View>
      <Image
        style={[styles.sideManuChild3, styles.sideChildLayout2]}
        contentFit="cover"
        source={require("../assets/rectangle-441.png")}
      />
      <Text style={[styles.send16, styles.sendTypo1]}>PRIVACY</Text>
      <Image
        style={styles.polygonIcon}
        contentFit="cover"
        source={require("../assets/polygon-1.png")}
      />
      <View style={styles.layerBlurParent}>
        <Image
          style={[styles.layerBlurIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/layer-blur.png")}
        />
        <Image
          style={[styles.ovalIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/oval1.png")}
        />
        <Text style={[styles.verify, styles.verifyClr]}>VERIFY</Text>
      </View>
      <View style={[styles.sideManuChild4, styles.sideChildLayout1]} />
      <View style={[styles.sideManuChild5, styles.sideChildLayout1]} />
      <Text style={[styles.send17, styles.sendPosition]}>CLOSE</Text>
      <Image
        style={styles.sideManuChild6}
        contentFit="cover"
        source={require("../assets/rectangle-361.png")}
      />
      <Text style={[styles.send18, styles.sendPosition6]}>
        Domhnall Gleeson
      </Text>
      <Text style={[styles.send19, styles.send19Typo]}>United States</Text>
      <Text style={[styles.send20, styles.sendPosition]}>Profile</Text>
      <View style={[styles.sideManuChild7, styles.sideChildLayout]} />
      <Text style={[styles.send21, styles.sendPosition]}>My Accounts</Text>
      <View style={[styles.sideManuChild8, styles.sideChildLayout]} />
      <Text style={[styles.send22, styles.sendPosition]}>History</Text>
      <View style={[styles.sideManuChild9, styles.sideChildLayout]} />
      <Text style={[styles.send23, styles.sendPosition]}>Debit Card</Text>
      <Text style={[styles.send24, styles.sendPosition]}>Settings</Text>
      <View style={[styles.sideManuChild10, styles.sideChildLayout]} />
      <View style={[styles.sideManuChild11, styles.akarIconssearchLayout]} />
      <Text style={[styles.send25, styles.verifyClr]}>NEW</Text>
      <View style={styles.logoutParent}>
        <Text style={[styles.logout, styles.send19Typo]}>LOGOUT</Text>
        <Image
          style={styles.groupIcon}
          contentFit="cover"
          source={require("../assets/group1.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  sideLayout1: {
    height: 896,
    backgroundColor: Color.white,
  },
  sendTypo2: {
    fontFamily: FontFamily.notoSerifSemiBold,
    color: Color.gray_200,
  },
  sideLayout: {
    height: 42,
    width: 42,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  sendPosition5: {
    letterSpacing: 0,
    top: "50%",
  },
  sideManuInnerShadowBox: {
    elevation: 30,
    shadowRadius: 30,
    shadowColor: "rgba(138, 149, 158, 0.1)",
    height: 157,
    width: 138,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 30,
    },
    borderRadius: Border.br_3xs,
    position: "absolute",
    backgroundColor: Color.white,
  },
  sendPosition4: {
    left: "89.61%",
    fontWeight: "600",
    letterSpacing: 0,
    top: "50%",
    position: "absolute",
  },
  sendPosition3: {
    left: "13.77%",
    fontWeight: "600",
    letterSpacing: 0,
    top: "50%",
    position: "absolute",
  },
  sendTypo1: {
    fontSize: FontSize.size_mini,
    color: Color.slategray_100,
    fontFamily: FontFamily.interSemiBold,
    textAlign: "center",
    fontWeight: "600",
  },
  akarIconssearchLayout: {
    height: 24,
    position: "absolute",
  },
  sendTypo: {
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xs,
    color: Color.slategray_100,
  },
  pleaseTypo1: {
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  frameParentLayout: {
    alignItems: "center",
    height: 52,
    width: 54,
  },
  sendPosition2: {
    left: "24.15%",
    textAlign: "left",
    letterSpacing: 0,
    top: "50%",
    position: "absolute",
  },
  pleaseTypo: {
    left: 330,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    lineHeight: 25,
    color: Color.darkslateblue,
    textAlign: "left",
    fontSize: FontSize.size_sm,
    letterSpacing: 0,
    position: "absolute",
  },
  sendPosition1: {
    left: "23.43%",
    textAlign: "left",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    letterSpacing: 0,
    top: "50%",
    position: "absolute",
  },
  rectanglePosition: {
    left: 32,
    alignItems: "center",
    height: 52,
    width: 54,
    position: "absolute",
  },
  sideChildLayout2: {
    height: 33,
    width: 34,
    left: 42,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  verifyClr: {
    color: Color.white,
    textAlign: "center",
    position: "absolute",
  },
  sideChildLayout1: {
    borderRadius: Border.br_21xl,
    position: "absolute",
  },
  sendPosition: {
    left: "9.9%",
    letterSpacing: 0,
    top: "50%",
    position: "absolute",
  },
  sendPosition6: {
    top: "50%",
    position: "absolute",
  },
  send19Typo: {
    fontSize: FontSize.size_base,
    textAlign: "left",
  },
  sideChildLayout: {
    height: 2,
    width: 265,
    backgroundColor: Color.aliceblue,
    left: 41,
    position: "absolute",
  },
  sideManuChild: {
    top: 64,
    left: 192,
    shadowColor: "rgba(138, 149, 158, 0.15)",
    shadowRadius: 60,
    elevation: 60,
    height: 157,
    width: 138,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 30,
    },
    borderRadius: Border.br_3xs,
    position: "absolute",
    backgroundColor: Color.white,
  },
  send: {
    marginTop: -312,
    left: "51.93%",
    textAlign: "center",
    color: Color.gray_200,
    fontWeight: "600",
    letterSpacing: 0,
    top: "50%",
    fontSize: FontSize.size_9xl,
    fontFamily: FontFamily.notoSerifSemiBold,
    position: "absolute",
  },
  sideManuItem: {
    top: 82,
    left: 215,
  },
  send1: {
    marginTop: -263,
    left: "52.17%",
    textAlign: "left",
    color: Color.slategray_100,
    fontFamily: FontFamily.interSemiBold,
    fontSize: FontSize.size_sm,
    fontWeight: "600",
    position: "absolute",
  },
  sideManuInner: {
    top: 66,
    left: 348,
  },
  send2: {
    marginTop: -310,
    textAlign: "center",
    color: Color.gray_200,
    fontFamily: FontFamily.notoSerifSemiBold,
    fontSize: FontSize.size_9xl,
  },
  rectangleIcon: {
    top: 84,
    left: 371,
  },
  send3: {
    marginTop: -261,
    textAlign: "left",
    color: Color.slategray_100,
    fontFamily: FontFamily.interSemiBold,
    fontSize: FontSize.size_sm,
  },
  rectangleView: {
    top: 68,
    left: 34,
  },
  send4: {
    marginTop: -308,
    textAlign: "center",
    color: Color.gray_200,
    fontFamily: FontFamily.notoSerifSemiBold,
    fontSize: FontSize.size_9xl,
  },
  sideManuChild1: {
    top: 86,
    left: 57,
  },
  send5: {
    marginTop: -259,
    textAlign: "left",
    color: Color.slategray_100,
    fontFamily: FontFamily.interSemiBold,
    fontSize: FontSize.size_sm,
  },
  send6: {
    marginTop: -415,
    left: "7.73%",
    letterSpacing: 0,
    top: "50%",
    position: "absolute",
  },
  send7: {
    marginTop: -185,
    left: "7.97%",
    fontSize: FontSize.size_17xl,
    textAlign: "left",
    color: Color.gray_200,
    fontWeight: "600",
    letterSpacing: 0,
    top: "50%",
    position: "absolute",
  },
  akarIconssearch: {
    top: 281,
    left: 350,
    width: 24,
    overflow: "hidden",
  },
  send8: {
    marginTop: -84,
    left: "24.64%",
    color: Color.darkslateblue,
    fontSize: FontSize.size_lg,
    textAlign: "left",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  send9: {
    marginTop: -59,
    left: "25.12%",
    textAlign: "left",
    letterSpacing: 0,
    top: "50%",
    position: "absolute",
  },
  pleaseEnterYour: {
    top: 372,
    left: 334,
    lineHeight: 25,
    fontWeight: "700",
    color: Color.darkslateblue,
    textAlign: "left",
    fontSize: FontSize.size_sm,
    letterSpacing: 0,
    position: "absolute",
  },
  frameChildShadowBox: {
    shadowColor: "rgba(49, 75, 206, 0.15)",
    height: 52,
    width: 54,
    elevation: 30,
    shadowRadius: 30,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 30,
    },
    borderRadius: Border.br_3xs,
    backgroundColor: Color.white,
  },
  frameItem: {
    marginTop: -52,
    height: 52,
    width: 54,
    borderRadius: Border.br_3xs,
  },
  rectangleParent: {
    top: 357,
    left: 37,
    position: "absolute",
  },
  send10: {
    marginTop: -3,
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.interSemiBold,
    color: Color.gray_200,
    fontWeight: "600",
  },
  pleaseEnterYour1: {
    top: 453,
  },
  send11: {
    marginTop: 22,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xs,
    color: Color.slategray_100,
  },
  frame: {
    overflow: "hidden",
  },
  image16Icon: {
    width: 44,
    height: 15,
    marginTop: -34,
  },
  frameParent: {
    top: 438,
    left: 33,
    justifyContent: "flex-end",
    position: "absolute",
  },
  send12: {
    marginTop: 83,
    fontSize: FontSize.size_lg,
    color: Color.gray_200,
  },
  send13: {
    marginTop: 108,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xs,
    color: Color.slategray_100,
  },
  pleaseEnterYour2: {
    top: 540,
    left: 331,
    lineHeight: 25,
    fontWeight: "700",
    color: Color.darkslateblue,
    textAlign: "left",
    fontSize: FontSize.size_sm,
    letterSpacing: 0,
    position: "absolute",
  },
  rectangleGroup: {
    top: 525,
  },
  sideManuChild2: {
    top: 535,
  },
  send14: {
    marginTop: 196,
    fontSize: FontSize.size_xs,
    color: Color.slategray_100,
  },
  send15: {
    marginTop: 169,
    fontSize: FontSize.size_lg,
    color: Color.gray_200,
  },
  pleaseEnterYour3: {
    top: 626,
  },
  rectangleContainer: {
    top: 609,
  },
  sideManuChild3: {
    top: 619,
  },
  send16: {
    marginTop: 268,
    left: "10.39%",
    lineHeight: 19,
    letterSpacing: 3,
    top: "50%",
    position: "absolute",
  },
  polygonIcon: {
    top: 720,
    left: 140,
    width: 7,
    height: 11,
    position: "absolute",
  },
  layerBlurIcon: {
    height: "141.59%",
    width: "175.53%",
    top: "-18.58%",
    right: "-34.04%",
    bottom: "-23.01%",
    left: "-41.49%",
  },
  ovalIcon: {
    height: "83.19%",
    top: "0%",
    right: "0%",
    bottom: "16.81%",
    left: "0%",
    width: "100%",
  },
  verify: {
    top: 39,
    left: 16,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    letterSpacing: 3,
    fontSize: FontSize.size_sm,
  },
  layerBlurParent: {
    top: 757,
    left: 288,
    width: 94,
    height: 113,
    position: "absolute",
  },
  sideManuChild4: {
    top: 58,
    left: 124,
    backgroundColor: Color.slateblue_200,
    width: 282,
    height: 701,
  },
  sideManuChild5: {
    top: 0,
    left: 0,
    width: 362,
    height: 896,
    backgroundColor: Color.white,
  },
  send17: {
    marginTop: -375,
    fontSize: FontSize.size_mini,
    color: Color.slategray_100,
    fontFamily: FontFamily.interSemiBold,
    textAlign: "center",
    fontWeight: "600",
  },
  sideManuChild6: {
    top: 103,
    width: 68,
    height: 65,
    left: 41,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  send18: {
    marginTop: -264,
    left: "11.11%",
    fontSize: FontSize.size_7xl,
    fontFamily: FontFamily.gilroyBold,
    textAlign: "center",
    color: Color.gray_200,
  },
  send19: {
    marginTop: -224,
    left: "9.9%",
    letterSpacing: 0,
    top: "50%",
    position: "absolute",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    color: Color.darkslateblue,
  },
  send20: {
    marginTop: -134,
    fontSize: FontSize.size_lg,
    color: Color.slategray_100,
    fontFamily: FontFamily.interSemiBold,
    textAlign: "center",
    fontWeight: "600",
  },
  sideManuChild7: {
    top: 356,
  },
  send21: {
    marginTop: -68,
    fontSize: FontSize.size_lg,
    color: Color.slategray_100,
    fontFamily: FontFamily.interSemiBold,
    textAlign: "center",
    fontWeight: "600",
  },
  sideManuChild8: {
    top: 422,
  },
  send22: {
    marginTop: -4,
    fontSize: FontSize.size_lg,
    color: Color.slategray_100,
    fontFamily: FontFamily.interSemiBold,
    textAlign: "center",
    fontWeight: "600",
  },
  sideManuChild9: {
    top: 489,
  },
  send23: {
    marginTop: 64,
    fontSize: FontSize.size_lg,
    color: Color.slategray_100,
    fontFamily: FontFamily.interSemiBold,
    textAlign: "center",
    fontWeight: "600",
  },
  send24: {
    marginTop: 139,
    fontSize: FontSize.size_lg,
    color: Color.slategray_100,
    fontFamily: FontFamily.interSemiBold,
    textAlign: "center",
    fontWeight: "600",
  },
  sideManuChild10: {
    top: 559,
  },
  sideManuChild11: {
    top: 511,
    left: 151,
    borderRadius: Border.br_8xs,
    backgroundColor: Color.royalblue_100,
    width: 47,
  },
  send25: {
    marginTop: 68,
    left: "38.89%",
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    letterSpacing: 0,
    top: "50%",
  },
  logout: {
    color: Color.royalblue_100,
    letterSpacing: 3,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  groupIcon: {
    width: 12,
    height: 10,
  },
  logoutParent: {
    top: 823,
    width: 126,
    flexDirection: "row",
    justifyContent: "space-between",
    left: 42,
    alignItems: "center",
    position: "absolute",
  },
  sideManu: {
    flex: 1,
    overflow: "hidden",
    width: "100%",
  },
});

export default SideManu;
