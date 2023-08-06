import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, ImageSourcePropType } from "react-native";
import { Border, FontFamily, Color, FontSize } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const FormContainer = ({
  imageId,
  dimensionCode,
  propTop,
  propHeight,
  propAlignSelf,
}) => {
  const frameStyle = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
    };
  }, [propTop]);

  const frame1Style = useMemo(() => {
    return {
      ...getStyleValue("height", propHeight),
    };
  }, [propHeight]);

  const sENDStyle = useMemo(() => {
    return {
      ...getStyleValue("alignSelf", propAlignSelf),
    };
  }, [propAlignSelf]);

  return (
    <View style={[styles.frame, styles.framePosition, frameStyle]}>
      <Image
        style={[styles.groupIcon, styles.framePosition]}
        contentFit="cover"
        source={imageId}
      />
      <View style={styles.frame1}>
        <View style={[styles.frameChild, styles.frameLayout]} />
        <Image
          style={[styles.frameItem, styles.frameLayout]}
          contentFit="cover"
          source={dimensionCode}
        />
      </View>
      <View style={[styles.frame2, styles.framePosition, frame1Style]}>
        <Text style={[styles.send, styles.sendTypo]}>AB Bank</Text>
        <Text style={[styles.send1, styles.sendTypo, sENDStyle]}>
          Account ending with 1252
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  framePosition: {
    overflow: "hidden",
    position: "absolute",
  },
  frameLayout: {
    borderRadius: Border.br_3xs,
    width: 54,
    height: 52,
  },
  sendTypo: {
    textAlign: "left",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    letterSpacing: 0,
  },
  groupIcon: {
    height: "19.71%",
    width: "3.28%",
    top: "40.24%",
    right: "0%",
    bottom: "40.05%",
    left: "96.72%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  frameChild: {
    backgroundColor: Color.white,
    shadowColor: "rgba(49, 75, 206, 0.15)",
    shadowOffset: {
      width: 0,
      height: 15,
    },
    shadowRadius: 30,
    elevation: 30,
    shadowOpacity: 1,
  },
  frameItem: {
    marginTop: -52,
  },
  frame1: {
    top: 0,
    left: 0,
    alignItems: "center",
    width: 54,
    overflow: "hidden",
    height: 52,
    position: "absolute",
  },
  send: {
    fontSize: FontSize.size_lg,
    color: Color.gray_200,
  },
  send1: {
    alignSelf: "stretch",
    fontSize: FontSize.size_xs,
    color: Color.slategray_100,
    marginTop: 3,
  },
  frame2: {
    top: 5,
    left: 68,
    width: 141,
    position: "absolute",
    overflow: "hidden",
  },
  frame: {
    top: 523,
    left: 41,
    width: 332,
    height: 52,
    overflow: "hidden",
    position: "absolute",
  },
});

export default FormContainer;
