import * as React from "react";
import { StyleSheet, View } from "react-native";

const RectangleScreen1 = () => {
  return <View style={styles.rectangleView} />;
};

const styles = StyleSheet.create({
  rectangleView: {
    backgroundColor: "#e9ecf1",
    flex: 1,
    width: "100%",
    height: 94,
  },
});

export default RectangleScreen1;
