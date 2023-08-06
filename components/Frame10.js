import React, { useMemo } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, Border, FontSize, FontFamily, Padding } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Frame10 = ({ identificationDocumentTit, propJustifyContent }) => {
  const frame8Style = useMemo(() => {
    return {
      ...getStyleValue("justifyContent", propJustifyContent),
    };
  }, [propJustifyContent]);

  return (
    <View style={styles.frame}>
      <View style={[styles.frame1, frame8Style]}>
        <View style={styles.frameChild} />
        <Text style={styles.send}>{identificationDocumentTit}</Text>
      </View>
      <Image
        style={styles.ggsoftwareUploadIcon}
        contentFit="cover"
        source={require("../assets/ggsoftwareupload.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  frameChild: {
    backgroundColor: Color.lavender_100,
    width: 99,
    height: 105,
    borderRadius: Border.br_3xs,
  },
  send: {
    fontSize: FontSize.size_5xl,
    letterSpacing: 0,
    fontWeight: "600",
    fontFamily: FontFamily.notoSerifSemiBold,
    color: Color.gray_200,
    textAlign: "left",
    marginTop: 17,
  },
  frame1: {
    alignSelf: "stretch",
    height: 188,
    justifyContent: "flex-end",
    overflow: "hidden",
  },
  ggsoftwareUploadIcon: {
    width: 37,
    height: 37,
    marginTop: -156,
    overflow: "hidden",
  },
  frame: {
    backgroundColor: Color.ghostwhite_100,
    width: 149,
    paddingLeft: Padding.p_6xl,
    paddingTop: Padding.p_smi,
    paddingRight: Padding.p_5xl,
    paddingBottom: Padding.p_smi,
    alignItems: "center",
    overflow: "hidden",
    borderRadius: Border.br_3xs,
  },
});

export default Frame10;
