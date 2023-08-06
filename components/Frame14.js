import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const Frame14 = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.frame}
      onPress={() => navigation.navigate("VerifyCode")}
    >
      <View style={styles.systemkeyboardsiphonelight}>
        <View style={styles.background} />
        <View style={styles.keys}>
          <View style={styles.frame1}>
            <View style={styles.view}>
              <Image
                style={styles.keyBackgroundIcon}
                contentFit="cover"
                source={require("../assets/key-background.png")}
              />
              <Text style={styles.label}>{` `}</Text>
              <Text style={styles.number}>1</Text>
            </View>
            <View style={styles.view1}>
              <Image
                style={styles.keyBackgroundIcon1}
                contentFit="cover"
                source={require("../assets/key-background1.png")}
              />
              <Text style={styles.label}>GHI</Text>
              <Text style={styles.number}>4</Text>
            </View>
            <View style={styles.view1}>
              <Image
                style={styles.keyBackgroundIcon2}
                contentFit="cover"
                source={require("../assets/key-background2.png")}
              />
              <Text style={styles.label}>PQRS</Text>
              <Text style={styles.number}>7</Text>
            </View>
          </View>
          <View style={styles.frame2}>
            <View style={styles.view}>
              <Image
                style={styles.keyBackgroundIcon}
                contentFit="cover"
                source={require("../assets/key-background3.png")}
              />
              <Text style={styles.label}>ABC</Text>
              <Text style={styles.number}>2</Text>
            </View>
            <View style={styles.view1}>
              <Image
                style={styles.keyBackgroundIcon1}
                contentFit="cover"
                source={require("../assets/key-background4.png")}
              />
              <Text style={styles.label}>JKL</Text>
              <Text style={styles.number}>5</Text>
            </View>
            <View style={styles.view1}>
              <Image
                style={styles.keyBackgroundIcon1}
                contentFit="cover"
                source={require("../assets/key-background5.png")}
              />
              <Text style={styles.label}>TUV</Text>
              <Text style={styles.number}>8</Text>
            </View>
            <View style={styles.view6}>
              <Image
                style={styles.keyBackgroundIcon2}
                contentFit="cover"
                source={require("../assets/key-background6.png")}
              />
              <Text style={styles.number6}>0</Text>
            </View>
          </View>
          <View style={styles.frame2}>
            <View style={styles.frame4}>
              <View style={styles.view}>
                <Image
                  style={styles.keyBackgroundIcon}
                  contentFit="cover"
                  source={require("../assets/key-background7.png")}
                />
                <Text style={styles.label}>DEF</Text>
                <Text style={styles.number}>3</Text>
              </View>
              <Image
                style={styles.deleteIcon}
                contentFit="cover"
                source={require("../assets/delete.png")}
              />
            </View>
            <View style={styles.frame5}>
              <View style={styles.view8}>
                <Image
                  style={styles.keyBackgroundIcon1}
                  contentFit="cover"
                  source={require("../assets/key-background8.png")}
                />
                <Text style={styles.label}>MNO</Text>
                <Text style={styles.number}>6</Text>
              </View>
              <View style={styles.view1}>
                <Image
                  style={styles.keyBackgroundIcon2}
                  contentFit="cover"
                  source={require("../assets/key-background9.png")}
                />
                <Text style={styles.label}>WXYZ</Text>
                <Text style={styles.number}>9</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <Text style={styles.register}>Register</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  background: {
    alignSelf: "stretch",
    position: "relative",
    backgroundColor: Color.lightgray,
    height: 321,
  },
  keyBackgroundIcon: {
    position: "absolute",
    height: "101.97%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "-1.97%",
    left: "0%",
    borderRadius: Border.br_8xs,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  label: {
    position: "absolute",
    bottom: 5,
    left: 0,
    fontSize: FontSize.size_3xs,
    letterSpacing: 2,
    fontWeight: "700",
    fontFamily: FontFamily.robotoBold,
    color: Color.black,
    textAlign: "center",
    width: 129,
  },
  number: {
    position: "absolute",
    bottom: 15,
    left: 0,
    fontSize: FontSize.size_6xl,
    letterSpacing: 0,
    fontFamily: FontFamily.robotoRegular,
    color: Color.black,
    textAlign: "center",
    width: 129,
  },
  view: {
    alignSelf: "stretch",
    position: "relative",
    height: 51,
  },
  keyBackgroundIcon1: {
    position: "absolute",
    height: "101.93%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "-1.93%",
    left: "0%",
    borderRadius: Border.br_8xs,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  view1: {
    alignSelf: "stretch",
    position: "relative",
    height: 52,
    marginTop: 7,
  },
  keyBackgroundIcon2: {
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
  frame1: {
    width: 129,
    overflow: "hidden",
    flexDirection: "column",
    paddingBottom: 0,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  number6: {
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
  view6: {
    alignSelf: "stretch",
    position: "relative",
    height: 51,
    marginTop: 7,
  },
  frame2: {
    width: 129,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  deleteIcon: {
    position: "relative",
    width: 27,
    height: 20,
    marginTop: 141,
  },
  frame4: {
    alignSelf: "stretch",
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  view8: {
    alignSelf: "stretch",
    position: "relative",
    height: 52,
  },
  frame5: {
    alignSelf: "stretch",
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: -153,
  },
  keys: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
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
    width: 133,
    marginTop: 115,
  },
  frame: {
    position: "absolute",
    top: 575,
    left: 0,
    width: 414,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
});

export default Frame14;
