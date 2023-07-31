import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const CreateAccountEnterPhoneN1 = () => {
  return (
    <View style={styles.createAccountEnterPhoneN}>
      <View style={styles.rectanglePosition4}>
        <View style={[styles.rectangle, styles.rectanglePosition4]} />
      </View>
      <Text style={styles.mainHeadline}>Register</Text>
      <Text style={[styles.register, styles.nextTypo]}>Register</Text>
      <Text style={[styles.alreadyHaveAn, styles.alreadyHaveAnTypo]}>
        Already have an account?
      </Text>
      <Text style={styles.bodyText}>
        <Text style={styles.pleaseEnter}>{`Please enter `}</Text>
        <Text style={styles.yourPhoneNumber}>your phone number</Text>
        <Text style={styles.pleaseEnter}>{` and `}</Text>
        <Text style={styles.yourPhoneNumber}>location</Text>
        <Text style={styles.pleaseEnter}> so we can verify you.</Text>
      </Text>
      <View style={[styles.locationInputField, styles.inputPosition]}>
        <View style={[styles.rectangle1, styles.rectangleLayout]} />
        <Image
          style={[styles.backArrowBlackCopy, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/back-arrow-black-copy.png")}
        />
        <Image
          style={[styles.flagIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/flag.png")}
        />
        <Text style={[styles.enterYourPhone, styles.orTypo]}>America</Text>
        <Image
          style={[styles.lineIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/line.png")}
        />
      </View>
      <View style={styles.orParent}>
        <Text style={[styles.or, styles.orTypo]}>or</Text>
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
      <View style={[styles.googleBtn, styles.btnPosition]}>
        <View style={[styles.rectangle2, styles.rectangleLayout]} />
        <Text style={[styles.google, styles.googleTypo]}>GOOGLE</Text>
      </View>
      <View style={[styles.facebookBtn, styles.btnPosition]}>
        <View style={[styles.rectangle2, styles.rectangleLayout]} />
        <Text style={[styles.facebook, styles.googleTypo]}>FACEBOOK</Text>
      </View>
      <Text style={[styles.enterYourLocation, styles.enterTypo]}>
        Enter your location
      </Text>
      <Text style={[styles.enterYourPhone1, styles.enterTypo]}>
        Enter your Phone Number
      </Text>
      <View style={[styles.inputFieldActive, styles.inputPosition]}>
        <View style={[styles.rectangle4, styles.rectangleLayout]} />
        <Text style={[styles.text, styles.textTypo]}>+00 000 0000</Text>
      </View>
      <View style={[styles.btnLarge, styles.btnLargePosition]}>
        <View style={[styles.btnLargeChild, styles.btnLayout]} />
        <View style={[styles.btnLargeItem, styles.btnLayout]} />
        <Text style={[styles.next, styles.nextTypo]}>Next</Text>
      </View>
      <View style={[styles.loginParent, styles.btnLargePosition]}>
        <Text style={[styles.login, styles.textTypo]}>LOGIN</Text>
        <Image
          style={[styles.groupIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/group5.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rectanglePosition4: {
    height: 897,
    width: 414,
    left: 0,
    top: 0,
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
  alreadyHaveAnTypo: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  inputPosition: {
    width: "80.19%",
    height: "5.92%",
    left: "9.9%",
    right: "9.9%",
    position: "absolute",
  },
  rectangleLayout: {
    borderRadius: Border.br_8xs,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  orTypo: {
    fontSize: FontSize.size_mini,
    top: "50%",
    letterSpacing: 0,
    textAlign: "left",
    position: "absolute",
  },
  lineLayout: {
    opacity: 0.06,
    width: "36.75%",
    height: "11.11%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  btnPosition: {
    bottom: "18.86%",
    top: "75.22%",
    width: "38.89%",
    height: "5.92%",
    position: "absolute",
  },
  googleTypo: {
    textAlign: "center",
    letterSpacing: 3,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_sm,
    color: Color.darkslateblue,
    position: "absolute",
  },
  enterTypo: {
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    lineHeight: 20,
  },
  textTypo: {
    color: Color.slateblue_100,
    fontSize: FontSize.size_base,
    textAlign: "left",
    position: "absolute",
  },
  btnLargePosition: {
    left: 41,
    position: "absolute",
  },
  btnLayout: {
    borderRadius: Border.br_5xs,
    position: "absolute",
  },
  rectangle: {
    backgroundColor: Color.white,
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
    top: 690,
    left: 173,
  },
  alreadyHaveAn: {
    top: 801,
    lineHeight: 17,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    textAlign: "left",
    color: Color.darkslateblue,
    left: 41,
    position: "absolute",
  },
  pleaseEnter: {
    fontFamily: FontFamily.interRegular,
  },
  yourPhoneNumber: {
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  bodyText: {
    top: 205,
    lineHeight: 25,
    width: 347,
    letterSpacing: 0,
    fontSize: FontSize.size_lg,
    textAlign: "left",
    color: Color.darkslateblue,
    left: 41,
    position: "absolute",
  },
  rectangle1: {
    shadowColor: "rgba(138, 149, 158, 0.15)",
    shadowOffset: {
      width: 0,
      height: 15,
    },
    shadowRadius: 60,
    elevation: 60,
    shadowOpacity: 1,
    left: "0%",
    right: "0%",
    top: "0%",
    width: "100%",
    bottom: "0%",
    height: "100%",
    borderRadius: Border.br_8xs,
    backgroundColor: Color.white,
  },
  backArrowBlackCopy: {
    height: "12.03%",
    width: "3.2%",
    top: "47.76%",
    right: "5.84%",
    bottom: "40.21%",
    left: "90.96%",
  },
  flagIcon: {
    height: "43.4%",
    width: "10.54%",
    top: "32.08%",
    right: "83.43%",
    bottom: "24.53%",
    left: "6.02%",
  },
  enterYourPhone: {
    marginTop: -7.5,
    left: "27.41%",
    color: Color.slategray_100,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  lineIcon: {
    height: "58.49%",
    width: "0.3%",
    top: "25.47%",
    right: "76.81%",
    bottom: "16.04%",
    left: "22.89%",
  },
  locationInputField: {
    top: "39.62%",
    bottom: "54.46%",
    left: "9.9%",
    right: "9.9%",
  },
  or: {
    marginTop: -9,
    left: "45.64%",
    color: Color.slategray_200,
    fontFamily: FontFamily.sFProDisplay,
    fontSize: FontSize.size_mini,
  },
  lineCopy2: {
    top: "47.2%",
    right: "63.43%",
    bottom: "41.69%",
    left: "-0.18%",
  },
  lineCopy3: {
    top: "51.37%",
    right: "-0.29%",
    bottom: "37.52%",
    left: "63.54%",
  },
  orParent: {
    marginTop: 186,
    width: "41.28%",
    right: "29.25%",
    left: "29.47%",
    height: 18,
    top: "50%",
    position: "absolute",
  },
  rectangle2: {
    backgroundColor: Color.ghostwhite_100,
    left: "0%",
    right: "0%",
    top: "0%",
    width: "100%",
    bottom: "0%",
    height: "100%",
    borderRadius: Border.br_8xs,
  },
  google: {
    top: 18,
    left: 39,
  },
  googleBtn: {
    right: "51.21%",
    left: "9.9%",
  },
  facebook: {
    top: 19,
    left: 28,
  },
  facebookBtn: {
    left: "51.21%",
    right: "9.9%",
  },
  enterYourLocation: {
    top: 320,
    fontSize: FontSize.size_base,
    left: 42,
    fontWeight: "600",
    lineHeight: 20,
    textAlign: "left",
    color: Color.darkslateblue,
    position: "absolute",
  },
  enterYourPhone1: {
    top: 434,
    fontSize: FontSize.size_base,
    left: 42,
    fontWeight: "600",
    lineHeight: 20,
    textAlign: "left",
    color: Color.darkslateblue,
    position: "absolute",
  },
  rectangle4: {
    height: "101.89%",
    width: "100.3%",
    top: "-0.94%",
    right: "-0.15%",
    bottom: "-0.94%",
    left: "-0.15%",
    backgroundColor: "rgba(49, 75, 206, 0.06)",
    borderStyle: "solid",
    borderColor: "#314bce",
    borderWidth: 1,
  },
  text: {
    top: 17,
    left: 20,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    lineHeight: 20,
  },
  inputFieldActive: {
    top: "52.34%",
    bottom: "41.74%",
    left: "9.9%",
    right: "9.9%",
  },
  btnLargeChild: {
    height: "53.95%",
    width: "70.48%",
    top: "46.05%",
    right: "15.66%",
    left: "13.86%",
    backgroundColor: Color.royalblue_300,
    bottom: "0%",
  },
  btnLargeItem: {
    height: "73.68%",
    bottom: "26.32%",
    backgroundColor: Color.royalblue_100,
    left: "0%",
    right: "0%",
    top: "0%",
    width: "100%",
  },
  next: {
    top: "25%",
    left: "44.28%",
  },
  btnLarge: {
    top: 557,
    width: 332,
    height: 76,
  },
  login: {
    letterSpacing: 3,
    color: Color.slateblue_100,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    left: 0,
    top: 0,
  },
  groupIcon: {
    height: "53.94%",
    width: "12.81%",
    top: "25.4%",
    right: "-1.08%",
    bottom: "20.66%",
    left: "88.27%",
  },
  loginParent: {
    top: 831,
    width: 93,
    height: 19,
  },
  createAccountEnterPhoneN: {
    flex: 1,
    height: 896,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default CreateAccountEnterPhoneN1;
