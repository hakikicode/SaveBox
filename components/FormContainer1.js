import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, ImageSourcePropType } from "react-native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const FormContainer1 = ({
  dimensions,
  itemDescription,
  carDimensions,
  imageDimensions,
  componentInfo,
  imageLabel,
  imageDimensions2,
  itemCode,
  imageLabel2,
  propTop,
  propHeight,
  propHeight1,
  propHeight2,
}) => {
  const frame3Style = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
    };
  }, [propTop]);

  const viewStyle = useMemo(() => {
    return {
      ...getStyleValue("height", propHeight),
    };
  }, [propHeight]);

  const view1Style = useMemo(() => {
    return {
      ...getStyleValue("height", propHeight1),
    };
  }, [propHeight1]);

  const view2Style = useMemo(() => {
    return {
      ...getStyleValue("height", propHeight2),
    };
  }, [propHeight2]);

  return (
    <View style={[styles.frame, styles.framePosition, frame3Style]}>
      <View style={[styles.view, viewStyle]}>
        <Image
          style={[styles.keyBackgroundIcon, styles.framePosition]}
          contentFit="cover"
          source={dimensions}
        />
        <Text style={[styles.label, styles.labelPosition]}>
          {itemDescription}
        </Text>
        <Text style={[styles.number, styles.labelPosition]}>
          {carDimensions}
        </Text>
      </View>
      <View style={[styles.view, view1Style]}>
        <Image
          style={[styles.keyBackgroundIcon, styles.framePosition]}
          contentFit="cover"
          source={imageDimensions}
        />
        <Text style={[styles.label, styles.labelPosition]}>
          {componentInfo}
        </Text>
        <Text style={[styles.number, styles.labelPosition]}>{imageLabel}</Text>
      </View>
      <View style={[styles.view, view2Style]}>
        <Image
          style={[styles.keyBackgroundIcon, styles.framePosition]}
          contentFit="cover"
          source={imageDimensions2}
        />
        <Text style={[styles.label, styles.labelPosition]}>{itemCode}</Text>
        <Text style={[styles.number, styles.labelPosition]}>{imageLabel2}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  framePosition: {
    overflow: "hidden",
    position: "absolute",
  },
  labelPosition: {
    textAlign: "center",
    color: Color.black,
    width: 129,
    left: 0,
    position: "absolute",
  },
  keyBackgroundIcon: {
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: Border.br_8xs,
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  label: {
    bottom: 5,
    fontSize: FontSize.size_3xs,
    letterSpacing: 2,
    fontWeight: "700",
    fontFamily: FontFamily.robotoBold,
  },
  number: {
    bottom: 15,
    fontSize: FontSize.size_6xl,
    letterSpacing: 0,
    fontFamily: FontFamily.robotoRegular,
  },
  view: {
    height: 51,
    width: 129,
  },
  frame: {
    top: 0,
    width: 401,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    left: 0,
    overflow: "hidden",
    position: "absolute",
  },
});

export default FormContainer1;
