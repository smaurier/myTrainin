import React from 'react';
import { ImageBackground, Image, StyleSheet, View, Text, TouchableOpacity, Button, TouchableHighlight } from 'react-native';
import { COLORS } from '../../styles/constant'
import FacebookButton from '../facebookButton';
import TouchableOpacityButton from '../touchableOpacityButton';
import RegisterButton from '../registerButton';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import i18n from '../../i18n';
import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';

const GET_ACCOUNTS = gql`{
  getAccounts(_id: "5ca4bbc7a2dd94ee58162a48") {
    limit
  }
}`;

function Training({ navigation }) {
  let [fontsLoaded] = useFonts({
    'openSans-Regular': require('../../assets/fonts/OpenSans-Regular.ttf'),
    'openSans-Semibold': require('../../assets/fonts/OpenSans-Semibold.ttf'),
    'openSans-Bold': require('../../assets/fonts/OpenSans-Bold.ttf')
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
  return (
    <View>
      <View style={styles.backgroundView}>
        <Image style={styles.background} source={require('../../assets/images/bg-eliptic.png')} />
      </View>

      <View style={styles.container}>
        <Text style={styles.titleContainer}><Text style={styles.titlePage}>entrainement</Text><Text style={styles.titlePagePoint}>.</Text></Text>

        <View style={styles.containerExercices}>
          <Text style={styles.seanceNumberContainer}>Séance <Text style={styles.seanceNumber}>5</Text></Text>
          <View style={styles.timeContainer}>
            <View style={styles.timeIndicator}>
              <Image style={styles.timeIcon} source={require('../../assets/images/training/icon-time.png')} />
              <Text style={styles.timeCounter}>commencée il y à <Text style={styles.timeCounterSpan}>42:50</Text></Text>
            </View>
            

            <TouchableOpacity style={styles.buttonTime} onPress={() => null}>
                <Text>Arréter la séance</Text>
            </TouchableOpacity>

          </View>

          <View>
            <View>
              <Image source={require('../../assets/images/icon-muscle/shoulders.png')} />
              <Text>Élevations latérales</Text>
              <TouchableHighlight onPress={() => null}>
                <Image source={require('../../assets/images/training/icon-stats.png')} />
              </TouchableHighlight>
              <Image source={require('../../assets/images/training/icon-check.png')} />
            </View>
            <View>
              <Text>
                <Text>
                  <Text>12</Text>
                  <Text>x</Text>
                  <Text>7.5</Text>
                </Text>
                <Text>
                  <Text>12</Text>
                  <Text>x</Text>
                  <Text>7.5</Text>
                </Text>
                <Text>
                  <Text>12</Text>
                  <Text>x</Text>
                  <Text>7.5</Text>
                </Text>
                <Text>
                  <Text>12</Text>
                  <Text>x</Text>
                  <Text>7.5</Text>
                </Text>
              </Text>
              <Text>Temps de pause restant : 00:30</Text>
              <View>
                <Text>Note de la dernière séance :</Text>
                <Text>Exercice compliqué,j'ai laché la barre a la troisième série</Text>
                <Text>Note d'aujourd'hui :</Text>
                <Text>Rassuré, moins de fatigue</Text>
              </View>
              <View>
                <Button title="Ajouter une note a l'exercice" onPress={() => null} />
                {/*  Ou "modifier la note de l'exercice", s'il existe deja une note */}
                <Button title="Arréter la séance" onPress={() => null} />
              </View>
            </View>
          </View>

          {/*  Repeat View du dessus */}

        </View>
      </View>
    </View>
  );
}
}

export default Training;

const styles = StyleSheet.create({
  container: {
    padding: 25
  },
  backgroundView: {
    backgroundColor: COLORS.WHITE
  },
  titleContainer: {
    display: "flex",
    alignItems: "center" ,
    justifyContent: "space-around"
  },
  titlePage: {
    color: COLORS.WHITE,
    fontSize: 35,
    fontFamily: 'openSans-Regular'
  },
  titlePagePoint: {
    color: COLORS.DARK_RED,
    fontSize: 35,
    fontFamily: 'openSans-Regular',
    textAlignVertical: "bottom"
  },
  background: {
    position: "absolute",
    width: "100%",
    transform: ([
      {translateY: -200}
    ])
  },
  containerExercices: {
    backgroundColor: COLORS.GREY,
    borderRadius: 5,
    marginTop: 5,
    padding: 10
  },
  seanceNumberContainer: {
    backgroundColor: COLORS.DARK_BLUE,
    color: COLORS.WHITE,
    fontFamily: 'openSans-Regular',
    fontSize: 15,
    borderRadius: 4,
    marginTop: 5,
    marginLeft: -20,
    padding: 8,
    paddingTop: 2,
    paddingBottom: 2,
    width: 125
  },
  seanceNumber: {
    fontFamily: 'openSans-Bold',
    fontSize: 20,
  },
  timeContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
    marginBottom: 10
  },
  timeCounter: {
    fontFamily: 'openSans-Semibold',
    fontSize: 12,
  },
  timeCounterSpan: {
    fontFamily: 'openSans-Regular',
    fontSize: 12,
  },
  timeIcon: {
    width: 15,
    height: 15,
    marginRight: 5
  },
  timeIndicator: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },
  buttonTime: {
    backgroundColor: COLORS.ALT_GREY,
    borderRadius: 2,
    padding: 8,
    paddingTop: 2,
    paddingBottom: 2
  }
});