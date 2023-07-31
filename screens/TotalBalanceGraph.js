import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import { Border, Color, Padding, FontSize, FontFamily } from "../GlobalStyles";

const TotalBalanceGraph = () => {
  return (
    <View style={styles.totalBalanceGraph}>
      <View style={styles.frame}>
        <Image
          style={styles.settingsBtnIcon}
          contentFit="cover"
          source={require("../assets/settings-btn.png")}
        />
        <View style={styles.backBtn}>
          <Image
            style={styles.image15Icon}
            contentFit="cover"
            source={require("../assets/image-15.png")}
          />
        </View>
      </View>
      <View style={styles.frame1}>
        <Text style={styles.send}>Total Balance</Text>
        <Text style={styles.send1}>$225,600</Text>
      </View>
      <View style={styles.frame2}>
        <View style={styles.graph}>
          <View style={styles.frameParent}>
            <View style={styles.frame3}>
              <Text style={styles.jan}>JAN</Text>
              <Text style={styles.feb}>FEB</Text>
            </View>
            <View style={styles.frame4}>
              <Text style={styles.jan}>MAR</Text>
              <Text style={styles.apr}>APR</Text>
              <Text style={styles.apr}>MAY</Text>
              <Text style={styles.apr}>JUN</Text>
            </View>
          </View>
          <View style={styles.graphChild} />
          <View style={styles.graphItem} />
          <View style={styles.graphInner} />
          <View style={styles.rectangleView} />
          <View style={styles.graphChild1} />
          <View style={styles.graphChild2} />
          <View style={styles.graphChild3} />
          <View style={styles.graphChild4} />
          <Image
            style={styles.ellipseIcon}
            contentFit="cover"
            source={require("../assets/ellipse-13.png")}
          />
          <Image
            style={styles.unionIcon}
            contentFit="cover"
            source={require("../assets/union.png")}
          />
          <Text style={styles.send2}>$120,00</Text>
          <Image
            style={styles.rectangleIcon}
            contentFit="cover"
            source={require("../assets/rectangle-81.png")}
          />
          <Image
            style={styles.objectIcon}
            contentFit="cover"
            source={require("../assets/object.png")}
          />
          <Text style={styles.send3}>Income</Text>
        </View>
        <View style={styles.easyPayment}>
          <View style={styles.easyPaymentChild} />
          <View style={styles.rectangle} />
          <Text style={styles.send4}>Easy Payment</Text>
          <Text style={styles.send5}>Check out new features</Text>
          <Image
            style={styles.inviteFriendArrow}
            contentFit="cover"
            source={require("../assets/invite-friend-arrow1.png")}
          />
        </View>
        <Image
          style={styles.frameChild}
          contentFit="cover"
          source={require("../assets/vector-1.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  settingsBtnIcon: {
    position: "absolute",
    top: 0,
    left: 220,
    width: 112,
    height: 47,
  },
  image15Icon: {
    position: "relative",
    width: 16,
    height: 16,
  },
  backBtn: {
    position: "absolute",
    height: "100%",
    width: "14.16%",
    top: "0%",
    right: "85.84%",
    bottom: "0%",
    left: "0%",
    borderRadius: Border.br_mini,
    backgroundColor: Color.white,
    shadowColor: "rgba(111, 136, 157, 0.25)",
    shadowOffset: {
      width: 0,
      height: 30,
    },
    shadowRadius: 65,
    elevation: 65,
    shadowOpacity: 1,
    flexDirection: "column",
    padding: Padding.p_mini,
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
  frame: {
    position: "absolute",
    top: 58,
    left: 41,
    width: 332,
    height: 47,
    overflow: "hidden",
  },
  send: {
    fontSize: FontSize.size_lg,
    letterSpacing: 0,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: Color.darkslateblue,
    textAlign: "center",
    height: 22,
    marginLeft: 44,
  },
  send1: {
    alignSelf: "stretch",
    position: "relative",
    fontSize: FontSize.size_33xl,
    fontFamily: FontFamily.gilroyBold,
    color: Color.darkslateblue,
    textAlign: "center",
  },
  frame1: {
    position: "absolute",
    top: 131,
    left: 97,
    width: 220,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  jan: {
    position: "relative",
    fontSize: FontSize.size_3xs,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: Color.slategray_100,
    textAlign: "center",
  },
  feb: {
    position: "relative",
    fontSize: FontSize.size_3xs,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: Color.slategray_100,
    textAlign: "center",
    marginLeft: 32,
  },
  frame3: {
    width: 71,
    height: 12,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  apr: {
    position: "relative",
    fontSize: FontSize.size_3xs,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: Color.slategray_100,
    textAlign: "left",
  },
  frame4: {
    width: 201,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  frameParent: {
    position: "absolute",
    top: 436,
    left: 10,
    width: 313,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  graphChild: {
    position: "absolute",
    top: 103,
    left: 150,
    borderRadius: Border.br_5xs,
    backgroundColor: Color.royalblue_200,
    width: 76,
    height: 35,
  },
  graphItem: {
    position: "absolute",
    top: 30,
    left: 44,
    borderRadius: Border.br_5xs,
    backgroundColor: Color.royalblue_200,
    width: 76,
    height: 35,
  },
  graphInner: {
    position: "absolute",
    top: 306,
    left: 15,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.slateblue_100,
    width: 10,
    height: 111,
  },
  rectangleView: {
    position: "absolute",
    top: 146,
    left: 67,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.royalblue_100,
    width: 10,
    height: 271,
  },
  graphChild1: {
    position: "absolute",
    top: 248,
    left: 129,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.slateblue_100,
    width: 10,
    height: 169,
  },
  graphChild2: {
    position: "absolute",
    top: 133,
    left: 188,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.royalblue_100,
    width: 8,
    height: 284,
  },
  graphChild3: {
    position: "absolute",
    top: 260,
    left: 248,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.slateblue_100,
    width: 10,
    height: 157,
  },
  graphChild4: {
    position: "absolute",
    top: 202,
    left: 308,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.royalblue_100,
    width: 10,
    height: 215,
  },
  ellipseIcon: {
    position: "absolute",
    top: 126,
    left: 166,
    width: 24,
    height: 24,
  },
  unionIcon: {
    position: "relative",
    width: 83,
    height: 41,
  },
  send2: {
    position: "absolute",
    marginTop: -135.5,
    top: "50%",
    left: "43.98%",
    fontSize: FontSize.size_mini,
    letterSpacing: 0,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    color: Color.white,
    textAlign: "center",
  },
  rectangleIcon: {
    position: "absolute",
    top: 13,
    left: 10,
    borderRadius: Border.br_31xl,
    width: 103,
    height: 41,
  },
  objectIcon: {
    position: "absolute",
    height: "1.37%",
    width: "3.2%",
    top: "6.67%",
    right: "69.69%",
    bottom: "91.96%",
    left: "27.11%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  send3: {
    position: "absolute",
    marginTop: -207.5,
    top: "50%",
    left: "6.63%",
    fontSize: FontSize.size_mini,
    letterSpacing: 0,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    color: Color.white,
    textAlign: "center",
  },
  graph: {
    position: "absolute",
    top: 0,
    left: 171,
    borderRadius: Border.br_5xs,
    backgroundColor: Color.ghostwhite_100,
    width: 332,
    height: 465,
  },
  easyPaymentChild: {
    position: "absolute",
    height: "44.09%",
    width: "75%",
    top: "55.91%",
    right: "8.43%",
    bottom: "0%",
    left: "16.57%",
    borderRadius: Border.br_5xs,
    backgroundColor: "rgba(87, 113, 249, 0.32)",
  },
  rectangle: {
    position: "absolute",
    height: "78.49%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "21.51%",
    left: "0%",
    borderRadius: Border.br_5xs,
    backgroundColor: Color.royalblue_100,
  },
  send4: {
    position: "absolute",
    top: "20.43%",
    left: "8.43%",
    fontSize: FontSize.size_lg,
    letterSpacing: 0,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: Color.white,
    textAlign: "center",
  },
  send5: {
    position: "absolute",
    top: "46.24%",
    left: "8.43%",
    fontSize: FontSize.size_sm,
    letterSpacing: 0,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: "#f5f5f5",
    textAlign: "left",
  },
  inviteFriendArrow: {
    position: "absolute",
    height: "45.56%",
    width: "13.25%",
    top: "17.2%",
    right: "3.31%",
    bottom: "37.24%",
    left: "83.43%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  easyPayment: {
    position: "absolute",
    top: 503,
    left: 171,
    width: 332,
    height: 93,
  },
  frameChild: {
    position: "absolute",
    top: 458,
    left: 130,
    width: 414,
    height: 292,
  },
  frame2: {
    position: "absolute",
    top: 255,
    left: -130,
    width: 503,
    height: 750,
    overflow: "hidden",
  },
  totalBalanceGraph: {
    position: "relative",
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    height: 896,
    overflow: "hidden",
  },
});

export default TotalBalanceGraph;
