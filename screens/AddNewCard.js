import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import Frame9 from "../components/Frame9";
import InputFields1 from "../components/InputFields1";
import { Color, FontSize, FontFamily, Border, Padding } from "../GlobalStyles";

const AddNewCard = () => {
  return (
    <View style={styles.addNewCard}>
      <Text style={[styles.mainHeadline, styles.sendPosition]}>
        Add New Card
      </Text>
      <Text style={[styles.send, styles.sendPosition]}>
        Enter the details to add a new card
      </Text>
      <View style={styles.frame}>
        <View style={[styles.backBtn, styles.backBtnShadowBox]}>
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
      <Frame9 propTop={216} />
      <View style={styles.frame1}>
        <View style={styles.frameInner}>
          <View style={[styles.frameChild, styles.backBtnShadowBox]} />
        </View>
        <Text style={styles.markAsDefault}>Mark as default card</Text>
      </View>
      <InputFields1 />
    </View>
  );
};

const styles = StyleSheet.create({
  sendPosition: {
    color: Color.darkslateblue,
    top: "50%",
    textAlign: "left",
    position: "absolute",
  },
  backBtnShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 30,
    },
    backgroundColor: Color.white,
  },
  btnPosition: {
    top: 0,
    height: 47,
    position: "absolute",
  },
  mainHeadline: {
    marginTop: -311,
    left: "10.14%",
    fontSize: FontSize.size_27xl,
    fontFamily: FontFamily.robotoRegular,
    textAlign: "left",
  },
  send: {
    marginTop: -21,
    left: "10.87%",
    fontSize: FontSize.size_lg,
    letterSpacing: 0,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    textAlign: "left",
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
    top: 0,
    height: 47,
    position: "absolute",
  },
  settingsBtnIcon: {
    left: 220,
    width: 112,
  },
  frame: {
    top: 58,
    left: 42,
    width: 332,
    height: 47,
    position: "absolute",
    overflow: "hidden",
  },
  frameChild: {
    shadowColor: "rgba(64, 74, 83, 0.35)",
    shadowRadius: 4,
    elevation: 4,
    width: 21,
    height: 20,
    borderRadius: Border.br_31xl,
  },
  frameInner: {
    backgroundColor: "#33c759",
    width: 46,
    height: 26,
    paddingHorizontal: Padding.p_8xs,
    paddingVertical: Padding.p_0,
    justifyContent: "center",
    borderRadius: Border.br_31xl,
    alignItems: "flex-end",
  },
  markAsDefault: {
    fontSize: FontSize.size_xs,
    lineHeight: 15,
    fontFamily: FontFamily.interRegular,
    color: Color.gray_100,
    textAlign: "left",
  },
  frame1: {
    top: 814,
    left: 50,
    width: 168,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    position: "absolute",
    overflow: "hidden",
  },
  addNewCard: {
    flex: 1,
    width: "100%",
    height: 896,
    overflow: "hidden",
    backgroundColor: Color.white,
  },
});

export default AddNewCard;
