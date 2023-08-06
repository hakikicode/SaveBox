import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import Frame26 from "../components/Frame26";
import BehanceProjectCard from "../components/BehanceProjectCard";
import UberMonthlyForm from "../components/UberMonthlyForm";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const Balances = () => {
  return (
    <View style={styles.balances}>
      <Text style={styles.send}>Today</Text>
      <Frame26 />
      <View style={[styles.frame, styles.frameFlexBox1]}>
        <Image
          style={styles.frameIcon}
          contentFit="cover"
          source={require("../assets/frame71.png")}
        />
        <View style={[styles.frame1, styles.frameFlexBox1]}>
          <View style={[styles.frame2, styles.frameFlexBox1]}>
            <Text style={[styles.payments398, styles.foodTypo]}>
              Payments | $398
            </Text>
            <Image
              style={styles.frameLayout2}
              contentFit="cover"
              source={require("../assets/ellipse-20.png")}
            />
          </View>
          <View style={[styles.frame3, styles.frameLayout1]}>
            <Text style={[styles.food, styles.foodClr]}>Food</Text>
            <Image
              style={[styles.frameItem, styles.frameLayout2]}
              contentFit="cover"
              source={require("../assets/ellipse-20.png")}
            />
          </View>
          <View style={[styles.frame4, styles.frameFlexBox]}>
            <Text style={[styles.food, styles.foodClr]}>Services</Text>
            <Image
              style={[styles.frameInner, styles.frameLayout2]}
              contentFit="cover"
              source={require("../assets/ellipse-20.png")}
            />
          </View>
          <Text style={[styles.food, styles.foodClr]}>Rent</Text>
        </View>
      </View>
      <BehanceProjectCard propTop={569} propLeft={42} />
      <UberMonthlyForm propTop={656} propLeft={42} />
      <View style={[styles.frame5, styles.framePosition1]}>
        <Text style={[styles.pleaseEnterYour, styles.pleaseTypo]}>$330</Text>
        <View style={[styles.frame6, styles.frameLayout]}>
          <View style={[styles.rectangleParent, styles.frameLayout]}>
            <View style={styles.frameChild2ShadowBox} />
            <View style={[styles.frameChild1, styles.frameLayout]} />
          </View>
          <Image
            style={styles.rectangleIcon}
            contentFit="cover"
            source={require("../assets/rectangle-43.png")}
          />
        </View>
        <View style={[styles.frame7, styles.framePosition]}>
          <Text style={[styles.send1, styles.sendTypo]}>ATM Withdraws</Text>
          <Text style={styles.send2}>BDT ACCOUNT</Text>
        </View>
      </View>
      <View style={[styles.frame8, styles.framePosition1]}>
        <Text style={[styles.pleaseEnterYour1, styles.pleaseTypo]}>$100</Text>
        <View style={[styles.frame6, styles.frameLayout]}>
          <View style={[styles.rectangleParent, styles.frameLayout]}>
            <View style={styles.frameChild2ShadowBox} />
            <View style={[styles.frameChild1, styles.frameLayout]} />
          </View>
          <Image
            style={styles.rectangleIcon}
            contentFit="cover"
            source={require("../assets/rectangle-44.png")}
          />
        </View>
        <View style={[styles.frame10, styles.framePosition]}>
          <Text style={[styles.send1, styles.sendTypo]}>Transfer Money</Text>
          <Text style={[styles.send4, styles.sendTypo]}>INR ACCOUNT</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameFlexBox1: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
  },
  foodTypo: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    textAlign: "left",
  },
  frameLayout1: {
    height: 15,
    flexDirection: "row",
  },
  foodClr: {
    color: Color.slategray_100,
    fontSize: FontSize.size_xs,
  },
  frameLayout2: {
    height: 10,
    width: 10,
  },
  frameFlexBox: {
    justifyContent: "flex-end",
    alignItems: "center",
    overflow: "hidden",
  },
  framePosition1: {
    height: 52,
    left: 42,
    position: "absolute",
    overflow: "hidden",
  },
  pleaseTypo: {
    color: Color.darkslateblue,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    lineHeight: 25,
    fontSize: FontSize.size_sm,
    letterSpacing: 0,
    textAlign: "left",
    position: "absolute",
  },
  frameLayout: {
    width: 54,
    height: 52,
  },
  framePosition: {
    left: 65,
    position: "absolute",
    overflow: "hidden",
  },
  sendTypo: {
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    letterSpacing: 0,
    textAlign: "left",
  },
  send: {
    marginTop: 76,
    top: "50%",
    left: "10.14%",
    fontSize: FontSize.size_7xl,
    fontFamily: FontFamily.robotoRegular,
    textAlign: "left",
    color: Color.gray_200,
    position: "absolute",
  },
  frameIcon: {
    width: 147,
    height: 34,
    overflow: "hidden",
  },
  payments398: {
    color: "#fcfcfd",
    fontSize: FontSize.size_xs,
    fontWeight: "500",
  },
  frame2: {
    width: 143,
  },
  food: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    textAlign: "left",
  },
  frameItem: {
    marginLeft: 24,
  },
  frame3: {
    width: 63,
    alignItems: "center",
    overflow: "hidden",
  },
  frameInner: {
    marginLeft: 14,
  },
  frame4: {
    width: 74,
    height: 15,
    flexDirection: "row",
  },
  frame1: {
    width: 331,
  },
  frame: {
    top: 470,
    left: 20,
    width: 359,
    position: "absolute",
  },
  pleaseEnterYour: {
    top: 15,
    left: 299,
  },
  frameChild2ShadowBox: {
    shadowOpacity: 1,
    elevation: 30,
    shadowRadius: 30,
    shadowOffset: {
      width: 0,
      height: 15,
    },
    shadowColor: "rgba(49, 75, 206, 0.15)",
    borderRadius: Border.br_3xs,
    width: 54,
    height: 52,
    backgroundColor: Color.white,
  },
  frameChild1: {
    marginTop: -52,
    borderRadius: Border.br_3xs,
  },
  rectangleParent: {
    alignItems: "center",
  },
  rectangleIcon: {
    width: 34,
    height: 33,
    marginTop: -42,
    borderRadius: Border.br_3xs,
  },
  frame6: {
    top: 0,
    left: 0,
    justifyContent: "flex-end",
    alignItems: "center",
    overflow: "hidden",
    position: "absolute",
  },
  send1: {
    alignSelf: "stretch",
    fontSize: FontSize.size_lg,
    color: Color.gray_200,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  send2: {
    fontFamily: FontFamily.interRegular,
    marginTop: 3,
    letterSpacing: 0,
    color: Color.slategray_100,
    fontSize: FontSize.size_xs,
    textAlign: "left",
  },
  frame7: {
    top: 6,
    width: 134,
  },
  frame5: {
    top: 743,
    width: 335,
  },
  pleaseEnterYour1: {
    top: 17,
    left: 298,
  },
  send4: {
    marginTop: 5,
    color: Color.slategray_100,
    fontSize: FontSize.size_xs,
  },
  frame10: {
    top: 8,
    width: 131,
  },
  frame8: {
    top: 828,
    width: 333,
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
