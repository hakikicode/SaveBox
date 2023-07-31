import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { FontSize, Border, Color, FontFamily } from "../GlobalStyles";

const VerifyCode = () => {
  return (
    <View style={styles.verifyCode}>
      <View style={styles.rectanglePosition}>
        <View style={[styles.rectangle, styles.rectanglePosition]} />
      </View>
      <Text style={styles.mainHeadline}>Verify Code</Text>
      <Text style={styles.register}>Register</Text>
      <Text style={styles.bodyText}>
        <Text style={styles.checkYourSms}>{`Check your SMS inbox, we have sent 
you the code at `}</Text>
        <Text style={styles.textTypo1}>+0 000 000 0000.</Text>
      </Text>
      <Text style={[styles.text1, styles.text1Typo]}>(00:52)</Text>
      <View style={styles.inputField}>
        <Image
          style={styles.layerBlurIcon}
          contentFit="cover"
          source={require("../assets/layer-blur1.png")}
        />
        <View style={[styles.rectangle1, styles.rectangleLayout1]} />
        <View style={[styles.rectangleCopy, styles.rectangleLayout1]} />
        <View style={[styles.rectangleCopy2, styles.rectangleLayout]} />
        <View style={[styles.rectangleCopy3, styles.rectangleLayout]} />
        <Text style={[styles.text2, styles.textTypo]}>8</Text>
        <Text style={[styles.text3, styles.textTypo]}>5</Text>
        <Text style={[styles.text4, styles.textTypo]}>2</Text>
        <Text style={[styles.text5, styles.textTypo]}>3</Text>
      </View>
      <Text style={[styles.didntNotReceivedContainer, styles.text1Typo]}>
        <Text
          style={styles.thisSessionWill}
        >{`This session will end in 60 seconds.
Didn’t receive a code? `}</Text>
        <Text style={[styles.resendCode, styles.textTypo1]}>Resend Code</Text>
      </Text>
      <View style={[styles.backBtn, styles.backLayout]}>
        <View style={[styles.backBtnChild, styles.backLayout]} />
        <Image
          style={styles.image15Icon}
          contentFit="cover"
          source={require("../assets/image-15.png")}
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
  text1Typo: {
    fontSize: FontSize.size_smi,
    lineHeight: 25,
    letterSpacing: 0,
    textAlign: "left",
    position: "absolute",
  },
  rectangleLayout1: {
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  rectangleLayout: {
    backgroundColor: Color.ghostwhite_100,
    borderRadius: Border.br_3xs,
    bottom: "22.22%",
    top: "0%",
    width: "21.08%",
    height: "77.78%",
    position: "absolute",
  },
  textTypo: {
    height: 38,
    width: 24,
    lineHeight: 40,
    fontSize: FontSize.size_21xl,
    top: 16,
    fontFamily: FontFamily.sFProDisplay,
    fontWeight: "700",
    textAlign: "left",
    position: "absolute",
  },
  textTypo1: {
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  backLayout: {
    height: 47,
    width: 47,
    position: "absolute",
  },
  rectangle: {
    backgroundColor: Color.white,
  },
  mainHeadline: {
    top: 189,
    fontSize: FontSize.size_25xl,
    fontFamily: FontFamily.gilroyBold,
    textAlign: "left",
    color: Color.darkslateblue,
    left: 41,
    position: "absolute",
  },
  register: {
    top: 690,
    left: 173,
    fontSize: FontSize.size_lg,
    lineHeight: 18,
    color: Color.white,
    fontFamily: FontFamily.sFProDisplay,
    fontWeight: "700",
    textAlign: "left",
    position: "absolute",
  },
  checkYourSms: {
    fontFamily: FontFamily.interRegular,
  },
  bodyText: {
    top: 256,
    fontSize: FontSize.size_mid,
    lineHeight: 25,
    letterSpacing: 0,
    textAlign: "left",
    color: Color.darkslateblue,
    left: 41,
    position: "absolute",
  },
  text1: {
    marginTop: 60,
    top: "50%",
    left: "10.39%",
    color: Color.royalblue_100,
    fontFamily: FontFamily.interRegular,
  },
  layerBlurIcon: {
    height: "206.67%",
    width: "53.61%",
    top: "-40%",
    right: "58.73%",
    bottom: "-66.67%",
    left: "-12.35%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  rectangle1: {
    right: "78.92%",
    left: "0%",
    backgroundColor: Color.royalblue_100,
    bottom: "22.22%",
    top: "0%",
    width: "21.08%",
    height: "77.78%",
    borderRadius: Border.br_3xs,
  },
  rectangleCopy: {
    height: "78.89%",
    width: "21.39%",
    top: "-0.56%",
    right: "52.26%",
    bottom: "21.67%",
    left: "26.36%",
    backgroundColor: "rgba(49, 75, 206, 0.14)",
    borderStyle: "solid",
    borderColor: "#314bce",
    borderWidth: 1,
  },
  rectangleCopy2: {
    right: "26.2%",
    left: "52.71%",
  },
  rectangleCopy3: {
    right: "0%",
    left: "78.92%",
  },
  text2: {
    left: 23,
    color: Color.white,
  },
  text3: {
    left: 110,
    color: Color.slateblue_100,
  },
  text4: {
    left: 198,
    color: Color.darkslateblue,
    height: 38,
    width: 24,
    lineHeight: 40,
    fontSize: FontSize.size_21xl,
  },
  text5: {
    left: 283,
    color: Color.darkslateblue,
    height: 38,
    width: 24,
    lineHeight: 40,
    fontSize: FontSize.size_21xl,
  },
  inputField: {
    height: "10.04%",
    width: "80.19%",
    top: "46.09%",
    right: "9.9%",
    bottom: "43.86%",
    left: "9.9%",
    position: "absolute",
  },
  thisSessionWill: {
    color: Color.slategray_200,
    fontFamily: FontFamily.interRegular,
  },
  resendCode: {
    textDecoration: "underline",
    color: Color.royalblue_100,
  },
  didntNotReceivedContainer: {
    top: 582,
    left: 41,
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
    height: 47,
    width: 47,
    backgroundColor: Color.white,
  },
  image15Icon: {
    left: 16,
    width: 16,
    height: 16,
    top: 16,
    position: "absolute",
  },
  backBtn: {
    top: 57,
    left: 41,
  },
  verifyCode: {
    flex: 1,
    width: "100%",
    height: 896,
    overflow: "hidden",
    backgroundColor: Color.white,
  },
});

export default VerifyCode;
