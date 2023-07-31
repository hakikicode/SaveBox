import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const Sale = () => {
  return (
    <View style={styles.sale}>
      <Image
        style={styles.saleChild}
        contentFit="cover"
        source={require("../assets/rectangle-108.png")}
      />
      <View style={[styles.saleItem, styles.saleLayout]} />
      <View style={[styles.saleInner, styles.saleLayout]} />
      <Image
        style={styles.image6Icon}
        contentFit="cover"
        source={require("../assets/image-6.png")}
      />
      <View style={styles.rectangleView} />
      <Text
        style={[styles.getMoreAwesome, styles.clickHereTypo]}
      >{`Get More Awesome Products At 70% Off
`}</Text>
      <Text style={[styles.clickHere, styles.clickHereTypo]}>Click Here</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  saleLayout: {
    backgroundColor: Color.midnightblue,
    left: 1141,
    height: 720,
    width: 340,
    borderRadius: Border.br_6xl,
    position: "absolute",
  },
  clickHereTypo: {
    height: 291,
    fontFamily: FontFamily.robotoBlack,
    fontWeight: "900",
    letterSpacing: 0.4,
    fontSize: FontSize.size_51xl,
    position: "absolute",
  },
  saleChild: {
    top: -545,
    left: 1943,
    height: 720,
    width: 340,
    borderRadius: Border.br_6xl,
    position: "absolute",
  },
  saleItem: {
    top: 316,
  },
  saleInner: {
    top: 1068,
  },
  image6Icon: {
    top: 0,
    left: -47,
    width: 2160,
    position: "absolute",
    height: 1400,
  },
  rectangleView: {
    top: 62,
    left: 1175,
    borderRadius: 20,
    width: 1048,
    height: 428,
    position: "absolute",
    backgroundColor: Color.white,
  },
  getMoreAwesome: {
    top: 165,
    left: 1302,
    color: Color.black,
    textAlign: "left",
    width: 751,
  },
  clickHere: {
    top: 338,
    left: 1221,
    textDecoration: "underline",
    color: "#2d85dc",
    textAlign: "center",
    width: 519,
  },
  sale: {
    flex: 1,
    width: "100%",
    overflow: "hidden",
    display: "none",
    height: 1400,
    backgroundColor: Color.white,
  },
});

export default Sale;
