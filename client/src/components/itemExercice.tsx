import React from 'react';
import { Text, StyleSheet, View, TextInput } from 'react-native';
import { COLORS } from '../styles/constant'

import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';

function ItemExercise({ isCurrent=false, isInactive=false }) {
    let [fontsLoaded] = useFonts({
        'openSans-Regular': require('../assets/fonts/OpenSans-Regular.ttf'),
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        return (
            <View>
                <View style={isCurrent ? [styles.contentSeries, styles.currentContentSeries] : styles.contentSeries} >
                    <TextInput style={isInactive ? [styles.textSeries, styles.textSeriesInactive] : styles.textSeries} value='12' onChangeText={() => null} />
                    <Text style={isInactive ? [styles.textSeriesX, styles.textSeriesInactive] : styles.textSeriesX}>x</Text>
                    <TextInput style={isInactive ? [styles.textSeries, styles.textSeriesInactive] : styles.textSeries} onChangeText={() => null} value='7.5' />
                </View>
            </View>
        );
    }
}

export default ItemExercise

const styles = StyleSheet.create({
    contentSeries: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        marginBottom: 10,
        width: 150
    },
    ContentSeriesDone: {
        width: 150
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
    currentContentSeries: {
        backgroundColor: COLORS.MAIN_RED
    },
});