import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const AccountDetails = () => {
  return (
    <View style={styles.accountDetails}>
      <Text style={[styles.send, styles.sendClr]}>Recent transfers</Text>
      <View style={[styles.frame, styles.frameLayout2]}>
        <Text style={styles.send1}>Transactions</Text>
        <Image
          style={[styles.frameChild, styles.framePosition2]}
          contentFit="cover"
          source={require("../assets/rectangle-681.png")}
        />
        <View style={[styles.backBtn, styles.backBtnShadowBox]}>
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
        <Text style={[styles.mainHeadline, styles.rectanglePosition]}>
          Account Details
        </Text>
        <Text style={[styles.send2, styles.sendTypo2]}>Share Details</Text>
        <View style={[styles.rectangle, styles.rectangleLayout]} />
        <View style={[styles.rectangle1, styles.rectangleLayout]} />
        <Text style={[styles.send3, styles.sendTypo]}>Transfered</Text>
        <Text style={[styles.send4, styles.sendTypo]}>Received</Text>
      </View>
      <View style={[styles.frame1, styles.frameFlexBox]}>
        <Text style={[styles.accountHolder, styles.accountHolderTypo]}>
          Account Holder
        </Text>
        <Text style={[styles.accountHolder, styles.accountHolderTypo]}>
          BIC
        </Text>
      </View>
      <View style={[styles.frame2, styles.frameFlexBox]}>
        <Text style={[styles.domhnallGleeson, styles.accountHolderTypo]}>
          Domhnall Gleeson
        </Text>
        <Text style={[styles.domhnallGleeson, styles.accountHolderTypo]}>
          DSFHIDFCANACS
        </Text>
      </View>
      <View style={[styles.frame3, styles.frameFlexBox]}>
        <Text style={[styles.accountHolder, styles.accountHolderTypo]}>
          IBAN
        </Text>
        <Text style={[styles.accountHolder, styles.accountHolderTypo]}>
          Address
        </Text>
      </View>
      <View style={[styles.frame4, styles.frameFlexBox]}>
        <Text
          style={[styles.domhnallGleeson, styles.accountHolderTypo]}
        >{`123 56366 4456 `}</Text>
        <Text style={[styles.domhnallGleeson, styles.accountHolderTypo]}>
          123 Street/NYC
        </Text>
      </View>
      <View style={[styles.frame5, styles.frameLayout]}>
        <Image
          style={[styles.frameItem, styles.frameLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-69.png")}
        />
        <Text style={[styles.pleaseEnterYour, styles.pleaseTypo]}>$651</Text>
        <View style={[styles.frame6, styles.framePosition]}>
          <Text style={[styles.send5, styles.sendTypo1]}>Bonnie Riley</Text>
          <Text style={[styles.send6, styles.sendTypo2]}>EUR ACCOUNT</Text>
        </View>
      </View>
      <View style={[styles.frame7, styles.frameLayout]}>
        <Image
          style={[styles.frameItem, styles.frameLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-35.png")}
        />
        <Text style={[styles.pleaseEnterYour1, styles.pleaseTypo]}>$850</Text>
        <View style={[styles.frame8, styles.framePosition]}>
          <Text style={[styles.send7, styles.sendTypo1]}>Aileen Shin</Text>
          <Text style={[styles.send6, styles.sendTypo2]}>USD ACCOUNT</Text>
        </View>
      </View>
      <View style={[styles.frame9, styles.frameLayout]}>
        <Image
          style={[styles.frameItem, styles.frameLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-36.png")}
        />
        <Text style={[styles.pleaseEnterYour2, styles.pleaseTypo]}>$970</Text>
        <View style={[styles.frame10, styles.framePosition]}>
          <Text style={[styles.send7, styles.sendTypo1]}>Angelina Winn</Text>
          <Text style={[styles.send6, styles.sendTypo2]}>BDT ACCOUNT</Text>
        </View>
      </View>
      <View style={[styles.frame11, styles.frameLayout]}>
        <Image
          style={[styles.frameItem, styles.frameLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-70.png")}
        />
        <Text style={[styles.pleaseEnterYour3, styles.pleaseTypo]}>$741</Text>
        <View style={[styles.frame12, styles.framePosition]}>
          <Text style={[styles.send7, styles.sendTypo1]}>Mark Spencer</Text>
          <Text style={[styles.send6, styles.sendTypo2]}>USD ACCOUNT</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  sendClr: {
    color: Color.gray_200,
    textAlign: "left",
  },
  frameLayout2: {
    height: 313,
    width: 376,
    position: "absolute",
  },
  framePosition2: {
    left: 0,
    top: 0,
  },
  backBtnShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 30,
    },
    backgroundColor: Color.white,
  },
  rectanglePosition: {
    left: "5.85%",
    width: "88.3%",
  },
  sendTypo2: {
    fontFamily: FontFamily.interSemiBold,
    fontSize: FontSize.size_xs,
    textAlign: "center",
    fontWeight: "600",
  },
  rectangleLayout: {
    borderRadius: Border.br_5xs,
    position: "absolute",
  },
  sendTypo: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    marginTop: 51.5,
    fontSize: FontSize.size_lg,
    textAlign: "center",
    color: Color.darkslateblue,
    letterSpacing: 0,
    top: "50%",
    position: "absolute",
  },
  frameFlexBox: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    left: 43,
    position: "absolute",
    overflow: "hidden",
  },
  accountHolderTypo: {
    lineHeight: 17,
    fontSize: FontSize.size_sm,
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
    fontSize: FontSize.size_sm,
    color: Color.darkslateblue,
    letterSpacing: 0,
    position: "absolute",
  },
  framePosition: {
    height: 40,
    top: 7,
    position: "absolute",
    overflow: "hidden",
  },
  sendTypo1: {
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    letterSpacing: 0,
  },
  send: {
    marginTop: 73,
    left: "9.9%",
    fontSize: FontSize.size_7xl,
    textAlign: "left",
    fontFamily: FontFamily.gilroyBold,
    top: "50%",
    position: "absolute",
    letterSpacing: 0,
  },
  send1: {
    marginTop: 89.5,
    left: "3.72%",
    fontSize: FontSize.size_17xl,
    fontFamily: FontFamily.notoSerifSemiBold,
    fontWeight: "600",
    textAlign: "left",
    color: Color.gray_200,
    letterSpacing: 0,
    top: "50%",
    position: "absolute",
  },
  frameChild: {
    borderRadius: Border.br_6xl,
    height: 313,
    width: 376,
    position: "absolute",
  },
  image15Icon: {
    width: 16,
    height: 16,
  },
  backBtn: {
    top: 41,
    left: 22,
    borderRadius: Border.br_mini,
    shadowColor: "rgba(111, 136, 157, 0.25)",
    shadowRadius: 65,
    elevation: 65,
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
  mainHeadline: {
    marginTop: -46.5,
    fontSize: FontSize.size_23xl,
    color: Color.darkslateblue,
    textAlign: "left",
    fontFamily: FontFamily.gilroyBold,
    top: "50%",
    position: "absolute",
  },
  send2: {
    marginTop: 130.5,
    left: "39.89%",
    color: Color.slateblue_100,
    textAlign: "center",
    top: "50%",
    fontFamily: FontFamily.interSemiBold,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  rectangle: {
    height: "23.32%",
    top: "58.15%",
    right: "5.85%",
    bottom: "18.53%",
    shadowColor: "rgba(138, 149, 158, 0.25)",
    shadowRadius: 60,
    elevation: 60,
    left: "5.85%",
    width: "88.3%",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 30,
    },
    backgroundColor: Color.white,
  },
  rectangle1: {
    height: "16.93%",
    width: "43.09%",
    top: "61.34%",
    right: "48.14%",
    bottom: "21.73%",
    left: "8.78%",
    backgroundColor: Color.ghostwhite_100,
  },
  send3: {
    left: "18.35%",
  },
  send4: {
    left: "63.3%",
  },
  frame: {
    top: 17,
    left: 19,
    overflow: "hidden",
  },
  accountHolder: {
    color: Color.darkslateblue,
  },
  frame1: {
    top: 370,
    width: 215,
  },
  domhnallGleeson: {
    color: Color.silver,
  },
  frame2: {
    top: 391,
    width: 311,
  },
  frame3: {
    top: 459,
    width: 248,
  },
  frame4: {
    top: 480,
    width: 296,
  },
  frameItem: {
    borderRadius: Border.br_3xs,
    width: 54,
    left: 0,
    top: 0,
  },
  pleaseEnterYour: {
    left: 296,
  },
  send5: {
    textAlign: "center",
    color: Color.darkslateblue,
  },
  send6: {
    color: Color.slategray_100,
    marginTop: 3,
    textAlign: "center",
    letterSpacing: 0,
  },
  frame6: {
    width: 102,
    left: 67,
    height: 40,
    top: 7,
  },
  frame5: {
    top: 580,
    width: 330,
    height: 54,
    left: 41,
    overflow: "hidden",
  },
  pleaseEnterYour1: {
    left: 294,
  },
  send7: {
    textAlign: "left",
    color: Color.gray_200,
  },
  frame8: {
    width: 94,
    left: 67,
    height: 40,
    top: 7,
  },
  frame7: {
    top: 667,
    width: 330,
    height: 54,
    left: 41,
    overflow: "hidden",
  },
  pleaseEnterYour2: {
    left: 297,
  },
  frame10: {
    left: 60,
    width: 121,
    height: 40,
    top: 7,
  },
  frame9: {
    top: 754,
    width: 332,
    left: 41,
    height: 54,
    overflow: "hidden",
  },
  pleaseEnterYour3: {
    left: 298,
  },
  frame12: {
    width: 117,
    left: 67,
    height: 40,
    top: 7,
  },
  frame11: {
    top: 842,
    width: 330,
    height: 54,
    left: 41,
    overflow: "hidden",
  },
  accountDetails: {
    flex: 1,
    width: "100%",
    height: 896,
    overflow: "hidden",
    backgroundColor: Color.white,
  },
});

export default AccountDetails;
