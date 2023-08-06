import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Graph = () => {
  return (
    <View style={styles.graph}>
      <View style={[styles.frameParent, styles.frameFlexBox]}>
        <View style={styles.frame}>
          <Text style={styles.janTypo}>JAN</Text>
          <Text style={[styles.feb, styles.janTypo]}>FEB</Text>
        </View>
        <View style={[styles.frame1, styles.frameFlexBox]}>
          <Text style={styles.janTypo}>MAR</Text>
          <Text style={styles.apr}>APR</Text>
          <Text style={styles.apr}>MAY</Text>
          <Text style={styles.apr}>JUN</Text>
        </View>
      </View>
      <View style={[styles.graphChild, styles.graphLayout]} />
      <View style={[styles.graphItem, styles.graphLayout]} />
      <View style={[styles.graphInner, styles.graphChildLayout]} />
      <View style={[styles.rectangleView, styles.graphChildBg]} />
      <View style={[styles.graphChild1, styles.graphChildLayout]} />
      <View style={[styles.graphChild2, styles.graphChildBg]} />
      <View style={[styles.graphChild3, styles.graphChildLayout]} />
      <View style={[styles.graphChild4, styles.graphChildBg]} />
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
      <Text style={[styles.send, styles.sendTypo]}>$120,00</Text>
      <Image
        style={[styles.rectangleIcon, styles.frameParentPosition]}
        contentFit="cover"
        source={require("../assets/rectangle-81.png")}
      />
      <Image
        style={styles.objectIcon}
        contentFit="cover"
        source={require("../assets/object1.png")}
      />
      <Text style={[styles.send1, styles.sendTypo]}>Income</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  frameFlexBox: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  janTypo: {
    textAlign: "center",
    color: Color.slategray_100,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_3xs,
  },
  graphLayout: {
    height: 35,
    width: 76,
    backgroundColor: Color.royalblue_200,
    borderRadius: Border.br_5xs,
    position: "absolute",
  },
  graphChildLayout: {
    backgroundColor: Color.slateblue_100,
    borderRadius: Border.br_3xs,
    width: 10,
    position: "absolute",
  },
  graphChildBg: {
    backgroundColor: Color.royalblue_100,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  sendTypo: {
    color: Color.white,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    letterSpacing: 0,
    fontSize: FontSize.size_mini,
    top: "50%",
    textAlign: "center",
    position: "absolute",
  },
  frameParentPosition: {
    left: 10,
    position: "absolute",
  },
  feb: {
    marginLeft: 32,
  },
  frame: {
    width: 71,
    height: 12,
    overflow: "hidden",
    alignItems: "center",
    flexDirection: "row",
  },
  apr: {
    textAlign: "left",
    color: Color.slategray_100,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_3xs,
  },
  frame1: {
    width: 201,
    overflow: "hidden",
  },
  frameParent: {
    top: 436,
    width: 313,
    left: 10,
    position: "absolute",
  },
  graphChild: {
    top: 103,
    left: 150,
  },
  graphItem: {
    top: 30,
    left: 44,
  },
  graphInner: {
    top: 306,
    left: 15,
    height: 111,
    width: 10,
  },
  rectangleView: {
    top: 146,
    left: 67,
    height: 271,
    width: 10,
  },
  graphChild1: {
    top: 248,
    left: 129,
    height: 169,
    width: 10,
  },
  graphChild2: {
    top: 133,
    left: 188,
    width: 8,
    height: 284,
  },
  graphChild3: {
    top: 260,
    left: 248,
    height: 157,
    width: 10,
  },
  graphChild4: {
    top: 202,
    left: 308,
    height: 215,
    width: 10,
  },
  ellipseIcon: {
    top: 126,
    left: 166,
    width: 24,
    height: 24,
    position: "absolute",
  },
  unionIcon: {
    width: 83,
    height: 41,
  },
  send: {
    marginTop: -135.5,
    left: "43.98%",
  },
  rectangleIcon: {
    top: 13,
    borderRadius: Border.br_31xl,
    width: 103,
    height: 41,
  },
  objectIcon: {
    height: "1.37%",
    width: "3.2%",
    top: "6.67%",
    right: "69.69%",
    bottom: "91.96%",
    left: "27.11%",
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  send1: {
    marginTop: -207.5,
    left: "6.63%",
  },
  graph: {
    top: 0,
    left: 171,
    backgroundColor: Color.ghostwhite_100,
    width: 332,
    height: 465,
    borderRadius: Border.br_5xs,
    position: "absolute",
  },
});

export default Graph;
