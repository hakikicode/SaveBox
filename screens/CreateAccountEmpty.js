import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Color, Padding, Border, FontFamily, FontSize } from "../GlobalStyles";

const CreateAccountEmpty = () => {
  return (
    <View style={styles.createAccountEmpty}>
      <Text style={styles.mainHeadline}>Register</Text>
      <View style={styles.staticButton}>
        <Text style={styles.register}>Register</Text>
      </View>
      <View style={[styles.inputField, styles.inputLayout1]}>
        <Text
          style={[styles.fullName, styles.fullNameTypo]}
        >{`Full name `}</Text>
      </View>
      <Text style={[styles.alreadyHaveAn, styles.fullNameTypo]}>
        Already have an account?
      </Text>
      <View style={[styles.inputField1, styles.inputLayout1]}>
        <Text style={[styles.fullName, styles.fullNameTypo]}>
          Enter Email Address
        </Text>
      </View>
      <View style={[styles.inputField2, styles.frameFlexBox]}>
        <Text style={[styles.fullName, styles.fullNameTypo]}>Password</Text>
        <Image
          style={styles.maskGroupIcon}
          contentFit="cover"
          source={require("../assets/mask-group6.png")}
        />
      </View>
      <View style={[styles.inputField3, styles.frameFlexBox]}>
        <Text style={[styles.fullName, styles.fullNameTypo]}>
          Confirm Password
        </Text>
        <Image
          style={styles.maskGroupIcon}
          contentFit="cover"
          source={require("../assets/mask-group6.png")}
        />
      </View>
      <Text style={[styles.google, styles.googleTypo]}>GOOGLE</Text>
      <View style={[styles.lineCopy2Parent, styles.frameFlexBox]}>
        <Image
          style={styles.lineCopy2}
          contentFit="cover"
          source={require("../assets/line-copy-2.png")}
        />
        <Text style={[styles.or, styles.orLayout]}>or</Text>
        <Image
          style={styles.lineCopy2}
          contentFit="cover"
          source={require("../assets/line-copy-3.png")}
        />
      </View>
      <View style={styles.loginParent}>
        <Text style={[styles.login, styles.loginTypo]}>LOGIN</Text>
        <Image
          style={styles.groupIcon}
          contentFit="cover"
          source={require("../assets/group.png")}
        />
      </View>
      <View style={[styles.frame, styles.frameFlexBox]}>
        <View style={[styles.googleBtn, styles.btnLayout]}>
          <Text style={[styles.google1, styles.googleTypo]}>GOOGLE</Text>
        </View>
        <View style={[styles.facebookBtn, styles.btnLayout]}>
          <Text style={[styles.google1, styles.googleTypo]}>FACEBOOK</Text>
        </View>
      </View>
      <View style={[styles.frame1, styles.frameFlexBox]}>
        <View style={styles.frameChild} />
        <Text style={[styles.iveReadAndContainer, styles.orLayout]}>
          <Text style={styles.iveReadAnd}>{`I’ve read and agree to the `}</Text>
          <Text style={styles.loginTypo}>terms</Text>
          <Text style={styles.iveReadAnd}>{` of `}</Text>
          <Text style={styles.loginTypo}>privacy policy</Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputLayout1: {
    paddingVertical: 0,
    height: 54,
    backgroundColor: Color.ghostwhite_100,
    paddingHorizontal: Padding.p_smi,
    justifyContent: "center",
    width: 332,
    borderRadius: Border.br_5xs,
    left: 41,
    position: "absolute",
  },
  fullNameTypo: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    lineHeight: 17,
    fontSize: FontSize.size_sm,
    textAlign: "left",
  },
  frameFlexBox: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
  },
  googleTypo: {
    textAlign: "center",
    letterSpacing: 3,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_sm,
    color: Color.darkslateblue,
  },
  orLayout: {
    lineHeight: 15,
    textAlign: "left",
  },
  loginTypo: {
    color: Color.slateblue_100,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  btnLayout: {
    width: 161,
    borderRadius: Border.br_8xs,
    paddingVertical: 0,
    backgroundColor: Color.ghostwhite_100,
    justifyContent: "center",
  },
  mainHeadline: {
    top: 91,
    fontSize: FontSize.size_25xl,
    lineHeight: 56,
    fontFamily: FontFamily.gilroyBold,
    textAlign: "left",
    color: Color.darkslateblue,
    left: 41,
    position: "absolute",
  },
  register: {
    fontSize: FontSize.size_lg,
    lineHeight: 18,
    color: Color.white,
    fontFamily: FontFamily.sFProDisplay,
    fontWeight: "700",
    textAlign: "left",
  },
  staticButton: {
    top: 671,
    backgroundColor: Color.royalblue_100,
    height: 56,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: Border.br_5xs,
    width: 332,
    left: 41,
    position: "absolute",
  },
  fullName: {
    color: Color.slategray_100,
  },
  inputField: {
    top: 302,
  },
  alreadyHaveAn: {
    top: 801,
    color: Color.darkslateblue,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    lineHeight: 17,
    fontSize: FontSize.size_sm,
    left: 41,
    position: "absolute",
  },
  inputField1: {
    top: 368,
  },
  maskGroupIcon: {
    width: 21,
    height: 21,
  },
  inputField2: {
    top: 434,
    paddingVertical: Padding.p_lg,
    justifyContent: "space-between",
    backgroundColor: Color.ghostwhite_100,
    width: 332,
    borderRadius: Border.br_5xs,
    left: 41,
    paddingHorizontal: Padding.p_smi,
  },
  inputField3: {
    top: 500,
    paddingHorizontal: Padding.p_mini,
    paddingVertical: Padding.p_lg,
    justifyContent: "space-between",
    backgroundColor: Color.ghostwhite_100,
    width: 332,
    borderRadius: Border.br_5xs,
    left: 41,
  },
  google: {
    top: 206,
    left: 80,
    display: "none",
    position: "absolute",
    textAlign: "center",
  },
  lineCopy2: {
    width: 63,
    height: 2,
    opacity: 0.06,
  },
  or: {
    fontSize: FontSize.size_mini,
    letterSpacing: 0,
    color: Color.slategray_200,
    fontFamily: FontFamily.sFProDisplay,
  },
  lineCopy2Parent: {
    top: 262,
    left: 118,
    width: 171,
  },
  login: {
    fontSize: FontSize.size_base,
    letterSpacing: 3,
    color: Color.slateblue_100,
    fontFamily: FontFamily.interBold,
    textAlign: "left",
  },
  groupIcon: {
    width: 12,
    height: 10,
    marginLeft: 23,
  },
  loginParent: {
    top: 831,
    width: 93,
    height: 19,
    justifyContent: "flex-end",
    flexDirection: "row",
    alignItems: "center",
    left: 41,
    position: "absolute",
  },
  google1: {
    alignSelf: "stretch",
  },
  googleBtn: {
    paddingHorizontal: 44,
    alignItems: "flex-end",
  },
  facebookBtn: {
    paddingHorizontal: 28,
  },
  frame: {
    top: 188,
    width: 332,
    justifyContent: "space-between",
    left: 41,
    overflow: "hidden",
  },
  frameChild: {
    borderRadius: Border.br_9xs,
    backgroundColor: "rgba(151, 151, 151, 0.15)",
    borderStyle: "solid",
    borderColor: "#979797",
    borderWidth: 1.5,
    width: 23,
    height: 23,
  },
  iveReadAnd: {
    fontFamily: FontFamily.interRegular,
    color: Color.slategray_100,
  },
  iveReadAndContainer: {
    fontSize: FontSize.size_xs,
  },
  frame1: {
    top: 568,
    width: 310,
    left: 41,
    justifyContent: "space-between",
    overflow: "hidden",
  },
  createAccountEmpty: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    height: 896,
    overflow: "hidden",
  },
});

export default CreateAccountEmpty;
