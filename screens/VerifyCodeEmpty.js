import * as React from "react";
import { Text, StyleSheet, Pressable, View } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import Frame14 from "../components/Frame14";
import { FontFamily, FontSize, Color, Border, Padding } from "../GlobalStyles";

const VerifyCodeEmpty = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.verifyCodeEmpty}
      onPress={() => navigation.navigate("VerifyCode")}
    >
      <Text style={styles.mainHeadline}>Verify Code</Text>
      <Text style={[styles.bodyText, styles.textFlexBox]}>
        <Text style={styles.checkYourSms}>{`Check your SMS inbox, we have sent 
you the code at `}</Text>
        <Text style={styles.textTypo}>+0 000 000 0000.</Text>
      </Text>
      <Pressable
        style={[styles.didntNotReceivedContainer, styles.backBtnPosition]}
        onPress={() => navigation.navigate("CreateAccountEnterPhoneNumber")}
      >
        <Text style={[styles.text1, styles.textFlexBox]}>
          <Text style={styles.didntReceiveA}>{`Didn’t receive a code? `}</Text>
          <Text style={[styles.resendCode, styles.textTypo]}>Resend Code</Text>
        </Text>
      </Pressable>
      <Pressable
        style={[styles.backBtn, styles.backBtnPosition]}
        onPress={() => navigation.navigate("CreateAccountEnterPhoneNumber")}
      >
        <Image
          style={styles.image15Icon}
          contentFit="cover"
          source={require("../assets/image-15.png")}
        />
      </Pressable>
      <Image
        style={styles.inputFieldIcon}
        contentFit="cover"
        source={require("../assets/input-field.png")}
      />
      <Frame14 />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  textFlexBox: {
    letterSpacing: 0,
    textAlign: "left",
  },
  backBtnPosition: {
    left: 41,
    position: "absolute",
  },
  textTypo: {
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  mainHeadline: {
    top: 189,
    fontSize: FontSize.size_25xl,
    lineHeight: 56,
    fontFamily: FontFamily.robotoRegular,
    textAlign: "left",
    color: Color.darkslateblue,
    left: 41,
    position: "absolute",
  },
  checkYourSms: {
    fontFamily: FontFamily.interRegular,
  },
  bodyText: {
    top: 256,
    fontSize: FontSize.size_lg,
    lineHeight: 25,
    color: Color.darkslateblue,
    letterSpacing: 0,
    left: 41,
    position: "absolute",
  },
  didntReceiveA: {
    color: Color.slategray_200,
    fontFamily: FontFamily.interRegular,
  },
  resendCode: {
    textDecoration: "underline",
    color: Color.royalblue_100,
  },
  text1: {
    fontSize: FontSize.size_smi,
    lineHeight: 25,
  },
  didntNotReceivedContainer: {
    top: 435,
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
    backgroundColor: Color.white,
    left: 41,
  },
  inputFieldIcon: {
    height: "3.13%",
    width: "80.44%",
    top: "44.64%",
    right: "9.78%",
    bottom: "52.23%",
    left: "9.78%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  verifyCodeEmpty: {
    flex: 1,
    width: "100%",
    height: 896,
    overflow: "hidden",
    backgroundColor: Color.white,
  },
});

export default VerifyCodeEmpty;
