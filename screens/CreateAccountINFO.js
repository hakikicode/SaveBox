import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const CreateAccountINFO = () => {
  return (
    <View style={styles.createAccountInfo}>
      <View style={styles.rectanglePosition}>
        <View style={[styles.rectangle, styles.rectanglePosition]} />
      </View>
      <Text style={styles.mainHeadline}>Register</Text>
      <View style={[styles.googleBtn, styles.btnPosition]}>
        <View style={[styles.rectangle1, styles.rectangle1Position]} />
        <Text style={[styles.google, styles.googleTypo]}>GOOGLE</Text>
      </View>
      <View style={[styles.facebookBtn, styles.btnPosition]}>
        <View style={[styles.rectangle1, styles.rectangle1Position]} />
        <Text style={[styles.facebook, styles.googleTypo]}>FACEBOOK</Text>
      </View>
      <Text style={[styles.register, styles.nextTypo]}>Register</Text>
      <Text style={styles.alreadyHaveAn}>Already have an account?</Text>
      <Text style={[styles.iveReadAndContainer, styles.orLayout]}>
        <Text style={styles.iveReadAnd}>{`I’ve read and agree to the `}</Text>
        <Text style={styles.terms}>terms</Text>
        <Text style={styles.iveReadAnd}>{` of `}</Text>
        <Text style={styles.terms}>privacy policy</Text>
      </Text>
      <View style={[styles.orParent, styles.orPosition]}>
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
      <View style={styles.btnLarge}>
        <View style={styles.btnLargeChild} />
        <View style={[styles.btnLargeItem, styles.rectangle1Position]} />
        <Text style={[styles.next, styles.nextTypo]}>Next</Text>
      </View>
      <View style={[styles.createAccountInfoChild, styles.childBorder]} />
      <View style={[styles.inputField, styles.inputIconLayout]}>
        <View style={[styles.inputFieldChild, styles.inputIconLayout]} />
        <Text style={[styles.michaelmooremailcom, styles.michaelMooreTypo]}>
          michael.moore@mail.com
        </Text>
      </View>
      <View style={[styles.inputFieldActive, styles.inputIconLayout]}>
        <View style={[styles.inputFieldActiveChild, styles.childBorder]} />
        <Text style={[styles.michaelMoore, styles.michaelMooreTypo]}>
          Michael Moore
        </Text>
      </View>
      <Image
        style={[styles.inputFieldIcon, styles.inputIconLayout]}
        contentFit="cover"
        source={require("../assets/input-field2.png")}
      />
      <Image
        style={[styles.inputFieldIcon1, styles.inputIconLayout]}
        contentFit="cover"
        source={require("../assets/input-field2.png")}
      />
      <View style={styles.loginParent}>
        <Text style={styles.login}>LOGIN</Text>
        <Image
          style={styles.groupIcon}
          contentFit="cover"
          source={require("../assets/group5.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rectanglePosition: {
    height: 897,
    width: 414,
    left: 0,
    top: 0,
    position: "absolute",
  },
  btnPosition: {
    bottom: "73.1%",
    top: "20.98%",
    width: "38.89%",
    height: "5.92%",
    position: "absolute",
  },
  rectangle1Position: {
    left: "0%",
    right: "0%",
    top: "0%",
    position: "absolute",
    width: "100%",
  },
  googleTypo: {
    textAlign: "center",
    letterSpacing: 3,
    top: 18,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_sm,
    color: Color.darkslateblue,
    position: "absolute",
  },
  nextTypo: {
    color: Color.white,
    fontWeight: "700",
    lineHeight: 18,
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.sFProDisplay,
    textAlign: "left",
    position: "absolute",
  },
  orLayout: {
    lineHeight: 15,
    textAlign: "left",
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
  childBorder: {
    borderWidth: 1,
    borderStyle: "solid",
    position: "absolute",
  },
  inputIconLayout: {
    height: 54,
    width: 332,
    position: "absolute",
  },
  michaelMooreTypo: {
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    lineHeight: 20,
    left: 20,
    fontSize: FontSize.size_base,
    top: 18,
    textAlign: "left",
    position: "absolute",
  },
  rectangle: {
    backgroundColor: Color.white,
    width: 414,
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
  rectangle1: {
    height: "100%",
    borderRadius: Border.br_8xs,
    backgroundColor: Color.ghostwhite_100,
    bottom: "0%",
  },
  google: {
    left: 39,
  },
  googleBtn: {
    right: "51.21%",
    left: "9.9%",
  },
  facebook: {
    left: 28,
  },
  facebookBtn: {
    right: "9.9%",
    left: "51.21%",
  },
  register: {
    top: 690,
    left: 173,
  },
  alreadyHaveAn: {
    top: 801,
    lineHeight: 17,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_sm,
    textAlign: "left",
    color: Color.darkslateblue,
    left: 41,
    position: "absolute",
  },
  iveReadAnd: {
    fontFamily: FontFamily.interRegular,
    color: Color.slategray_100,
  },
  terms: {
    color: Color.slateblue_100,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  iveReadAndContainer: {
    top: 572,
    left: 68,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  or: {
    marginTop: -7.5,
    left: "45.64%",
    fontSize: FontSize.size_mini,
    letterSpacing: 0,
    color: Color.slategray_200,
    lineHeight: 15,
    textAlign: "left",
    fontFamily: FontFamily.sFProDisplay,
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
    right: "29.25%",
    left: "29.47%",
    height: 15,
  },
  btnLargeChild: {
    height: "53.95%",
    width: "70.48%",
    top: "46.05%",
    right: "15.66%",
    left: "13.86%",
    backgroundColor: "rgba(154, 170, 255, 0.38)",
    borderRadius: Border.br_5xs,
    bottom: "0%",
    position: "absolute",
  },
  btnLargeItem: {
    height: "73.68%",
    bottom: "26.32%",
    backgroundColor: Color.royalblue_100,
    borderRadius: Border.br_5xs,
  },
  next: {
    top: "25%",
    left: "44.28%",
  },
  btnLarge: {
    top: 671,
    height: 76,
    width: 332,
    left: 41,
    position: "absolute",
  },
  createAccountInfoChild: {
    top: 567,
    left: 40,
    borderRadius: Border.br_9xs,
    backgroundColor: Color.royalblue_300,
    borderColor: "#5771f9",
    width: 22,
    height: 22,
  },
  inputFieldChild: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.ghostwhite_100,
    left: 0,
    top: 0,
  },
  michaelmooremailcom: {
    color: Color.darkslateblue,
    fontWeight: "600",
    lineHeight: 20,
    left: 20,
  },
  inputField: {
    top: 368,
    left: 41,
  },
  inputFieldActiveChild: {
    backgroundColor: Color.slateblue_200,
    borderColor: "#314bce",
    width: 333,
    height: 55,
    borderRadius: Border.br_5xs,
    left: 0,
    top: 0,
  },
  michaelMoore: {
    color: Color.slateblue_100,
  },
  inputFieldActive: {
    top: 302,
    left: 41,
  },
  inputFieldIcon: {
    top: 434,
    left: 41,
  },
  inputFieldIcon1: {
    top: 500,
    left: 41,
  },
  login: {
    fontSize: FontSize.size_base,
    color: Color.slateblue_100,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    letterSpacing: 3,
    textAlign: "left",
    left: 0,
    top: 0,
    position: "absolute",
  },
  groupIcon: {
    height: "53.94%",
    width: "12.81%",
    top: "25.4%",
    right: "-1.08%",
    bottom: "20.66%",
    left: "88.27%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  loginParent: {
    top: 831,
    width: 93,
    height: 19,
    left: 41,
    position: "absolute",
  },
  createAccountInfo: {
    flex: 1,
    height: 896,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default CreateAccountINFO;
