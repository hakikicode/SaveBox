import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { FontSize, FontFamily, Color, Padding, Border } from "../GlobalStyles";

const Frame25 = () => {
  return (
    <View style={styles.frame}>
      <Image
        style={styles.maskGroupIcon}
        contentFit="cover"
        source={require("../assets/mask-group21.png")}
      />
      <View style={[styles.frame1, styles.frameFlexBox]}>
        <Image
          style={[styles.frameIcon, styles.frameIconLayout]}
          contentFit="cover"
          source={require("../assets/frame31.png")}
        />
        <Text style={[styles.usd, styles.usdTypo]}>USD</Text>
      </View>
      <View style={[styles.frame2, styles.frameFlexBox]}>
        <View style={styles.frame3}>
          <Text style={[styles.text, styles.usdTypo]}>{`    `}</Text>
          <View style={[styles.frame4, styles.frameLayout]}>
            <Image
              style={styles.frameLayout}
              contentFit="cover"
              source={require("../assets/group-60.png")}
            />
            <Text style={[styles.usd, styles.usdTypo]}>EUR</Text>
          </View>
        </View>
        <Image
          style={[styles.frameIcon1, styles.frameIconLayout]}
          contentFit="cover"
          source={require("../assets/frame41.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameFlexBox: {
    alignItems: "center",
    overflow: "hidden",
  },
  frameIconLayout: {
    width: "100%",
    maxWidth: "100%",
    alignSelf: "stretch",
    overflow: "hidden",
  },
  usdTypo: {
    textAlign: "left",
    fontWeight: "600",
  },
  frameLayout: {
    height: 88,
    width: 57,
  },
  maskGroupIcon: {
    top: 75,
    left: 146,
    width: 19,
    height: 19,
    position: "absolute",
  },
  frameIcon: {
    height: 57,
  },
  usd: {
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.interSemiBold,
    color: Color.darkslateblue,
    marginTop: 9,
  },
  frame1: {
    top: 15,
    left: 0,
    backgroundColor: Color.white,
    shadowColor: "rgba(138, 149, 158, 0.15)",
    shadowOffset: {
      width: 0,
      height: 30,
    },
    shadowRadius: 60,
    elevation: 60,
    shadowOpacity: 1,
    paddingLeft: Padding.p_13xl,
    paddingTop: Padding.p_3xl,
    paddingRight: Padding.p_16xl,
    paddingBottom: Padding.p_3xl,
    width: 127,
    alignItems: "center",
    position: "absolute",
    borderRadius: Border.br_5xs,
  },
  text: {
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.poppinsSemiBold,
    color: Color.black,
  },
  frame4: {
    marginTop: 16,
    alignItems: "center",
    overflow: "hidden",
  },
  frame3: {
    height: 125,
    justifyContent: "center",
    width: 57,
    alignItems: "center",
    overflow: "hidden",
  },
  frameIcon1: {
    marginTop: -110,
    borderRadius: Border.br_5xs,
    height: 149,
    width: "100%",
    maxWidth: "100%",
    alignSelf: "stretch",
  },
  frame2: {
    top: 0,
    left: 184,
    width: 127,
    alignItems: "center",
    position: "absolute",
  },
  frame: {
    top: 225,
    left: 52,
    width: 311,
    overflow: "hidden",
    height: 149,
    position: "absolute",
  },
});

export default Frame25;
