import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import Frame15 from "../components/Frame15";
import { FontFamily, FontSize, Color, Padding, Border } from "../GlobalStyles";

const CreateAccountINFO = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.createAccountInfo}>
      <Text style={[styles.mainHeadline, styles.mainHeadlinePosition]}>
        Register
      </Text>
      <Text style={[styles.alreadyHaveAn, styles.googleTypo]}>
        Already have an account?
      </Text>
      <View style={[styles.lineCopy2Parent, styles.frame1FlexBox]}>
        <Image
          style={styles.lineCopy2}
          contentFit="cover"
          source={require("../assets/line-copy-21.png")}
        />
        <Text style={[styles.or, styles.orLayout]}>or</Text>
        <Image
          style={styles.lineCopy2}
          contentFit="cover"
          source={require("../assets/line-copy-31.png")}
        />
      </View>
      <View style={[styles.inputField, styles.inputPosition]}>
        <Text style={styles.michaelmooremailcom}>michael.moore@mail.com</Text>
      </View>
      <View style={[styles.inputFieldActive, styles.frameChildBorder]}>
        <Text style={styles.michaelMoore}>Michael Moore</Text>
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
      <Pressable
        style={[styles.loginParent, styles.inputPosition]}
        onPress={() => navigation.navigate("SignInEmpty")}
      >
        <Text style={[styles.login, styles.loginTypo]}>LOGIN</Text>
        <Image
          style={styles.groupIcon}
          contentFit="cover"
          source={require("../assets/group.png")}
        />
      </Pressable>
      <View style={styles.frame}>
        <View style={[styles.googleBtn, styles.btnLayout]}>
          <Text style={[styles.google, styles.googleTypo]}>GOOGLE</Text>
        </View>
        <View style={[styles.facebookBtn, styles.btnLayout]}>
          <Text style={[styles.google, styles.googleTypo]}>FACEBOOK</Text>
        </View>
      </View>
      <View style={[styles.frame1, styles.frame1FlexBox]}>
        <View style={[styles.frameChild, styles.frameChildBorder]} />
        <Text style={[styles.iveReadAndContainer, styles.orLayout]}>
          <Text style={styles.iveReadAnd}>{`I’ve read and agree to the `}</Text>
          <Text style={styles.loginTypo}>terms</Text>
          <Text style={styles.iveReadAnd}>{` of `}</Text>
          <Text style={styles.loginTypo}>privacy policy</Text>
        </Text>
      </View>
      <Frame15 />
    </View>
  );
};

const styles = StyleSheet.create({
  mainHeadlinePosition: {
    textAlign: "left",
    left: 41,
    position: "absolute",
  },
  googleTypo: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_sm,
    color: Color.darkslateblue,
  },
  frame1FlexBox: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  orLayout: {
    lineHeight: 15,
    textAlign: "left",
  },
  inputPosition: {
    justifyContent: "flex-end",
    left: 41,
    position: "absolute",
  },
  frameChildBorder: {
    borderWidth: 1,
    borderStyle: "solid",
  },
  inputIconLayout: {
    height: 54,
    width: 332,
  },
  loginTypo: {
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    color: Color.slateblue_100,
  },
  btnLayout: {
    justifyContent: "center",
    paddingVertical: Padding.p_0,
    width: 161,
    borderRadius: Border.br_8xs,
    backgroundColor: Color.ghostwhite_100,
  },
  mainHeadline: {
    top: 91,
    fontSize: FontSize.size_25xl,
    lineHeight: 56,
    color: Color.darkslateblue,
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
  lineCopy2: {
    width: 63,
    height: 2,
    opacity: 0.06,
  },
  or: {
    fontSize: FontSize.size_mini,
    letterSpacing: 0,
    color: Color.slategray_200,
    fontFamily: FontFamily.robotoRegular,
    lineHeight: 15,
  },
  lineCopy2Parent: {
    top: 262,
    left: 122,
    width: 171,
  },
  michaelmooremailcom: {
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    lineHeight: 20,
    fontSize: FontSize.size_base,
    textAlign: "left",
    color: Color.darkslateblue,
  },
  inputField: {
    top: 368,
    paddingVertical: 16,
    paddingHorizontal: Padding.p_xl,
    borderRadius: Border.br_5xs,
    justifyContent: "flex-end",
    height: 54,
    width: 332,
    backgroundColor: Color.ghostwhite_100,
  },
  michaelMoore: {
    color: Color.slateblue_100,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    lineHeight: 20,
    fontSize: FontSize.size_base,
    textAlign: "left",
  },
  inputFieldActive: {
    top: 302,
    backgroundColor: Color.slateblue_200,
    borderColor: "#314bce",
    width: 333,
    height: 55,
    justifyContent: "flex-end",
    left: 41,
    position: "absolute",
    paddingVertical: 16,
    paddingHorizontal: Padding.p_xl,
    borderRadius: Border.br_5xs,
    borderStyle: "solid",
  },
  inputFieldIcon: {
    top: 434,
    left: 41,
    height: 54,
    position: "absolute",
  },
  inputFieldIcon1: {
    top: 500,
    left: 41,
    height: 54,
    position: "absolute",
  },
  login: {
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
  },
  google: {
    alignSelf: "stretch",
    textAlign: "center",
    letterSpacing: 3,
  },
  googleBtn: {
    paddingHorizontal: Padding.p_20xl,
  },
  facebookBtn: {
    paddingHorizontal: Padding.p_9xl,
  },
  frame: {
    top: 188,
    width: 332,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    left: 41,
    position: "absolute",
    overflow: "hidden",
  },
  frameChild: {
    borderRadius: Border.br_9xs,
    backgroundColor: Color.royalblue_300,
    borderColor: "#5771f9",
    width: 22,
    height: 22,
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
    overflow: "hidden",
  },
  createAccountInfo: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    height: 896,
    overflow: "hidden",
  },
});

export default CreateAccountINFO;
