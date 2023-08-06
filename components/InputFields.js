import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";

const InputFields = () => {
  return (
    <View style={styles.inputFields}>
      <Text style={[styles.name, styles.nameTypo]}>Name</Text>
      <Text style={[styles.location, styles.nameTypo]}>Location</Text>
      <Text style={[styles.address, styles.nameTypo]}>Address</Text>
      <Text style={[styles.phoneNumber, styles.nameTypo]}>Phone Number</Text>
      <View style={[styles.frame, styles.frameFlexBox1]}>
        <Text style={styles.domhnallGleeson}>Domhnall Gleeson</Text>
        <Image
          style={styles.maskGroupIcon}
          contentFit="cover"
          source={require("../assets/mask-group1.png")}
        />
      </View>
      <View style={[styles.frame1, styles.frameFlexBox]}>
        <Text style={styles.domhnallGleeson}>United States</Text>
        <Image
          style={styles.maskGroupIcon}
          contentFit="cover"
          source={require("../assets/mask-group1.png")}
        />
      </View>
      <View style={[styles.frame2, styles.frameFlexBox1]}>
        <Text style={styles.domhnallGleeson}>123 Street/NYC</Text>
        <Image
          style={styles.maskGroupIcon}
          contentFit="cover"
          source={require("../assets/mask-group1.png")}
        />
      </View>
      <View style={[styles.frame3, styles.frameFlexBox]}>
        <Text style={styles.domhnallGleeson}>+000 000 00000</Text>
        <Image
          style={styles.maskGroupIcon}
          contentFit="cover"
          source={require("../assets/mask-group1.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  nameTypo: {
    color: Color.darkslateblue,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    lineHeight: 15,
    fontSize: FontSize.size_xs,
    left: 1,
    textAlign: "left",
    position: "absolute",
  },
  frameFlexBox1: {
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: Padding.p_lg,
    paddingHorizontal: Padding.p_smi,
    flexDirection: "row",
    overflow: "hidden",
    backgroundColor: Color.ghostwhite_100,
    borderRadius: Border.br_5xs,
    left: 0,
    width: 332,
    position: "absolute",
  },
  frameFlexBox: {
    paddingVertical: Padding.p_mid,
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: Padding.p_smi,
    flexDirection: "row",
    overflow: "hidden",
    backgroundColor: Color.ghostwhite_100,
    borderRadius: Border.br_5xs,
    left: 0,
    width: 332,
    position: "absolute",
  },
  name: {
    top: 0,
    textAlign: "left",
  },
  location: {
    top: 89,
    textAlign: "left",
  },
  address: {
    top: 178,
    textAlign: "left",
  },
  phoneNumber: {
    top: 267,
    textAlign: "left",
  },
  domhnallGleeson: {
    fontSize: FontSize.size_sm,
    lineHeight: 17,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: Color.slategray_100,
    textAlign: "left",
  },
  maskGroupIcon: {
    width: 14,
    height: 14,
  },
  frame: {
    top: 23,
  },
  frame1: {
    top: 112,
  },
  frame2: {
    top: 201,
  },
  frame3: {
    top: 290,
  },
  inputFields: {
    top: 368,
    left: 41,
    height: 344,
    width: 332,
    position: "absolute",
  },
});

export default InputFields;
