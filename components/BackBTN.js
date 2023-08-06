import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";
import { Border, Color, Padding } from "../GlobalStyles";

const BackBTN = () => {
  return (
    <View style={styles.backBtn}>
      <Image
        style={styles.image15Icon}
        contentFit="cover"
        source={require("../assets/image-15.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image15Icon: {
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
    padding: Padding.p_mini,
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
});

export default BackBTN;
