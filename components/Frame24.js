import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, Border, FontSize, FontFamily, Padding } from "../GlobalStyles";

const Frame24 = () => {
  return (
    <View style={[styles.frame, styles.frameFlexBox]}>
      <View style={[styles.frame1, styles.frameLayout]}>
        <View style={[styles.rectangleParent, styles.frameLayout]}>
          <View style={[styles.frameChild, styles.frameLayout]} />
          <View style={[styles.frameItem, styles.frameLayout]} />
        </View>
        <Image
          style={styles.frameInner}
          contentFit="cover"
          source={require("../assets/rectangle-691.png")}
        />
      </View>
      <View style={[styles.frame2, styles.frameFlexBox]}>
        <Text style={styles.send}>Euro</Text>
        <Image
          style={styles.inviteFriendArrow}
          contentFit="cover"
          source={require("../assets/invite-friend-arrow2.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameFlexBox: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
  },
  frameLayout: {
    height: 52,
    width: 54,
  },
  frameChild: {
    backgroundColor: Color.white,
    shadowColor: "rgba(49, 75, 206, 0.15)",
    shadowOffset: {
      width: 0,
      height: 15,
    },
    shadowRadius: 30,
    elevation: 30,
    shadowOpacity: 1,
    borderRadius: Border.br_3xs,
  },
  frameItem: {
    marginTop: -52,
    borderRadius: Border.br_3xs,
  },
  rectangleParent: {
    alignItems: "center",
    width: 54,
  },
  frameInner: {
    width: 42,
    marginTop: -47,
    height: 42,
    borderRadius: Border.br_3xs,
  },
  frame1: {
    justifyContent: "flex-end",
    alignItems: "center",
    width: 54,
    overflow: "hidden",
  },
  send: {
    fontSize: FontSize.size_lg,
    letterSpacing: 0,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    color: Color.gray_200,
    textAlign: "left",
  },
  inviteFriendArrow: {
    width: 44,
    height: 42,
  },
  frame2: {
    width: 244,
  },
  frame: {
    position: "absolute",
    top: 752,
    left: 41,
    backgroundColor: Color.ghostwhite_100,
    width: 337,
    paddingHorizontal: Padding.p_sm,
    paddingVertical: Padding.p_base,
    borderRadius: Border.br_3xs,
  },
});

export default Frame24;
