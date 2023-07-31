import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { FontFamily, Border, Color, FontSize } from "../GlobalStyles";

const SelectRecipients = () => {
  return (
    <View style={styles.selectRecipients}>
      <Text style={styles.mainHeadline}>Select Recipients</Text>
      <Text style={[styles.send, styles.sendTypo3]}>AB Bank</Text>
      <Image
        style={[styles.groupIcon, styles.groupIconLayout]}
        contentFit="cover"
        source={require("../assets/group2.png")}
      />
      <View style={[styles.selectRecipientsChild, styles.selectLayout]} />
      <Image
        style={styles.selectLayout}
        contentFit="cover"
        source={require("../assets/rectangle-344.png")}
      />
      <View style={[styles.selectRecipientsInner, styles.selectChildLayout1]} />
      <View style={[styles.rectangle, styles.send2Position]} />
      <View style={styles.rectangleView} />
      <Text style={styles.send1}>Add new recepient</Text>
      <View style={[styles.backBtn, styles.backLayout]}>
        <View style={[styles.backBtnChild, styles.backLayout]} />
        <Image
          style={[styles.image15Icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/image-15.png")}
        />
      </View>
      <Image
        style={[styles.vectorIcon, styles.groupIconLayout]}
        contentFit="cover"
        source={require("../assets/vector6.png")}
      />
      <Text style={[styles.send2, styles.send2Position]}>MY ACCOUNTS</Text>
      <Text style={[styles.send3, styles.sendTypo3]}>ADD NEW CONTACTS</Text>
      <Text style={[styles.send4, styles.sendPosition]}>
        Account ending with 1252
      </Text>
      <Text style={[styles.send5, styles.sendTypo3]}>AB Bank</Text>
      <Image
        style={[styles.groupIcon1, styles.groupIconLayout]}
        contentFit="cover"
        source={require("../assets/group2.png")}
      />
      <View
        style={[styles.selectRecipientsChild1, styles.rectangleIconPosition]}
      />
      <Image
        style={styles.rectangleIconPosition}
        contentFit="cover"
        source={require("../assets/rectangle-345.png")}
      />
      <Text style={[styles.send6, styles.sendPosition]}>
        Account ending with 1252
      </Text>
      <Text style={[styles.send7, styles.sendTypo3]}>AB Bank</Text>
      <Image
        style={[styles.groupIcon2, styles.groupIconLayout]}
        contentFit="cover"
        source={require("../assets/group3.png")}
      />
      <View
        style={[styles.selectRecipientsChild2, styles.selectChildPosition]}
      />
      <Image
        style={styles.selectChildPosition}
        contentFit="cover"
        source={require("../assets/rectangle-346.png")}
      />
      <Text style={[styles.send8, styles.sendPosition]}>
        Account ending with 1252
      </Text>
      <View
        style={[styles.selectRecipientsChild4, styles.selectChildLayout1]}
      />
      <Image
        style={[styles.selectRecipientsChild5, styles.selectChildLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-38.png")}
      />
      <Text style={[styles.send9, styles.sendTypo]}>+000 00 0000</Text>
      <Text style={[styles.send10, styles.sendTypo1]}>Yamilet Booker</Text>
      <Image
        style={[styles.selectRecipientsChild6, styles.selectChildLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-37.png")}
      />
      <Text style={[styles.send11, styles.sendTypo]}>+000 00 0000</Text>
      <Text style={[styles.send12, styles.sendTypo1]}>Alejandra Star</Text>
      <View style={[styles.btnSmall, styles.btnLayout]}>
        <View style={[styles.btnSmallChild, styles.btnChildPosition]} />
        <View style={styles.rectangleParent}>
          <View style={[styles.rectangle1, styles.rectanglePosition]} />
          <Text style={[styles.signUp, styles.signTypo]}>Invited</Text>
        </View>
      </View>
      <View style={[styles.btnSmallOrange, styles.btnLayout]}>
        <View style={[styles.btnSmallOrangeChild, styles.btnChildPosition]} />
        <View style={styles.rectangleParent}>
          <Image
            style={[styles.rectangleIcon1, styles.rectanglePosition]}
            contentFit="cover"
            source={require("../assets/rectangle4.png")}
          />
          <Text style={[styles.signUp1, styles.signTypo]}>Invite</Text>
        </View>
      </View>
      <View
        style={[styles.selectRecipientsChild7, styles.selectChildLayout1]}
      />
      <Text style={[styles.send13, styles.sendPosition]}>
        search for contact...
      </Text>
      <Image
        style={[styles.maskGroupIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/mask-group12.png")}
      />
      <Image
        style={styles.settingsBtnIcon}
        contentFit="cover"
        source={require("../assets/settings-btn.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  sendTypo3: {
    textAlign: "left",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    letterSpacing: 0,
    top: "50%",
  },
  groupIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  selectLayout: {
    height: 52,
    width: 54,
    top: 349,
    borderRadius: Border.br_3xs,
    left: 41,
    position: "absolute",
  },
  selectChildLayout1: {
    borderRadius: Border.br_5xs,
    position: "absolute",
  },
  send2Position: {
    left: "9.9%",
    position: "absolute",
  },
  backLayout: {
    height: 47,
    width: 47,
    position: "absolute",
  },
  iconLayout: {
    height: 16,
    width: 16,
    position: "absolute",
  },
  sendPosition: {
    color: Color.slategray_100,
    textAlign: "left",
    letterSpacing: 0,
    top: "50%",
    position: "absolute",
  },
  rectangleIconPosition: {
    top: 436,
    height: 52,
    width: 54,
    borderRadius: Border.br_3xs,
    left: 41,
    position: "absolute",
  },
  selectChildPosition: {
    top: 523,
    height: 52,
    width: 54,
    borderRadius: Border.br_3xs,
    left: 41,
    position: "absolute",
  },
  selectChildLayout: {
    height: 54,
    left: 56,
    width: 54,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  sendTypo: {
    fontSize: FontSize.size_3xs,
    left: "29.23%",
    color: Color.slategray_100,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    letterSpacing: 0,
    textAlign: "center",
    top: "50%",
    position: "absolute",
  },
  sendTypo1: {
    left: "29.23%",
    fontSize: FontSize.size_sm,
    textAlign: "left",
    color: Color.gray_200,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    letterSpacing: 0,
    top: "50%",
    position: "absolute",
  },
  btnLayout: {
    height: 43,
    width: 110,
    left: 253,
    position: "absolute",
  },
  btnChildPosition: {
    left: "10.27%",
    bottom: "0%",
    right: "14.59%",
    top: "56.16%",
    width: "75.14%",
    height: "43.84%",
    position: "absolute",
  },
  rectanglePosition: {
    height: "100%",
    left: "0%",
    right: "0%",
    top: "0%",
    bottom: "0%",
    borderRadius: Border.br_5xs,
    position: "absolute",
    width: "100%",
  },
  signTypo: {
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    top: "30.36%",
    fontSize: FontSize.size_xs,
    color: Color.white,
    letterSpacing: 0,
    textAlign: "center",
    position: "absolute",
  },
  mainHeadline: {
    marginTop: -337,
    left: "9.18%",
    fontSize: FontSize.size_23xl,
    fontFamily: FontFamily.gilroyBold,
    textAlign: "center",
    color: Color.darkslateblue,
    top: "50%",
    position: "absolute",
  },
  send: {
    marginTop: -94,
    color: Color.gray_200,
    fontSize: FontSize.size_lg,
    left: "26.33%",
    textAlign: "left",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    letterSpacing: 0,
    position: "absolute",
  },
  groupIcon: {
    top: "41.29%",
    bottom: "57.57%",
    left: "87.44%",
    right: "9.69%",
    maxHeight: "100%",
    maxWidth: "100%",
    width: "2.87%",
    height: "1.14%",
    position: "absolute",
  },
  selectRecipientsChild: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 15,
    },
    backgroundColor: Color.white,
    elevation: 30,
    shadowRadius: 30,
    shadowColor: "rgba(49, 75, 206, 0.15)",
  },
  selectRecipientsInner: {
    top: 247,
    left: 90,
    backgroundColor: "rgba(87, 113, 249, 0.39)",
    width: 234,
    height: 41,
  },
  rectangle: {
    height: "8.15%",
    width: "80.19%",
    top: "21.21%",
    right: "9.9%",
    bottom: "70.65%",
    borderRadius: Border.br_8xs,
    backgroundColor: Color.royalblue_100,
  },
  rectangleView: {
    top: 206,
    left: 313,
    width: 44,
    height: 42,
    borderRadius: Border.br_3xs,
    position: "absolute",
    backgroundColor: Color.white,
  },
  send1: {
    marginTop: -232,
    left: "14.49%",
    color: Color.white,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    textAlign: "left",
    letterSpacing: 0,
    fontSize: FontSize.size_lg,
    top: "50%",
    position: "absolute",
  },
  backBtnChild: {
    top: 0,
    left: 0,
    borderRadius: Border.br_mini,
    shadowColor: "rgba(111, 136, 157, 0.25)",
    shadowRadius: 65,
    elevation: 65,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 15,
    },
    backgroundColor: Color.white,
    height: 47,
    width: 47,
  },
  image15Icon: {
    top: 16,
    left: 16,
  },
  backBtn: {
    top: 58,
    left: 41,
  },
  vectorIcon: {
    height: "1.56%",
    width: "3.38%",
    top: "24.55%",
    right: "17.39%",
    bottom: "73.88%",
    left: "79.23%",
    position: "absolute",
  },
  send2: {
    marginTop: -155,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    letterSpacing: 0,
    top: "50%",
    color: Color.darkslateblue,
  },
  send3: {
    marginTop: 162,
    left: "10.87%",
    fontSize: FontSize.size_sm,
    textAlign: "left",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    letterSpacing: 0,
    color: Color.darkslateblue,
    position: "absolute",
  },
  send4: {
    marginTop: -69,
    fontSize: FontSize.size_xs,
    color: Color.slategray_100,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    left: "26.33%",
  },
  send5: {
    marginTop: -7,
    color: Color.gray_200,
    fontSize: FontSize.size_lg,
    left: "26.33%",
    textAlign: "left",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    letterSpacing: 0,
    position: "absolute",
  },
  groupIcon1: {
    top: "51%",
    bottom: "47.86%",
    left: "87.44%",
    right: "9.69%",
    maxHeight: "100%",
    maxWidth: "100%",
    width: "2.87%",
    height: "1.14%",
    position: "absolute",
  },
  selectRecipientsChild1: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 15,
    },
    backgroundColor: Color.white,
    elevation: 30,
    shadowRadius: 30,
    shadowColor: "rgba(49, 75, 206, 0.15)",
  },
  send6: {
    marginTop: 18,
    fontSize: FontSize.size_xs,
    color: Color.slategray_100,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    left: "26.33%",
  },
  send7: {
    marginTop: 80,
    color: Color.gray_200,
    fontSize: FontSize.size_lg,
    left: "26.33%",
    textAlign: "left",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    letterSpacing: 0,
    position: "absolute",
  },
  groupIcon2: {
    top: "60.71%",
    right: "9.67%",
    bottom: "38.15%",
    left: "87.45%",
    width: "2.87%",
    height: "1.14%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
  },
  selectRecipientsChild2: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 15,
    },
    backgroundColor: Color.white,
    elevation: 30,
    shadowRadius: 30,
    shadowColor: "rgba(49, 75, 206, 0.15)",
  },
  send8: {
    marginTop: 105,
    fontSize: FontSize.size_xs,
    color: Color.slategray_100,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    left: "26.33%",
  },
  selectRecipientsChild4: {
    top: 649,
    backgroundColor: Color.ghostwhite_100,
    width: 332,
    height: 264,
    left: 41,
  },
  selectRecipientsChild5: {
    top: 740,
  },
  send9: {
    marginTop: 326,
  },
  send10: {
    marginTop: 305,
  },
  selectRecipientsChild6: {
    top: 815,
  },
  send11: {
    marginTop: 398,
  },
  send12: {
    marginTop: 377,
  },
  btnSmallChild: {
    backgroundColor: Color.slateblue_400,
  },
  rectangle1: {
    backgroundColor: Color.royalblue_100,
  },
  signUp: {
    left: "31.82%",
  },
  rectangleParent: {
    height: "76.71%",
    bottom: "23.29%",
    left: "0%",
    right: "0%",
    top: "0%",
    position: "absolute",
    width: "100%",
  },
  btnSmall: {
    top: 748,
  },
  btnSmallOrangeChild: {
    backgroundColor: "rgba(255, 137, 126, 0.31)",
  },
  rectangleIcon1: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  signUp1: {
    left: "35.45%",
  },
  btnSmallOrange: {
    top: 820,
  },
  selectRecipientsChild7: {
    top: 663,
    left: 55,
    width: 303,
    height: 46,
    backgroundColor: Color.white,
    borderRadius: Border.br_5xs,
  },
  send13: {
    marginTop: 230,
    left: "16.43%",
    fontSize: FontSize.size_sm,
    color: Color.slategray_100,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  maskGroupIcon: {
    top: 678,
    left: 327,
  },
  settingsBtnIcon: {
    top: 23,
    left: 261,
    width: 153,
    height: 177,
    position: "absolute",
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
