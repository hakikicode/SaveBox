import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";

const InputFields1 = () => {
  return (
    <View style={styles.inputFields}>
      <Text style={[styles.cardNumber, styles.cardTypo]}>Card Number</Text>
      <Text style={[styles.cardHolder, styles.cardTypo]}>Card Holder</Text>
      <View style={[styles.frame, styles.frameFlexBox]}>
        <Text style={[styles.text, styles.textTypo]}>
          *** **** *** ***** 6580
        </Text>
        <Image
          style={styles.image6Icon}
          contentFit="cover"
          source={require("../assets/image-5.png")}
        />
      </View>
      <View style={[styles.frame1, styles.frameLayout]}>
        <Text style={[styles.enterCardHolder, styles.textTypo]}>
          Enter card holder name
        </Text>
      </View>
      <View style={[styles.frame2, styles.frameFlexBox]}>
        <Text style={styles.cardTypo}>Expiration Date</Text>
        <Text style={styles.cardTypo}>CVC</Text>
      </View>
      <View style={[styles.frame3, styles.frameFlexBox]}>
        <View style={[styles.frame4, styles.frameLayout]}>
          <Text style={[styles.enterCardHolder, styles.textTypo]}>0</Text>
        </View>
        <View style={[styles.frame5, styles.frameFlexBox]}>
          <Image
            style={[styles.frameIcon, styles.frameLayout]}
            contentFit="cover"
            source={require("../assets/frame8.png")}
          />
          <View style={[styles.frame6, styles.frameFlexBox]}>
            <View style={[styles.frame7, styles.frameFlexBox1]}>
              <Text style={[styles.enterCardHolder, styles.textTypo]}>0</Text>
              <Image
                style={[styles.maskGroupIcon, styles.maskGroupLayout]}
                contentFit="cover"
                source={require("../assets/mask-group4.png")}
              />
            </View>
            <View style={[styles.frame8, styles.frameLayout]}>
              <Text style={[styles.enterCardHolder, styles.textTypo]}>0</Text>
              <Image
                style={[styles.maskGroupIcon1, styles.maskGroupLayout]}
                contentFit="cover"
                source={require("../assets/mask-group5.png")}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardTypo: {
    textAlign: "left",
    color: Color.darkslateblue,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    lineHeight: 15,
    fontSize: FontSize.size_xs,
  },
  frameFlexBox: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
  },
  textTypo: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    lineHeight: 17,
    fontSize: FontSize.size_sm,
    textAlign: "left",
  },
  frameLayout: {
    height: 56,
    overflow: "hidden",
  },
  frameFlexBox1: {
    alignItems: "center",
    flexDirection: "row",
  },
  maskGroupLayout: {
    height: 12,
    width: 12,
  },
  cardNumber: {
    top: 0,
    left: 0,
    position: "absolute",
  },
  cardHolder: {
    top: 110,
    left: 0,
    position: "absolute",
  },
  text: {
    color: Color.slateblue_100,
  },
  image6Icon: {
    width: 29,
    height: 29,
  },
  frame: {
    top: 21,
    backgroundColor: Color.slateblue_300,
    borderStyle: "solid",
    borderColor: "#314bce",
    borderWidth: 1,
    paddingHorizontal: Padding.p_3xs,
    paddingTop: Padding.p_smi,
    paddingBottom: Padding.p_sm,
    width: 324,
    left: 0,
    position: "absolute",
    borderRadius: Border.br_5xs,
    justifyContent: "space-between",
  },
  enterCardHolder: {
    color: Color.gray_100,
  },
  frame1: {
    top: 131,
    paddingHorizontal: Padding.p_sm,
    paddingVertical: Padding.p_lg,
    backgroundColor: Color.ghostwhite_200,
    height: 56,
    borderRadius: Border.br_5xs,
    width: 324,
    left: 0,
    position: "absolute",
  },
  frame2: {
    top: 220,
    width: 260,
    left: 0,
    position: "absolute",
  },
  frame4: {
    width: 103,
    paddingHorizontal: Padding.p_xl,
    paddingVertical: Padding.p_0,
    justifyContent: "center",
    backgroundColor: Color.ghostwhite_200,
    height: 56,
    borderRadius: Border.br_5xs,
  },
  frameIcon: {
    width: 146,
  },
  maskGroupIcon: {
    marginLeft: 52,
  },
  frame7: {
    width: 74,
    height: 17,
    overflow: "hidden",
    alignItems: "center",
    flexDirection: "row",
  },
  maskGroupIcon1: {
    marginLeft: 42,
  },
  frame8: {
    width: 96,
    paddingLeft: Padding.p_mid,
    paddingTop: Padding.p_lgi,
    paddingRight: Padding.p_mini,
    paddingBottom: Padding.p_lgi,
    backgroundColor: Color.ghostwhite_200,
    height: 56,
    borderRadius: Border.br_5xs,
    alignItems: "center",
    flexDirection: "row",
  },
  frame6: {
    width: 194,
  },
  frame5: {
    width: 248,
  },
  frame3: {
    top: 243,
    left: 0,
    position: "absolute",
    width: 329,
  },
  inputFields: {
    top: 497,
    left: 45,
    height: 299,
    width: 329,
    position: "absolute",
  },
});

export default InputFields1;
