import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const FrameComponent1 = () => {
  return (
    <View style={styles.sendParent}>
      <Text style={styles.send}>Invite friends now</Text>
      <Image
        style={styles.inviteFriendArrow}
        contentFit="cover"
        source={require("../assets/invite-friend-arrow1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  send: {
    fontSize: FontSize.size_lg,
    letterSpacing: 0,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: Color.white,
    textAlign: "center",
  },
  inviteFriendArrow: {
    width: 44,
    height: 42,
  },
  sendParent: {
    position: "absolute",
    height: "8.15%",
    width: "80.19%",
    top: "84.49%",
    right: "9.9%",
    bottom: "7.37%",
    left: "9.9%",
    borderRadius: Border.br_5xs,
    backgroundColor: Color.royalblue_100,
    flexDirection: "row",
    paddingHorizontal: Padding.p_smi,
    paddingTop: Padding.p_mini,
    paddingBottom: 16,
    alignItems: "center",
    justifyContent: "space-between",
  },
});

export default FrameComponent1;
