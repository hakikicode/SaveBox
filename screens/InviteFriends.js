import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Border, FontFamily, Color, FontSize } from "../GlobalStyles";

const InviteFriends = () => {
  return (
    <View style={styles.inviteFriends}>
      <Text style={[styles.description, styles.sendFlexBox]}>
        Invite your friend and you can earn up to $100 for every 5 friends who
        transfer over $400
      </Text>
      <Text style={[styles.pleaseEnterYour, styles.sendFlexBox]}>
        Terms and Conditions
      </Text>
      <View style={[styles.inviteFriendsChild, styles.rectangleLayout]} />
      <View style={styles.rectangleParent}>
        <View style={[styles.rectangle, styles.rectangleLayout]} />
        <Text style={[styles.send, styles.sendFlexBox]}>
          Invite friends now
        </Text>
        <Image
          style={[styles.inviteFriendArrow, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/invite-friend-arrow1.png")}
        />
      </View>
      <Text style={styles.mainHeadline}>Earn $100</Text>
      <Image
        style={styles.shareBtnIcon}
        contentFit="cover"
        source={require("../assets/share-btn.png")}
      />
      <View style={[styles.backBtn, styles.backLayout]}>
        <View style={[styles.backBtnChild, styles.backLayout]} />
        <Image
          style={styles.image15Icon}
          contentFit="cover"
          source={require("../assets/image-15.png")}
        />
      </View>
      <Image
        style={[styles.vectorIcon, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector10.png")}
      />
      <Image
        style={[styles.vectorIcon1, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector11.png")}
      />
      <Image
        style={styles.illustrationIcon}
        contentFit="cover"
        source={require("../assets/illustration4.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  sendFlexBox: {
    textAlign: "center",
    letterSpacing: 0,
    position: "absolute",
  },
  rectangleLayout: {
    borderRadius: Border.br_5xs,
    position: "absolute",
  },
  vectorIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  backLayout: {
    height: 47,
    width: 47,
    position: "absolute",
  },
  description: {
    top: 524,
    left: 26,
    lineHeight: 26,
    fontFamily: FontFamily.interRegular,
    width: 378,
    color: Color.darkslateblue,
    fontSize: FontSize.size_lg,
    letterSpacing: 0,
  },
  pleaseEnterYour: {
    top: 638,
    left: 135,
    fontSize: FontSize.size_sm,
    textDecoration: "underline",
    lineHeight: 28,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    color: Color.slategray_200,
  },
  inviteFriendsChild: {
    top: 801,
    left: 86,
    backgroundColor: Color.salmon_100,
    width: 234,
    height: 41,
  },
  rectangle: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    backgroundColor: Color.royalblue_100,
    width: "100%",
    borderRadius: Border.br_5xs,
  },
  send: {
    top: "35.62%",
    left: "10.54%",
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: Color.white,
    fontSize: FontSize.size_lg,
    letterSpacing: 0,
  },
  inviteFriendArrow: {
    height: "58.04%",
    width: "13.25%",
    top: "20.55%",
    right: "3.92%",
    bottom: "21.41%",
    left: "82.83%",
  },
  rectangleParent: {
    top: 757,
    width: 332,
    height: 73,
    left: 41,
    position: "absolute",
  },
  mainHeadline: {
    top: 448,
    left: 103,
    fontSize: FontSize.size_27xl,
    lineHeight: 59,
    fontFamily: FontFamily.gilroyBold,
    textAlign: "left",
    color: Color.darkslateblue,
    position: "absolute",
  },
  shareBtnIcon: {
    top: 23,
    left: 261,
    width: 153,
    height: 177,
    position: "absolute",
  },
  backBtnChild: {
    top: 0,
    left: 0,
    borderRadius: Border.br_mini,
    shadowColor: "rgba(111, 136, 157, 0.25)",
    shadowOffset: {
      width: 0,
      height: 30,
    },
    shadowRadius: 65,
    elevation: 65,
    shadowOpacity: 1,
    backgroundColor: Color.white,
    height: 47,
    width: 47,
  },
  image15Icon: {
    top: 16,
    left: 16,
    width: 16,
    height: 16,
    position: "absolute",
  },
  backBtn: {
    top: 58,
    left: 41,
  },
  vectorIcon: {
    height: "14.58%",
    width: "42.49%",
    top: "33.69%",
    right: "42.8%",
    bottom: "51.73%",
    left: "14.72%",
  },
  vectorIcon1: {
    height: "17.88%",
    width: "44.62%",
    top: "29.45%",
    right: "11.64%",
    bottom: "52.68%",
    left: "43.73%",
  },
  illustrationIcon: {
    top: 222,
    left: 114,
    width: 186,
    height: 186,
    position: "absolute",
  },
  inviteFriends: {
    flex: 1,
    height: 896,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default InviteFriends;
