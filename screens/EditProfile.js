import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import InputFields from "../components/InputFields";
import { FontSize, Border, FontFamily, Color } from "../GlobalStyles";

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
      <View style={[styles.btnLarge, styles.btnLargePosition]}>
        <View style={[styles.btnLargeChild, styles.btnLayout]} />
        <Image
          style={[styles.btnLargeItem, styles.btnLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-16.png")}
        />
        <Text style={[styles.saveChanges, styles.sendTypo]}>Save Changes</Text>
      </View>
      <Image
        style={[styles.frameIcon, styles.btnLargePosition]}
        contentFit="cover"
        source={require("../assets/frame5.png")}
      />
      <InputFields />
    </View>
  );
};

const styles = StyleSheet.create({
  sendTypo: {
    textAlign: "left",
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  btnLargePosition: {
    left: 41,
    width: 332,
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
    fontFamily: FontFamily.robotoRegular,
    color: Color.gray_200,
    textAlign: "center",
    top: "50%",
    position: "absolute",
  },
  send: {
    marginTop: -146,
    left: "26.57%",
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    color: Color.darkslateblue,
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
  btnLargeChild: {
    top: 35,
    left: 46,
    backgroundColor: Color.salmon_100,
    width: 234,
    height: 41,
  },
  btnLargeItem: {
    top: 0,
    left: 0,
    height: 56,
    width: 332,
  },
  saveChanges: {
    top: 19,
    left: 107,
    lineHeight: 18,
    fontFamily: FontFamily.damion,
    color: Color.white,
  },
  btnLarge: {
    top: 772,
    height: 76,
    width: 332,
  },
  frameIcon: {
    top: 58,
    height: 47,
    width: 332,
    overflow: "hidden",
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
