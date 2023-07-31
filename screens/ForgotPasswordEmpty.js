import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const ForgotPasswordEmpty = () => {
  return (
    <View style={styles.forgotPasswordEmpty}>
      <View style={styles.rectanglePosition}>
        <View style={[styles.rectangle, styles.rectanglePosition]} />
      </View>
      <Text style={[styles.register, styles.sendFlexBox]}>Register</Text>
      <View style={[styles.backBtn, styles.backLayout]}>
        <View style={[styles.backBtnChild, styles.backLayout]} />
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
      <View style={[styles.inputField, styles.inputLayout]}>
        <View style={[styles.inputFieldChild, styles.childPosition]} />
        <Text style={[styles.enterEmailAddress, styles.sendFlexBox]}>
          Enter Email Address
        </Text>
      </View>
      <View style={styles.systemkeyboardsiphonelight}>
        <View style={styles.backgroundPosition}>
          <View style={[styles.background2, styles.backgroundPosition]} />
        </View>
        <View style={styles.keys}>
          <Image
            style={styles.deleteIcon}
            contentFit="cover"
            source={require("../assets/delete.png")}
          />
          <View style={[styles.view, styles.viewPosition5]}>
            <Image
              style={[styles.keyBackgroundIcon, styles.keyIconLayout]}
              contentFit="cover"
              source={require("../assets/key-background.png")}
            />
            <Text style={[styles.number, styles.numberPosition]}>0</Text>
          </View>
          <View style={[styles.view1, styles.viewPosition3]}>
            <Image
              style={[styles.keyBackgroundIcon1, styles.keyIconLayout]}
              contentFit="cover"
              source={require("../assets/key-background1.png")}
            />
            <Text style={[styles.label, styles.numberPosition]}>WXYZ</Text>
            <Text style={[styles.number1, styles.numberPosition]}>9</Text>
          </View>
          <View style={[styles.view2, styles.viewPosition4]}>
            <Image
              style={[styles.keyBackgroundIcon1, styles.keyIconLayout]}
              contentFit="cover"
              source={require("../assets/key-background2.png")}
            />
            <Text style={[styles.label, styles.numberPosition]}>TUV</Text>
            <Text style={[styles.number1, styles.numberPosition]}>8</Text>
          </View>
          <View style={[styles.view3, styles.viewPosition2]}>
            <Image
              style={[styles.keyBackgroundIcon1, styles.keyIconLayout]}
              contentFit="cover"
              source={require("../assets/key-background3.png")}
            />
            <Text style={[styles.label, styles.numberPosition]}>PQRS</Text>
            <Text style={[styles.number1, styles.numberPosition]}>7</Text>
          </View>
          <View style={[styles.view4, styles.viewPosition1]}>
            <Image
              style={[styles.keyBackgroundIcon1, styles.keyIconLayout]}
              contentFit="cover"
              source={require("../assets/key-background4.png")}
            />
            <Text style={[styles.label, styles.numberPosition]}>MNO</Text>
            <Text style={[styles.number1, styles.numberPosition]}>6</Text>
          </View>
          <View style={[styles.view5, styles.viewPosition1]}>
            <Image
              style={[styles.keyBackgroundIcon1, styles.keyIconLayout]}
              contentFit="cover"
              source={require("../assets/key-background5.png")}
            />
            <Text style={[styles.label, styles.numberPosition]}>JKL</Text>
            <Text style={[styles.number1, styles.numberPosition]}>5</Text>
          </View>
          <View style={[styles.view6, styles.viewPosition1]}>
            <Image
              style={[styles.keyBackgroundIcon1, styles.keyIconLayout]}
              contentFit="cover"
              source={require("../assets/key-background6.png")}
            />
            <Text style={[styles.label, styles.numberPosition]}>GHI</Text>
            <Text style={[styles.number1, styles.numberPosition]}>4</Text>
          </View>
          <View style={[styles.view7, styles.viewPosition]}>
            <Image
              style={[styles.keyBackgroundIcon, styles.keyIconLayout]}
              contentFit="cover"
              source={require("../assets/key-background7.png")}
            />
            <Text style={[styles.label, styles.numberPosition]}>DEF</Text>
            <Text style={[styles.number1, styles.numberPosition]}>3</Text>
          </View>
          <View style={[styles.view8, styles.viewPosition]}>
            <Image
              style={[styles.keyBackgroundIcon, styles.keyIconLayout]}
              contentFit="cover"
              source={require("../assets/key-background8.png")}
            />
            <Text style={[styles.label, styles.numberPosition]}>ABC</Text>
            <Text style={[styles.number1, styles.numberPosition]}>2</Text>
          </View>
          <View style={[styles.view9, styles.viewPosition]}>
            <Image
              style={[styles.keyBackgroundIcon, styles.keyIconLayout]}
              contentFit="cover"
              source={require("../assets/key-background9.png")}
            />
            <Text style={[styles.label, styles.numberPosition]}>{` `}</Text>
            <Text style={[styles.number1, styles.numberPosition]}>1</Text>
          </View>
        </View>
      </View>
      <Text style={[styles.send, styles.sendFlexBox]}>Send</Text>
      <View style={[styles.staticButton, styles.staticLayout]}>
        <View style={[styles.staticButtonChild, styles.staticLayout]} />
        <Text style={[styles.send1, styles.sendFlexBox]}>Send</Text>
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
  sendFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  backLayout: {
    height: 47,
    width: 47,
    position: "absolute",
  },
  inputLayout: {
    height: 56,
    width: 346,
    position: "absolute",
  },
  childPosition: {
    borderRadius: Border.br_5xs,
    left: 0,
    top: 0,
  },
  backgroundPosition: {
    bottom: "0%",
    top: "0%",
    height: "100%",
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  viewPosition5: {
    left: "33.88%",
    right: "33.88%",
  },
  keyIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    borderRadius: Border.br_8xs,
    top: "0%",
    left: "0%",
    right: "0%",
    position: "absolute",
    overflow: "hidden",
    width: "100%",
  },
  numberPosition: {
    width: 129,
    textAlign: "center",
    color: Color.black,
    left: 0,
    position: "absolute",
  },
  viewPosition3: {
    left: "67.77%",
    right: "0%",
  },
  viewPosition4: {
    bottom: "25.6%",
    top: "51.69%",
    height: "22.71%",
    width: "32.23%",
    position: "absolute",
  },
  viewPosition2: {
    right: "67.77%",
    left: "0%",
  },
  viewPosition1: {
    bottom: "51.69%",
    top: "25.6%",
    height: "22.71%",
    width: "32.23%",
    position: "absolute",
  },
  viewPosition: {
    bottom: "77.78%",
    width: "32.23%",
    height: "22.22%",
    top: "0%",
    position: "absolute",
  },
  staticLayout: {
    width: 332,
    height: 56,
    position: "absolute",
  },
  rectangle: {
    backgroundColor: Color.white,
    width: 414,
  },
  register: {
    top: 690,
    left: 173,
    color: Color.white,
    fontFamily: FontFamily.sFProDisplay,
    lineHeight: 18,
    fontSize: FontSize.size_lg,
    textAlign: "left",
    fontWeight: "700",
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
    top: 16,
    left: 16,
    width: 16,
    height: 16,
    position: "absolute",
  },
  backBtn: {
    top: 58,
    left: 41,
  },
  mainHeadline: {
    top: 190,
    fontSize: FontSize.size_25xl,
    fontFamily: FontFamily.gilroyBold,
    color: Color.darkslateblue,
    left: 41,
    textAlign: "left",
    position: "absolute",
  },
  pleaseEnterYour: {
    fontFamily: FontFamily.interRegular,
  },
  emailAddress: {
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  bodyText: {
    top: 258,
    left: 42,
    lineHeight: 26,
    letterSpacing: 0,
    color: Color.darkslateblue,
    textAlign: "left",
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  inputFieldChild: {
    backgroundColor: Color.ghostwhite_100,
    height: 56,
    width: 346,
    position: "absolute",
  },
  enterEmailAddress: {
    top: 18,
    left: 18,
    fontSize: FontSize.size_sm,
    lineHeight: 17,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: Color.slategray_100,
  },
  inputField: {
    top: 380,
    left: 34,
  },
  background2: {
    backgroundColor: Color.royalblue_100,
  },
  deleteIcon: {
    width: 27,
    height: 20,
  },
  keyBackgroundIcon: {
    height: "101.97%",
    bottom: "-1.97%",
  },
  number: {
    bottom: 9,
    fontSize: FontSize.size_6xl,
    textAlign: "center",
    color: Color.black,
    letterSpacing: 0,
    fontFamily: FontFamily.sFProDisplay,
  },
  view: {
    top: "77.78%",
    width: "32.23%",
    height: "22.22%",
    left: "33.88%",
    right: "33.88%",
    bottom: "0%",
    position: "absolute",
  },
  keyBackgroundIcon1: {
    height: "101.93%",
    bottom: "-1.93%",
  },
  label: {
    bottom: 5,
    fontSize: FontSize.size_3xs,
    letterSpacing: 2,
    fontFamily: FontFamily.sFProText,
    fontWeight: "700",
  },
  number1: {
    bottom: 15,
    fontSize: FontSize.size_6xl,
    textAlign: "center",
    color: Color.black,
    letterSpacing: 0,
    fontFamily: FontFamily.sFProDisplay,
  },
  view1: {
    bottom: "25.6%",
    top: "51.69%",
    height: "22.71%",
    width: "32.23%",
    position: "absolute",
  },
  view2: {
    left: "33.88%",
    right: "33.88%",
  },
  view3: {
    bottom: "25.6%",
    top: "51.69%",
    height: "22.71%",
    width: "32.23%",
    position: "absolute",
  },
  view4: {
    left: "67.77%",
    right: "0%",
  },
  view5: {
    left: "33.88%",
    right: "33.88%",
  },
  view6: {
    right: "67.77%",
    left: "0%",
  },
  view7: {
    left: "67.77%",
    right: "0%",
  },
  view8: {
    left: "33.88%",
    right: "33.88%",
  },
  view9: {
    right: "67.77%",
    left: "0%",
  },
  keys: {
    height: "71.13%",
    width: "96.8%",
    top: "2.06%",
    right: "1.6%",
    bottom: "26.8%",
    left: "1.6%",
    position: "absolute",
  },
  systemkeyboardsiphonelight: {
    height: "35.83%",
    top: "64.29%",
    bottom: "-0.11%",
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  send: {
    top: 519,
    left: 186,
    color: Color.white,
    fontFamily: FontFamily.sFProDisplay,
    lineHeight: 18,
    fontSize: FontSize.size_lg,
    textAlign: "left",
    fontWeight: "700",
  },
  staticButtonChild: {
    backgroundColor: Color.royalblue_100,
    borderRadius: Border.br_5xs,
    left: 0,
    top: 0,
  },
  send1: {
    top: 19,
    left: 145,
    color: Color.white,
    fontFamily: FontFamily.sFProDisplay,
    lineHeight: 18,
    fontSize: FontSize.size_lg,
    textAlign: "left",
    fontWeight: "700",
  },
  staticButton: {
    top: 500,
    left: 41,
  },
  forgotPasswordEmpty: {
    flex: 1,
    height: 896,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default ForgotPasswordEmpty;
