import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Color } from "../GlobalStyles";

const RectangleScreen2 = () => {
  return <View style={styles.rectangleView} />;
};

const styles = StyleSheet.create({
  rectangleView: {
    backgroundColor: Color.mediumslateblue_100,
    flex: 1,
    width: "100%",
    height: 94,
  },
});

export default RectangleScreen2;
