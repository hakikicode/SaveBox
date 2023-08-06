import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import LocationForm from "../components/LocationForm";
import StaticButton from "../components/StaticButton";
import { FontFamily, FontSize, Padding, Color, Border } from "../GlobalStyles";

const CreateAccountEnterPhoneN = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.createAccountEnterPhoneN}
      onPress={() => navigation.navigate("CreateAccountEnterPhoneNumber")}
    >
      <Text style={styles.mainHeadline}>Register</Text>
      <Text style={[styles.alreadyHaveAn, styles.googleTypo]}>
        Already have an account?
      </Text>
      <Text style={[styles.bodyText, styles.orFlexBox]}>
        <Text style={styles.pleaseEnter}>{`Please enter `}</Text>
        <Text style={styles.yourPhoneNumber}>your phone number</Text>
        <Text style={styles.pleaseEnter}>{` and `}</Text>
        <Text style={styles.yourPhoneNumber}>location</Text>
        <Text style={styles.pleaseEnter}> so we can verify you.</Text>
      </Text>
      <LocationForm locationOptions="Choose your location" />
      <View style={[styles.phoneNumberInputField, styles.googleBtnFlexBox]}>
        <Text style={[styles.enterYourPhone, styles.orFlexBox]}>|</Text>
      </View>
      <View style={[styles.lineCopy2Parent, styles.frameFlexBox]}>
        <Image
          style={styles.lineCopy2}
          contentFit="cover"
          source={require("../assets/line-copy-2.png")}
        />
        <Text style={[styles.or, styles.orFlexBox]}>or</Text>
        <Image
          style={styles.lineCopy2}
          contentFit="cover"
          source={require("../assets/line-copy-3.png")}
        />
      </View>
      <Text style={[styles.enterYourLocation, styles.enterTypo]}>
        Enter your location
      </Text>
      <Text style={[styles.enterYourPhone1, styles.enterTypo]}>
        Enter your Phone Number
      </Text>
      <Pressable
        style={styles.loginParent}
        onPress={() => navigation.navigate("SignInEmpty")}
      >
        <Text style={styles.login}>LOGIN</Text>
        <Image
          style={styles.groupIcon}
          contentFit="cover"
          source={require("../assets/group.png")}
        />
      </Pressable>
      <View style={[styles.frame, styles.framePosition]}>
        <StaticButton />
        <Text style={[styles.next, styles.nextTypo]}>Next</Text>
      </View>
      <View style={[styles.frame1, styles.framePosition]}>
        <View style={[styles.frame2, styles.frameFlexBox]}>
          <View style={[styles.googleBtn, styles.btnLayout]}>
            <Text style={[styles.google, styles.googleTypo]}>GOOGLE</Text>
          </View>
          <Text style={styles.nextTypo}>Register</Text>
        </View>
        <View style={[styles.facebookBtn, styles.btnLayout]}>
          <Text style={[styles.google, styles.googleTypo]}>FACEBOOK</Text>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  googleTypo: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_sm,
  },
  orFlexBox: {
    letterSpacing: 0,
    textAlign: "left",
  },
  googleBtnFlexBox: {
    justifyContent: "center",
    paddingVertical: Padding.p_0,
  },
  frameFlexBox: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  enterTypo: {
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    lineHeight: 20,
    fontSize: FontSize.size_base,
    left: 42,
    textAlign: "left",
    color: Color.darkslateblue,
    position: "absolute",
  },
  framePosition: {
    width: 332,
    alignItems: "center",
    left: 41,
    position: "absolute",
    overflow: "hidden",
  },
  nextTypo: {
    color: Color.white,
    fontFamily: FontFamily.damion,
    lineHeight: 18,
    fontSize: FontSize.size_lg,
    textAlign: "left",
  },
  btnLayout: {
    width: 161,
    backgroundColor: Color.ghostwhite_100,
    borderRadius: Border.br_8xs,
  },
  mainHeadline: {
    top: 91,
    fontSize: FontSize.size_25xl,
    lineHeight: 56,
    textAlign: "left",
    left: 41,
    color: Color.darkslateblue,
    fontFamily: FontFamily.robotoRegular,
    position: "absolute",
  },
  alreadyHaveAn: {
    top: 801,
    lineHeight: 17,
    left: 42,
    fontWeight: "500",
    fontSize: FontSize.size_sm,
    textAlign: "left",
    color: Color.darkslateblue,
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
    fontSize: FontSize.size_lg,
    letterSpacing: 0,
    color: Color.darkslateblue,
    left: 41,
    position: "absolute",
  },
  enterYourPhone: {
    color: Color.slategray_100,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_sm,
  },
  phoneNumberInputField: {
    height: "5.92%",
    width: "80.19%",
    top: "52.34%",
    right: "9.9%",
    bottom: "41.74%",
    left: "9.9%",
    paddingHorizontal: 12,
    backgroundColor: Color.ghostwhite_100,
    borderRadius: Border.br_8xs,
    paddingVertical: Padding.p_0,
    position: "absolute",
  },
  lineCopy2: {
    width: 63,
    height: 2,
    opacity: 0.06,
  },
  or: {
    fontSize: FontSize.size_mini,
    color: Color.slategray_200,
    fontFamily: FontFamily.robotoRegular,
    letterSpacing: 0,
  },
  lineCopy2Parent: {
    top: 634,
    left: 122,
    width: 171,
    alignItems: "center",
    position: "absolute",
    justifyContent: "space-between",
  },
  enterYourLocation: {
    top: 320,
  },
  enterYourPhone1: {
    top: 434,
  },
  login: {
    color: Color.slateblue_100,
    letterSpacing: 3,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
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
    alignItems: "center",
    flexDirection: "row",
    left: 42,
    position: "absolute",
  },
  next: {
    marginTop: -37,
  },
  frame: {
    top: 557,
    justifyContent: "flex-end",
  },
  google: {
    alignSelf: "stretch",
    textAlign: "center",
    letterSpacing: 3,
    color: Color.darkslateblue,
    fontWeight: "500",
    fontSize: FontSize.size_sm,
  },
  googleBtn: {
    paddingHorizontal: Padding.p_20xl,
    justifyContent: "center",
    paddingVertical: Padding.p_0,
  },
  frame2: {
    width: 186,
    alignItems: "center",
    overflow: "hidden",
  },
  facebookBtn: {
    paddingHorizontal: Padding.p_9xl,
    paddingVertical: Padding.p_mid,
    justifyContent: "flex-end",
  },
  frame1: {
    top: 674,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  createAccountEnterPhoneN: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    height: 896,
    overflow: "hidden",
  },
});

export default CreateAccountEnterPhoneN;
