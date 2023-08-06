import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import FormContainer1 from "./FormContainer1";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const Frame16 = () => {
  return (
    <View style={styles.frame}>
      <View style={styles.systemkeyboardsiphonelight}>
        <View style={styles.background} />
        <View style={styles.keys}>
          <FormContainer1
            dimensions={require("../assets/key-background10.png")}
            itemDescription=" "
            carDimensions="1"
            imageDimensions={require("../assets/key-background11.png")}
            componentInfo="ABC"
            imageLabel="2"
            imageDimensions2={require("../assets/key-background12.png")}
            itemCode="DEF"
            imageLabel2="3"
          />
          <FormContainer1
            dimensions={require("../assets/key-background13.png")}
            itemDescription="GHI"
            carDimensions="4"
            imageDimensions={require("../assets/key-background14.png")}
            componentInfo="JKL"
            imageLabel="5"
            imageDimensions2={require("../assets/key-background15.png")}
            itemCode="MNO"
            imageLabel2="6"
            propTop={58}
            propHeight={52}
            propHeight1={52}
            propHeight2={52}
          />
          <FormContainer1
            dimensions={require("../assets/key-background16.png")}
            itemDescription="PQRS"
            carDimensions="7"
            imageDimensions={require("../assets/key-background17.png")}
            componentInfo="TUV"
            imageLabel="8"
            imageDimensions2={require("../assets/key-background18.png")}
            itemCode="WXYZ"
            imageLabel2="9"
            propTop={118}
            propHeight={52}
            propHeight1={52}
            propHeight2={52}
          />
          <View style={styles.frame1}>
            <View style={styles.view}>
              <Image
                style={styles.keyBackgroundIcon}
                contentFit="cover"
                source={require("../assets/key-background19.png")}
              />
              <Text style={styles.number}>0</Text>
            </View>
            <Image
              style={styles.deleteIcon}
              contentFit="cover"
              source={require("../assets/delete1.png")}
            />
          </View>
        </View>
      </View>
      <Text style={styles.register}>Register</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    alignSelf: "stretch",
    position: "relative",
    backgroundColor: Color.royalblue_100,
    height: 321,
  },
  keyBackgroundIcon: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: Border.br_8xs,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  number: {
    position: "absolute",
    bottom: 9,
    left: 0,
    fontSize: FontSize.size_6xl,
    letterSpacing: 0,
    fontFamily: FontFamily.robotoRegular,
    color: Color.black,
    textAlign: "center",
    width: 129,
  },
  view: {
    position: "relative",
    width: 129,
    height: 51,
  },
  deleteIcon: {
    position: "relative",
    width: 27,
    height: 20,
  },
  frame1: {
    position: "absolute",
    top: 178,
    left: 136,
    width: 216,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  keys: {
    alignSelf: "stretch",
    position: "relative",
    height: 228,
    marginTop: -314,
  },
  systemkeyboardsiphonelight: {
    width: 414,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  register: {
    fontSize: FontSize.size_lg,
    lineHeight: 18,
    fontFamily: FontFamily.damion,
    color: Color.white,
    textAlign: "left",
    width: 132,
    marginTop: 114,
  },
  frame: {
    position: "absolute",
    top: 576,
    left: 0,
    width: 414,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
});

export default Frame16;
