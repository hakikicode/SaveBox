import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const SignInInfo = () => {
  return (
    <View style={styles.signInInfo}>
      <View style={styles.rectangle} />
      <Text style={styles.mainHeadline}>Log In</Text>
      <Text style={[styles.dontHaveAn, styles.googleTypo]}>
        Don’t have an account?
      </Text>
      <View style={[styles.googleBtn, styles.btnPosition]}>
        <View style={styles.rectangle1} />
        <Text style={[styles.google, styles.googleTypo]}>GOOGLE</Text>
      </View>
      <View style={[styles.facebookBtn, styles.btnPosition]}>
        <View style={styles.rectangle1} />
        <Text style={[styles.facebook, styles.googleTypo]}>FACEBOOK</Text>
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
      <Image
        style={[styles.inputFieldIcon, styles.inputLayout]}
        contentFit="cover"
        source={require("../assets/input-field.png")}
      />
      <View style={[styles.inputFieldActive, styles.inputLayout]}>
        <View style={[styles.inputFieldActiveChild, styles.registerPosition]} />
        <Text style={[styles.mickeymooremailcom, styles.registerTypo]}>
          mickey.moore@mail.com
        </Text>
      </View>
      <View style={styles.registerParent}>
        <Text style={[styles.register, styles.registerTypo]}>REGISTER</Text>
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
  googleTypo: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_sm,
    color: Color.darkslateblue,
    position: "absolute",
  },
  btnPosition: {
    bottom: "73.1%",
    top: "20.98%",
    width: "38.89%",
    height: "5.92%",
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
  inputLayout: {
    height: 56,
    width: 332,
    left: 41,
    position: "absolute",
  },
  registerPosition: {
    top: 0,
    left: 0,
  },
  registerTypo: {
    color: Color.slateblue_100,
    fontSize: FontSize.size_base,
    textAlign: "left",
    position: "absolute",
  },
  rectangle: {
    top: -2,
    width: 414,
    height: 897,
    left: 0,
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
  dontHaveAn: {
    top: 801,
    lineHeight: 17,
    left: 34,
    textAlign: "left",
  },
  rectangle1: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: Border.br_8xs,
    backgroundColor: Color.ghostwhite_100,
    position: "absolute",
    width: "100%",
  },
  google: {
    left: 45,
    textAlign: "center",
    letterSpacing: 3,
    top: 18,
  },
  googleBtn: {
    right: "51.21%",
    left: "9.9%",
  },
  facebook: {
    left: 28,
    textAlign: "center",
    letterSpacing: 3,
    top: 18,
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
    fontFamily: FontFamily.sFProDisplay,
    color: Color.slategray_200,
    top: "50%",
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
  inputFieldIcon: {
    top: 368,
  },
  inputFieldActiveChild: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.slateblue_300,
    borderStyle: "solid",
    borderColor: "#5771f9",
    borderWidth: 1,
    width: 333,
    height: 57,
    position: "absolute",
  },
  mickeymooremailcom: {
    left: 18,
    lineHeight: 20,
    fontFamily: FontFamily.poppinsRegular,
    top: 18,
  },
  inputFieldActive: {
    top: 302,
  },
  register: {
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    top: 0,
    left: 0,
    letterSpacing: 3,
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
  signInInfo: {
    flex: 1,
    height: 896,
    overflow: "hidden",
    backgroundColor: Color.white,
    width: "100%",
  },
});

export default SignInInfo;
