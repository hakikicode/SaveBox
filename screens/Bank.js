import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Color, FontSize, FontFamily, Border, Padding } from "../GlobalStyles";

const Bank = () => {
  return (
    <View style={styles.bank}>
      <View style={styles.frame}>
        <Text style={styles.send}>Bank USA</Text>
        <Text style={styles.send1}>Your BDT account</Text>
        <Text style={styles.send2}>Receipient type : Private</Text>
        <View style={styles.frame1}>
          <View style={styles.backBtn}>
            <Image
              style={styles.image15Icon}
              contentFit="cover"
              source={require("../assets/image-15.png")}
            />
          </View>
          <Image
            style={styles.settingsBtnIcon}
            contentFit="cover"
            source={require("../assets/settings-btn.png")}
          />
        </View>
      </View>
      <View style={[styles.frame2, styles.frameFlexBox]}>
        <Image
          style={styles.frameIcon}
          contentFit="cover"
          source={require("../assets/frame2.png")}
        />
        <View style={styles.frame3}>
          <Text style={styles.accountHolder}>Account holder</Text>
          <Text style={[styles.domhnallGleeson, styles.bankUsaTypo]}>
            Domhnall Gleeson
          </Text>
        </View>
      </View>
      <View style={[styles.frame4, styles.frameFlexBox]}>
        <View style={styles.frameShadowBox}>
          <Image
            style={styles.image15Icon}
            contentFit="cover"
            source={require("../assets/image-24.png")}
          />
        </View>
        <View style={styles.frame6}>
          <Text style={styles.accountHolder}>Bank Name</Text>
          <Text style={[styles.bankUsa, styles.bankUsaTypo]}>Bank USA</Text>
        </View>
      </View>
      <View style={[styles.frame7, styles.frameFlexBox]}>
        <View style={styles.frameShadowBox}>
          <Image
            style={styles.image25Icon}
            contentFit="cover"
            source={require("../assets/image-25.png")}
          />
        </View>
        <View style={styles.frame9}>
          <Text style={styles.accountHolder}>Email address</Text>
          <Text style={[styles.michaelmooremailcom, styles.textTypo]}>
            michael.moore@mail.com
          </Text>
        </View>
      </View>
      <View style={[styles.frame10, styles.frameFlexBox]}>
        <View style={styles.frameShadowBox}>
          <Image
            style={styles.image15Icon}
            contentFit="cover"
            source={require("../assets/image-26.png")}
          />
        </View>
        <View style={styles.frame12}>
          <Text style={styles.accountHolder}>Address</Text>
          <Text style={[styles.streetnyc, styles.text2Typo]}>
            123 Street/NYC
          </Text>
        </View>
      </View>
      <View style={[styles.frame13, styles.frameFlexBox]}>
        <View style={styles.frame14}>
          <Image
            style={styles.image27Icon}
            contentFit="cover"
            source={require("../assets/image-27.png")}
          />
        </View>
        <View style={styles.frame15}>
          <Text style={styles.accountHolder}>Bank Code</Text>
          <Text
            style={[styles.text, styles.textTypo]}
          >{`123 56366 4456 `}</Text>
        </View>
      </View>
      <View style={[styles.frame16, styles.frameFlexBox]}>
        <View style={styles.frameShadowBox}>
          <Text style={styles.accountHolder}>#</Text>
        </View>
        <View style={styles.frame18}>
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
    fontSize: FontSize.size_sm,
    fontWeight: "600",
  },
  textTypo: {
    marginTop: 3,
    color: Color.silver,
    textAlign: "left",
    fontSize: FontSize.size_sm,
    fontWeight: "600",
  },
  text2Typo: {
    color: Color.silver,
    textAlign: "left",
    fontSize: FontSize.size_sm,
    fontWeight: "600",
  },
  send: {
    marginTop: -60,
    width: "71.15%",
    left: "21.7%",
    fontSize: FontSize.size_33xl,
    fontFamily: FontFamily.gilroyBold,
    textAlign: "center",
    color: Color.darkslateblue,
    top: "50%",
    position: "absolute",
  },
  send1: {
    marginTop: 21,
    width: "45%",
    left: "34.78%",
    fontSize: FontSize.size_lg,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    letterSpacing: 0,
    textAlign: "center",
    color: Color.darkslateblue,
    top: "50%",
    position: "absolute",
  },
  send2: {
    marginTop: 78,
    width: "54.12%",
    left: "30.52%",
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    letterSpacing: 0,
    textAlign: "center",
    color: Color.darkslateblue,
    top: "50%",
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
    shadowRadius: 65,
    elevation: 65,
    width: 47,
    padding: Padding.p_mini,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 30,
    },
    top: 0,
    height: 47,
    position: "absolute",
    backgroundColor: Color.white,
  },
  settingsBtnIcon: {
    left: 220,
    width: 112,
    top: 0,
    height: 47,
    position: "absolute",
  },
  frame1: {
    top: 38,
    left: 20,
    width: 332,
    height: 47,
    position: "absolute",
    overflow: "hidden",
  },
  frame: {
    top: 20,
    left: 21,
    backgroundColor: Color.ghostwhite_100,
    width: 371,
    height: 304,
    borderRadius: Border.br_3xs,
    position: "absolute",
    overflow: "hidden",
  },
  frameIcon: {
    width: 84,
    height: 52,
    borderRadius: Border.br_3xs,
    overflow: "hidden",
  },
  accountHolder: {
    textAlign: "left",
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    color: Color.darkslateblue,
  },
  domhnallGleeson: {
    lineHeight: 17,
    fontFamily: FontFamily.interSemiBold,
  },
  frame3: {
    width: 123,
    height: 38,
    overflow: "hidden",
  },
  frame2: {
    top: 356,
    width: 193,
  },
  frameShadowBox: {
    justifyContent: "center",
    width: 54,
    elevation: 30,
    shadowRadius: 30,
    shadowColor: "rgba(49, 75, 206, 0.1)",
    height: 52,
    alignItems: "center",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 30,
    },
    borderRadius: Border.br_3xs,
    overflow: "hidden",
    backgroundColor: Color.white,
  },
  bankUsa: {
    fontFamily: FontFamily.nunitoSemiBold,
  },
  frame6: {
    width: 77,
    height: 40,
    overflow: "hidden",
  },
  frame4: {
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
  frame9: {
    width: 163,
    overflow: "hidden",
  },
  frame7: {
    top: 525,
    width: 233,
  },
  streetnyc: {
    lineHeight: 17,
    fontFamily: FontFamily.interSemiBold,
  },
  frame12: {
    width: 105,
    overflow: "hidden",
  },
  frame10: {
    top: 609,
    width: 173,
  },
  image27Icon: {
    width: 15,
    height: 15,
  },
  frame14: {
    paddingLeft: Padding.p_lgi,
    paddingTop: Padding.p_9xs,
    paddingRight: Padding.p_8xs,
    paddingBottom: Padding.p_9xs,
    width: 54,
    elevation: 30,
    shadowRadius: 30,
    shadowColor: "rgba(49, 75, 206, 0.1)",
    height: 52,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 30,
    },
    borderRadius: Border.br_3xs,
    overflow: "hidden",
    backgroundColor: Color.white,
  },
  text: {
    lineHeight: 17,
    fontFamily: FontFamily.interSemiBold,
  },
  frame15: {
    width: 114,
    height: 37,
    overflow: "hidden",
  },
  frame13: {
    top: 693,
    width: 182,
  },
  text2: {
    fontFamily: FontFamily.nunitoSemiBold,
  },
  frame18: {
    width: 115,
    overflow: "hidden",
  },
  frame16: {
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
