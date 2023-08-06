import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const LocationForm = ({ locationOptions, propFontSize }) => {
  const enterYourPhoneStyle = useMemo(() => {
    return {
      ...getStyleValue("fontSize", propFontSize),
    };
  }, [propFontSize]);

  return (
    <View style={[styles.locationInputField, styles.frameFlexBox]}>
      <Image
        style={styles.frameIcon}
        contentFit="cover"
        source={require("../assets/frame2.png")}
      />
      <View style={[styles.frame, styles.frameFlexBox]}>
        <Text style={[styles.enterYourPhone, enterYourPhoneStyle]}>
          {locationOptions}
        </Text>
        <Image
          style={styles.objectIcon}
          contentFit="cover"
          source={require("../assets/object.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameFlexBox: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  frameIcon: {
    width: 57,
    height: 31,
    overflow: "hidden",
  },
  enterYourPhone: {
    fontSize: FontSize.size_sm,
    letterSpacing: 0,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: Color.slategray_100,
    textAlign: "left",
  },
  objectIcon: {
    width: 11,
    height: 6,
  },
  frame: {
    width: 222,
    overflow: "hidden",
  },
  locationInputField: {
    position: "absolute",
    height: "5.92%",
    width: "80.19%",
    top: "39.62%",
    right: "9.9%",
    bottom: "54.46%",
    left: "9.9%",
    borderRadius: Border.br_8xs,
    backgroundColor: Color.white,
    shadowColor: "rgba(138, 149, 158, 0.15)",
    shadowOffset: {
      width: 0,
      height: 15,
    },
    shadowRadius: 60,
    elevation: 60,
    shadowOpacity: 1,
    paddingHorizontal: 19,
    paddingTop: Padding.p_sm_5,
    paddingBottom: Padding.p_4xs_5,
  },
});

export default LocationForm;
