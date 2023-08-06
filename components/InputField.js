import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import { FontFamily, FontSize, Color, Border, Padding } from "../GlobalStyles";

const InputField = () => {
  return (
    <View style={styles.inputField}>
      <View style={styles.frame}>
        <Image
          style={styles.layerBlurIcon}
          contentFit="cover"
          source={require("../assets/layer-blur1.png")}
        />
        <View style={styles.rectangle} />
        <Text style={[styles.text, styles.textLayout]}>8</Text>
      </View>
      <View style={styles.frame1}>
        <Text style={[styles.text1, styles.textLayout]}>5</Text>
      </View>
      <View style={[styles.frame2, styles.frameLayout]}>
        <Text style={[styles.text2, styles.textLayout]}>2</Text>
      </View>
      <View style={[styles.frame3, styles.frameLayout]}>
        <Text style={[styles.text2, styles.textLayout]}>3</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textLayout: {
    height: 38,
    width: 24,
    textAlign: "left",
    fontFamily: FontFamily.damion,
    lineHeight: 40,
    fontSize: FontSize.size_21xl,
  },
  frameLayout: {
    backgroundColor: Color.ghostwhite_100,
    width: "21.08%",
    justifyContent: "center",
    borderRadius: Border.br_3xs,
    bottom: "22.22%",
    height: "77.78%",
    top: "0%",
    overflow: "hidden",
    position: "absolute",
  },
  layerBlurIcon: {
    height: "100%",
    width: "100%",
    bottom: "0%",
    maxWidth: "100%",
    maxHeight: "100%",
    left: "0%",
    right: "0%",
    top: "0%",
    overflow: "hidden",
    position: "absolute",
  },
  rectangle: {
    width: "90.91%",
    right: "9.09%",
    backgroundColor: Color.royalblue_100,
    borderRadius: Border.br_3xs,
    bottom: "22.22%",
    height: "77.78%",
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  text: {
    top: 16,
    left: 23,
    color: Color.white,
    position: "absolute",
    height: 38,
    width: 24,
    textAlign: "left",
    fontFamily: FontFamily.damion,
    lineHeight: 40,
    fontSize: FontSize.size_21xl,
  },
  frame: {
    top: 0,
    left: 0,
    width: 77,
    overflow: "hidden",
    height: 90,
    position: "absolute",
  },
  text1: {
    color: Color.slateblue_100,
  },
  frame1: {
    height: "78.89%",
    width: "21.39%",
    top: "-0.56%",
    right: "52.26%",
    bottom: "21.67%",
    left: "26.36%",
    backgroundColor: Color.slateblue_600,
    borderStyle: "solid",
    borderColor: "#314bce",
    borderWidth: 1,
    paddingHorizontal: Padding.p_3xl,
    justifyContent: "center",
    paddingVertical: Padding.p_0,
    borderRadius: Border.br_3xs,
    overflow: "hidden",
    position: "absolute",
  },
  text2: {
    color: Color.darkslateblue,
  },
  frame2: {
    right: "26.2%",
    left: "52.71%",
    alignItems: "center",
  },
  frame3: {
    left: "78.92%",
    paddingHorizontal: Padding.p_2xl,
    paddingVertical: Padding.p_0,
    backgroundColor: Color.ghostwhite_100,
    width: "21.08%",
    right: "0%",
  },
  inputField: {
    top: 413,
    left: 41,
    width: 332,
    height: 90,
    position: "absolute",
  },
});

export default InputField;
