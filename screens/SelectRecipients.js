import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import Frame12 from "../components/Frame12";
import Frame11 from "../components/Frame11";
import FormContainer from "../components/FormContainer";
import { FontFamily, FontSize, Color, Border, Padding } from "../GlobalStyles";

const SelectRecipients = () => {
  return (
    <View style={styles.selectRecipients}>
      <Text style={styles.mainHeadline}>Select Recipients</Text>
      <Text style={[styles.send, styles.sendTypo1]}>MY ACCOUNTS</Text>
      <Text style={[styles.send1, styles.sendTypo1]}>ADD NEW CONTACTS</Text>
      <View style={styles.frame}>
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
      <View style={[styles.frame1, styles.frameLayout1]}>
        <View style={[styles.frameChild, styles.frameLayout]} />
        <View style={styles.rectangle} />
        <View style={styles.frameItem} />
        <Text style={[styles.send2, styles.sendTypo]}>Add new recepient</Text>
        <Image
          style={styles.vectorIcon}
          contentFit="cover"
          source={require("../assets/vector6.png")}
        />
      </View>
      <View style={[styles.frame2, styles.frameLayout]}>
        <View style={[styles.frame3, styles.frameLayout]}>
          <Text style={[styles.send3, styles.sendTypo]}>
            search for contact...
          </Text>
          <Image
            style={styles.image15Icon}
            contentFit="cover"
            source={require("../assets/mask-group.png")}
          />
        </View>
        <Frame12 />
        <Frame11 />
      </View>
      <FormContainer
        imageId={require("../assets/group3.png")}
        dimensionCode={require("../assets/rectangle-346.png")}
      />
      <FormContainer
        imageId={require("../assets/group2.png")}
        dimensionCode={require("../assets/rectangle-345.png")}
        propTop={436}
        propHeight={40}
        propAlignSelf="unset"
      />
      <FormContainer
        imageId={require("../assets/group2.png")}
        dimensionCode={require("../assets/rectangle-344.png")}
        propTop={349}
        propHeight="unset"
        propAlignSelf="unset"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  sendTypo1: {
    textAlign: "left",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    letterSpacing: 0,
    fontSize: FontSize.size_sm,
    color: Color.darkslateblue,
    top: "50%",
    position: "absolute",
  },
  btnPosition: {
    top: 0,
    height: 47,
    position: "absolute",
  },
  frameLayout1: {
    width: 332,
    left: 41,
    overflow: "hidden",
  },
  frameLayout: {
    borderRadius: Border.br_5xs,
    position: "absolute",
  },
  sendTypo: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    textAlign: "left",
    letterSpacing: 0,
  },
  mainHeadline: {
    marginTop: -337,
    left: "9.18%",
    fontSize: FontSize.size_23xl,
    fontFamily: FontFamily.robotoRegular,
    textAlign: "center",
    color: Color.darkslateblue,
    top: "50%",
    position: "absolute",
  },
  send: {
    marginTop: -155,
    left: "9.9%",
  },
  send1: {
    marginTop: 162,
    left: "10.87%",
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
    alignItems: "flex-end",
    justifyContent: "flex-end",
    backgroundColor: Color.white,
  },
  settingsBtnIcon: {
    left: 220,
    width: 112,
  },
  frame: {
    top: 58,
    height: 47,
    width: 332,
    left: 41,
    position: "absolute",
    overflow: "hidden",
  },
  frameChild: {
    top: 57,
    left: 49,
    backgroundColor: "rgba(87, 113, 249, 0.39)",
    width: 234,
    height: 41,
  },
  rectangle: {
    height: "74.49%",
    top: "0%",
    right: "0%",
    bottom: "25.51%",
    left: "0%",
    borderRadius: Border.br_8xs,
    backgroundColor: Color.royalblue_100,
    position: "absolute",
    width: "100%",
  },
  frameItem: {
    top: 16,
    left: 272,
    borderRadius: Border.br_3xs,
    width: 44,
    height: 42,
    position: "absolute",
    backgroundColor: Color.white,
  },
  send2: {
    marginTop: -23,
    left: "5.72%",
    fontSize: FontSize.size_lg,
    color: Color.white,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    top: "50%",
    position: "absolute",
  },
  vectorIcon: {
    height: "14.29%",
    width: "4.22%",
    top: "30.61%",
    right: "9.34%",
    bottom: "55.1%",
    left: "86.45%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  frame1: {
    top: 190,
    height: 98,
    position: "absolute",
  },
  send3: {
    color: Color.slategray_100,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  frame3: {
    top: 14,
    left: 14,
    width: 303,
    flexDirection: "row",
    paddingHorizontal: Padding.p_smi,
    paddingVertical: Padding.p_mini,
    alignItems: "center",
    justifyContent: "space-between",
    overflow: "hidden",
    backgroundColor: Color.white,
  },
  frame2: {
    top: 649,
    backgroundColor: Color.ghostwhite_100,
    height: 264,
    width: 332,
    left: 41,
    overflow: "hidden",
  },
  selectRecipients: {
    flex: 1,
    height: 896,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default SelectRecipients;
