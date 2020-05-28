import React from 'react';
import { Image, StyleSheet, View, Text, TouchableOpacity, Button, TouchableHighlight } from 'react-native';
import { COLORS } from '../../styles/constant'
import ItemExercise from '../itemExercice';
import { gql } from 'apollo-boost';
import i18n from '../../i18n';
import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';
import { ScrollView } from 'react-native-gesture-handler';

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
      <ScrollView>
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
                <Text style={styles.buttonTimeText}>Arréter la séance</Text>
              </TouchableOpacity>
            </View>

            <View>

              <View style={styles.exerciceFrame}>
                <Image style={styles.iconMuscle} source={require('../../assets/images/icon-muscle/shoulders.png')} />
                <Text style={styles.nameExercice}>Élevations latérales</Text>
                <TouchableHighlight onPress={() => null}>
                  <Image style={styles.iconStat} source={require('../../assets/images/training/icon-stats.png')} />
                </TouchableHighlight>
                {/* <Image style={styles.iconCheck} source={require('../../assets/images/training/icon-check.png')} /> */}
              </View>

              <View style={[styles.exerciceFrame, styles.exerciceFrameOpen]}>
                <Image style={styles.iconMuscle} source={require('../../assets/images/icon-muscle/shoulders.png')} />
                <Text style={styles.nameExercice}>Élevations latérales</Text>
              </View>
              <View style={styles.exerciceFrameBottom}>
                <View style={styles.contentRepeat}>
                  <ItemExercise />
                  <ItemExercise isCurrent />
                  <ItemExercise isInactive />
                  <ItemExercise isInactive />
                </View>
                <Text style={styles.timeCounterText}>Temps de pause restant : 00:30</Text>

                <View style={styles.noteContent}>
                  <Text style={styles.titleNoteText}>Note de la dernière séance :</Text>
                  <Text style={styles.textNoteText}>Exercice compliqué,j'ai laché la barre a la troisième série</Text>
                  <Text style={styles.titleNoteText}>Note d'aujourd'hui :</Text>
                  <Text style={styles.textNoteText}>Rassuré, moins de fatigue</Text>
                </View>

                <View style={styles.containerButtonExerciceFrame}>
                  <TouchableOpacity style={styles.buttonExerciceFrame} onPress={() => null}>
                    <Text style={styles.buttonExerciceFrameText}>Ajouter une note a l'exercice</Text>
                  </TouchableOpacity>
                  {/*  Ou "modifier la note de l'exercice", s'il existe deja une note */}
                  <TouchableOpacity style={styles.buttonExerciceFrame} onPress={() => null}>
                    <Text style={styles.buttonExerciceFrameText}>Voir l'historique des notes</Text>
                  </TouchableOpacity>
                </View>

              </View>


              {/*  Repeat View du dessus */}

              <View style={[styles.exerciceFrame, styles.exerciceFrameToDo]}>
                <Image style={styles.iconMuscle} source={require('../../assets/images/icon-muscle/shoulders.png')} />
                <Text style={styles.nameExercice}>Élevations latérales</Text>
              </View>

              <View style={[styles.exerciceFrame, styles.exerciceFrameToDo]}>
                <Image style={styles.iconMuscle} source={require('../../assets/images/icon-muscle/shoulders.png')} />
                <Text style={styles.nameExercice}>Élevations latérales</Text>
              </View>

            </View>

          </View>
        </View>
      </ScrollView>
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
    alignItems: "center",
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
      { translateY: -200 }
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
    marginLeft: -20,
    marginTop: 5,
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
  },
  buttonTimeText: {
    color: COLORS.WHITE
  },
  exerciceFrame: {
    backgroundColor: COLORS.DARK_BLUE,
    display: "flex",
    flexDirection: "row",
    padding: 5,
    borderRadius: 7,
    alignItems: "center",
    marginTop: 10,
  },
  exerciceFrameOpen: {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  iconMuscle: {
    width: 50,
    height: 50
  },
  iconStat: {
    width: 30,
    height: 30
  },
  iconCheck: {
    width: 20,
    height: 20,
    marginLeft: 7
  },
  nameExercice: {
    color: COLORS.WHITE,
    fontFamily: 'openSans-Regular',
    fontSize: 20,
    lineHeight: 20,
    flex: 1,
    marginLeft: 5
  },
  exerciceFrameBottom: {
    borderBottomLeftRadius: 7,
    borderBottomRightRadius: 7,
    backgroundColor: COLORS.MAIN_BLUE,
    padding: 5
  },
  textSeries: {
    color: COLORS.WHITE,
    fontSize: 25,
    width: 60,
    textAlign: "center"
  },
  textSeriesX: {
    color: COLORS.ALT_GREY,
    fontSize: 25
  },
  textSeriesInactive: {
    color: COLORS.DARK_GREY
  },
  weightSeries: {
    fontFamily: 'openSans-Bold'
  },
  contentRepeat: {
    display: "flex",
    width: "100%"
  },
  contentSeries: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginBottom: 10,
    width: 150
  },
  currentContentSeries: {
    backgroundColor: COLORS.MAIN_RED
  },
  ContentSeriesDone: {
    width: 150
  },
  buttonExerciceFrame: {
    backgroundColor: COLORS.ALT_GREY,
    borderRadius: 2,
    padding: 8,
    paddingTop: 2,
    paddingBottom: 2,
    width: 130
  },
  buttonExerciceFrameText: {
    color: COLORS.WHITE,
    textAlign: "center"
  },
  containerButtonExerciceFrame: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  timeCounterText: {
    color: COLORS.ALT_GREY,
    fontSize: 16,
    marginTop: 10
  },
  noteContent: {
    marginTop: 13
  },
  titleNoteText: {
    color: COLORS.WHITE,
    fontSize: 15
  },
  textNoteText: {
    color: COLORS.ALT_GREY,
    fontSize: 14,
    marginBottom: 7
  },
  exerciceFrameToDo: {
    opacity: 0.75
  }
});