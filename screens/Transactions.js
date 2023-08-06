import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import Frame17 from "../components/Frame17";
import Frame18 from "../components/Frame18";
import BehanceProjectCard from "../components/BehanceProjectCard";
import UberMonthlyForm from "../components/UberMonthlyForm";
import { Color, FontSize, FontFamily, Border, Padding } from "../GlobalStyles";

const Transactions = () => {
  return (
    <View style={styles.transactions}>
      <Text style={[styles.send, styles.sendPosition]}>Balances</Text>
      <Text style={[styles.send1, styles.sendPosition]}>
        Recent transactions
      </Text>
      <Frame17 />
      <View style={styles.frame}>
        <Text style={styles.send2}>Transaction Details</Text>
        <Image
          style={styles.inviteFriendArrow}
          contentFit="cover"
          source={require("../assets/invite-friend-arrow.png")}
        />
      </View>
      <Frame18 />
      <BehanceProjectCard />
      <UberMonthlyForm />
    </View>
  );
};

const styles = StyleSheet.create({
  sendPosition: {
    textAlign: "left",
    color: Color.gray_200,
    top: "50%",
    left: "9.9%",
    position: "absolute",
  },
  send: {
    marginTop: -18,
    fontSize: FontSize.size_27xl,
    fontFamily: FontFamily.robotoRegular,
  },
  send1: {
    marginTop: 237,
    fontSize: FontSize.size_7xl,
    fontFamily: FontFamily.damion,
    letterSpacing: 0,
  },
  send2: {
    fontSize: FontSize.size_lg,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: Color.darkslateblue,
    textAlign: "center",
    letterSpacing: 0,
  },
  inviteFriendArrow: {
    width: 44,
    height: 42,
  },
  frame: {
    height: "8.15%",
    width: "80.19%",
    top: "38.28%",
    right: "9.9%",
    bottom: "53.57%",
    borderRadius: Border.br_5xs,
    shadowColor: "rgba(138, 149, 158, 0.25)",
    shadowOffset: {
      width: 0,
      height: 30,
    },
    shadowRadius: 60,
    elevation: 60,
    shadowOpacity: 1,
    flexDirection: "row",
    paddingHorizontal: Padding.p_sm,
    paddingTop: Padding.p_base,
    paddingBottom: 15,
    alignItems: "center",
    justifyContent: "space-between",
    left: "9.9%",
    position: "absolute",
    overflow: "hidden",
    backgroundColor: Color.white,
  },
  transactions: {
    flex: 1,
    width: "100%",
    height: 896,
    overflow: "hidden",
    backgroundColor: Color.white,
  },
});

export default Transactions;
