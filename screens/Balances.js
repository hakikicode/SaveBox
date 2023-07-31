import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { FontFamily, Border, Color, FontSize, Padding } from "../GlobalStyles";

const Balances = () => {
  return (
    <View style={styles.balances}>
      <Text style={[styles.send, styles.sendTypo3]}>Today</Text>
      <View style={[styles.frame, styles.frameLayout1]}>
        <Image
          style={[styles.frameChild, styles.framePosition2]}
          contentFit="cover"
          source={require("../assets/rectangle-682.png")}
        />
        <View style={[styles.backBtn, styles.backBtnShadowBox]}>
          <Image
            style={styles.image15Icon}
            contentFit="cover"
            source={require("../assets/image-15.png")}
          />
        </View>
        <Image
          style={[styles.settingsBtnIcon, styles.frame15Layout]}
          contentFit="cover"
          source={require("../assets/settings-btn.png")}
        />
        <Text style={[styles.mainHeadline, styles.sendTypo3]}>Balances</Text>
        <View style={[styles.frameItem, styles.backBtnShadowBox]} />
        <Text style={styles.send1}>See Balance Details</Text>
        <Text style={[styles.usdBalance, styles.balanceTypo]}>USD Balance</Text>
        <View style={styles.maskGroup}>
          <View style={[styles.frameParent, styles.frameParentPosition]}>
            <Image
              style={styles.frameIcon}
              contentFit="cover"
              source={require("../assets/frame5.png")}
            />
            <View style={styles.frame1}>
              <Text style={[styles.text, styles.textTypo]}>585.00</Text>
              <Text style={[styles.gbpBalance, styles.balanceTypo]}>
                GBP Balance
              </Text>
            </View>
          </View>
        </View>
        <Image
          style={styles.frameInner}
          contentFit="cover"
          source={require("../assets/ellipse-5.png")}
        />
        <Text style={[styles.text1, styles.textTypo]}>654.00</Text>
        <Text style={styles.text2}>$</Text>
        <View style={[styles.balanceCard, styles.frameParentPosition]}>
          <Image
            style={styles.frameIcon}
            contentFit="cover"
            source={require("../assets/frame6.png")}
          />
          <View style={styles.frame1}>
            <Text style={[styles.text, styles.textTypo]}>585.00</Text>
            <Text style={styles.balanceTypo}>EUR Balance</Text>
          </View>
        </View>
      </View>
      <View style={[styles.frame3, styles.frameFlexBox]}>
        <Image
          style={styles.frameIcon2}
          contentFit="cover"
          source={require("../assets/frame7.png")}
        />
        <View style={[styles.frame4, styles.frameFlexBox]}>
          <View style={[styles.frame5, styles.frameFlexBox]}>
            <Text style={[styles.payments398, styles.foodTypo]}>
              Payments | $398
            </Text>
            <Image
              style={styles.frameChildLayout}
              contentFit="cover"
              source={require("../assets/ellipse-20.png")}
            />
          </View>
          <View style={[styles.frame6, styles.frameFlexBox1]}>
            <Text style={[styles.food, styles.sendClr]}>Food</Text>
            <Image
              style={[styles.frameChild1, styles.frameChildLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-20.png")}
            />
          </View>
          <View style={[styles.frame7, styles.frameFlexBox1]}>
            <Text style={[styles.food, styles.sendClr]}>Services</Text>
            <Image
              style={[styles.frameChild2, styles.frameChildLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-20.png")}
            />
          </View>
          <Text style={[styles.food, styles.sendClr]}>Rent</Text>
        </View>
      </View>
      <View style={[styles.frame8, styles.framePosition1]}>
        <Text style={[styles.pleaseEnterYour, styles.pleaseTypo]}>$320</Text>
        <View style={[styles.rectangleParent, styles.frameGroupLayout]}>
          <View style={styles.frameChildShadowBox} />
          <Image
            style={[styles.rectangleIcon, styles.frameGroupLayout]}
            contentFit="cover"
            source={require("../assets/rectangle-341.png")}
          />
        </View>
        <View style={[styles.frame9, styles.framePosition]}>
          <Text style={[styles.send2, styles.sendFlexBox]}>
            Behance Project
          </Text>
          <Text style={[styles.send3, styles.sendFlexBox]}>
            23rd march 2021
          </Text>
        </View>
      </View>
      <View style={[styles.frame10, styles.framePosition1]}>
        <Text style={[styles.pleaseEnterYour, styles.pleaseTypo]}>$650</Text>
        <View style={[styles.frameGroup, styles.frameGroupLayout]}>
          <View style={[styles.frame11, styles.frameGroupLayout]}>
            <View style={styles.frameChildShadowBox} />
            <View style={[styles.rectangleIcon, styles.frameGroupLayout]} />
          </View>
          <Image
            style={styles.image16Icon}
            contentFit="cover"
            source={require("../assets/image-16.png")}
          />
        </View>
        <View style={styles.frame12}>
          <Text style={[styles.send4, styles.sendFlexBox]}>Uber Monthly</Text>
          <Text style={[styles.send3, styles.sendFlexBox]}>
            04th february 2021
          </Text>
        </View>
      </View>
      <View style={[styles.frame13, styles.framePosition1]}>
        <Text style={[styles.pleaseEnterYour2, styles.pleaseTypo]}>$330</Text>
        <View style={[styles.frame14, styles.frameGroupLayout]}>
          <View style={[styles.rectangleGroup, styles.frameGroupLayout]}>
            <View style={styles.frameChildShadowBox} />
            <View style={[styles.rectangleIcon, styles.frameGroupLayout]} />
          </View>
          <Image
            style={styles.frameChild7}
            contentFit="cover"
            source={require("../assets/rectangle-43.png")}
          />
        </View>
        <View style={[styles.frame15, styles.framePosition]}>
          <Text style={[styles.send6, styles.sendFlexBox]}>ATM Withdraws</Text>
          <Text style={[styles.send3, styles.sendFlexBox]}>BDT ACCOUNT</Text>
        </View>
      </View>
      <View style={[styles.frame16, styles.framePosition1]}>
        <Text style={[styles.pleaseEnterYour3, styles.pleaseTypo]}>$100</Text>
        <View style={[styles.frame14, styles.frameGroupLayout]}>
          <View style={[styles.rectangleGroup, styles.frameGroupLayout]}>
            <View style={styles.frameChildShadowBox} />
            <View style={[styles.rectangleIcon, styles.frameGroupLayout]} />
          </View>
          <Image
            style={styles.frameChild7}
            contentFit="cover"
            source={require("../assets/rectangle-44.png")}
          />
        </View>
        <View style={[styles.frame18, styles.framePosition]}>
          <Text style={[styles.send6, styles.sendFlexBox]}>Transfer Money</Text>
          <Text style={[styles.send9, styles.sendFlexBox]}>INR ACCOUNT</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  sendTypo3: {
    textAlign: "left",
    fontFamily: FontFamily.gilroyBold,
    top: "50%",
    position: "absolute",
  },
  frameLayout1: {
    height: 431,
    width: 376,
  },
  framePosition2: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  backBtnShadowBox: {
    shadowOpacity: 1,
    elevation: 65,
    shadowRadius: 65,
    shadowOffset: {
      width: 0,
      height: 30,
    },
    shadowColor: "rgba(111, 136, 157, 0.25)",
    borderRadius: Border.br_mini,
    position: "absolute",
    backgroundColor: Color.white,
  },
  frame15Layout: {
    width: 134,
    top: 6,
  },
  balanceTypo: {
    color: Color.gray_100,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    textAlign: "left",
  },
  frameParentPosition: {
    paddingBottom: Padding.p_mid,
    paddingRight: Padding.p_lgi,
    paddingTop: Padding.p_mid,
    paddingLeft: Padding.p_xl,
    shadowOpacity: 1,
    elevation: 65,
    shadowRadius: 65,
    shadowOffset: {
      width: 0,
      height: 30,
    },
    shadowColor: "rgba(111, 136, 157, 0.25)",
    borderRadius: Border.br_mini,
    position: "absolute",
    backgroundColor: Color.white,
  },
  textTypo: {
    fontFamily: FontFamily.notoSerifSemiBold,
    fontSize: FontSize.size_lgi,
    fontWeight: "600",
    textAlign: "left",
  },
  frameFlexBox: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
  },
  foodTypo: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    textAlign: "left",
  },
  frameFlexBox1: {
    flexDirection: "row",
    height: 15,
    alignItems: "center",
    overflow: "hidden",
  },
  sendClr: {
    color: Color.slategray_100,
    fontSize: FontSize.size_xs,
  },
  frameChildLayout: {
    height: 10,
    width: 10,
  },
  framePosition1: {
    height: 52,
    left: 42,
    position: "absolute",
    overflow: "hidden",
  },
  pleaseTypo: {
    lineHeight: 25,
    fontSize: FontSize.size_sm,
    letterSpacing: 0,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    color: Color.darkslateblue,
    textAlign: "left",
    position: "absolute",
  },
  frameGroupLayout: {
    width: 54,
    height: 52,
  },
  framePosition: {
    left: 65,
    position: "absolute",
    overflow: "hidden",
  },
  sendFlexBox: {
    letterSpacing: 0,
    textAlign: "left",
  },
  send: {
    marginTop: 76,
    left: "10.14%",
    fontSize: FontSize.size_7xl,
    color: Color.gray_200,
  },
  frameChild: {
    borderRadius: Border.br_6xl,
    height: 431,
    width: 376,
  },
  image15Icon: {
    width: 16,
    height: 16,
  },
  backBtn: {
    top: 41,
    left: 22,
    width: 47,
    height: 47,
    padding: Padding.p_mini,
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
  settingsBtnIcon: {
    left: 242,
    height: 177,
    position: "absolute",
  },
  mainHeadline: {
    marginTop: -95.5,
    fontSize: FontSize.size_27xl,
    color: Color.darkslateblue,
    left: "5.85%",
  },
  frameItem: {
    top: 219,
    left: 164,
    height: 138,
    width: 129,
  },
  send1: {
    marginTop: 177.5,
    left: "26.86%",
    textAlign: "center",
    color: Color.royalblue_100,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_lg,
    top: "50%",
    position: "absolute",
  },
  usdBalance: {
    top: 314,
    left: 181,
    position: "absolute",
  },
  frameIcon: {
    width: 36,
    height: 36,
    overflow: "hidden",
  },
  text: {
    color: Color.darkslateblue,
  },
  gbpBalance: {
    alignSelf: "stretch",
  },
  frame1: {
    marginTop: 16,
    alignSelf: "stretch",
    overflow: "hidden",
  },
  frameParent: {
    top: -137,
    left: -244,
    width: 129,
  },
  maskGroup: {
    top: 178,
    left: 275,
    width: 101,
    height: 195,
    position: "absolute",
  },
  frameInner: {
    top: 206,
    left: 142,
    width: 116,
    height: 116,
    position: "absolute",
  },
  text1: {
    top: 288,
    color: Color.black,
    left: 181,
    position: "absolute",
  },
  text2: {
    top: 243,
    left: 195,
    fontSize: FontSize.size_mid,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    color: Color.royalblue_100,
    textAlign: "left",
    position: "absolute",
  },
  balanceCard: {
    height: "29.47%",
    width: "34.31%",
    top: "52.09%",
    right: "59.84%",
    bottom: "18.45%",
    left: "5.85%",
  },
  frame: {
    left: 20,
    position: "absolute",
    top: 17,
    overflow: "hidden",
  },
  frameIcon2: {
    width: 147,
    height: 34,
    overflow: "hidden",
  },
  payments398: {
    color: "#fcfcfd",
    fontSize: FontSize.size_xs,
    fontWeight: "500",
  },
  frame5: {
    width: 143,
  },
  food: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    textAlign: "left",
  },
  frameChild1: {
    marginLeft: 24,
  },
  frame6: {
    width: 63,
    height: 15,
    alignItems: "center",
  },
  frameChild2: {
    marginLeft: 14,
  },
  frame7: {
    width: 74,
    height: 15,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  frame4: {
    width: 331,
  },
  frame3: {
    top: 470,
    width: 359,
    left: 20,
    position: "absolute",
  },
  pleaseEnterYour: {
    left: 297,
    top: 15,
    lineHeight: 25,
    fontSize: FontSize.size_sm,
  },
  frameChildShadowBox: {
    elevation: 30,
    shadowRadius: 30,
    shadowColor: "rgba(49, 75, 206, 0.15)",
    borderRadius: Border.br_3xs,
    width: 54,
    height: 52,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 30,
    },
    backgroundColor: Color.white,
  },
  rectangleIcon: {
    marginTop: -52,
    borderRadius: Border.br_3xs,
  },
  rectangleParent: {
    alignItems: "center",
    left: 0,
    top: 0,
    position: "absolute",
  },
  send2: {
    alignSelf: "stretch",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    letterSpacing: 0,
    fontSize: FontSize.size_lg,
    color: Color.darkslateblue,
  },
  send3: {
    fontFamily: FontFamily.interRegular,
    marginTop: 3,
    color: Color.slategray_100,
    fontSize: FontSize.size_xs,
  },
  frame9: {
    width: 136,
    top: 7,
  },
  frame8: {
    top: 569,
    width: 333,
    height: 52,
    left: 42,
  },
  frame11: {
    alignItems: "center",
    overflow: "hidden",
  },
  image16Icon: {
    width: 44,
    marginTop: -34,
    height: 15,
  },
  frameGroup: {
    alignItems: "center",
    justifyContent: "flex-end",
    left: 0,
    top: 0,
    position: "absolute",
  },
  send4: {
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    letterSpacing: 0,
    fontSize: FontSize.size_lg,
    color: Color.gray_200,
  },
  frame12: {
    left: 67,
    width: 114,
    height: 40,
    top: 7,
    position: "absolute",
    overflow: "hidden",
  },
  frame10: {
    top: 656,
    width: 333,
    height: 52,
    left: 42,
  },
  pleaseEnterYour2: {
    left: 299,
    top: 15,
    lineHeight: 25,
    fontSize: FontSize.size_sm,
  },
  rectangleGroup: {
    alignItems: "center",
  },
  frameChild7: {
    width: 34,
    height: 33,
    marginTop: -42,
    borderRadius: Border.br_3xs,
  },
  frame14: {
    alignItems: "center",
    justifyContent: "flex-end",
    left: 0,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  send6: {
    alignSelf: "stretch",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    letterSpacing: 0,
    fontSize: FontSize.size_lg,
    color: Color.gray_200,
  },
  frame15: {
    width: 134,
    top: 6,
  },
  frame13: {
    top: 743,
    width: 335,
    height: 52,
    left: 42,
  },
  pleaseEnterYour3: {
    left: 298,
    top: 17,
  },
  send9: {
    marginTop: 5,
    color: Color.slategray_100,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    letterSpacing: 0,
  },
  frame18: {
    top: 8,
    width: 131,
  },
  frame16: {
    top: 828,
    width: 333,
    height: 52,
    left: 42,
  },
  balances: {
    flex: 1,
    width: "100%",
    height: 896,
    overflow: "hidden",
    backgroundColor: Color.white,
  },
});

export default Balances;
