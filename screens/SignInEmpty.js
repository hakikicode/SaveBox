import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const SignInEmpty = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.signInEmpty}>
      <View style={[styles.rectangle, styles.registerPosition]} />
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
      <View style={[styles.orParent, styles.orPosition]}>
        <Text style={[styles.or, styles.orPosition]}>or</Text>
        <Image
          style={[styles.lineCopy2, styles.lineLayout]}
          contentFit="cover"
          source={require("../assets/line-copy-21.png")}
        />
        <Image
          style={[styles.lineCopy3, styles.lineLayout]}
          contentFit="cover"
          source={require("../assets/line-copy-32.png")}
        />
      </View>
      <Pressable
        style={styles.forgotPasswordCopyContainer}
        onPress={() => navigation.navigate("ForgotPasswordEmpty")}
      >
        <Text style={styles.forgotPassword}>Forgot Password?</Text>
      </Pressable>
      <Pressable
        style={[styles.staticButton, styles.staticLayout]}
        onPress={() => navigation.navigate("SignInInfo")}
      >
        <Image
          style={[styles.staticButtonChild, styles.staticLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-16.png")}
        />
        <Text style={[styles.logIn1, styles.logTypo]}>Log In</Text>
      </Pressable>
      <Pressable
        style={styles.registerParent}
        onPress={() => navigation.navigate("CreateAccountEmpty")}
      >
        <Text style={[styles.register, styles.googlePosition]}>REGISTER</Text>
        <Image
          style={styles.groupIcon}
          contentFit="cover"
          source={require("../assets/group4.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  registerPosition: {
    left: 0,
    top: 0,
  },
  logTypo: {
    color: Color.white,
    fontFamily: FontFamily.damion,
    lineHeight: 18,
    fontSize: FontSize.size_lg,
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
    top: "50%",
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
    position: "absolute",
    backgroundColor: Color.white,
    top: 0,
  },
  mainHeadline: {
    top: 91,
    fontSize: FontSize.size_25xl,
    textAlign: "left",
    color: Color.darkslateblue,
    fontFamily: FontFamily.robotoRegular,
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
    letterSpacing: 0,
    textAlign: "left",
    fontFamily: FontFamily.robotoRegular,
    top: "50%",
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
  },
  forgotPassword: {
    fontSize: FontSize.size_smi,
    textDecoration: "underline",
    fontFamily: FontFamily.interRegular,
    color: Color.royalblue_100,
    letterSpacing: 0,
    textAlign: "center",
  },
  forgotPasswordCopyContainer: {
    left: 267,
    top: 431,
    position: "absolute",
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
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    color: Color.slateblue_100,
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
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default SignInEmpty;
