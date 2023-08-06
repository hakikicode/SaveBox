import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import Frame27 from "../components/Frame27";
import Frame9 from "../components/Frame9";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const Transferred = () => {
  return (
    <View style={styles.transferred}>
      <Text style={styles.send}>Card Used</Text>
      <Text style={[styles.physicalCard03, styles.frameParentPosition]}>
        02 Physical card, 03 Debit Cards
      </Text>
      <Frame27 />
      <Frame9 />
      <View style={[styles.frameParent, styles.frameParentPosition]}>
        <View style={styles.frame}>
          <Text style={[styles.mastercard, styles.mastercardTypo]}>
            Mastercard
          </Text>
          <Text style={[styles.domhnallGleeson, styles.mastercardTypo]}>
            Domhnall Gleeson
          </Text>
        </View>
        <Text style={styles.pleaseEnterYour}>See Details</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameParentPosition: {
    left: 45,
    position: "absolute",
  },
  mastercardTypo: {
    fontWeight: "600",
    textAlign: "left",
  },
  send: {
    marginTop: 45,
    top: "50%",
    left: "10.14%",
    fontSize: FontSize.size_7xl,
    fontFamily: FontFamily.robotoRegular,
    color: Color.gray_200,
    textAlign: "left",
    position: "absolute",
  },
  physicalCard03: {
    top: 528,
    fontSize: FontSize.size_xs,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: Color.slategray_100,
    textAlign: "left",
  },
  mastercard: {
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.interSemiBold,
    color: Color.darkslateblue,
  },
  domhnallGleeson: {
    fontFamily: FontFamily.nunitoSemiBold,
    color: Color.silver,
    marginTop: 8,
    fontSize: FontSize.size_sm,
  },
  frame: {
    width: 116,
    height: 49,
    overflow: "hidden",
  },
  pleaseEnterYour: {
    letterSpacing: 0,
    lineHeight: 25,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    color: Color.royalblue_100,
    textAlign: "right",
    fontSize: FontSize.size_sm,
  },
  frameParent: {
    top: 780,
    width: 329,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  transferred: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    height: 896,
    overflow: "hidden",
  },
});

export default Transferred;
