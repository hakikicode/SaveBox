import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import Frame21 from "../components/Frame21";
import { Color, FontSize, Border, FontFamily, Padding } from "../GlobalStyles";

const Bank = () => {
  return (
    <View style={styles.bank}>
      <Frame21 />
      <View style={[styles.frame, styles.frameFlexBox]}>
        <Image
          style={styles.frameIcon}
          contentFit="cover"
          source={require("../assets/frame21.png")}
        />
        <View style={styles.frame1}>
          <Text style={styles.accountHolder}>Account holder</Text>
          <Text style={[styles.domhnallGleeson, styles.bankUsaTypo]}>
            Domhnall Gleeson
          </Text>
        </View>
      </View>
      <View style={[styles.frame2, styles.frameFlexBox]}>
        <View style={styles.frameShadowBox}>
          <Image
            style={styles.image24Icon}
            contentFit="cover"
            source={require("../assets/image-24.png")}
          />
        </View>
        <View style={styles.frame4}>
          <Text style={styles.accountHolder}>Bank Name</Text>
          <Text style={[styles.bankUsa, styles.bankUsaTypo]}>Bank USA</Text>
        </View>
      </View>
      <View style={[styles.frame5, styles.frameFlexBox]}>
        <View style={styles.frameShadowBox}>
          <Image
            style={styles.image25Icon}
            contentFit="cover"
            source={require("../assets/image-25.png")}
          />
        </View>
        <View style={styles.frame7}>
          <Text style={styles.accountHolder}>Email address</Text>
          <Text style={[styles.michaelmooremailcom, styles.textTypo]}>
            michael.moore@mail.com
          </Text>
        </View>
      </View>
      <View style={[styles.frame8, styles.frameFlexBox]}>
        <View style={styles.frameShadowBox}>
          <Image
            style={styles.image24Icon}
            contentFit="cover"
            source={require("../assets/image-26.png")}
          />
        </View>
        <View style={styles.frame10}>
          <Text style={styles.accountHolder}>Address</Text>
          <Text style={[styles.streetnyc, styles.text2Typo]}>
            123 Street/NYC
          </Text>
        </View>
      </View>
      <View style={[styles.frame11, styles.frameFlexBox]}>
        <View style={styles.frame12}>
          <Image
            style={styles.image27Icon}
            contentFit="cover"
            source={require("../assets/image-27.png")}
          />
        </View>
        <View style={styles.frame13}>
          <Text style={styles.accountHolder}>Bank Code</Text>
          <Text
            style={[styles.text, styles.textTypo]}
          >{`123 56366 4456 `}</Text>
        </View>
      </View>
      <View style={[styles.frame14, styles.frameFlexBox]}>
        <View style={styles.frameShadowBox}>
          <Text style={styles.accountHolder}>#</Text>
        </View>
        <View style={styles.frame16}>
          <Text style={styles.accountHolder}>Account Number</Text>
          <Text style={[styles.text2, styles.text2Typo]}>0987178989</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameFlexBox: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    left: 41,
    position: "absolute",
    overflow: "hidden",
  },
  bankUsaTypo: {
    marginTop: 4,
    color: Color.silver,
    textAlign: "left",
    fontWeight: "600",
    fontSize: FontSize.size_sm,
  },
  textTypo: {
    marginTop: 3,
    color: Color.silver,
    textAlign: "left",
    fontWeight: "600",
    fontSize: FontSize.size_sm,
  },
  text2Typo: {
    color: Color.silver,
    textAlign: "left",
    fontWeight: "600",
    fontSize: FontSize.size_sm,
  },
  frameIcon: {
    width: 84,
    height: 52,
    borderRadius: Border.br_3xs,
    overflow: "hidden",
  },
  accountHolder: {
    color: Color.darkslateblue,
    textAlign: "left",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_sm,
  },
  domhnallGleeson: {
    lineHeight: 17,
    fontFamily: FontFamily.interSemiBold,
  },
  frame1: {
    width: 123,
    height: 38,
    overflow: "hidden",
  },
  frame: {
    top: 356,
    width: 193,
  },
  image24Icon: {
    width: 16,
    height: 16,
  },
  frameShadowBox: {
    justifyContent: "center",
    width: 54,
    shadowOpacity: 1,
    elevation: 30,
    shadowRadius: 30,
    shadowOffset: {
      width: 0,
      height: 15,
    },
    shadowColor: "rgba(49, 75, 206, 0.1)",
    height: 52,
    borderRadius: Border.br_3xs,
    alignItems: "center",
    overflow: "hidden",
    backgroundColor: Color.white,
  },
  bankUsa: {
    fontFamily: FontFamily.nunitoSemiBold,
  },
  frame4: {
    width: 77,
    height: 40,
    overflow: "hidden",
  },
  frame2: {
    top: 441,
    width: 148,
  },
  image25Icon: {
    width: 14,
    height: 14,
  },
  michaelmooremailcom: {
    alignSelf: "stretch",
    fontFamily: FontFamily.nunitoSemiBold,
  },
  frame7: {
    width: 163,
    overflow: "hidden",
  },
  frame5: {
    top: 525,
    width: 233,
  },
  streetnyc: {
    lineHeight: 17,
    fontFamily: FontFamily.interSemiBold,
  },
  frame10: {
    width: 105,
    overflow: "hidden",
  },
  frame8: {
    top: 609,
    width: 173,
  },
  image27Icon: {
    width: 15,
    height: 15,
  },
  frame12: {
    paddingLeft: Padding.p_lgi,
    paddingTop: Padding.p_9xs,
    paddingRight: Padding.p_8xs,
    paddingBottom: Padding.p_9xs,
    alignItems: "flex-end",
    justifyContent: "flex-end",
    width: 54,
    shadowOpacity: 1,
    elevation: 30,
    shadowRadius: 30,
    shadowOffset: {
      width: 0,
      height: 15,
    },
    shadowColor: "rgba(49, 75, 206, 0.1)",
    height: 52,
    borderRadius: Border.br_3xs,
    overflow: "hidden",
    backgroundColor: Color.white,
  },
  text: {
    lineHeight: 17,
    fontFamily: FontFamily.interSemiBold,
  },
  frame13: {
    width: 114,
    height: 37,
    overflow: "hidden",
  },
  frame11: {
    top: 693,
    width: 182,
  },
  text2: {
    fontFamily: FontFamily.nunitoSemiBold,
  },
  frame16: {
    width: 115,
    overflow: "hidden",
  },
  frame14: {
    top: 777,
    width: 183,
  },
  bank: {
    flex: 1,
    width: "100%",
    height: 896,
    overflow: "hidden",
    backgroundColor: Color.white,
  },
});

export default Bank;
