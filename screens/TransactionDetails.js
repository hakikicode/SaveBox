import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { FontFamily, Color, Border, FontSize, Padding } from "../GlobalStyles";

const TransactionDetails = () => {
  return (
    <View style={styles.transactionDetails}>
      <Text style={styles.send}>More Payment Methods</Text>
      <View style={styles.frame}>
        <View style={styles.frameChild} />
        <Text style={styles.send1}>395,42.00</Text>
        <Text style={[styles.send2, styles.sendTypo4]}>US Dollars</Text>
        <Image
          style={[styles.menuBtnIcon, styles.btnIconLayout]}
          contentFit="cover"
          source={require("../assets/menu-btn.png")}
        />
        <Image
          style={[styles.settingsBtnIcon, styles.btnIconLayout]}
          contentFit="cover"
          source={require("../assets/settings-btn.png")}
        />
        <View style={styles.frameItem} />
        <View style={[styles.frameInner, styles.frameLayout]} />
        <Image
          style={[styles.rectangleIcon, styles.frameChild1Layout]}
          contentFit="cover"
          source={require("../assets/rectangle-64.png")}
        />
        <Image
          style={[styles.frameChild1, styles.frameChild1Layout]}
          contentFit="cover"
          source={require("../assets/rectangle-65.png")}
        />
        <Text style={[styles.send3, styles.sendTypo1]}>Send</Text>
        <Text style={[styles.send4, styles.sendTypo1]}>Convert</Text>
        <Image
          style={styles.maskGroupIcon}
          contentFit="cover"
          source={require("../assets/mask-group.png")}
        />
        <Image
          style={styles.maskGroupIcon1}
          contentFit="cover"
          source={require("../assets/mask-group1.png")}
        />
        <Image
          style={[styles.frameChild2, styles.frameLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-342.png")}
        />
      </View>
      <View style={[styles.frame1, styles.frameFlexBox1]}>
        <Text style={[styles.send5, styles.sendTypo]}>
          USD Transaction History
        </Text>
        <Image
          style={styles.inviteFriendArrow}
          contentFit="cover"
          source={require("../assets/invite-friend-arrow.png")}
        />
      </View>
      <View style={styles.frame2}>
        <View style={[styles.frame3, styles.frameChildLayout1]}>
          <Image
            style={styles.frameChildLayout}
            contentFit="cover"
            source={require("../assets/rectangle-34.png")}
          />
        </View>
        <View style={[styles.frame4, styles.frameFlexBox1]}>
          <Text style={[styles.send6, styles.sendTypo]}>British Pound</Text>
          <Image
            style={styles.inviteFriendArrow}
            contentFit="cover"
            source={require("../assets/invite-friend-arrow2.png")}
          />
        </View>
      </View>
      <View style={[styles.frame5, styles.frameFlexBox]}>
        <View style={[styles.frame6, styles.frameChildLayout1]}>
          <View style={[styles.rectangleView, styles.frameChildLayout1]} />
          <View style={[styles.frameChild4, styles.frameChildLayout1]} />
        </View>
        <View style={[styles.frame7, styles.frameFlexBox1]}>
          <View style={[styles.frame8, styles.frameFlexBox1]}>
            <Image
              style={styles.frameChildLayout}
              contentFit="cover"
              source={require("../assets/rectangle-40.png")}
            />
            <Text style={[styles.send7, styles.sendTypo]}>US Dollar</Text>
          </View>
          <Image
            style={styles.inviteFriendArrow}
            contentFit="cover"
            source={require("../assets/invite-friend-arrow2.png")}
          />
        </View>
      </View>
      <View style={[styles.frame9, styles.frameFlexBox]}>
        <View style={[styles.frame10, styles.frameChildLayout1]}>
          <View style={[styles.rectangleParent, styles.frameChildLayout1]}>
            <View style={[styles.frameChild6, styles.frameChildLayout1]} />
            <View style={[styles.frameChild4, styles.frameChildLayout1]} />
          </View>
          <Image
            style={[styles.frameChild8, styles.frameChildLayout]}
            contentFit="cover"
            source={require("../assets/rectangle-691.png")}
          />
        </View>
        <View style={[styles.frame11, styles.frameFlexBox1]}>
          <Text style={[styles.send7, styles.sendTypo]}>Euro</Text>
          <Image
            style={styles.inviteFriendArrow}
            contentFit="cover"
            source={require("../assets/invite-friend-arrow2.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  sendTypo4: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    textAlign: "center",
    color: Color.darkslateblue,
  },
  btnIconLayout: {
    height: 142,
    width: 112,
    top: 0,
    position: "absolute",
  },
  frameLayout: {
    height: 64,
    position: "absolute",
  },
  frameChild1Layout: {
    height: 87,
    width: 89,
    top: 216,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  sendTypo1: {
    color: Color.white,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_base,
    textAlign: "center",
    top: "50%",
    position: "absolute",
  },
  frameFlexBox1: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
  },
  sendTypo: {
    fontSize: FontSize.size_lg,
    letterSpacing: 0,
  },
  frameChildLayout1: {
    height: 52,
    width: 54,
  },
  frameFlexBox: {
    paddingVertical: Padding.p_base,
    paddingHorizontal: Padding.p_sm,
    width: 337,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: Color.ghostwhite_100,
    borderRadius: Border.br_3xs,
    left: 41,
    position: "absolute",
    overflow: "hidden",
  },
  frameChildLayout: {
    width: 42,
    height: 42,
    borderRadius: Border.br_3xs,
  },
  send: {
    marginTop: 42,
    fontSize: FontSize.size_7xl,
    textAlign: "left",
    fontFamily: FontFamily.gilroyBold,
    left: "9.9%",
    top: "50%",
    color: Color.gray_200,
    position: "absolute",
  },
  frameChild: {
    top: 75,
    height: 176,
    backgroundColor: Color.ghostwhite_100,
    borderRadius: Border.br_3xs,
    left: 0,
    width: 332,
    position: "absolute",
  },
  send1: {
    marginTop: -40,
    fontSize: 34,
    textAlign: "center",
    color: Color.darkslateblue,
    left: "27.11%",
    fontFamily: FontFamily.gilroyBold,
    top: "50%",
    position: "absolute",
  },
  send2: {
    marginTop: 10,
    left: "38.55%",
    letterSpacing: 0,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    top: "50%",
    position: "absolute",
  },
  menuBtnIcon: {
    left: 0,
    height: 142,
    width: 112,
    top: 0,
  },
  settingsBtnIcon: {
    left: 220,
  },
  frameItem: {
    top: 267,
    left: 68,
    backgroundColor: "rgba(122, 122, 253, 0.37)",
    width: 97,
    height: 61,
    borderRadius: Border.br_5xs,
    position: "absolute",
  },
  frameInner: {
    top: 260,
    left: 191,
    backgroundColor: "rgba(49, 75, 206, 0.25)",
    width: 88,
  },
  rectangleIcon: {
    left: 66,
  },
  frameChild1: {
    left: 178,
  },
  send3: {
    marginTop: 104,
    left: "27.11%",
    color: Color.white,
  },
  send4: {
    marginTop: 103,
    left: "57.53%",
  },
  maskGroupIcon: {
    left: 84,
    width: 51,
    height: 51,
    top: 216,
    position: "absolute",
  },
  maskGroupIcon1: {
    top: 228,
    left: 209,
    width: 28,
    height: 28,
    position: "absolute",
  },
  frameChild2: {
    top: 47,
    left: 134,
    width: 64,
    borderRadius: Border.br_3xs,
  },
  frame: {
    top: 58,
    height: 328,
    width: 332,
    left: 41,
    position: "absolute",
    overflow: "hidden",
  },
  send5: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    textAlign: "center",
    color: Color.darkslateblue,
  },
  inviteFriendArrow: {
    width: 44,
    height: 42,
  },
  frame1: {
    height: "8.15%",
    width: "80.19%",
    top: "43.53%",
    right: "9.9%",
    bottom: "48.33%",
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
    borderRadius: Border.br_5xs,
    left: "9.9%",
    position: "absolute",
    backgroundColor: Color.white,
  },
  frame3: {
    justifyContent: "center",
    elevation: 30,
    shadowRadius: 30,
    shadowColor: "rgba(49, 75, 206, 0.15)",
    width: 54,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 30,
    },
    borderRadius: Border.br_3xs,
    backgroundColor: Color.white,
    alignItems: "center",
    overflow: "hidden",
  },
  send6: {
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_lg,
    textAlign: "left",
    color: Color.darkslateblue,
  },
  frame4: {
    width: 243,
  },
  frame2: {
    top: 549,
    paddingTop: Padding.p_sm,
    paddingBottom: Padding.p_lg,
    paddingHorizontal: Padding.p_sm,
    width: 337,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: Color.ghostwhite_100,
    borderRadius: Border.br_3xs,
    left: 41,
    position: "absolute",
    overflow: "hidden",
  },
  rectangleView: {
    elevation: 30,
    shadowRadius: 30,
    shadowColor: "rgba(49, 75, 206, 0.15)",
    width: 54,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 30,
    },
    borderRadius: Border.br_3xs,
    backgroundColor: Color.white,
  },
  frameChild4: {
    marginTop: -52,
    borderRadius: Border.br_3xs,
  },
  frame6: {
    alignItems: "center",
    overflow: "hidden",
  },
  send7: {
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_lg,
    textAlign: "left",
    color: Color.gray_200,
  },
  frame8: {
    width: 137,
  },
  frame7: {
    width: 302,
  },
  frame5: {
    top: 652,
  },
  frameChild6: {
    elevation: 30,
    shadowRadius: 30,
    shadowColor: "rgba(49, 75, 206, 0.15)",
    width: 54,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 30,
    },
    borderRadius: Border.br_3xs,
    backgroundColor: Color.white,
  },
  rectangleParent: {
    alignItems: "center",
  },
  frameChild8: {
    marginTop: -47,
  },
  frame10: {
    justifyContent: "flex-end",
    alignItems: "center",
    overflow: "hidden",
  },
  frame11: {
    width: 244,
  },
  frame9: {
    top: 752,
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
