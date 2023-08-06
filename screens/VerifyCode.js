import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import InputField from "../components/InputField";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const VerifyCode = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.verifyCode}
      onPress={() => navigation.navigate("Verified")}
    >
      <Text style={[styles.mainHeadline, styles.registerFlexBox]}>
        Verify Code
      </Text>
      <Text style={[styles.register, styles.registerFlexBox]}>Register</Text>
      <Text style={styles.bodyText}>
        <Text style={styles.checkYourSms}>{`Check your SMS inbox, we have sent 
you the code at `}</Text>
        <Text style={styles.textTypo}>+0 000 000 0000.</Text>
      </Text>
      <Text style={[styles.text1, styles.text1Typo]}>(00:52)</Text>
      <Text style={[styles.didntNotReceivedContainer, styles.text1Typo]}>
        <Text
          style={styles.thisSessionWill}
        >{`This session will end in 60 seconds.
Didn’t receive a code? `}</Text>
        <Text style={[styles.resendCode, styles.textTypo]}>Resend Code</Text>
      </Text>
      <Pressable
        style={styles.backBtn}
        onPress={() => navigation.navigate("VerifyCodeEmpty")}
      >
        <Image
          style={styles.image15Icon}
          contentFit="cover"
          source={require("../assets/image-15.png")}
        />
      </Pressable>
      <InputField />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  registerFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  text1Typo: {
    fontSize: FontSize.size_smi,
    lineHeight: 25,
    letterSpacing: 0,
    textAlign: "left",
    position: "absolute",
  },
  textTypo: {
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  mainHeadline: {
    top: 189,
    fontSize: FontSize.size_25xl,
    fontFamily: FontFamily.robotoRegular,
    color: Color.darkslateblue,
    textAlign: "left",
    left: 41,
  },
  register: {
    top: 690,
    left: 173,
    fontSize: FontSize.size_lg,
    lineHeight: 18,
    fontFamily: FontFamily.damion,
    color: Color.white,
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
  image15Icon: {
    width: 16,
    height: 16,
  },
  backBtn: {
    top: 57,
    borderRadius: Border.br_mini,
    shadowColor: "rgba(111, 136, 157, 0.25)",
    shadowOffset: {
      width: 0,
      height: 30,
    },
    shadowRadius: 65,
    elevation: 65,
    shadowOpacity: 1,
    width: 47,
    height: 47,
    padding: Padding.p_mini,
    alignItems: "flex-end",
    justifyContent: "flex-end",
    left: 41,
    position: "absolute",
    backgroundColor: Color.white,
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
