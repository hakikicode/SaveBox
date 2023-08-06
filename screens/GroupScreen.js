import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";

const GroupScreen = () => {
  return (
    <View style={styles.logoParent}>
      <Image
        style={styles.logoIcon}
        contentFit="cover"
        source={require("../assets/logo.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  logoIcon: {
    position: "absolute",
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    width: "100%",
  },
  logoParent: {
    flex: 1,
    height: 121,
    width: "100%",
  },
});

export default GroupScreen;
