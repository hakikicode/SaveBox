import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import LocationForm from "../components/LocationForm";
import BTNLarge2 from "../components/BTNLarge2";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const CreateAccountEnterPhoneN1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.createAccountEnterPhoneN}>
      <Text style={[styles.mainHeadline, styles.bodyTextPosition]}>
        Register
      </Text>
      <Text style={[styles.alreadyHaveAn, styles.googleTypo]}>
        Already have an account?
      </Text>
      <Text style={[styles.bodyText, styles.orFlexBox]}>
        <Text style={styles.pleaseEnter}>{`Please enter `}</Text>
        <Text style={styles.loginTypo}>your phone number</Text>
        <Text style={styles.pleaseEnter}>{` and `}</Text>
        <Text style={styles.loginTypo}>location</Text>
        <Text style={styles.pleaseEnter}> so we can verify you.</Text>
      </Text>
      <LocationForm locationOptions="America" propFontSize={15} />
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
      <Text style={[styles.enterYourPhone, styles.enterTypo]}>
        Enter your Phone Number
      </Text>
      <View style={styles.inputFieldActive}>
        <Text style={[styles.text, styles.textTypo]}>+00 000 0000</Text>
      </View>
      <BTNLarge2 />
      <Pressable
        style={styles.loginParent}
        onPress={() => navigation.navigate("SignInEmpty")}
      >
        <Text style={[styles.login, styles.textTypo]}>LOGIN</Text>
        <Image
          style={styles.groupIcon}
          contentFit="cover"
          source={require("../assets/group.png")}
        />
      </Pressable>
      <View style={[styles.frame, styles.frameFlexBox]}>
        <View style={[styles.frame1, styles.frameFlexBox]}>
          <View style={[styles.googleBtn, styles.btnLayout]}>
            <Text style={[styles.google, styles.googleTypo]}>GOOGLE</Text>
          </View>
          <Text style={styles.register}>Register</Text>
        </View>
        <View style={[styles.facebookBtn, styles.btnLayout]}>
          <Text style={[styles.google, styles.googleTypo]}>FACEBOOK</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bodyTextPosition: {
    color: Color.darkslateblue,
    left: 41,
    position: "absolute",
  },
  googleTypo: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_sm,
    color: Color.darkslateblue,
  },
  orFlexBox: {
    letterSpacing: 0,
    textAlign: "left",
  },
  frameFlexBox: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
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
    fontFamily: FontFamily.robotoRegular,
  },
  alreadyHaveAn: {
    top: 801,
    lineHeight: 17,
    textAlign: "left",
    left: 41,
    position: "absolute",
  },
  pleaseEnter: {
    fontFamily: FontFamily.interRegular,
  },
  loginTypo: {
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  bodyText: {
    top: 205,
    lineHeight: 25,
    width: 347,
    fontSize: FontSize.size_lg,
    color: Color.darkslateblue,
    left: 41,
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
  },
  lineCopy2Parent: {
    top: 634,
    left: 122,
    width: 171,
    position: "absolute",
    justifyContent: "space-between",
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
  enterYourPhone: {
    top: 434,
    fontSize: FontSize.size_base,
    left: 42,
    fontWeight: "600",
    lineHeight: 20,
    textAlign: "left",
    color: Color.darkslateblue,
    position: "absolute",
  },
  text: {
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    lineHeight: 20,
  },
  inputFieldActive: {
    height: "6.03%",
    width: "80.43%",
    top: "52.29%",
    right: "9.78%",
    bottom: "41.69%",
    left: "9.78%",
    backgroundColor: "rgba(49, 75, 206, 0.06)",
    borderStyle: "solid",
    borderColor: "#314bce",
    borderWidth: 1,
    paddingHorizontal: Padding.p_xl,
    paddingVertical: Padding.p_base,
    justifyContent: "flex-end",
    borderRadius: Border.br_8xs,
    position: "absolute",
  },
  login: {
    letterSpacing: 3,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
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
    left: 41,
    position: "absolute",
  },
  google: {
    alignSelf: "stretch",
    textAlign: "center",
    letterSpacing: 3,
  },
  googleBtn: {
    paddingHorizontal: Padding.p_20xl,
    paddingVertical: Padding.p_0,
    justifyContent: "center",
  },
  register: {
    lineHeight: 18,
    fontFamily: FontFamily.damion,
    color: Color.white,
    fontSize: FontSize.size_lg,
    textAlign: "left",
  },
  frame1: {
    width: 186,
    overflow: "hidden",
  },
  facebookBtn: {
    paddingHorizontal: Padding.p_9xl,
    paddingVertical: Padding.p_mid,
    justifyContent: "flex-end",
  },
  frame: {
    top: 674,
    width: 332,
    left: 41,
    position: "absolute",
    overflow: "hidden",
  },
  createAccountEnterPhoneN: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    height: 896,
    overflow: "hidden",
  },
});

export default CreateAccountEnterPhoneN1;
