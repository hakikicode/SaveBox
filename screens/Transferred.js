import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { FontFamily, Padding, Border, Color, FontSize } from "../GlobalStyles";

const Transferred = () => {
  return (
    <View style={styles.transferred}>
      <Text style={[styles.send, styles.sendPosition2]}>Card Used</Text>
      <Text style={[styles.physicalCard03, styles.sendTypo3]}>
        02 Physical card, 03 Debit Cards
      </Text>
      <View style={[styles.frame, styles.frameLayout]}>
        <Image
          style={[styles.frameChild, styles.frameChildPosition]}
          contentFit="cover"
          source={require("../assets/rectangle-683.png")}
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
        <Text style={[styles.mainHeadline, styles.sendPosition2]}>
          Transferred
        </Text>
        <View style={[styles.rectangleParent, styles.rectangleShadowBox]}>
          <Image
            style={styles.frameItemLayout}
            contentFit="cover"
            source={require("../assets/rectangle-69.png")}
          />
          <View style={styles.frame1}>
            <Text style={[styles.send1, styles.sendTypo1]}>Bonnie Riley</Text>
            <Text style={[styles.send2, styles.sendTypo]}>EUR ACCOUNT</Text>
          </View>
        </View>
        <View style={[styles.rectangleGroup, styles.rectangleShadowBox]}>
          <Image
            style={styles.frameItemLayout}
            contentFit="cover"
            source={require("../assets/rectangle-692.png")}
          />
          <View style={styles.frame1}>
            <Text style={[styles.send1, styles.sendTypo1]}>Becky Parker</Text>
            <Text style={[styles.send2, styles.sendTypo]}>EUR ACCOUNT</Text>
          </View>
        </View>
        <View style={styles.maskGroup}>
          <View style={styles.rectangleContainer}>
            <Image
              style={[styles.rectangleIcon, styles.frameItemLayout]}
              contentFit="cover"
              source={require("../assets/rectangle-693.png")}
            />
            <Text style={[styles.send5, styles.sendTypo1]}>Ryan Reynolds</Text>
            <Text style={[styles.send6, styles.sendTypo]}>EUR ACCOUNT</Text>
          </View>
        </View>
        <Text style={[styles.send7, styles.send7Typo]}>
          See Transfer Details
        </Text>
      </View>
      <View style={[styles.frame3, styles.frame3Layout]}>
        <Image
          style={[styles.maskGroupIcon, styles.frame3Layout]}
          contentFit="cover"
          source={require("../assets/mask-group3.png")}
        />
        <Image
          style={styles.image5Icon}
          contentFit="cover"
          source={require("../assets/image-5.png")}
        />
        <Text style={[styles.send8, styles.sendPosition1]}>Account Holder</Text>
        <Text style={[styles.send9, styles.sendPosition]}>Valid Till</Text>
        <Text style={[styles.send10, styles.sendPosition1]}>
          Account Number
        </Text>
        <Text style={[styles.send11, styles.sendPosition1]}>MASTERCARD</Text>
        <Text style={[styles.send12, styles.sendPosition1]}>
          Domhnall Gleeson
        </Text>
        <Text style={[styles.send13, styles.sendPosition]}>10.10.2022</Text>
        <Text style={[styles.send14, styles.sendPosition1]}>
          023 456 789 123
        </Text>
      </View>
      <View style={styles.frameParent}>
        <View style={styles.frame4}>
          <Text style={[styles.mastercard, styles.send7Typo]}>Mastercard</Text>
          <Text style={styles.domhnallGleeson}>Domhnall Gleeson</Text>
        </View>
        <Text style={styles.pleaseEnterYour}>See Details</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  sendPosition2: {
    fontFamily: FontFamily.gilroyBold,
    top: "50%",
    position: "absolute",
  },
  sendTypo3: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  frameLayout: {
    width: 376,
    position: "absolute",
  },
  frameChildPosition: {
    left: 0,
    top: 0,
  },
  rectangleShadowBox: {
    justifyContent: "center",
    paddingBottom: Padding.p_mini,
    paddingTop: Padding.p_mini,
    top: 219,
    alignItems: "center",
    width: 129,
    shadowOpacity: 1,
    elevation: 65,
    shadowRadius: 65,
    shadowOffset: {
      width: 0,
      height: 30,
    },
    shadowColor: "rgba(111, 136, 157, 0.25)",
    borderRadius: Border.br_mini,
    position: "absolute",
    backgroundColor: Color.white,
  },
  sendTypo1: {
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  sendTypo: {
    fontSize: FontSize.size_3xs,
    letterSpacing: 0,
  },
  frameItemLayout: {
    height: 54,
    width: 54,
    borderRadius: Border.br_3xs,
  },
  send7Typo: {
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  frame3Layout: {
    height: 188,
    width: 329,
    position: "absolute",
  },
  sendPosition1: {
    color: Color.white,
    left: "6.99%",
    textAlign: "left",
    top: "50%",
    position: "absolute",
  },
  sendPosition: {
    left: "57.45%",
    color: Color.white,
    fontSize: FontSize.size_3xs,
    letterSpacing: 0,
    textAlign: "left",
    top: "50%",
    position: "absolute",
  },
  send: {
    left: "10.14%",
    fontSize: FontSize.size_7xl,
    color: Color.gray_200,
    textAlign: "left",
    marginTop: 45,
  },
  physicalCard03: {
    top: 528,
    color: Color.slategray_100,
    fontSize: FontSize.size_xs,
    fontWeight: "500",
    left: 45,
    textAlign: "left",
    position: "absolute",
  },
  frameChild: {
    height: 458,
    borderRadius: Border.br_6xl,
    width: 376,
    position: "absolute",
  },
  image15Icon: {
    width: 16,
    height: 16,
  },
  backBtn: {
    top: 41,
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
    borderRadius: Border.br_mini,
    left: 22,
    position: "absolute",
    backgroundColor: Color.white,
  },
  settingsBtnIcon: {
    top: 6,
    left: 242,
    width: 134,
    height: 177,
    position: "absolute",
  },
  mainHeadline: {
    marginTop: -114,
    left: "9.57%",
    fontSize: FontSize.size_27xl,
    textAlign: "center",
    color: Color.darkslateblue,
  },
  send1: {
    letterSpacing: 0,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.interSemiBold,
    textAlign: "center",
    color: Color.darkslateblue,
  },
  send2: {
    marginTop: 4,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    textAlign: "center",
    color: Color.slategray_100,
  },
  frame1: {
    alignSelf: "stretch",
    height: 35,
    marginTop: 11,
    alignItems: "center",
    overflow: "hidden",
  },
  rectangleParent: {
    paddingLeft: Padding.p_xl,
    paddingRight: Padding.p_lgi,
    left: 22,
    paddingBottom: Padding.p_mini,
    paddingTop: Padding.p_mini,
    top: 219,
  },
  rectangleGroup: {
    left: 164,
    paddingLeft: Padding.p_mid,
    paddingRight: Padding.p_mini,
  },
  rectangleIcon: {
    top: 15,
    left: 37,
    position: "absolute",
  },
  send5: {
    left: "13.18%",
    letterSpacing: 0,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.interSemiBold,
    marginTop: 11,
    textAlign: "center",
    color: Color.darkslateblue,
    top: "50%",
    position: "absolute",
  },
  send6: {
    marginTop: 34,
    left: "24.03%",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    textAlign: "center",
    color: Color.slategray_100,
    top: "50%",
    position: "absolute",
  },
  rectangleContainer: {
    top: 57,
    left: 31,
    height: 138,
    width: 129,
    shadowOpacity: 1,
    elevation: 65,
    shadowRadius: 65,
    shadowOffset: {
      width: 0,
      height: 30,
    },
    shadowColor: "rgba(111, 136, 157, 0.25)",
    borderRadius: Border.br_mini,
    position: "absolute",
    backgroundColor: Color.white,
  },
  maskGroup: {
    top: 162,
    left: 275,
    width: 101,
    height: 306,
    position: "absolute",
  },
  send7: {
    marginTop: 172,
    left: "26.33%",
    color: Color.royalblue_100,
    textAlign: "center",
    top: "50%",
    position: "absolute",
  },
  frame: {
    top: 17,
    left: 20,
    height: 468,
    overflow: "hidden",
  },
  maskGroupIcon: {
    left: 0,
    top: 0,
  },
  image5Icon: {
    top: 147,
    left: 279,
    width: 29,
    height: 29,
    position: "absolute",
  },
  send8: {
    fontSize: FontSize.size_3xs,
    letterSpacing: 0,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    marginTop: 45,
  },
  send9: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    marginTop: 45,
  },
  send10: {
    marginTop: -20,
    letterSpacing: 0,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_xs,
  },
  send11: {
    marginTop: -69,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_base,
  },
  send12: {
    marginTop: 57,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    letterSpacing: 0,
  },
  send13: {
    marginTop: 62,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  send14: {
    marginTop: -5,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    letterSpacing: 0,
    fontSize: FontSize.size_base,
  },
  frame3: {
    top: 568,
    backgroundColor: Color.slateblue_100,
    borderRadius: Border.br_6xl,
    left: 45,
    overflow: "hidden",
  },
  mastercard: {
    color: Color.darkslateblue,
    textAlign: "left",
  },
  domhnallGleeson: {
    fontFamily: FontFamily.nunitoSemiBold,
    color: Color.silver,
    marginTop: 8,
    fontSize: FontSize.size_sm,
    fontWeight: "600",
    textAlign: "left",
  },
  frame4: {
    width: 116,
    height: 49,
    overflow: "hidden",
  },
  pleaseEnterYour: {
    lineHeight: 25,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    textAlign: "right",
    fontSize: FontSize.size_sm,
    color: Color.royalblue_100,
    letterSpacing: 0,
  },
  frameParent: {
    top: 780,
    flexDirection: "row",
    justifyContent: "space-between",
    width: 329,
    alignItems: "center",
    left: 45,
    position: "absolute",
  },
  transferred: {
    flex: 1,
    width: "100%",
    height: 896,
    overflow: "hidden",
    backgroundColor: Color.white,
  },
});

export default Transferred;
