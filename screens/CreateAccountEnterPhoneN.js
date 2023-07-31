import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const CreateAccountEnterPhoneN = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.createAccountEnterPhoneN}
      onPress={() => navigation.navigate("CreateAccountEnterPhoneNumber")}
    >
      <View style={styles.rectanglePosition1}>
        <View style={[styles.rectangle, styles.rectanglePosition1]} />
      </View>
      <Text style={styles.mainHeadline}>Register</Text>
      <Text style={[styles.register, styles.registerTypo]}>Register</Text>
      <Text style={styles.alreadyHaveAn}>Already have an account?</Text>
      <Text style={[styles.bodyText, styles.orFlexBox]}>
        <Text style={styles.pleaseEnter}>{`Please enter `}</Text>
        <Text style={styles.yourPhoneNumber}>your phone number</Text>
        <Text style={styles.pleaseEnter}>{` and `}</Text>
        <Text style={styles.yourPhoneNumber}>location</Text>
        <Text style={styles.pleaseEnter}> so we can verify you.</Text>
      </Text>
      <View style={[styles.locationInputField, styles.inputPosition]}>
        <View style={[styles.rectangle1, styles.rectanglePosition]} />
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
        <Text style={[styles.enterYourPhone, styles.enterTypo1]}>
          Choose your location
        </Text>
        <Image
          style={[styles.lineIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/line.png")}
        />
      </View>
      <View style={[styles.phoneNumberInputField, styles.inputPosition]}>
        <View style={[styles.rectangle2, styles.rectanglePosition]} />
        <Text style={[styles.enterYourPhone1, styles.enterTypo1]}>|</Text>
      </View>
      <Text style={[styles.next, styles.registerTypo]}>Next</Text>
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
      <View style={[styles.googleBtn, styles.btnPosition]}>
        <View style={[styles.rectangle2, styles.rectanglePosition]} />
        <Text style={[styles.google, styles.googleTypo]}>GOOGLE</Text>
      </View>
      <View style={[styles.facebookBtn, styles.btnPosition]}>
        <View style={[styles.rectangle2, styles.rectanglePosition]} />
        <Text style={[styles.facebook, styles.googleTypo]}>FACEBOOK</Text>
      </View>
      <Text style={[styles.enterYourLocation, styles.enterTypo]}>
        Enter your location
      </Text>
      <Text style={[styles.enterYourPhone2, styles.enterTypo]}>
        Enter your Phone Number
      </Text>
      <View style={styles.staticButton}>
        <View style={styles.staticButtonChild} />
        <Text style={[styles.register1, styles.registerTypo]}>Register</Text>
      </View>
      <View style={styles.loginParent}>
        <Text style={styles.login}>LOGIN</Text>
        <Image
          style={[styles.groupIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/group5.png")}
        />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  rectanglePosition1: {
    height: 897,
    width: 414,
    left: 0,
    top: 0,
    position: "absolute",
  },
  registerTypo: {
    color: Color.white,
    fontWeight: "700",
    lineHeight: 18,
    fontFamily: FontFamily.sFProDisplay,
    fontSize: FontSize.size_lg,
    textAlign: "left",
    position: "absolute",
  },
  orFlexBox: {
    letterSpacing: 0,
    textAlign: "left",
  },
  inputPosition: {
    width: "80.19%",
    height: "5.92%",
    left: "9.9%",
    right: "9.9%",
    position: "absolute",
  },
  rectanglePosition: {
    borderRadius: Border.br_8xs,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  enterTypo1: {
    color: Color.slategray_100,
    top: "50%",
    letterSpacing: 0,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_sm,
    textAlign: "left",
    position: "absolute",
  },
  orPosition: {
    top: "50%",
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
    fontSize: FontSize.size_base,
    left: 42,
    textAlign: "left",
    color: Color.darkslateblue,
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
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_sm,
    left: 42,
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
    letterSpacing: 0,
    fontSize: FontSize.size_lg,
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
  rectangle2: {
    backgroundColor: Color.ghostwhite_100,
  },
  enterYourPhone1: {
    marginTop: -8.5,
    left: "3.61%",
  },
  phoneNumberInputField: {
    top: "52.34%",
    bottom: "41.74%",
    left: "9.9%",
    right: "9.9%",
  },
  next: {
    top: 576,
    left: 188,
  },
  or: {
    marginTop: -9,
    left: "45.64%",
    fontSize: FontSize.size_mini,
    color: Color.slategray_200,
    letterSpacing: 0,
    textAlign: "left",
    fontFamily: FontFamily.sFProDisplay,
    top: "50%",
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
  },
  enterYourPhone2: {
    top: 434,
  },
  staticButtonChild: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.royalblue_100,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  register1: {
    top: "33.93%",
    left: "39.76%",
  },
  staticButton: {
    top: 557,
    width: 332,
    height: 56,
    left: 41,
    position: "absolute",
  },
  login: {
    color: Color.slateblue_100,
    fontSize: FontSize.size_base,
    letterSpacing: 3,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
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
  },
  loginParent: {
    top: 831,
    width: 93,
    height: 19,
    left: 42,
    position: "absolute",
  },
  createAccountEnterPhoneN: {
    flex: 1,
    height: 896,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default CreateAccountEnterPhoneN;
