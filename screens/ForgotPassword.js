import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import BTNLarge1 from "../components/BTNLarge1";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const ForgotPassword = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.forgotPassword}>
      <Text style={[styles.register, styles.sendTypo]}>Register</Text>
      <View style={[styles.backBtn, styles.framePosition]}>
        <Image
          style={styles.image15Icon}
          contentFit="cover"
          source={require("../assets/image-15.png")}
        />
      </View>
      <Text style={[styles.mainHeadline, styles.bodyTextClr]}>
        Forgot Password
      </Text>
      <Text style={[styles.bodyText, styles.bodyTextClr]}>
        <Text style={styles.pleaseEnterYour}>{`Please enter your `}</Text>
        <Text style={styles.emailAddress}>email address</Text>
        <Text style={styles.pleaseEnterYour}>{` `}</Text>
        <Text style={styles.emailAddress}>{`or
phone number`}</Text>
        <Text style={styles.pleaseEnterYour}> to reset your password</Text>
      </Text>
      <View style={styles.inputFieldActive}>
        <Text style={styles.michaelmooremailcom}>michael.moore@mail.com</Text>
      </View>
      <Pressable
        style={[styles.frame, styles.framePosition]}
        onPress={() => navigation.navigate("SignInInfo")}
      >
        <BTNLarge1 />
        <Text style={[styles.send, styles.sendTypo]}>Send</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  sendTypo: {
    color: Color.white,
    fontFamily: FontFamily.damion,
    lineHeight: 18,
    textAlign: "left",
    fontSize: FontSize.size_lg,
  },
  framePosition: {
    justifyContent: "flex-end",
    left: 41,
    position: "absolute",
  },
  bodyTextClr: {
    color: Color.darkslateblue,
    textAlign: "left",
    position: "absolute",
  },
  register: {
    top: 690,
    left: 173,
    textAlign: "left",
    position: "absolute",
  },
  image15Icon: {
    width: 16,
    height: 16,
  },
  backBtn: {
    top: 58,
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
    backgroundColor: Color.white,
  },
  mainHeadline: {
    top: 190,
    fontSize: FontSize.size_25xl,
    fontFamily: FontFamily.robotoRegular,
    left: 41,
  },
  pleaseEnterYour: {
    fontFamily: FontFamily.interRegular,
  },
  emailAddress: {
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
  },
  bodyText: {
    top: 258,
    left: 42,
    letterSpacing: 0,
    lineHeight: 26,
    fontSize: FontSize.size_lg,
    color: Color.darkslateblue,
  },
  michaelmooremailcom: {
    fontSize: FontSize.size_base,
    lineHeight: 20,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    color: Color.slateblue_100,
    textAlign: "left",
  },
  inputFieldActive: {
    top: 380,
    borderRadius: Border.br_5xs,
    backgroundColor: Color.slateblue_300,
    borderStyle: "solid",
    borderColor: "#314bce",
    borderWidth: 1,
    width: 333,
    height: 57,
    paddingHorizontal: Padding.p_lg,
    paddingVertical: Padding.p_0,
    justifyContent: "center",
    left: 41,
    position: "absolute",
  },
  send: {
    marginTop: -57,
    textAlign: "left",
  },
  frame: {
    top: 500,
    width: 332,
    alignItems: "center",
    overflow: "hidden",
  },
  forgotPassword: {
    flex: 1,
    width: "100%",
    height: 896,
    overflow: "hidden",
    backgroundColor: Color.white,
  },
});

export default ForgotPassword;
