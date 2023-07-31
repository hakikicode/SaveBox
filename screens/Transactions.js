import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const Transactions = () => {
  return (
    <View style={styles.transactions}>
      <Text style={[styles.send, styles.sendFlexBox1]}>Balances</Text>
      <Text style={[styles.send1, styles.send1Typo]}>Recent transactions</Text>
      <View style={styles.frame}>
        <Text style={styles.send2}>Transactions</Text>
        <Image
          style={styles.frameChild}
          contentFit="cover"
          source={require("../assets/rectangle-68.png")}
        />
        <View style={styles.backBtn}>
          <Image
            style={styles.image15Icon}
            contentFit="cover"
            source={require("../assets/image-15.png")}
          />
        </View>
        <Image
          style={styles.settingsBtnIcon}
          contentFit="cover"
          source={require("../assets/settings-btn.png")}
        />
        <Text style={[styles.send3, styles.sendFlexBox]}>$2,52,00.00</Text>
        <Text style={[styles.send4, styles.sendTypo6]}>
          USD BALANCE AVAILABLE
        </Text>
        <Text style={[styles.send5, styles.sendTypo4]}>See Bank Details</Text>
      </View>
      <View style={styles.frame1}>
        <View style={[styles.rectangle, styles.rectangleShadowBox1]} />
        <Text style={[styles.send6, styles.sendTypo5]}>
          Transaction Details
        </Text>
        <Image
          style={styles.inviteFriendArrow}
          contentFit="cover"
          source={require("../assets/invite-friend-arrow.png")}
        />
      </View>
      <View style={styles.frame2}>
        <View style={[styles.frameItem, styles.frameItemLayout]} />
        <Text style={[styles.send7, styles.sendTypo3]}>121k</Text>
        <Image
          style={[styles.frameInner, styles.frameInnerLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-34.png")}
        />
        <Text style={[styles.send8, styles.sendTypo1]}>British Bal</Text>
        <View style={[styles.rectangleView, styles.rectangleShadowBox]} />
        <Text style={[styles.send9, styles.sendPosition1]}>352k</Text>
        <Image
          style={[styles.rectangleIcon, styles.frameInnerLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-40.png")}
        />
        <Text style={[styles.send10, styles.sendPosition1]}>US Bal</Text>
        <View style={[styles.rectangleParent, styles.rectangleShadowBox]}>
          <Image
            style={styles.componentChild}
            contentFit="cover"
            source={require("../assets/rectangle-41.png")}
          />
          <View style={styles.frame3}>
            <Text style={[styles.send11, styles.sendTypo1]}>Euro Bal</Text>
            <Text style={[styles.send12, styles.sendTypo3]}>18,42</Text>
          </View>
        </View>
      </View>
      <View style={[styles.frame4, styles.frameLayout]}>
        <Text style={[styles.send13, styles.sendTypo]}>Behance Project</Text>
        <Text style={[styles.send14, styles.sendPosition]}>
          23rd march 2021
        </Text>
        <Text style={[styles.pleaseEnterYour, styles.sendTypo1]}>$320</Text>
        <View style={styles.framePosition}>
          <View style={styles.frameChildShadowBox} />
          <Image
            style={[styles.frameChild2, styles.framePosition]}
            contentFit="cover"
            source={require("../assets/rectangle-341.png")}
          />
        </View>
      </View>
      <View style={[styles.frame5, styles.frameLayout]}>
        <Text style={[styles.send15, styles.sendPosition]}>Uber Monthly</Text>
        <Text style={[styles.pleaseEnterYour, styles.sendTypo1]}>$650</Text>
        <Text style={[styles.send14, styles.sendPosition]}>
          04th february 2021
        </Text>
        <View style={styles.framePosition}>
          <Image
            style={styles.image16Icon}
            contentFit="cover"
            source={require("../assets/image-16.png")}
          />
          <View style={[styles.frame6, styles.framePosition]}>
            <View style={styles.frameChildShadowBox} />
            <View style={[styles.frameChild2, styles.framePosition]} />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  sendFlexBox1: {
    textAlign: "left",
    top: "50%",
  },
  send1Typo: {
    fontWeight: "700",
    letterSpacing: 0,
  },
  sendFlexBox: {
    textAlign: "center",
    top: "50%",
  },
  sendTypo6: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    color: Color.darkslateblue,
    letterSpacing: 0,
    position: "absolute",
  },
  sendTypo4: {
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  rectangleShadowBox1: {
    elevation: 60,
    shadowRadius: 60,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 30,
    },
    position: "absolute",
    backgroundColor: Color.white,
  },
  sendTypo5: {
    fontSize: FontSize.size_lg,
    textAlign: "center",
    top: "50%",
  },
  frameItemLayout: {
    width: 138,
    height: 157,
    top: 0,
  },
  sendTypo3: {
    fontSize: FontSize.size_9xl,
    textAlign: "center",
    fontFamily: FontFamily.notoSerifSemiBold,
    color: Color.gray_200,
  },
  frameInnerLayout: {
    width: 42,
    top: 18,
    borderRadius: Border.br_3xs,
    height: 42,
    position: "absolute",
  },
  sendTypo1: {
    fontSize: FontSize.size_sm,
    textAlign: "left",
  },
  rectangleShadowBox: {
    elevation: 30,
    shadowRadius: 30,
    shadowColor: "rgba(138, 149, 158, 0.1)",
    borderRadius: Border.br_3xs,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 30,
    },
    position: "absolute",
    backgroundColor: Color.white,
  },
  sendPosition1: {
    left: "74.56%",
    fontWeight: "600",
    letterSpacing: 0,
    top: "50%",
    position: "absolute",
  },
  frameLayout: {
    height: 52,
    width: 333,
    left: 41,
    position: "absolute",
    overflow: "hidden",
  },
  sendTypo: {
    marginTop: -19,
    fontFamily: FontFamily.interSemiBold,
    fontSize: FontSize.size_lg,
    fontWeight: "600",
  },
  sendPosition: {
    left: "20.12%",
    letterSpacing: 0,
    textAlign: "left",
    top: "50%",
    position: "absolute",
  },
  framePosition: {
    width: 54,
    height: 52,
    left: 0,
    top: 0,
    position: "absolute",
  },
  send: {
    marginTop: -18,
    color: Color.gray_200,
    fontFamily: FontFamily.gilroyBold,
    fontSize: FontSize.size_27xl,
    left: "9.9%",
    textAlign: "left",
    top: "50%",
    position: "absolute",
  },
  send1: {
    marginTop: 237,
    fontSize: FontSize.size_7xl,
    fontFamily: FontFamily.sFProDisplay,
    textAlign: "left",
    top: "50%",
    color: Color.gray_200,
    left: "9.9%",
    position: "absolute",
  },
  send2: {
    left: "3.72%",
    fontSize: FontSize.size_17xl,
    fontFamily: FontFamily.notoSerifSemiBold,
    fontWeight: "600",
    marginTop: 94,
    letterSpacing: 0,
    textAlign: "left",
    color: Color.gray_200,
    top: "50%",
    position: "absolute",
  },
  frameChild: {
    borderRadius: Border.br_6xl,
    left: 0,
    top: 0,
    height: 304,
    width: 376,
    position: "absolute",
  },
  image15Icon: {
    left: 16,
    width: 16,
    height: 16,
    top: 16,
    position: "absolute",
  },
  backBtn: {
    top: 41,
    left: 22,
    borderRadius: Border.br_mini,
    shadowColor: "rgba(111, 136, 157, 0.25)",
    shadowRadius: 65,
    elevation: 65,
    width: 47,
    height: 47,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 30,
    },
    position: "absolute",
    backgroundColor: Color.white,
  },
  settingsBtnIcon: {
    top: 6,
    left: 242,
    width: 134,
    height: 177,
    position: "absolute",
  },
  send3: {
    marginTop: -8,
    left: "17.02%",
    color: Color.darkslateblue,
    position: "absolute",
    fontFamily: FontFamily.gilroyBold,
    fontSize: FontSize.size_27xl,
  },
  send4: {
    marginTop: -29,
    left: "22.87%",
    fontSize: FontSize.size_base,
    textAlign: "center",
    top: "50%",
  },
  send5: {
    left: "30.59%",
    color: Color.slateblue_100,
    fontSize: FontSize.size_lg,
    textAlign: "center",
    top: "50%",
    marginTop: 94,
    fontFamily: FontFamily.interSemiBold,
  },
  frame: {
    top: 17,
    left: 19,
    height: 304,
    width: 376,
    position: "absolute",
    overflow: "hidden",
  },
  rectangle: {
    right: "0%",
    borderRadius: Border.br_5xs,
    shadowColor: "rgba(138, 149, 158, 0.25)",
    left: "0%",
    bottom: "0%",
    height: "100%",
    top: "0%",
    width: "100%",
  },
  send6: {
    marginTop: -10.5,
    left: "6.63%",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    color: Color.darkslateblue,
    letterSpacing: 0,
    position: "absolute",
  },
  inviteFriendArrow: {
    left: 274,
    height: 42,
    width: 44,
    top: 16,
    position: "absolute",
  },
  frame1: {
    top: 343,
    width: 332,
    height: 73,
    left: 41,
    position: "absolute",
    overflow: "hidden",
  },
  frameItem: {
    left: 158,
    shadowColor: "rgba(138, 149, 158, 0.15)",
    borderRadius: Border.br_3xs,
    elevation: 60,
    shadowRadius: 60,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 30,
    },
    position: "absolute",
    backgroundColor: Color.white,
  },
  send7: {
    left: "40.04%",
    marginTop: -2.5,
    fontSize: FontSize.size_9xl,
    fontWeight: "600",
    letterSpacing: 0,
    top: "50%",
    position: "absolute",
  },
  frameInner: {
    left: 181,
  },
  send8: {
    left: "40.27%",
    color: Color.slategray_100,
    marginTop: 44.5,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    letterSpacing: 0,
    top: "50%",
    position: "absolute",
  },
  rectangleView: {
    left: 314,
    width: 138,
    height: 157,
    top: 0,
  },
  send9: {
    fontSize: FontSize.size_9xl,
    textAlign: "center",
    fontFamily: FontFamily.notoSerifSemiBold,
    color: Color.gray_200,
    marginTop: -2.5,
  },
  rectangleIcon: {
    left: 337,
  },
  send10: {
    color: Color.slategray_100,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    marginTop: 44.5,
    fontFamily: FontFamily.interSemiBold,
  },
  componentChild: {
    height: "26.75%",
    width: "30.43%",
    top: "11.46%",
    right: "52.9%",
    bottom: "61.78%",
    left: "16.67%",
    maxWidth: "100%",
    maxHeight: "100%",
    borderRadius: Border.br_3xs,
    position: "absolute",
    overflow: "hidden",
  },
  send11: {
    top: "73.44%",
    color: Color.slategray_100,
    left: "0%",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    position: "absolute",
    letterSpacing: 0,
  },
  send12: {
    left: "0%",
    fontSize: FontSize.size_9xl,
    top: "0%",
    fontWeight: "600",
    letterSpacing: 0,
    position: "absolute",
  },
  frame3: {
    top: 76,
    left: 23,
    width: 69,
    height: 64,
    position: "absolute",
    overflow: "hidden",
  },
  rectangleParent: {
    width: "30.53%",
    right: "69.47%",
    left: "0%",
    bottom: "0%",
    height: "100%",
    top: "0%",
  },
  frame2: {
    top: 508,
    width: 452,
    height: 157,
    left: 41,
    position: "absolute",
    overflow: "hidden",
  },
  send13: {
    left: "19.52%",
    color: Color.darkslateblue,
    position: "absolute",
    letterSpacing: 0,
    textAlign: "left",
    top: "50%",
    marginTop: -19,
  },
  send14: {
    marginTop: 6,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.interRegular,
    color: Color.slategray_100,
  },
  pleaseEnterYour: {
    top: 15,
    left: 297,
    lineHeight: 25,
    fontFamily: FontFamily.interBold,
    color: Color.darkslateblue,
    position: "absolute",
    fontWeight: "700",
    letterSpacing: 0,
  },
  frameChildShadowBox: {
    shadowColor: "rgba(49, 75, 206, 0.15)",
    width: 54,
    height: 52,
    elevation: 30,
    shadowRadius: 30,
    borderRadius: Border.br_3xs,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 30,
    },
    left: 0,
    top: 0,
    position: "absolute",
    backgroundColor: Color.white,
  },
  frameChild2: {
    borderRadius: Border.br_3xs,
  },
  frame4: {
    top: 744,
  },
  send15: {
    marginTop: -19,
    fontFamily: FontFamily.interSemiBold,
    fontSize: FontSize.size_lg,
    fontWeight: "600",
    color: Color.gray_200,
  },
  image16Icon: {
    left: 5,
    height: 15,
    top: 18,
    width: 44,
    position: "absolute",
  },
  frame6: {
    overflow: "hidden",
  },
  frame5: {
    top: 831,
  },
  transactions: {
    flex: 1,
    height: 896,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default Transactions;
