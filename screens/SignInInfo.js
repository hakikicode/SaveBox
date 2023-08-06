import * as React from "react";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const SignInInfo = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.signInInfo}>
      <Pressable
        style={styles.rectangle}
        onPress={() => navigation.navigate("ForgotPasswordEmpty")}
      />
      <Text style={styles.mainHeadline}>Log In</Text>
      <Text style={[styles.dontHaveAn, styles.googleTypo]}>
        Don’t have an account?
      </Text>
      <View style={[styles.googleBtn, styles.btnLayout]}>
        <Text style={[styles.google, styles.googleTypo]}>GOOGLE</Text>
      </View>
      <View style={[styles.facebookBtn, styles.btnLayout]}>
        <Text style={[styles.facebook, styles.googleTypo]}>FACEBOOK</Text>
      </View>
      <View style={styles.orParent}>
        <Text style={styles.or}>or</Text>
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
      <Image
        style={[styles.inputFieldIcon, styles.inputPosition]}
        contentFit="cover"
        source={require("../assets/input-field1.png")}
      />
      <View style={[styles.inputFieldActive, styles.inputPosition]}>
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
  btnLayout: {
    backgroundColor: Color.ghostwhite_100,
    borderRadius: Border.br_8xs,
    bottom: "73.1%",
    top: "20.98%",
    width: "38.89%",
    height: "5.92%",
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
  inputPosition: {
    left: 41,
    position: "absolute",
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
    textAlign: "left",
    color: Color.darkslateblue,
    fontFamily: FontFamily.robotoRegular,
    left: 41,
    position: "absolute",
  },
  dontHaveAn: {
    top: 801,
    lineHeight: 17,
    left: 34,
    textAlign: "left",
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
    top: "50%",
    left: "45.64%",
    fontSize: FontSize.size_mini,
    lineHeight: 15,
    color: Color.slategray_200,
    letterSpacing: 0,
    textAlign: "left",
    fontFamily: FontFamily.robotoRegular,
    position: "absolute",
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
    top: 262,
    left: 118,
    width: 171,
    height: 15,
    position: "absolute",
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
  inputFieldIcon: {
    top: 368,
    width: 332,
    height: 56,
  },
  mickeymooremailcom: {
    left: 18,
    lineHeight: 20,
    fontFamily: FontFamily.poppinsRegular,
    top: 18,
  },
  inputFieldActive: {
    top: 302,
    borderRadius: Border.br_5xs,
    backgroundColor: Color.slateblue_300,
    borderStyle: "solid",
    borderColor: "#5771f9",
    borderWidth: 1,
    width: 333,
    height: 57,
  },
  register: {
    top: 0,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    letterSpacing: 3,
    left: 0,
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
    width: "100%",
    height: 896,
    overflow: "hidden",
    backgroundColor: Color.white,
  },
});

export default SignInInfo;
