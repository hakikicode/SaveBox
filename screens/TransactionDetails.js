import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import Frame22 from "../components/Frame22";
import Frame23 from "../components/Frame23";
import Frame24 from "../components/Frame24";
import { Color, FontSize, FontFamily, Border, Padding } from "../GlobalStyles";

const TransactionDetails = () => {
  return (
    <View style={styles.transactionDetails}>
      <Text style={styles.send}>More Payment Methods</Text>
      <Frame22 />
      <View style={[styles.frame, styles.frameFlexBox]}>
        <Text style={[styles.send1, styles.sendClr]}>
          USD Transaction History
        </Text>
        <Image
          style={styles.inviteFriendArrow}
          contentFit="cover"
          source={require("../assets/invite-friend-arrow.png")}
        />
      </View>
      <View style={[styles.frame1, styles.frameFlexBox]}>
        <View style={styles.frame2}>
          <Image
            style={styles.frameChild}
            contentFit="cover"
            source={require("../assets/rectangle-34.png")}
          />
        </View>
        <View style={[styles.frame3, styles.frameFlexBox]}>
          <Text style={[styles.send2, styles.sendClr]}>British Pound</Text>
          <Image
            style={styles.inviteFriendArrow}
            contentFit="cover"
            source={require("../assets/invite-friend-arrow2.png")}
          />
        </View>
      </View>
      <Frame23 />
      <Frame24 />
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
  sendClr: {
    color: Color.darkslateblue,
    letterSpacing: 0,
    fontSize: FontSize.size_lg,
  },
  send: {
    marginTop: 42,
    top: "50%",
    fontSize: FontSize.size_7xl,
    fontFamily: FontFamily.robotoRegular,
    color: Color.gray_200,
    textAlign: "left",
    left: "9.9%",
    position: "absolute",
  },
  send1: {
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    textAlign: "center",
  },
  inviteFriendArrow: {
    width: 44,
    height: 42,
  },
  frame: {
    height: "8.15%",
    width: "80.19%",
    top: "43.53%",
    right: "9.9%",
    bottom: "48.33%",
    borderRadius: Border.br_5xs,
    shadowColor: "rgba(138, 149, 158, 0.25)",
    shadowRadius: 60,
    elevation: 60,
    paddingHorizontal: 9,
    paddingTop: Padding.p_base,
    paddingBottom: 15,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 30,
    },
    justifyContent: "space-between",
    flexDirection: "row",
    left: "9.9%",
    position: "absolute",
    backgroundColor: Color.white,
  },
  frameChild: {
    width: 42,
    borderRadius: Border.br_3xs,
    height: 42,
  },
  frame2: {
    shadowColor: "rgba(49, 75, 206, 0.15)",
    shadowRadius: 30,
    elevation: 30,
    width: 54,
    height: 52,
    justifyContent: "center",
    borderRadius: Border.br_3xs,
    alignItems: "center",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 30,
    },
    overflow: "hidden",
    backgroundColor: Color.white,
  },
  send2: {
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    textAlign: "left",
  },
  frame3: {
    width: 243,
  },
  frame1: {
    top: 549,
    left: 41,
    backgroundColor: Color.ghostwhite_100,
    width: 337,
    paddingHorizontal: Padding.p_sm,
    paddingTop: Padding.p_sm,
    paddingBottom: Padding.p_lg,
    borderRadius: Border.br_3xs,
    position: "absolute",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  transactionDetails: {
    flex: 1,
    width: "100%",
    height: 896,
    overflow: "hidden",
    backgroundColor: Color.white,
  },
});

export default TransactionDetails;
