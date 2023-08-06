import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import FrameComponent1 from "../components/FrameComponent1";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const InviteFriends = () => {
  return (
    <View style={styles.inviteFriends}>
      <Text style={[styles.description, styles.descriptionFlexBox]}>
        Invite your friend and you can earn up to $100 for every 5 friends who
        transfer over $400
      </Text>
      <Text style={[styles.pleaseEnterYour, styles.descriptionFlexBox]}>
        Terms and Conditions
      </Text>
      <View style={styles.inviteFriendsChild} />
      <FrameComponent1 />
      <Text style={styles.mainHeadline}>Earn $100</Text>
      <Image
        style={styles.shareBtnIcon}
        contentFit="cover"
        source={require("../assets/share-btn.png")}
      />
      <View style={styles.backBtn}>
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
        source={require("../assets/vector111.png")}
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
  descriptionFlexBox: {
    textAlign: "center",
    letterSpacing: 0,
    position: "absolute",
  },
  vectorIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  description: {
    top: 524,
    left: 26,
    fontSize: FontSize.size_lg,
    lineHeight: 26,
    fontFamily: FontFamily.interRegular,
    width: 378,
    color: Color.darkslateblue,
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
    borderRadius: Border.br_5xs,
    backgroundColor: Color.salmon_100,
    width: 234,
    height: 41,
    position: "absolute",
  },
  mainHeadline: {
    top: 448,
    left: 103,
    fontSize: FontSize.size_27xl,
    lineHeight: 59,
    fontFamily: FontFamily.robotoRegular,
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
  image15Icon: {
    width: 16,
    height: 16,
  },
  backBtn: {
    top: 58,
    left: 41,
    borderRadius: Border.br_mini,
    shadowColor: "rgba(111, 136, 157, 0.25)",
    shadowOffset: {
      width: 0,
      height: 30,
    },
    shadowRadius: 65,
    elevation: 65,
    shadowOpacity: 1,
    width: 47,
    height: 47,
    padding: Padding.p_mini,
    alignItems: "flex-end",
    justifyContent: "flex-end",
    position: "absolute",
    backgroundColor: Color.white,
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
    width: "100%",
    height: 896,
    overflow: "hidden",
    backgroundColor: Color.white,
  },
});

export default InviteFriends;
