import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { FontFamily, FontSize, Color, Border, Padding } from "../GlobalStyles";

const IdentityVerification = () => {
  return (
    <View style={styles.identityVerification}>
      <Text style={[styles.mainHeadline, styles.bodyTextPosition]}>{`Identity
Verification`}</Text>
      <Text style={[styles.bodyText, styles.sendTypo]}>
        Please Verify Your identity by uploading your ppassport or driving
        licence
      </Text>
      <View style={styles.btnMedium}>
        <View style={[styles.signUpWrapper, styles.frameFlexBox1]}>
          <Text style={styles.signUp}>Verify</Text>
        </View>
        <View style={[styles.frame, styles.frameFlexBox1]}>
          <View style={styles.frameChild} />
        </View>
      </View>
      <View style={styles.frame1}>
        <View style={[styles.backBtn, styles.btnPosition]}>
          <Image
            style={styles.image15Icon}
            contentFit="cover"
            source={require("../assets/image-15.png")}
          />
        </View>
        <Image
          style={[styles.settingsBtnIcon, styles.btnPosition]}
          contentFit="cover"
          source={require("../assets/settings-btn.png")}
        />
      </View>
      <View style={[styles.frame2, styles.frameFlexBox]}>
        <Text style={[styles.send, styles.sendTypo]}>PRIVACY</Text>
        <Image
          style={styles.frameItem}
          contentFit="cover"
          source={require("../assets/polygon-1.png")}
        />
      </View>
      <View style={[styles.frame3, styles.frameFlexBox]}>
        <View style={styles.frame4}>
          <View style={[styles.frame5, styles.frameLayout]}>
            <View style={styles.frameInner} />
            <Text style={styles.send1}>{`Your 
Passport`}</Text>
          </View>
          <Image
            style={styles.ggsoftwareUploadIcon}
            contentFit="cover"
            source={require("../assets/ggsoftwareupload.png")}
          />
        </View>
        <View style={styles.frame4}>
          <View style={styles.frameLayout}>
            <View style={styles.frameInner} />
            <Text style={styles.send1}>{`Driving 
Licence`}</Text>
          </View>
          <Image
            style={styles.ggsoftwareUploadIcon}
            contentFit="cover"
            source={require("../assets/ggsoftwareupload.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bodyTextPosition: {
    textAlign: "left",
    left: "10.87%",
    top: "50%",
    position: "absolute",
  },
  sendTypo: {
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  frameFlexBox1: {
    justifyContent: "center",
    alignItems: "flex-end",
    alignSelf: "stretch",
  },
  btnPosition: {
    top: 0,
    height: 47,
    position: "absolute",
  },
  frameFlexBox: {
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    overflow: "hidden",
  },
  frameLayout: {
    height: 188,
    alignSelf: "stretch",
    overflow: "hidden",
  },
  mainHeadline: {
    marginTop: -326,
    fontSize: FontSize.size_27xl,
    fontFamily: FontFamily.gilroyBold,
    color: Color.gray_200,
    textAlign: "left",
    left: "10.87%",
    top: "50%",
  },
  bodyText: {
    marginTop: -183,
    width: "79.23%",
    fontSize: FontSize.size_sm,
    textTransform: "capitalize",
    color: Color.darkslateblue,
    letterSpacing: 0,
    textAlign: "left",
    left: "10.87%",
    top: "50%",
    position: "absolute",
    fontFamily: FontFamily.interSemiBold,
  },
  signUp: {
    fontSize: FontSize.size_lg,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    color: Color.white,
    textAlign: "center",
    alignSelf: "stretch",
    letterSpacing: 0,
  },
  signUpWrapper: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.royalblue_100,
    paddingHorizontal: 65,
    paddingVertical: 0,
  },
  frameChild: {
    backgroundColor: Color.slateblue_400,
    height: 32,
    alignSelf: "stretch",
  },
  frame: {
    marginTop: -16,
    overflow: "hidden",
  },
  btnMedium: {
    top: 772,
    left: 115,
    width: 185,
    alignItems: "center",
    position: "absolute",
  },
  image15Icon: {
    width: 16,
    height: 16,
  },
  backBtn: {
    left: 0,
    borderRadius: Border.br_mini,
    shadowColor: "rgba(111, 136, 157, 0.25)",
    shadowOffset: {
      width: 0,
      height: 30,
    },
    shadowRadius: 65,
    elevation: 65,
    shadowOpacity: 1,
    width: 47,
    padding: Padding.p_mini,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    top: 0,
    backgroundColor: Color.white,
  },
  settingsBtnIcon: {
    left: 220,
    width: 112,
  },
  frame1: {
    top: 58,
    left: 41,
    width: 332,
    height: 47,
    position: "absolute",
    overflow: "hidden",
  },
  send: {
    fontSize: FontSize.size_mini,
    letterSpacing: 3,
    lineHeight: 19,
    color: Color.slategray_100,
    textAlign: "center",
  },
  frameItem: {
    width: 7,
    height: 11,
    marginLeft: 14,
  },
  frame2: {
    top: 679,
    left: 43,
    width: 104,
    height: 19,
  },
  frameInner: {
    backgroundColor: Color.lavender_100,
    width: 99,
    height: 105,
    borderRadius: Border.br_3xs,
  },
  send1: {
    fontSize: FontSize.size_5xl,
    fontFamily: FontFamily.notoSerifSemiBold,
    marginTop: 17,
    fontWeight: "600",
    letterSpacing: 0,
    textAlign: "left",
    color: Color.gray_200,
  },
  frame5: {
    justifyContent: "flex-end",
  },
  ggsoftwareUploadIcon: {
    width: 37,
    height: 37,
    marginTop: -156,
    overflow: "hidden",
  },
  frame4: {
    backgroundColor: Color.ghostwhite_100,
    width: 149,
    paddingLeft: Padding.p_6xl,
    paddingTop: Padding.p_smi,
    paddingRight: Padding.p_5xl,
    paddingBottom: Padding.p_smi,
    borderRadius: Border.br_3xs,
    alignItems: "center",
    overflow: "hidden",
  },
  frame3: {
    top: 366,
    left: 44,
    width: 324,
    justifyContent: "space-between",
  },
  identityVerification: {
    flex: 1,
    width: "100%",
    height: 896,
    overflow: "hidden",
    backgroundColor: Color.white,
  },
});

export default IdentityVerification;
