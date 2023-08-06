import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Color } from "../GlobalStyles";

const Splash = () => {
  return (
    <View style={styles.splash}>
      <View style={styles.background} />
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    position: "absolute",
    top: 70,
    left: -497,
    backgroundColor: Color.royalblue_100,
    width: 414,
    height: 896,
  },
  splash: {
    flex: 1,
    width: "100%",
    height: 896,
  },
});

export default Splash;
