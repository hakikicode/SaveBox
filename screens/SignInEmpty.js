import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const SignInEmpty = () => {
  return (
    <View style={styles.signInEmpty}>
      <View style={styles.rectangle} />
      <Text style={styles.mainHeadline}>Log In</Text>
      <Text style={[styles.logIn, styles.logTypo]}>Log In</Text>
      <Text style={[styles.dontHaveAn, styles.googleTypo]}>
        Don’t have an account?
      </Text>
      <View style={[styles.inputField, styles.inputLayout]}>
        <View style={[styles.inputFieldChild, styles.rectangle1Bg]} />
        <Text style={[styles.enterEmailAddress, styles.passwordTypo]}>
          Enter Email Address
        </Text>
      </View>
      <View style={[styles.inputField1, styles.inputLayout]}>
        <View style={[styles.inputFieldChild, styles.rectangle1Bg]} />
        <Text style={[styles.password, styles.passwordPosition]}>Password</Text>
        <Image
          style={[styles.maskGroupIcon, styles.passwordPosition]}
          contentFit="cover"
          source={require("../assets/mask-group6.png")}
        />
      </View>
      <View style={[styles.googleBtn, styles.btnPosition]}>
        <View style={[styles.rectangle1, styles.rectangle1Bg]} />
        <Text style={[styles.google, styles.googlePosition]}>GOOGLE</Text>
      </View>
      <View style={[styles.facebookBtn, styles.btnPosition]}>
        <View style={[styles.rectangle1, styles.rectangle1Bg]} />
        <Text style={[styles.facebook, styles.googlePosition]}>FACEBOOK</Text>
      </View>
      <View style={styles.orParent}>
        <Text style={[styles.or, styles.orPosition]}>or</Text>
        <Image
          style={[styles.lineCopy2, styles.lineLayout]}
          contentFit="cover"
          source={require("../assets/line-copy-2.png")}
        />
        <Image
          style={[styles.lineCopy3, styles.lineLayout]}
          contentFit="cover"
          source={require("../assets/line-copy-31.png")}
        />
      </View>
      <Text style={[styles.forgotPasswordCopy, styles.orPosition]}>
        Forgot Password?
      </Text>
      <View style={[styles.staticButton, styles.staticLayout]}>
        <Image
          style={[styles.staticButtonChild, styles.staticLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-16.png")}
        />
        <Text style={[styles.logIn1, styles.logTypo]}>Log In</Text>
      </View>
      <View style={styles.registerParent}>
        <Text style={[styles.register, styles.googlePosition]}>REGISTER</Text>
        <Image
          style={styles.groupIcon}
          contentFit="cover"
          source={require("../assets/group4.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  logTypo: {
    color: Color.white,
    lineHeight: 18,
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.sFProDisplay,
    fontWeight: "700",
    textAlign: "left",
    position: "absolute",
  },
  googleTypo: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_sm,
    color: Color.darkslateblue,
  },
  inputLayout: {
    height: 54,
    width: 332,
  },
  rectangle1Bg: {
    backgroundColor: Color.ghostwhite_100,
    position: "absolute",
  },
  passwordTypo: {
    color: Color.slategray_100,
    left: 13,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    lineHeight: 17,
    fontSize: FontSize.size_sm,
    textAlign: "left",
  },
  passwordPosition: {
    top: 17,
    position: "absolute",
  },
  btnPosition: {
    bottom: "73.1%",
    top: "20.98%",
    width: "38.89%",
    height: "5.92%",
    position: "absolute",
  },
  googlePosition: {
    letterSpacing: 3,
    position: "absolute",
  },
  orPosition: {
    letterSpacing: 0,
    position: "absolute",
  },
  lineLayout: {
    opacity: 0.06,
    width: "36.75%",
    height: "13.33%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  staticLayout: {
    height: 56,
    width: 332,
    position: "absolute",
  },
  rectangle: {
    width: 414,
    height: 897,
    left: 0,
    top: 0,
    position: "absolute",
    backgroundColor: Color.white,
  },
  mainHeadline: {
    top: 91,
    fontSize: FontSize.size_25xl,
    fontFamily: FontFamily.gilroyBold,
    textAlign: "left",
    color: Color.darkslateblue,
    left: 41,
    position: "absolute",
  },
  logIn: {
    top: 518,
    left: 182,
  },
  dontHaveAn: {
    top: 801,
    lineHeight: 17,
    fontWeight: "500",
    fontSize: FontSize.size_sm,
    left: 34,
    textAlign: "left",
    position: "absolute",
  },
  inputFieldChild: {
    borderRadius: Border.br_5xs,
    left: 0,
    top: 0,
    height: 54,
    width: 332,
  },
  enterEmailAddress: {
    top: 18,
    position: "absolute",
  },
  inputField: {
    top: 302,
    left: 41,
    position: "absolute",
  },
  password: {
    color: Color.slategray_100,
    left: 13,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    lineHeight: 17,
    fontSize: FontSize.size_sm,
    textAlign: "left",
  },
  maskGroupIcon: {
    left: 305,
    width: 21,
    height: 21,
  },
  inputField1: {
    top: 368,
    left: 41,
    position: "absolute",
  },
  rectangle1: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: Border.br_8xs,
    width: "100%",
    backgroundColor: Color.ghostwhite_100,
  },
  google: {
    left: 45,
    textAlign: "center",
    top: 18,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_sm,
    color: Color.darkslateblue,
    letterSpacing: 3,
  },
  googleBtn: {
    right: "51.21%",
    left: "9.9%",
  },
  facebook: {
    left: 28,
    textAlign: "center",
    top: 18,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_sm,
    color: Color.darkslateblue,
    letterSpacing: 3,
  },
  facebookBtn: {
    right: "9.9%",
    left: "51.21%",
  },
  or: {
    marginTop: -7.5,
    left: "45.64%",
    fontSize: FontSize.size_mini,
    lineHeight: 15,
    color: Color.slategray_200,
    top: "50%",
    fontFamily: FontFamily.sFProDisplay,
    letterSpacing: 0,
    textAlign: "left",
  },
  lineCopy2: {
    top: "56.64%",
    right: "63.43%",
    bottom: "30.03%",
    left: "-0.18%",
  },
  lineCopy3: {
    top: "61.64%",
    right: "-0.29%",
    bottom: "25.03%",
    left: "63.54%",
  },
  orParent: {
    marginTop: -186,
    width: "41.28%",
    right: "30.22%",
    left: "28.5%",
    height: 15,
    top: "50%",
    position: "absolute",
  },
  forgotPasswordCopy: {
    top: 431,
    left: 267,
    fontSize: FontSize.size_smi,
    textDecoration: "underline",
    fontFamily: FontFamily.interRegular,
    color: Color.royalblue_100,
    textAlign: "center",
  },
  staticButtonChild: {
    borderRadius: Border.br_5xs,
    left: 0,
    top: 0,
  },
  logIn1: {
    top: 19,
    left: 141,
  },
  staticButton: {
    top: 499,
    left: 41,
  },
  register: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.interBold,
    color: Color.slateblue_100,
    letterSpacing: 3,
    fontWeight: "700",
    textAlign: "left",
    left: 0,
    top: 0,
  },
  groupIcon: {
    height: "53.94%",
    width: "9.45%",
    top: "25.4%",
    right: "-0.79%",
    bottom: "20.66%",
    left: "91.34%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  registerParent: {
    top: 829,
    width: 126,
    height: 19,
    left: 34,
    position: "absolute",
  },
  signInEmpty: {
    flex: 1,
    height: 896,
    overflow: "hidden",
    backgroundColor: Color.white,
    width: "100%",
  },
});

export default SignInEmpty;
