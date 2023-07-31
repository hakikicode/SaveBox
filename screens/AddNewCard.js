import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Color, FontSize, FontFamily, Border, Padding } from "../GlobalStyles";

const AddNewCard = () => {
  return (
    <View style={styles.addNewCard}>
      <Text style={styles.mainHeadline}>Add New Card</Text>
      <Text style={styles.send}>Enter the details to add a new card</Text>
      <View style={[styles.frame, styles.btnLayout]}>
        <View style={[styles.backBtn, styles.backBtnShadowBox]}>
          <Image
            style={styles.image15Icon}
            contentFit="cover"
            source={require("../assets/image-15.png")}
          />
        </View>
        <Image
          style={[styles.settingsBtnIcon, styles.btnLayout]}
          contentFit="cover"
          source={require("../assets/settings-btn.png")}
        />
      </View>
      <View style={[styles.frame1, styles.frame1Layout]}>
        <Image
          style={[styles.maskGroupIcon, styles.frame1Layout]}
          contentFit="cover"
          source={require("../assets/mask-group3.png")}
        />
        <Image
          style={[styles.image5Icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/image-5.png")}
        />
        <Text style={styles.send1}>Account Holder</Text>
        <Text style={[styles.send2, styles.sendPosition]}>Valid Till</Text>
        <Text style={styles.send3}>Account Number</Text>
        <Text style={[styles.send4, styles.sendCardTypo]}>MASTERCARD</Text>
        <Text style={styles.send5}>Domhnall Gleeson</Text>
        <Text style={[styles.send6, styles.sendCardTypo]}>10.10.2022</Text>
        <Text style={[styles.send7, styles.sendCardTypo]}>023 456 789 123</Text>
      </View>
      <View style={[styles.frame2, styles.frameFlexBox1]}>
        <View style={[styles.frameInner, styles.frameFlexBox]}>
          <View style={[styles.frameChild, styles.backBtnShadowBox]} />
        </View>
        <Text style={[styles.markAsDefault, styles.cardTypo]}>
          Mark as default card
        </Text>
      </View>
      <View style={[styles.inputFields, styles.frame6Layout]}>
        <Text style={[styles.cardNumber, styles.cardTypo]}>Card Number</Text>
        <Text style={[styles.cardHolder, styles.cardTypo]}>Card Holder</Text>
        <View style={[styles.frame3, styles.framePosition]}>
          <Text style={[styles.text, styles.textTypo]}>
            *** **** *** ***** 6580
          </Text>
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/image-5.png")}
          />
        </View>
        <View style={[styles.frame4, styles.frameLayout]}>
          <Text style={[styles.enterCardHolder, styles.textTypo]}>
            Enter card holder name
          </Text>
        </View>
        <View style={[styles.frame5, styles.frameFlexBox1]}>
          <Text style={[styles.expirationDate, styles.cardTypo]}>
            Expiration Date
          </Text>
          <Text style={[styles.expirationDate, styles.cardTypo]}>CVC</Text>
        </View>
        <View style={[styles.frame6, styles.frameFlexBox1]}>
          <View style={[styles.frame7, styles.frameLayout]}>
            <Text style={[styles.enterCardHolder, styles.textTypo]}>0</Text>
          </View>
          <View style={[styles.frame8, styles.frameFlexBox1]}>
            <Image
              style={[styles.frameIcon, styles.frameLayout]}
              contentFit="cover"
              source={require("../assets/frame8.png")}
            />
            <View style={[styles.frame9, styles.frameFlexBox1]}>
              <View style={[styles.frame10, styles.frameFlexBox2]}>
                <Text style={[styles.enterCardHolder, styles.textTypo]}>0</Text>
                <Image
                  style={[styles.maskGroupIcon1, styles.maskGroupLayout]}
                  contentFit="cover"
                  source={require("../assets/mask-group4.png")}
                />
              </View>
              <View style={[styles.frame11, styles.frameLayout]}>
                <Text style={[styles.enterCardHolder, styles.textTypo]}>0</Text>
                <Image
                  style={[styles.maskGroupIcon2, styles.maskGroupLayout]}
                  contentFit="cover"
                  source={require("../assets/mask-group5.png")}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  btnLayout: {
    height: 47,
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
  frame1Layout: {
    height: 188,
    width: 329,
    position: "absolute",
  },
  iconLayout: {
    height: 29,
    width: 29,
  },
  sendPosition: {
    left: "57.45%",
    color: Color.white,
    fontSize: FontSize.size_3xs,
    letterSpacing: 0,
    textAlign: "left",
    top: "50%",
    position: "absolute",
  },
  sendCardTypo: {
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  frameFlexBox1: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
  },
  frameFlexBox: {
    justifyContent: "center",
    paddingVertical: 0,
  },
  cardTypo: {
    lineHeight: 15,
    fontSize: FontSize.size_xs,
    textAlign: "left",
  },
  frame6Layout: {
    width: 329,
    position: "absolute",
  },
  framePosition: {
    width: 324,
    left: 0,
    position: "absolute",
  },
  textTypo: {
    lineHeight: 17,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    textAlign: "left",
  },
  frameLayout: {
    height: 56,
    overflow: "hidden",
  },
  frameFlexBox2: {
    alignItems: "center",
    flexDirection: "row",
  },
  maskGroupLayout: {
    height: 12,
    width: 12,
  },
  mainHeadline: {
    marginTop: -311,
    left: "10.14%",
    fontSize: FontSize.size_27xl,
    fontFamily: FontFamily.gilroyBold,
    textAlign: "left",
    top: "50%",
    color: Color.darkslateblue,
    position: "absolute",
  },
  send: {
    marginTop: -21,
    left: "10.87%",
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    letterSpacing: 0,
    textAlign: "left",
    color: Color.darkslateblue,
    top: "50%",
    position: "absolute",
  },
  image15Icon: {
    width: 16,
    height: 16,
  },
  backBtn: {
    borderRadius: Border.br_mini,
    shadowColor: "rgba(111, 136, 157, 0.25)",
    shadowRadius: 65,
    elevation: 65,
    width: 47,
    padding: Padding.p_mini,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    left: 0,
    top: 0,
    height: 47,
    position: "absolute",
  },
  settingsBtnIcon: {
    left: 220,
    width: 112,
    top: 0,
  },
  frame: {
    top: 58,
    left: 42,
    width: 332,
    overflow: "hidden",
  },
  maskGroupIcon: {
    left: 0,
    top: 0,
  },
  image5Icon: {
    top: 147,
    left: 279,
    position: "absolute",
  },
  send1: {
    color: Color.white,
    fontSize: FontSize.size_3xs,
    left: "6.99%",
    marginTop: 45,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    letterSpacing: 0,
    textAlign: "left",
    top: "50%",
    position: "absolute",
  },
  send2: {
    marginTop: 45,
    left: "57.45%",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  send3: {
    marginTop: -20,
    fontSize: FontSize.size_xs,
    color: Color.white,
    left: "6.99%",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    letterSpacing: 0,
    textAlign: "left",
    top: "50%",
    position: "absolute",
  },
  send4: {
    marginTop: -69,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    color: Color.white,
    left: "6.99%",
    textAlign: "left",
    top: "50%",
    position: "absolute",
  },
  send5: {
    marginTop: 57,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    color: Color.white,
    left: "6.99%",
    letterSpacing: 0,
    textAlign: "left",
    top: "50%",
    position: "absolute",
  },
  send6: {
    marginTop: 62,
    left: "57.45%",
    color: Color.white,
    fontSize: FontSize.size_3xs,
    letterSpacing: 0,
    textAlign: "left",
    top: "50%",
    position: "absolute",
  },
  send7: {
    marginTop: -5,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    color: Color.white,
    left: "6.99%",
    textAlign: "left",
    top: "50%",
    position: "absolute",
    letterSpacing: 0,
  },
  frame1: {
    top: 216,
    borderRadius: Border.br_6xl,
    backgroundColor: Color.slateblue_100,
    left: 45,
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
    borderRadius: Border.br_31xl,
    alignItems: "flex-end",
  },
  markAsDefault: {
    fontFamily: FontFamily.interRegular,
    color: Color.gray_100,
  },
  frame2: {
    top: 814,
    left: 50,
    width: 168,
    position: "absolute",
  },
  cardNumber: {
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    left: 0,
    top: 0,
    color: Color.darkslateblue,
    lineHeight: 15,
    position: "absolute",
  },
  cardHolder: {
    top: 110,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    left: 0,
    color: Color.darkslateblue,
    lineHeight: 15,
    position: "absolute",
  },
  text: {
    color: Color.slateblue_100,
  },
  frame3: {
    top: 21,
    backgroundColor: Color.slateblue_300,
    borderStyle: "solid",
    borderColor: "#314bce",
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingTop: Padding.p_smi,
    paddingBottom: Padding.p_sm,
    borderRadius: Border.br_5xs,
    width: 324,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
  },
  enterCardHolder: {
    color: Color.gray_100,
  },
  frame4: {
    top: 131,
    paddingHorizontal: Padding.p_sm,
    paddingVertical: Padding.p_lg,
    backgroundColor: Color.ghostwhite_200,
    height: 56,
    borderRadius: Border.br_5xs,
    width: 324,
    left: 0,
    position: "absolute",
  },
  expirationDate: {
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    color: Color.darkslateblue,
    lineHeight: 15,
  },
  frame5: {
    top: 220,
    width: 260,
    left: 0,
    position: "absolute",
  },
  frame7: {
    width: 103,
    paddingHorizontal: Padding.p_xl,
    backgroundColor: Color.ghostwhite_200,
    height: 56,
    borderRadius: Border.br_5xs,
    justifyContent: "center",
    paddingVertical: 0,
  },
  frameIcon: {
    width: 146,
  },
  maskGroupIcon1: {
    marginLeft: 52,
  },
  frame10: {
    width: 74,
    height: 17,
    overflow: "hidden",
  },
  maskGroupIcon2: {
    marginLeft: 42,
  },
  frame11: {
    width: 96,
    paddingLeft: Padding.p_mid,
    paddingTop: Padding.p_lgi,
    paddingRight: Padding.p_mini,
    paddingBottom: Padding.p_lgi,
    backgroundColor: Color.ghostwhite_200,
    height: 56,
    borderRadius: Border.br_5xs,
    alignItems: "center",
    flexDirection: "row",
  },
  frame9: {
    width: 194,
  },
  frame8: {
    width: 248,
  },
  frame6: {
    top: 243,
    width: 329,
    position: "absolute",
    left: 0,
  },
  inputFields: {
    top: 497,
    height: 299,
    left: 45,
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
