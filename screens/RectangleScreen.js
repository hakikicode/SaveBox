import * as React from "react";
import { StyleSheet, View } from "react-native";

const RectangleScreen = () => {
  return <View style={styles.rectangleView} />;
};

const styles = StyleSheet.create({
  rectangleView: {
    backgroundColor: "#f8f9fb",
    flex: 1,
    width: "100%",
    height: 94,
  },
});

export default RectangleScreen;
