import React from "react";
import {
  Image,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TouchableHighlight
} from "react-native";
import { COLORS } from "../../styles/constant";
import i18n from "../../i18n";
import { useFonts } from "@use-expo/font";
import { AppLoading } from "expo";
import { ScrollView } from "react-native-gesture-handler";
import SelectButton from "../selectButton";
import SmallRedButton from "../smallRedButton";

function Stats({ navigation }) {
  let [fontsLoaded] = useFonts({
    "openSans-Regular": require("../../assets/fonts/OpenSans-Regular.ttf"),
    "openSans-Semibold": require("../../assets/fonts/OpenSans-Semibold.ttf"),
    "openSans-Bold": require("../../assets/fonts/OpenSans-Bold.ttf")
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {

    interface optionSelect {
      label: string;
      value: string;
    }

    const options: optionSelect[] = [{label: "Tous les exercices", value: "all"}, {label: "Exercice 1", value: "exercice1"}, {label: "Exercice 2", value: "exercice 3"}]
    
    return (
      <ScrollView>
        <View style={styles.backgroundView}>
          <Image
            style={styles.background}
            source={require("../../assets/images/bg-eliptic.png")}
          />
        </View>

        <View style={styles.container}>
          <Text style={styles.titleContainer}>
            <Text style={styles.titlePage}>stats</Text>
            <Text style={styles.titlePagePoint}>.</Text>
          </Text>

          <View style={styles.containerExercices}>
            <Text>
              Selectionne la totalité des exercices ou bien les exercices un par
              un
            </Text>

            {/* liste de choix : voir la totalité des exercices / exercice 1 / exercice 2 / exercice 3 */}
            <SelectButton options={options}/>

            {/* bouton visionner */}
            <SmallRedButton title="Visionner" />
          </View>
        </View>
      </ScrollView>
    );
  }
}

export default Stats;

const styles = StyleSheet.create({
  container: {
    padding: 25
  },
  backgroundView: {
    backgroundColor: COLORS.WHITE
  },
  titleContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around"
  },
  titlePage: {
    color: COLORS.WHITE,
    fontSize: 35,
    fontFamily: "openSans-Regular"
  },
  titlePagePoint: {
    color: COLORS.DARK_RED,
    fontSize: 35,
    fontFamily: "openSans-Regular",
    textAlignVertical: "bottom"
  },
  background: {
    position: "absolute",
    width: "100%",
    transform: [{ translateY: -200 }]
  },
  containerExercices: {
    backgroundColor: COLORS.GREY,
    borderRadius: 5,
    marginTop: 5,
    padding: 10
  }
});
