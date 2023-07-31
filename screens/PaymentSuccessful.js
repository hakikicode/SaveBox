import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { FontSize, FontFamily, Border, Color } from "../GlobalStyles";

const PaymentSuccessful = () => {
  return (
    <View style={styles.paymentSuccessful}>
      <Text style={styles.mainHeadline}>{`Payment
Successful`}</Text>
      <Text style={styles.description}>
        Your Payment was successful. Make this user in your favourite list
      </Text>
      <Text style={[styles.pleaseEnterYour, styles.send1Typo]}>
        SHOULD ARRIVED BY
      </Text>
      <Text style={[styles.pleaseEnterYour1, styles.signUpTypo]}>
        27 APRIL 2020
      </Text>
      <View style={styles.paymentSuccessfulChild} />
      <View style={styles.rectangle} />
      <Image
        style={[styles.paymentSuccessfulItem, styles.paymentLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-347.png")}
      />
      <Text style={[styles.send, styles.sendClr]}>Krish Kendall</Text>
      <Text style={[styles.send1, styles.sendClr]}>Canada</Text>
      <View style={[styles.paymentSuccessfulInner, styles.paymentLayout]} />
      <Image
        style={[styles.vectorIcon, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector7.png")}
      />
      <Image
        style={styles.shareBtnIcon}
        contentFit="cover"
        source={require("../assets/share-btn.png")}
      />
      <View style={[styles.backBtn, styles.backLayout]}>
        <View style={[styles.backBtnChild, styles.backBtnChildPosition]} />
        <Image
          style={styles.image15Icon}
          contentFit="cover"
          source={require("../assets/image-15.png")}
        />
      </View>
      <View style={[styles.btnMedium, styles.btnMediumLayout]}>
        <View style={[styles.btnMediumChild, styles.rectangleIconPosition]} />
        <View style={[styles.rectangleParent, styles.btnMediumLayout]}>
          <Image
            style={[styles.rectangleIcon, styles.rectangleIconPosition]}
            contentFit="cover"
            source={require("../assets/rectangle1.png")}
          />
          <Text style={[styles.signUp, styles.sendClr]}>Track</Text>
        </View>
      </View>
      <Image
        style={[styles.vectorIcon1, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector8.png")}
      />
      <Image
        style={[styles.vectorIcon2, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector9.png")}
      />
      <Image
        style={styles.illustrationIcon}
        contentFit="cover"
        source={require("../assets/illustration3.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  send1Typo: {
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    textAlign: "center",
  },
  signUpTypo: {
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    textAlign: "center",
  },
  paymentLayout: {
    height: 42,
    width: 44,
    top: 588,
    borderRadius: Border.br_5xs,
    position: "absolute",
  },
  sendClr: {
    color: Color.white,
    letterSpacing: 0,
    position: "absolute",
  },
  vectorIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  backLayout: {
    height: 47,
    width: 47,
    position: "absolute",
  },
  backBtnChildPosition: {
    left: 0,
    top: 0,
  },
  btnMediumLayout: {
    width: 185,
    position: "absolute",
  },
  rectangleIconPosition: {
    bottom: "0%",
    position: "absolute",
  },
  mainHeadline: {
    marginTop: -82,
    left: "23.19%",
    fontSize: FontSize.size_25xl,
    fontFamily: FontFamily.gilroyBold,
    textAlign: "center",
    top: "50%",
    color: Color.darkslateblue,
    position: "absolute",
  },
  description: {
    top: 485,
    left: 35,
    width: 344,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    letterSpacing: 0,
    lineHeight: 28,
    fontSize: FontSize.size_lg,
    textAlign: "center",
    color: Color.darkslateblue,
    position: "absolute",
  },
  pleaseEnterYour: {
    top: 683,
    left: 120,
    letterSpacing: 3,
    color: Color.slategray_100,
    lineHeight: 28,
    position: "absolute",
  },
  pleaseEnterYour1: {
    top: 712,
    left: 128,
    fontSize: FontSize.size_3xl,
    lineHeight: 28,
    position: "absolute",
    fontWeight: "700",
    color: Color.darkslateblue,
  },
  paymentSuccessfulChild: {
    top: 629,
    left: 82,
    backgroundColor: "rgba(87, 113, 249, 0.3)",
    width: 234,
    height: 41,
    borderRadius: Border.br_5xs,
    position: "absolute",
  },
  rectangle: {
    height: "8.15%",
    width: "80.19%",
    top: "63.95%",
    right: "9.9%",
    bottom: "27.9%",
    left: "9.9%",
    borderRadius: Border.br_8xs,
    backgroundColor: Color.royalblue_100,
    position: "absolute",
  },
  paymentSuccessfulItem: {
    left: 53,
  },
  send: {
    marginTop: 142,
    fontSize: FontSize.size_base,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    textAlign: "left",
    left: "27.05%",
    color: Color.white,
    top: "50%",
  },
  send1: {
    marginTop: 164,
    left: "27.05%",
    color: Color.white,
    top: "50%",
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    textAlign: "center",
  },
  paymentSuccessfulInner: {
    left: 316,
    backgroundColor: Color.white,
  },
  vectorIcon: {
    height: "1.72%",
    width: "4.11%",
    top: "67.22%",
    right: "16.3%",
    bottom: "31.07%",
    left: "79.59%",
    position: "absolute",
  },
  shareBtnIcon: {
    top: 23,
    left: 261,
    width: 153,
    height: 177,
    position: "absolute",
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
    height: 47,
    width: 47,
    position: "absolute",
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
  btnMediumChild: {
    height: "44.44%",
    width: "75.14%",
    top: "55.56%",
    right: "7.57%",
    left: "17.3%",
    backgroundColor: Color.slateblue_400,
  },
  rectangleIcon: {
    height: "100%",
    top: "0%",
    right: "0%",
    left: "0%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    borderRadius: Border.br_5xs,
    width: "100%",
    bottom: "0%",
  },
  signUp: {
    top: "30.36%",
    left: "36.76%",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    textAlign: "center",
    color: Color.white,
    fontSize: FontSize.size_lg,
  },
  rectangleParent: {
    height: 56,
    left: 0,
    top: 0,
  },
  btnMedium: {
    top: 774,
    left: 119,
    height: 72,
  },
  vectorIcon1: {
    height: "19.07%",
    width: "46.58%",
    top: "20.16%",
    right: "38.92%",
    bottom: "60.77%",
    left: "14.5%",
    position: "absolute",
  },
  vectorIcon2: {
    height: "16.44%",
    width: "51.29%",
    top: "23.47%",
    right: "13.11%",
    bottom: "60.08%",
    left: "35.6%",
    position: "absolute",
  },
  illustrationIcon: {
    top: 128,
    left: 102,
    width: 210,
    height: 210,
    position: "absolute",
  },
  paymentSuccessful: {
    flex: 1,
    height: 896,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default PaymentSuccessful;
