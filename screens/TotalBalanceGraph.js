import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import BackBTN from "../components/BackBTN";
import Graph from "../components/Graph";
import EasyPayment from "../components/EasyPayment";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const TotalBalanceGraph = () => {
  return (
    <View style={styles.totalBalanceGraph}>
      <View style={styles.frame}>
        <Image
          style={styles.settingsBtnIcon}
          contentFit="cover"
          source={require("../assets/settings-btn.png")}
        />
        <BackBTN />
      </View>
      <View style={styles.frame1}>
        <Text style={styles.send}>Total Balance</Text>
        <Text style={styles.send1}>$225,600</Text>
      </View>
      <View style={styles.frame2}>
        <Graph />
        <EasyPayment />
        <Image
          style={styles.frameChild}
          contentFit="cover"
          source={require("../assets/vector-1.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  settingsBtnIcon: {
    position: "absolute",
    top: 0,
    left: 220,
    width: 112,
    height: 47,
  },
  frame: {
    position: "absolute",
    top: 58,
    left: 41,
    width: 332,
    height: 47,
    overflow: "hidden",
  },
  send: {
    fontSize: FontSize.size_lg,
    letterSpacing: 0,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: Color.darkslateblue,
    textAlign: "center",
    height: 22,
    marginLeft: 44,
  },
  send1: {
    alignSelf: "stretch",
    position: "relative",
    fontSize: FontSize.size_33xl,
    fontFamily: FontFamily.robotoRegular,
    color: Color.darkslateblue,
    textAlign: "center",
  },
  frame1: {
    position: "absolute",
    top: 131,
    left: 97,
    width: 220,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  frameChild: {
    position: "absolute",
    top: 458,
    left: 130,
    width: 414,
    height: 292,
  },
  frame2: {
    position: "absolute",
    top: 255,
    left: -130,
    width: 503,
    height: 750,
    overflow: "hidden",
  },
  totalBalanceGraph: {
    position: "relative",
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    height: 896,
    overflow: "hidden",
  },
});

export default TotalBalanceGraph;
