import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import Frame16 from "../components/Frame16";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const ForgotPasswordEmpty = () => {
  return (
    <View style={styles.forgotPasswordEmpty}>
      <View style={[styles.backBtn, styles.framePosition]}>
        <Image
          style={styles.image15Icon}
          contentFit="cover"
          source={require("../assets/image-15.png")}
        />
      </View>
      <Text style={styles.mainHeadline}>Forgot Password</Text>
      <Text style={styles.bodyText}>
        <Text style={styles.pleaseEnterYour}>{`Please enter your `}</Text>
        <Text style={styles.emailAddress}>email address</Text>
        <Text style={styles.pleaseEnterYour}>{` `}</Text>
        <Text style={styles.emailAddress}>{`or
phone number`}</Text>
        <Text style={styles.pleaseEnterYour}> to reset your password</Text>
      </Text>
      <View style={styles.inputField}>
        <Text style={styles.enterEmailAddress}>Enter Email Address</Text>
      </View>
      <View style={[styles.frame, styles.framePosition]}>
        <View style={styles.staticButton}>
          <Text style={[styles.send, styles.sendTypo]}>Send</Text>
        </View>
        <Text style={[styles.send1, styles.sendTypo]}>Send</Text>
      </View>
      <Frame16 />
    </View>
  );
};

const styles = StyleSheet.create({
  framePosition: {
    justifyContent: "flex-end",
    left: 41,
    position: "absolute",
  },
  sendTypo: {
    color: Color.white,
    fontFamily: FontFamily.damion,
    lineHeight: 18,
    fontSize: FontSize.size_lg,
    textAlign: "left",
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
    textAlign: "left",
    color: Color.darkslateblue,
    left: 41,
    position: "absolute",
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
    textAlign: "left",
    color: Color.darkslateblue,
    position: "absolute",
  },
  enterEmailAddress: {
    fontSize: FontSize.size_sm,
    lineHeight: 17,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: Color.slategray_100,
    textAlign: "left",
  },
  inputField: {
    top: 380,
    left: 34,
    backgroundColor: Color.ghostwhite_100,
    width: 346,
    height: 56,
    padding: Padding.p_lg,
    borderRadius: Border.br_5xs,
    position: "absolute",
  },
  send: {
    alignSelf: "stretch",
  },
  staticButton: {
    backgroundColor: Color.royalblue_100,
    paddingHorizontal: 145,
    paddingVertical: Padding.p_0,
    justifyContent: "center",
    alignSelf: "stretch",
    borderRadius: Border.br_5xs,
  },
  send1: {
    marginTop: -37,
  },
  frame: {
    top: 500,
    width: 332,
    alignItems: "center",
    overflow: "hidden",
  },
  forgotPasswordEmpty: {
    flex: 1,
    width: "100%",
    height: 896,
    overflow: "hidden",
    backgroundColor: Color.white,
  },
});

export default ForgotPasswordEmpty;
