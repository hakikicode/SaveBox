import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import { Padding, Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const Frame27 = () => {
  return (
    <View style={styles.frame}>
      <Image
        style={styles.frameChild}
        contentFit="cover"
        source={require("../assets/rectangle-683.png")}
      />
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
      <Text style={styles.mainHeadline}>Transferred</Text>
      <View style={[styles.rectangleParent, styles.rectangleShadowBox]}>
        <Image
          style={styles.frameItemLayout}
          contentFit="cover"
          source={require("../assets/rectangle-69.png")}
        />
        <View style={styles.frame1}>
          <Text style={[styles.send, styles.sendTypo1]}>Bonnie Riley</Text>
          <Text style={[styles.send1, styles.sendTypo]}>EUR ACCOUNT</Text>
        </View>
      </View>
      <View style={[styles.rectangleGroup, styles.rectangleShadowBox]}>
        <Image
          style={styles.frameItemLayout}
          contentFit="cover"
          source={require("../assets/rectangle-692.png")}
        />
        <View style={styles.frame1}>
          <Text style={[styles.send, styles.sendTypo1]}>Becky Parker</Text>
          <Text style={[styles.send1, styles.sendTypo]}>EUR ACCOUNT</Text>
        </View>
      </View>
      <View style={styles.maskGroup}>
        <View style={styles.rectangleContainer}>
          <Image
            style={[styles.rectangleIcon, styles.frameItemLayout]}
            contentFit="cover"
            source={require("../assets/rectangle-693.png")}
          />
          <Text style={[styles.send4, styles.sendTypo1]}>Ryan Reynolds</Text>
          <Text style={[styles.send5, styles.sendTypo]}>EUR ACCOUNT</Text>
        </View>
      </View>
      <Text style={[styles.send6, styles.sendTypo1]}>See Transfer Details</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleShadowBox: {
    justifyContent: "center",
    paddingBottom: Padding.p_mini,
    paddingTop: Padding.p_mini,
    top: 219,
    alignItems: "center",
    width: 129,
    shadowOpacity: 1,
    elevation: 65,
    shadowRadius: 65,
    shadowOffset: {
      width: 0,
      height: 30,
    },
    shadowColor: "rgba(111, 136, 157, 0.25)",
    backgroundColor: Color.white,
    borderRadius: Border.br_mini,
    position: "absolute",
  },
  sendTypo1: {
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    textAlign: "center",
  },
  sendTypo: {
    color: Color.slategray_100,
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    letterSpacing: 0,
    textAlign: "center",
  },
  frameItemLayout: {
    height: 54,
    width: 54,
    borderRadius: Border.br_3xs,
  },
  frameChild: {
    top: 0,
    left: 0,
    borderRadius: Border.br_6xl,
    height: 458,
    width: 376,
    position: "absolute",
  },
  image15Icon: {
    width: 16,
    height: 16,
  },
  backBtn: {
    top: 41,
    width: 47,
    height: 47,
    padding: Padding.p_mini,
    alignItems: "flex-end",
    justifyContent: "flex-end",
    shadowOpacity: 1,
    elevation: 65,
    shadowRadius: 65,
    shadowOffset: {
      width: 0,
      height: 30,
    },
    shadowColor: "rgba(111, 136, 157, 0.25)",
    backgroundColor: Color.white,
    borderRadius: Border.br_mini,
    left: 22,
    position: "absolute",
  },
  settingsBtnIcon: {
    top: 6,
    left: 242,
    width: 134,
    height: 177,
    position: "absolute",
  },
  mainHeadline: {
    marginTop: -114,
    left: "9.57%",
    fontSize: FontSize.size_27xl,
    fontFamily: FontFamily.robotoRegular,
    textAlign: "center",
    color: Color.darkslateblue,
    top: "50%",
    position: "absolute",
  },
  send: {
    letterSpacing: 0,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    color: Color.darkslateblue,
  },
  send1: {
    marginTop: 4,
  },
  frame1: {
    alignSelf: "stretch",
    height: 35,
    marginTop: 11,
    alignItems: "center",
    overflow: "hidden",
  },
  rectangleParent: {
    paddingLeft: Padding.p_xl,
    paddingRight: Padding.p_lgi,
    left: 22,
    paddingBottom: Padding.p_mini,
    paddingTop: Padding.p_mini,
    top: 219,
  },
  rectangleGroup: {
    left: 164,
    paddingLeft: Padding.p_mid,
    paddingRight: Padding.p_mini,
  },
  rectangleIcon: {
    top: 15,
    left: 37,
    position: "absolute",
  },
  send4: {
    left: "13.18%",
    letterSpacing: 0,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    color: Color.darkslateblue,
    marginTop: 11,
    top: "50%",
    position: "absolute",
  },
  send5: {
    marginTop: 34,
    left: "24.03%",
    top: "50%",
    position: "absolute",
  },
  rectangleContainer: {
    top: 57,
    left: 31,
    height: 138,
    width: 129,
    shadowOpacity: 1,
    elevation: 65,
    shadowRadius: 65,
    shadowOffset: {
      width: 0,
      height: 30,
    },
    shadowColor: "rgba(111, 136, 157, 0.25)",
    backgroundColor: Color.white,
    borderRadius: Border.br_mini,
    position: "absolute",
  },
  maskGroup: {
    top: 162,
    left: 275,
    width: 101,
    height: 306,
    position: "absolute",
  },
  send6: {
    marginTop: 172,
    left: "26.33%",
    fontSize: FontSize.size_lg,
    color: Color.royalblue_100,
    top: "50%",
    position: "absolute",
  },
  frame: {
    top: 17,
    left: 20,
    height: 468,
    overflow: "hidden",
    width: 376,
    position: "absolute",
  },
});

export default Frame27;
