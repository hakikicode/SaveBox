import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import Frame19 from "../components/Frame19";
import Frame6 from "../components/Frame6";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const History1 = () => {
  return (
    <View style={styles.history}>
      <Image
        style={[styles.frameIcon, styles.framePosition1]}
        contentFit="cover"
        source={require("../assets/frame11.png")}
      />
      <Frame19 />
      <View style={styles.frame}>
        <Text style={[styles.monthly, styles.sendFlexBox]}>Monthly</Text>
        <Text style={[styles.week, styles.janClr]}>Week</Text>
        <Text style={[styles.daily, styles.janClr]}>Daily</Text>
      </View>
      <View style={[styles.frame1, styles.framePosition]}>
        <View style={styles.frameChild} />
        <Image
          style={[styles.frameItem, styles.framePosition]}
          contentFit="cover"
          source={require("../assets/vector-2.png")}
        />
        <Image
          style={styles.frameInner}
          contentFit="cover"
          source={require("../assets/ellipse-13.png")}
        />
        <Image
          style={styles.unionIcon}
          contentFit="cover"
          source={require("../assets/union.png")}
        />
        <Text style={[styles.send, styles.sendTypo]}>$120</Text>
      </View>
      <View style={styles.rectangleParent}>
        <View style={styles.rectangleView} />
        <View style={styles.frame2}>
          <Text style={[styles.jan, styles.janTypo]}>JAN</Text>
          <Text style={[styles.feb, styles.janTypo]}>FEB</Text>
          <Text style={[styles.mar, styles.janTypo]}>MAR</Text>
          <Text style={[styles.apr, styles.aprFlexBox]}>APR</Text>
          <Text style={[styles.may, styles.aprFlexBox]}>MAY</Text>
          <Text style={[styles.jun, styles.aprFlexBox]}>JUN</Text>
          <Text style={[styles.jul, styles.aprFlexBox]}>JUL</Text>
        </View>
      </View>
      <View style={[styles.frameParent, styles.framePosition1]}>
        <View style={[styles.frame3, styles.frameLayout]}>
          <View style={[styles.frameChild1, styles.frameChild1Layout]} />
          <Text style={styles.send1}>121k</Text>
          <Image
            style={[styles.rectangleIcon, styles.frameChild1Layout]}
            contentFit="cover"
            source={require("../assets/rectangle-34.png")}
          />
          <Text style={[styles.send2, styles.aprFlexBox]}>British Pound</Text>
        </View>
        <Frame6
          carMileage="352k"
          dimensionLabel={require("../assets/rectangle-40.png")}
          currencySymbol="US Dollar"
        />
        <Frame6
          carMileage="18,42"
          dimensionLabel={require("../assets/rectangle-41.png")}
          currencySymbol="Euro"
          propLeft={321}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  framePosition1: {
    left: 41,
    position: "absolute",
  },
  sendFlexBox: {
    textAlign: "center",
    position: "absolute",
  },
  janClr: {
    color: Color.slategray_100,
    textAlign: "center",
    position: "absolute",
  },
  framePosition: {
    width: 414,
    left: 0,
    position: "absolute",
  },
  sendTypo: {
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    letterSpacing: 0,
    top: "50%",
  },
  janTypo: {
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    top: 0,
  },
  aprFlexBox: {
    textAlign: "left",
    color: Color.slategray_100,
    position: "absolute",
  },
  frameLayout: {
    height: 157,
    width: 138,
    left: 0,
    top: 0,
  },
  frameChild1Layout: {
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  frameIcon: {
    top: 58,
    width: 332,
    height: 47,
    overflow: "hidden",
  },
  monthly: {
    color: Color.darkslateblue,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_xs,
    top: 0,
    left: 0,
  },
  week: {
    left: 106,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_xs,
    top: 0,
  },
  daily: {
    left: 199,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_xs,
    top: 0,
  },
  frame: {
    top: 452,
    left: 85,
    width: 228,
    height: 15,
    position: "absolute",
    overflow: "hidden",
  },
  frameChild: {
    top: 9,
    left: 179,
    borderRadius: Border.br_5xs,
    backgroundColor: Color.royalblue_300,
    width: 76,
    height: 35,
    position: "absolute",
  },
  frameItem: {
    top: 43,
    height: 168,
  },
  frameInner: {
    top: 39,
    left: 195,
    width: 24,
    height: 24,
    position: "absolute",
  },
  unionIcon: {
    width: 83,
    height: 41,
  },
  send: {
    marginTop: -95.5,
    left: "45.17%",
    fontSize: FontSize.size_mini,
    color: Color.white,
    textAlign: "center",
    position: "absolute",
  },
  frame1: {
    top: 494,
    height: 211,
    overflow: "hidden",
  },
  rectangleView: {
    top: 31,
    left: 9,
    backgroundColor: "#e9e9e9",
    width: 438,
    height: 2,
    position: "absolute",
  },
  jan: {
    color: Color.slategray_100,
    textAlign: "center",
    position: "absolute",
    left: 0,
  },
  feb: {
    left: 67,
    color: Color.slategray_100,
    textAlign: "center",
    position: "absolute",
  },
  mar: {
    left: 133,
    color: Color.slategray_100,
    textAlign: "center",
    position: "absolute",
  },
  apr: {
    left: 201,
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    top: 0,
  },
  may: {
    left: 268,
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    top: 0,
  },
  jun: {
    left: 338,
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    top: 0,
  },
  jul: {
    left: 406,
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    top: 0,
  },
  frame2: {
    width: 425,
    height: 12,
    left: 0,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  rectangleParent: {
    top: 833,
    left: -9,
    width: 447,
    height: 33,
    position: "absolute",
  },
  frameChild1: {
    shadowColor: "rgba(138, 149, 158, 0.15)",
    shadowOffset: {
      width: 0,
      height: 30,
    },
    shadowRadius: 60,
    elevation: 60,
    shadowOpacity: 1,
    height: 157,
    width: 138,
    left: 0,
    top: 0,
    backgroundColor: Color.white,
  },
  send1: {
    marginTop: -6.5,
    left: "16.67%",
    fontSize: FontSize.size_9xl,
    fontFamily: FontFamily.notoSerifSemiBold,
    color: Color.gray_200,
    fontWeight: "600",
    letterSpacing: 0,
    top: "50%",
    textAlign: "center",
    position: "absolute",
  },
  rectangleIcon: {
    top: 18,
    left: 23,
    width: 42,
    height: 42,
  },
  send2: {
    marginTop: 42.5,
    left: "17.39%",
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    letterSpacing: 0,
    top: "50%",
  },
  frame3: {
    position: "absolute",
    overflow: "hidden",
  },
  frameParent: {
    top: 260,
    width: 459,
    height: 158,
  },
  history: {
    flex: 1,
    width: "100%",
    height: 896,
    overflow: "hidden",
    backgroundColor: Color.white,
  },
});

export default History1;
