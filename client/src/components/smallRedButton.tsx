import React from "react";
import { StyleSheet, Text } from "react-native";
import { COLORS } from "../styles/constant";

import { useFonts } from "@use-expo/font";
import { AppLoading } from "expo";
import { TouchableHighlight } from "react-native-gesture-handler";

function SmallRedButton({title}) {
  let [fontsLoaded] = useFonts({
    "openSans-Regular": require("../assets/fonts/OpenSans-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <TouchableHighlight style={styles.redButton} onPress={() => null}>
        <Text style={styles.redButtonText}>{title}</Text>
      </TouchableHighlight>
    );
  }
}

export default SmallRedButton;

const styles = StyleSheet.create({
  redButton: {
    backgroundColor: COLORS.MAIN_RED,
    borderRadius: 3,
    padding: 3,
  },
  redButtonText: {
    color: COLORS.WHITE,
    textAlign: "center",
    fontSize: 15,
    fontFamily: "openSans-Regular",
  },
});
