import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import Frame20 from "../components/Frame20";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const AccountDetails = () => {
  return (
    <View style={styles.accountDetails}>
      <Text style={styles.send}>Recent transfers</Text>
      <Frame20 />
      <View style={[styles.frame, styles.frameFlexBox]}>
        <Text style={[styles.accountHolder, styles.send3Typo]}>
          Account Holder
        </Text>
        <Text style={[styles.accountHolder, styles.send3Typo]}>BIC</Text>
      </View>
      <View style={[styles.frame1, styles.frameFlexBox]}>
        <Text style={[styles.domhnallGleeson, styles.send3Typo]}>
          Domhnall Gleeson
        </Text>
        <Text style={[styles.domhnallGleeson, styles.send3Typo]}>
          DSFHIDFCANACS
        </Text>
      </View>
      <View style={[styles.frame2, styles.frameFlexBox]}>
        <Text style={[styles.accountHolder, styles.send3Typo]}>IBAN</Text>
        <Text style={[styles.accountHolder, styles.send3Typo]}>Address</Text>
      </View>
      <View style={[styles.frame3, styles.frameFlexBox]}>
        <Text
          style={[styles.domhnallGleeson, styles.send3Typo]}
        >{`123 56366 4456 `}</Text>
        <Text style={[styles.domhnallGleeson, styles.send3Typo]}>
          123 Street/NYC
        </Text>
      </View>
      <View style={[styles.frame4, styles.frameLayout]}>
        <Image
          style={[styles.frameChild, styles.frameLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-69.png")}
        />
        <Text style={[styles.pleaseEnterYour, styles.pleaseTypo]}>$651</Text>
        <View style={[styles.frame5, styles.framePosition]}>
          <Text style={[styles.send1, styles.sendTypo]}>Bonnie Riley</Text>
          <Text style={[styles.send2, styles.sendTypo]}>EUR ACCOUNT</Text>
        </View>
      </View>
      <View style={[styles.frame6, styles.frameLayout]}>
        <Image
          style={[styles.frameChild, styles.frameLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-35.png")}
        />
        <Text style={[styles.pleaseEnterYour1, styles.pleaseTypo]}>$850</Text>
        <View style={[styles.frame7, styles.framePosition]}>
          <Text style={[styles.send3, styles.send3Typo]}>Aileen Shin</Text>
          <Text style={[styles.send2, styles.sendTypo]}>USD ACCOUNT</Text>
        </View>
      </View>
      <View style={[styles.frame8, styles.frameLayout]}>
        <Image
          style={[styles.frameChild, styles.frameLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-36.png")}
        />
        <Text style={[styles.pleaseEnterYour2, styles.pleaseTypo]}>$970</Text>
        <View style={[styles.frame9, styles.framePosition]}>
          <Text style={[styles.send3, styles.send3Typo]}>Angelina Winn</Text>
          <Text style={[styles.send2, styles.sendTypo]}>BDT ACCOUNT</Text>
        </View>
      </View>
      <View style={[styles.frame10, styles.frameLayout]}>
        <Image
          style={[styles.frameChild, styles.frameLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-70.png")}
        />
        <Text style={[styles.pleaseEnterYour3, styles.pleaseTypo]}>$741</Text>
        <View style={[styles.frame11, styles.framePosition]}>
          <Text style={[styles.send3, styles.send3Typo]}>Mark Spencer</Text>
          <Text style={[styles.send2, styles.sendTypo]}>USD ACCOUNT</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameFlexBox: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    left: 43,
    position: "absolute",
    overflow: "hidden",
  },
  send3Typo: {
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    textAlign: "left",
  },
  frameLayout: {
    height: 54,
    position: "absolute",
  },
  pleaseTypo: {
    textAlign: "right",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    lineHeight: 25,
    top: 15,
    color: Color.darkslateblue,
    fontSize: FontSize.size_sm,
    letterSpacing: 0,
    position: "absolute",
  },
  framePosition: {
    height: 40,
    top: 7,
    position: "absolute",
    overflow: "hidden",
  },
  sendTypo: {
    textAlign: "center",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    letterSpacing: 0,
  },
  send: {
    marginTop: 73,
    top: "50%",
    left: "9.9%",
    fontSize: FontSize.size_7xl,
    fontFamily: FontFamily.robotoRegular,
    textAlign: "left",
    position: "absolute",
    color: Color.gray_200,
    letterSpacing: 0,
  },
  accountHolder: {
    color: Color.darkslateblue,
    lineHeight: 17,
    fontSize: FontSize.size_sm,
    fontWeight: "600",
  },
  frame: {
    top: 370,
    width: 215,
  },
  domhnallGleeson: {
    color: Color.silver,
    lineHeight: 17,
    fontSize: FontSize.size_sm,
    fontWeight: "600",
  },
  frame1: {
    top: 391,
    width: 311,
  },
  frame2: {
    top: 459,
    width: 248,
  },
  frame3: {
    top: 480,
    width: 296,
  },
  frameChild: {
    top: 0,
    left: 0,
    borderRadius: Border.br_3xs,
    width: 54,
  },
  pleaseEnterYour: {
    left: 296,
  },
  send1: {
    fontSize: FontSize.size_lg,
    color: Color.darkslateblue,
  },
  send2: {
    fontSize: FontSize.size_xs,
    color: Color.slategray_100,
    marginTop: 3,
  },
  frame5: {
    width: 102,
    left: 67,
    height: 40,
    top: 7,
  },
  frame4: {
    top: 580,
    width: 330,
    height: 54,
    left: 41,
    overflow: "hidden",
  },
  pleaseEnterYour1: {
    left: 294,
  },
  send3: {
    fontSize: FontSize.size_lg,
    fontWeight: "600",
    color: Color.gray_200,
    letterSpacing: 0,
  },
  frame7: {
    width: 94,
    left: 67,
    height: 40,
    top: 7,
  },
  frame6: {
    top: 667,
    width: 330,
    height: 54,
    left: 41,
    overflow: "hidden",
  },
  pleaseEnterYour2: {
    left: 297,
  },
  frame9: {
    left: 60,
    width: 121,
    height: 40,
    top: 7,
  },
  frame8: {
    top: 754,
    width: 332,
    left: 41,
    height: 54,
    overflow: "hidden",
  },
  pleaseEnterYour3: {
    left: 298,
  },
  frame11: {
    width: 117,
    left: 67,
    height: 40,
    top: 7,
  },
  frame10: {
    top: 842,
    width: 330,
    height: 54,
    left: 41,
    overflow: "hidden",
  },
  accountDetails: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    height: 896,
    overflow: "hidden",
  },
});

export default AccountDetails;
