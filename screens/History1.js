import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const History1 = () => {
  return (
    <View style={styles.history}>
      <View style={[styles.rectangleParent, styles.framePosition]}>
        <View style={styles.frameChild} />
        <View style={[styles.frameItem, styles.frameShadowBox]} />
        <View style={[styles.frameInner, styles.frameShadowBox]} />
        <Text style={styles.send}>121k</Text>
        <Text style={[styles.send1, styles.sendTypo4]}>352k</Text>
        <Text style={[styles.send2, styles.sendTypo4]}>18,42</Text>
        <Image
          style={styles.rectangleIcon}
          contentFit="cover"
          source={require("../assets/rectangle-34.png")}
        />
        <Image
          style={[styles.frameChild1, styles.frameChildLayout1]}
          contentFit="cover"
          source={require("../assets/rectangle-40.png")}
        />
        <Image
          style={[styles.frameChild2, styles.frameChildLayout1]}
          contentFit="cover"
          source={require("../assets/rectangle-41.png")}
        />
        <Text style={[styles.send3, styles.sendTypo3]}>British Pound</Text>
        <Text style={[styles.send4, styles.sendTypo2]}>US Dollar</Text>
        <Text style={[styles.send5, styles.sendTypo2]}>Euro</Text>
      </View>
      <View style={styles.janParent}>
        <Text style={[styles.jan, styles.janTypo]}>JAN</Text>
        <Text style={[styles.feb, styles.janTypo]}>FEB</Text>
        <Text style={[styles.mar, styles.janTypo]}>MAR</Text>
        <Text style={[styles.apr, styles.janTypo]}>APR</Text>
        <Text style={[styles.may, styles.janTypo]}>MAY</Text>
        <Text style={[styles.jun, styles.janTypo]}>JUN</Text>
        <Text style={[styles.jul, styles.janTypo]}>JUL</Text>
        <View style={styles.rectangleView} />
      </View>
      <Image
        style={[styles.frameIcon, styles.framePosition]}
        contentFit="cover"
        source={require("../assets/frame1.png")}
      />
      <View style={[styles.frame, styles.framePosition]}>
        <View style={styles.frameChild3} />
        <View style={[styles.frameChild4, styles.frameChildLayout]} />
        <View style={[styles.rectangle, styles.rectanglePosition]} />
        <Image
          style={[styles.rectangleIcon1, styles.rectanglePosition]}
          contentFit="cover"
          source={require("../assets/rectangle.png")}
        />
        <Text style={[styles.send6, styles.sendPosition]}>Expense</Text>
        <Text style={[styles.send7, styles.sendPosition]}>Income</Text>
        <Text style={[styles.send8, styles.sendTypo]}>$2,500</Text>
        <Text style={[styles.send9, styles.sendTypo]}>$42,500</Text>
        <Image
          style={[styles.arrowIcon, styles.arrowIconLayout]}
          contentFit="cover"
          source={require("../assets/arrow-1.png")}
        />
        <Image
          style={[styles.frameChild5, styles.arrowIconLayout]}
          contentFit="cover"
          source={require("../assets/arrow-1.png")}
        />
      </View>
      <View style={styles.frame1}>
        <Text style={[styles.monthly, styles.weekTypo]}>Monthly</Text>
        <Text style={[styles.week, styles.weekTypo]}>Week</Text>
        <Text style={[styles.daily, styles.weekTypo]}>Daily</Text>
      </View>
      <View style={[styles.frame2, styles.frame2Position]}>
        <View style={[styles.frameChild6, styles.frameChildLayout]} />
        <Image
          style={[styles.vectorIcon, styles.frame2Position]}
          contentFit="cover"
          source={require("../assets/vector-2.png")}
        />
        <Image
          style={styles.ellipseIcon}
          contentFit="cover"
          source={require("../assets/ellipse-13.png")}
        />
        <Image
          style={styles.unionIcon}
          contentFit="cover"
          source={require("../assets/union.png")}
        />
        <Text style={[styles.send10, styles.sendPosition]}>$120</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  framePosition: {
    left: 41,
    position: "absolute",
  },
  frameShadowBox: {
    elevation: 30,
    shadowRadius: 30,
    shadowColor: "rgba(138, 149, 158, 0.1)",
    top: 1,
    height: 157,
    width: 138,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 30,
    },
    borderRadius: Border.br_3xs,
    position: "absolute",
    backgroundColor: Color.white,
  },
  sendTypo4: {
    marginTop: -6,
    textAlign: "center",
    color: Color.gray_200,
    fontFamily: FontFamily.notoSerifSemiBold,
    fontWeight: "600",
    letterSpacing: 0,
    fontSize: FontSize.size_9xl,
    top: "50%",
    position: "absolute",
  },
  frameChildLayout1: {
    top: 19,
    height: 42,
    width: 42,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  sendTypo3: {
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  sendTypo2: {
    marginTop: 43,
    textAlign: "left",
    color: Color.slategray_100,
    fontFamily: FontFamily.interSemiBold,
    fontSize: FontSize.size_sm,
    fontWeight: "600",
    letterSpacing: 0,
    top: "50%",
    position: "absolute",
  },
  janTypo: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_3xs,
    color: Color.slategray_100,
    top: 0,
    position: "absolute",
  },
  frameChildLayout: {
    borderRadius: Border.br_5xs,
    position: "absolute",
  },
  rectanglePosition: {
    bottom: "24.14%",
    top: "0%",
    width: "48.65%",
    height: "75.86%",
    borderRadius: Border.br_5xs,
    position: "absolute",
  },
  sendPosition: {
    color: Color.white,
    textAlign: "center",
    letterSpacing: 0,
    top: "50%",
    position: "absolute",
  },
  sendTypo: {
    fontSize: FontSize.size_5xl,
    marginTop: -22,
    color: Color.white,
    textAlign: "left",
    fontFamily: FontFamily.notoSerifSemiBold,
    fontWeight: "600",
    letterSpacing: 0,
    top: "50%",
    position: "absolute",
  },
  arrowIconLayout: {
    height: 45,
    width: 15,
    top: 21,
    position: "absolute",
  },
  weekTypo: {
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    textAlign: "center",
    top: 0,
    position: "absolute",
  },
  frame2Position: {
    width: 414,
    left: 0,
    position: "absolute",
  },
  frameChild: {
    shadowColor: "rgba(138, 149, 158, 0.15)",
    shadowRadius: 60,
    elevation: 60,
    height: 157,
    width: 138,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 30,
    },
    borderRadius: Border.br_3xs,
    top: 0,
    left: 0,
    position: "absolute",
    backgroundColor: Color.white,
  },
  frameItem: {
    left: 161,
  },
  frameInner: {
    left: 321,
  },
  send: {
    marginTop: -7,
    left: "5.01%",
    textAlign: "center",
    color: Color.gray_200,
    fontFamily: FontFamily.notoSerifSemiBold,
    fontWeight: "600",
    letterSpacing: 0,
    fontSize: FontSize.size_9xl,
    top: "50%",
    position: "absolute",
  },
  send1: {
    left: "40.09%",
  },
  send2: {
    left: "74.95%",
  },
  rectangleIcon: {
    top: 18,
    left: 23,
    height: 42,
    width: 42,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  frameChild1: {
    left: 184,
  },
  frameChild2: {
    left: 344,
  },
  send3: {
    marginTop: 42,
    left: "5.23%",
    textAlign: "left",
    color: Color.slategray_100,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.interSemiBold,
    letterSpacing: 0,
    top: "50%",
    position: "absolute",
  },
  send4: {
    left: "40.09%",
  },
  send5: {
    left: "74.95%",
  },
  rectangleParent: {
    top: 260,
    width: 459,
    height: 158,
  },
  jan: {
    textAlign: "center",
    left: 0,
  },
  feb: {
    left: 67,
    textAlign: "center",
  },
  mar: {
    left: 133,
    textAlign: "center",
  },
  apr: {
    left: 201,
    textAlign: "left",
  },
  may: {
    left: 268,
    textAlign: "left",
  },
  jun: {
    left: 338,
    textAlign: "left",
  },
  jul: {
    left: 406,
    textAlign: "left",
  },
  rectangleView: {
    top: 31,
    left: 9,
    backgroundColor: "#e9e9e9",
    width: 438,
    height: 2,
    position: "absolute",
  },
  janParent: {
    top: 833,
    left: -9,
    width: 447,
    height: 33,
    position: "absolute",
  },
  frameIcon: {
    top: 58,
    width: 332,
    height: 47,
    overflow: "hidden",
  },
  frameChild3: {
    top: 72,
    left: 181,
    backgroundColor: Color.slateblue_400,
    width: 139,
    height: 32,
    position: "absolute",
  },
  frameChild4: {
    top: 75,
    left: 16,
    backgroundColor: "rgba(122, 122, 253, 0.41)",
    width: 125,
    height: 41,
  },
  rectangle: {
    right: "51.35%",
    left: "0%",
    backgroundColor: Color.mediumslateblue_100,
  },
  rectangleIcon1: {
    right: "0%",
    left: "51.35%",
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  send6: {
    left: "18.62%",
    marginTop: -39,
    color: Color.white,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_sm,
  },
  send7: {
    left: "71.17%",
    marginTop: -39,
    color: Color.white,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_sm,
  },
  send8: {
    left: "14.11%",
  },
  send9: {
    left: "65.47%",
  },
  arrowIcon: {
    left: 17,
  },
  frameChild5: {
    left: 188,
  },
  frame: {
    top: 132,
    width: 333,
    height: 116,
    overflow: "hidden",
  },
  monthly: {
    color: Color.darkslateblue,
    left: 0,
  },
  week: {
    left: 106,
    color: Color.slategray_100,
  },
  daily: {
    left: 199,
    color: Color.slategray_100,
  },
  frame1: {
    top: 452,
    left: 85,
    width: 228,
    height: 15,
    position: "absolute",
    overflow: "hidden",
  },
  frameChild6: {
    top: 9,
    left: 179,
    backgroundColor: Color.royalblue_300,
    width: 76,
    height: 35,
  },
  vectorIcon: {
    top: 43,
    height: 168,
  },
  ellipseIcon: {
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
  send10: {
    marginTop: -95.5,
    left: "45.17%",
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  frame2: {
    top: 494,
    height: 211,
    overflow: "hidden",
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
