import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const ForgotPassword = () => {
  return (
    <View style={[styles.forgotPassword, styles.btnLargeItemLayout]}>
      <View style={styles.rectanglePosition}>
        <View style={[styles.rectangle, styles.rectanglePosition]} />
      </View>
      <Text style={[styles.register, styles.sendFlexBox]}>Register</Text>
      <View style={[styles.backBtn, styles.backLayout]}>
        <View style={[styles.backBtnChild, styles.backLayout]} />
        <Image
          style={styles.image15Icon}
          contentFit="cover"
          source={require("../assets/image-15.png")}
        />
      </View>
      <Text style={[styles.mainHeadline, styles.bodyTextClr]}>
        Forgot Password
      </Text>
      <Text style={[styles.bodyText, styles.bodyTextClr]}>
        <Text style={styles.pleaseEnterYour}>{`Please enter your `}</Text>
        <Text style={styles.emailAddress}>email address</Text>
        <Text style={styles.pleaseEnterYour}>{` `}</Text>
        <Text style={styles.emailAddress}>{`or
phone number`}</Text>
        <Text style={styles.pleaseEnterYour}> to reset your password</Text>
      </Text>
      <Text style={[styles.send, styles.sendFlexBox]}>Send</Text>
      <View style={[styles.inputFieldActive, styles.btnLargePosition]}>
        <View style={[styles.inputFieldActiveChild, styles.btnChildLayout]} />
        <Text style={[styles.michaelmooremailcom, styles.sendFlexBox]}>
          michael.moore@mail.com
        </Text>
      </View>
      <View style={[styles.btnLarge, styles.btnLargePosition]}>
        <View style={[styles.btnLargeChild, styles.btnChildLayout]} />
        <Image
          style={[styles.btnLargeItem, styles.btnChildLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-16.png")}
        />
        <Text style={[styles.send1, styles.sendFlexBox]}>Send</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  btnLargeItemLayout: {
    overflow: "hidden",
    width: "100%",
  },
  rectanglePosition: {
    height: 897,
    width: 414,
    left: 0,
    top: 0,
    position: "absolute",
  },
  sendFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  backLayout: {
    height: 47,
    width: 47,
    position: "absolute",
  },
  bodyTextClr: {
    color: Color.darkslateblue,
    textAlign: "left",
    position: "absolute",
  },
  btnLargePosition: {
    width: 332,
    left: 41,
    position: "absolute",
  },
  btnChildLayout: {
    borderRadius: Border.br_5xs,
    position: "absolute",
  },
  rectangle: {
    backgroundColor: Color.white,
  },
  register: {
    top: 690,
    left: 173,
    color: Color.white,
    fontFamily: FontFamily.sFProDisplay,
    lineHeight: 18,
    textAlign: "left",
    fontWeight: "700",
    fontSize: FontSize.size_lg,
  },
  backBtnChild: {
    borderRadius: Border.br_mini,
    shadowColor: "rgba(111, 136, 157, 0.25)",
    shadowOffset: {
      width: 0,
      height: 30,
    },
    shadowRadius: 65,
    elevation: 65,
    shadowOpacity: 1,
    left: 0,
    top: 0,
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
  },
  mainHeadline: {
    top: 190,
    fontSize: FontSize.size_25xl,
    fontFamily: FontFamily.gilroyBold,
    left: 41,
  },
  pleaseEnterYour: {
    fontFamily: FontFamily.interRegular,
  },
  emailAddress: {
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  bodyText: {
    top: 258,
    left: 42,
    letterSpacing: 0,
    lineHeight: 26,
    fontSize: FontSize.size_lg,
    color: Color.darkslateblue,
  },
  send: {
    top: 519,
    left: 186,
    color: Color.white,
    fontFamily: FontFamily.sFProDisplay,
    lineHeight: 18,
    textAlign: "left",
    fontWeight: "700",
    fontSize: FontSize.size_lg,
  },
  inputFieldActiveChild: {
    backgroundColor: Color.slateblue_300,
    borderStyle: "solid",
    borderColor: "#314bce",
    borderWidth: 1,
    width: 333,
    height: 57,
    left: 0,
    top: 0,
  },
  michaelmooremailcom: {
    top: 18,
    left: 18,
    fontSize: FontSize.size_base,
    lineHeight: 20,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    color: Color.slateblue_100,
  },
  inputFieldActive: {
    top: 380,
    height: 56,
  },
  btnLargeChild: {
    height: "53.95%",
    width: "70.48%",
    top: "46.05%",
    right: "15.66%",
    bottom: "0%",
    left: "13.86%",
    backgroundColor: Color.salmon_100,
  },
  btnLargeItem: {
    height: "73.68%",
    top: "0%",
    right: "0%",
    bottom: "26.32%",
    left: "0%",
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
    width: "100%",
  },
  send1: {
    top: "25%",
    left: "43.67%",
    color: Color.white,
    fontFamily: FontFamily.sFProDisplay,
    lineHeight: 18,
    textAlign: "left",
    fontWeight: "700",
    fontSize: FontSize.size_lg,
  },
  btnLarge: {
    top: 500,
    height: 76,
  },
  forgotPassword: {
    flex: 1,
    height: 896,
    backgroundColor: Color.white,
  },
});

export default ForgotPassword;
