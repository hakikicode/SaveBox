import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { FontSize, Color, Border, FontFamily } from "../GlobalStyles";

const EditProfile = () => {
  return (
    <View style={styles.editProfile}>
      <Text style={styles.mainHeadline}>Edit profile</Text>
      <Text style={[styles.send, styles.sendTypo]}>Change Profile Picture</Text>
      <Image
        style={styles.editProfileChild}
        contentFit="cover"
        source={require("../assets/rectangle-362.png")}
      />
      <Image
        style={[styles.menuBtnIcon, styles.btnIconLayout]}
        contentFit="cover"
        source={require("../assets/menu-btn.png")}
      />
      <Image
        style={[styles.settingsBtnIcon, styles.btnIconLayout]}
        contentFit="cover"
        source={require("../assets/settings-btn.png")}
      />
      <View style={[styles.inputFields, styles.btnLargePosition]}>
        <View style={[styles.inputFieldsChild, styles.inputLayout]} />
        <View style={[styles.inputFieldsItem, styles.inputLayout]} />
        <View style={[styles.inputFieldsInner, styles.inputLayout]} />
        <View style={[styles.rectangleView, styles.inputLayout]} />
        <Text style={[styles.unitedStates, styles.textTypo]}>
          United States
        </Text>
        <Text style={[styles.text, styles.textTypo]}>+000 000 00000</Text>
        <Text style={[styles.domhnallGleeson, styles.textTypo]}>
          Domhnall Gleeson
        </Text>
        <Text style={[styles.streetnyc, styles.textTypo]}>123 Street/NYC</Text>
        <Image
          style={[styles.maskGroupIcon, styles.maskGroupLayout]}
          contentFit="cover"
          source={require("../assets/mask-group7.png")}
        />
        <Image
          style={[styles.maskGroupIcon1, styles.maskGroupLayout]}
          contentFit="cover"
          source={require("../assets/mask-group7.png")}
        />
        <Image
          style={[styles.maskGroupIcon2, styles.maskGroupLayout]}
          contentFit="cover"
          source={require("../assets/mask-group7.png")}
        />
        <Image
          style={[styles.maskGroupIcon3, styles.maskGroupLayout]}
          contentFit="cover"
          source={require("../assets/mask-group7.png")}
        />
        <Text style={[styles.name, styles.nameTypo]}>Name</Text>
        <Text style={[styles.location, styles.nameTypo]}>Location</Text>
        <Text style={[styles.address, styles.nameTypo]}>Address</Text>
        <Text style={[styles.phoneNumber, styles.nameTypo]}>Phone Number</Text>
      </View>
      <View style={[styles.btnLarge, styles.btnLargePosition]}>
        <View style={[styles.btnLargeChild, styles.btnLayout]} />
        <Image
          style={[styles.btnLargeItem, styles.btnLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-16.png")}
        />
        <Text style={[styles.saveChanges, styles.sendTypo]}>Save Changes</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  sendTypo: {
    textAlign: "left",
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  btnIconLayout: {
    height: 177,
    width: 153,
    top: 23,
    position: "absolute",
  },
  btnLargePosition: {
    left: 41,
    width: 332,
    position: "absolute",
  },
  inputLayout: {
    height: 54,
    backgroundColor: Color.ghostwhite_100,
    borderRadius: Border.br_5xs,
    width: 332,
    left: 0,
    position: "absolute",
  },
  textTypo: {
    color: Color.slategray_100,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    lineHeight: 17,
    fontSize: FontSize.size_sm,
    left: 13,
    textAlign: "left",
    position: "absolute",
  },
  maskGroupLayout: {
    height: 14,
    width: 14,
    left: 301,
    position: "absolute",
  },
  nameTypo: {
    lineHeight: 15,
    fontSize: FontSize.size_xs,
    left: 1,
    textAlign: "left",
    color: Color.darkslateblue,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  btnLayout: {
    borderRadius: Border.br_5xs,
    position: "absolute",
  },
  mainHeadline: {
    marginTop: -318,
    left: "12.08%",
    fontSize: 37,
    fontFamily: FontFamily.gilroyBold,
    color: Color.gray_200,
    textAlign: "center",
    top: "50%",
    position: "absolute",
  },
  send: {
    marginTop: -146,
    left: "26.57%",
    color: Color.darkslateblue,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    textAlign: "left",
    fontSize: FontSize.size_lg,
    top: "50%",
  },
  editProfileChild: {
    top: 195,
    left: 159,
    borderRadius: Border.br_3xs,
    width: 97,
    height: 93,
    position: "absolute",
  },
  menuBtnIcon: {
    left: 0,
  },
  settingsBtnIcon: {
    left: 261,
  },
  inputFieldsChild: {
    top: 23,
    backgroundColor: Color.ghostwhite_100,
  },
  inputFieldsItem: {
    top: 201,
  },
  inputFieldsInner: {
    top: 112,
  },
  rectangleView: {
    top: 290,
  },
  unitedStates: {
    top: 129,
  },
  text: {
    top: 307,
  },
  domhnallGleeson: {
    top: 41,
  },
  streetnyc: {
    top: 219,
  },
  maskGroupIcon: {
    top: 132,
  },
  maskGroupIcon1: {
    top: 310,
  },
  maskGroupIcon2: {
    top: 43,
  },
  maskGroupIcon3: {
    top: 221,
  },
  name: {
    top: 0,
  },
  location: {
    top: 89,
  },
  address: {
    top: 178,
  },
  phoneNumber: {
    top: 267,
  },
  inputFields: {
    top: 368,
    height: 344,
    width: 332,
  },
  btnLargeChild: {
    top: 35,
    left: 46,
    backgroundColor: Color.salmon_100,
    width: 234,
    height: 41,
  },
  btnLargeItem: {
    height: 56,
    top: 0,
    width: 332,
    left: 0,
  },
  saveChanges: {
    top: 19,
    left: 107,
    lineHeight: 18,
    fontWeight: "700",
    fontFamily: FontFamily.sFProDisplay,
    color: Color.white,
    textAlign: "left",
    fontSize: FontSize.size_lg,
  },
  btnLarge: {
    top: 772,
    height: 76,
    width: 332,
  },
  editProfile: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    height: 896,
    overflow: "hidden",
  },
});

export default EditProfile;
