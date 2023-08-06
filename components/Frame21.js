import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Color, FontSize, FontFamily, Border, Padding } from "../GlobalStyles";

const Frame21 = () => {
  return (
    <View style={styles.frame}>
      <Text style={styles.send}>Bank USA</Text>
      <Text style={[styles.send1, styles.sendPosition]}>Your BDT account</Text>
      <Text style={[styles.send2, styles.sendPosition]}>
        Receipient type : Private
      </Text>
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
    </View>
  );
};

const styles = StyleSheet.create({
  sendPosition: {
    letterSpacing: 0,
    textAlign: "center",
    color: Color.darkslateblue,
    top: "50%",
    position: "absolute",
  },
  btnPosition: {
    top: 0,
    height: 47,
    position: "absolute",
  },
  send: {
    marginTop: -60,
    width: "71.15%",
    left: "21.7%",
    fontSize: FontSize.size_33xl,
    fontFamily: FontFamily.robotoRegular,
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
  },
  send2: {
    marginTop: 78,
    width: "54.12%",
    left: "30.52%",
    fontSize: FontSize.size_base,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
  },
  image15Icon: {
    width: 16,
    height: 16,
  },
  backBtn: {
    left: 0,
    borderRadius: Border.br_mini,
    backgroundColor: Color.white,
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
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
  settingsBtnIcon: {
    left: 220,
    width: 112,
  },
  frame1: {
    top: 38,
    left: 20,
    width: 332,
    height: 47,
    overflow: "hidden",
    position: "absolute",
  },
  frame: {
    top: 20,
    left: 21,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.ghostwhite_100,
    width: 371,
    height: 304,
    overflow: "hidden",
    position: "absolute",
  },
});

export default Frame21;
