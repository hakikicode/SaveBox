import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import GroupComponent1 from "../components/GroupComponent1";
import { FontFamily, Border, Color, FontSize } from "../GlobalStyles";

const Recipients = () => {
  return (
    <View style={styles.recipients}>
      <Text style={styles.mainHeadline}>Recipients</Text>
      <Image
        style={styles.akarIconssearch}
        contentFit="cover"
        source={require("../assets/akariconssearch.png")}
      />
      <View style={styles.recipientsChild} />
      <View style={styles.rectangle} />
      <View style={styles.recipientsItem} />
      <Image
        style={styles.arrowIcon}
        contentFit="cover"
        source={require("../assets/arrow-icon.png")}
      />
      <Text style={styles.send}>My personal accounts (4)</Text>
      <Text style={[styles.send1, styles.sendTypo2]}>RECENT RECEIPTS</Text>
      <Image
        style={[styles.recipientsInner, styles.recipientsChildLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-69.png")}
      />
      <Image
        style={[styles.rectangleIcon, styles.recipientsChildLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-35.png")}
      />
      <Image
        style={[styles.recipientsChild1, styles.recipientsChildLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-36.png")}
      />
      <Image
        style={[styles.recipientsChild2, styles.recipientsChildLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-37.png")}
      />
      <Image
        style={[styles.recipientsChild3, styles.recipientsChildLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-38.png")}
      />
      <Image
        style={[styles.recipientsChild4, styles.recipientsChildLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-39.png")}
      />
      <Text style={[styles.send2, styles.sendPosition2]}>Bonnie Riley</Text>
      <Text style={[styles.send3, styles.sendTypo1]}>EUR ACCOUNT</Text>
      <Text style={[styles.pleaseEnterYour, styles.pleaseTypo1]}>SEND</Text>
      <Text style={[styles.send4, styles.sendClr]}>Aileen Shin</Text>
      <Text style={[styles.send5, styles.sendPosition1]}>GBP ACCOUNT</Text>
      <Text style={[styles.pleaseEnterYour1, styles.pleaseTypo1]}>SEND</Text>
      <Text style={[styles.send6, styles.sendClr]}>Angelina Winn</Text>
      <Text style={[styles.send7, styles.sendPosition]}>INR ACCOUNT</Text>
      <Text style={[styles.pleaseEnterYour2, styles.pleaseTypo]}>SEND</Text>
      <Text style={[styles.send8, styles.sendPosition]}>Yamilet Booker</Text>
      <Text style={[styles.send9, styles.sendTypo]}>BDT ACCOUNT</Text>
      <Text style={[styles.pleaseEnterYour3, styles.pleaseTypo1]}>SEND</Text>
      <Text style={[styles.send10, styles.sendPosition1]}>
        Alejandra Stallings
      </Text>
      <Text style={[styles.send11, styles.sendTypo1]}>USD ACCOUNT</Text>
      <Text style={[styles.pleaseEnterYour4, styles.pleaseTypo]}>SEND</Text>
      <Text style={[styles.send12, styles.sendClr]}>Viljami Toivonen</Text>
      <Text style={[styles.send13, styles.sendTypo]}>EUR ACCOUNT</Text>
      <View style={[styles.backBtn, styles.backLayout]}>
        <View style={[styles.backBtnChild, styles.backLayout]} />
        <Image
          style={styles.image15Icon}
          contentFit="cover"
          source={require("../assets/image-15.png")}
        />
      </View>
      <GroupComponent1 />
      <Image
        style={styles.settingsBtnIcon}
        contentFit="cover"
        source={require("../assets/settings-btn.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  sendTypo2: {
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    letterSpacing: 0,
    top: "50%",
    position: "absolute",
  },
  recipientsChildLayout: {
    height: 54,
    width: 54,
    left: 41,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  sendPosition2: {
    left: "26.09%",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    letterSpacing: 0,
    top: "50%",
    position: "absolute",
  },
  sendTypo1: {
    color: Color.slategray_100,
    fontSize: FontSize.size_xs,
    textAlign: "center",
  },
  pleaseTypo1: {
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    lineHeight: 25,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    letterSpacing: 0,
    color: Color.darkslateblue,
    position: "absolute",
  },
  sendClr: {
    color: Color.gray_200,
    fontSize: FontSize.size_lg,
  },
  sendPosition1: {
    left: "25.85%",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    letterSpacing: 0,
    top: "50%",
    position: "absolute",
  },
  sendPosition: {
    left: "25.6%",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    letterSpacing: 0,
    top: "50%",
    position: "absolute",
  },
  pleaseTypo: {
    left: 336,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    lineHeight: 25,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    letterSpacing: 0,
    color: Color.darkslateblue,
    position: "absolute",
  },
  sendTypo: {
    left: "25.12%",
    color: Color.slategray_100,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    letterSpacing: 0,
    textAlign: "center",
    top: "50%",
    position: "absolute",
  },
  backLayout: {
    height: 47,
    width: 47,
    position: "absolute",
  },
  mainHeadline: {
    marginTop: -337,
    left: "10.14%",
    fontSize: FontSize.size_23xl,
    fontFamily: FontFamily.robotoRegular,
    textAlign: "center",
    color: Color.darkslateblue,
    top: "50%",
    position: "absolute",
  },
  akarIconssearch: {
    top: 134,
    left: 349,
    width: 24,
    height: 24,
    position: "absolute",
    overflow: "hidden",
  },
  recipientsChild: {
    top: 247,
    left: 88,
    borderRadius: Border.br_5xs,
    backgroundColor: "rgba(87, 113, 249, 0.38)",
    width: 234,
    height: 41,
    position: "absolute",
  },
  rectangle: {
    height: "8.15%",
    width: "80.19%",
    top: "21.21%",
    right: "9.9%",
    bottom: "70.65%",
    borderRadius: Border.br_8xs,
    backgroundColor: Color.royalblue_100,
    left: "9.9%",
    position: "absolute",
  },
  recipientsItem: {
    top: 206,
    left: 313,
    width: 44,
    height: 42,
    borderRadius: Border.br_3xs,
    position: "absolute",
    backgroundColor: Color.white,
  },
  arrowIcon: {
    height: "1.14%",
    width: "2.87%",
    top: "24.77%",
    right: "17.65%",
    bottom: "74.09%",
    left: "79.48%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  send: {
    marginTop: -232,
    left: "14.49%",
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: Color.white,
    textAlign: "left",
    letterSpacing: 0,
    fontSize: FontSize.size_lg,
    top: "50%",
    position: "absolute",
  },
  send1: {
    marginTop: -155,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    textAlign: "left",
    left: "9.9%",
    color: Color.darkslateblue,
  },
  recipientsInner: {
    top: 347,
  },
  rectangleIcon: {
    top: 434,
  },
  recipientsChild1: {
    top: 521,
  },
  recipientsChild2: {
    top: 688,
  },
  recipientsChild3: {
    top: 608,
  },
  recipientsChild4: {
    top: 782,
  },
  send2: {
    marginTop: -94,
    fontSize: FontSize.size_lg,
    left: "26.09%",
    textAlign: "center",
    color: Color.darkslateblue,
  },
  send3: {
    marginTop: -69,
    left: "26.09%",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    letterSpacing: 0,
    top: "50%",
    position: "absolute",
  },
  pleaseEnterYour: {
    top: 362,
    left: 334,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    lineHeight: 25,
  },
  send4: {
    marginTop: -7,
    left: "26.09%",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    letterSpacing: 0,
    top: "50%",
    position: "absolute",
    textAlign: "left",
  },
  send5: {
    marginTop: 272,
    color: Color.slategray_100,
    fontSize: FontSize.size_xs,
    textAlign: "center",
  },
  pleaseEnterYour1: {
    top: 449,
    left: 334,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    lineHeight: 25,
  },
  send6: {
    marginTop: 80,
    left: "24.4%",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    letterSpacing: 0,
    top: "50%",
    position: "absolute",
    textAlign: "left",
  },
  send7: {
    marginTop: 193,
    color: Color.slategray_100,
    fontSize: FontSize.size_xs,
    textAlign: "center",
  },
  pleaseEnterYour2: {
    top: 536,
  },
  send8: {
    marginTop: 166,
    color: Color.gray_200,
    fontSize: FontSize.size_lg,
    textAlign: "left",
  },
  send9: {
    marginTop: 105,
  },
  pleaseEnterYour3: {
    top: 623,
    left: 335,
  },
  send10: {
    marginTop: 247,
    color: Color.gray_200,
    fontSize: FontSize.size_lg,
    textAlign: "left",
  },
  send11: {
    marginTop: 18,
    left: "26.09%",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    letterSpacing: 0,
    top: "50%",
    position: "absolute",
  },
  pleaseEnterYour4: {
    top: 703,
  },
  send12: {
    marginTop: 341,
    left: "24.88%",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    letterSpacing: 0,
    top: "50%",
    position: "absolute",
    textAlign: "center",
  },
  send13: {
    marginTop: 366,
  },
  backBtnChild: {
    top: 0,
    left: 0,
    borderRadius: Border.br_mini,
    shadowColor: "rgba(111, 136, 157, 0.25)",
    shadowOffset: {
      width: 0,
      height: 30,
    },
    shadowRadius: 65,
    elevation: 65,
    shadowOpacity: 1,
    backgroundColor: Color.white,
  },
  image15Icon: {
    top: 16,
    left: 16,
    width: 16,
    height: 16,
    position: "absolute",
  },
  backBtn: {
    top: 58,
    left: 41,
    height: 47,
    width: 47,
  },
  settingsBtnIcon: {
    top: 23,
    left: 261,
    width: 153,
    height: 177,
    position: "absolute",
  },
  recipients: {
    flex: 1,
    width: "100%",
    height: 896,
    overflow: "hidden",
    backgroundColor: Color.white,
  },
});

export default Recipients;
