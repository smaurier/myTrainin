import React, { useState, Fragment, useEffect } from 'react';
import { Text, StyleSheet, Button, View, Image } from 'react-native';
import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';
import { TouchableOpacity, State } from 'react-native-gesture-handler';
import { COLORS } from '../styles/constant';
import useInterval from '../hooks/useInterval'

function Counter() {
    let [fontsLoaded] = useFonts({
        'openSans-Regular': require('../assets/fonts/OpenSans-Regular.ttf'),
    });

    const [timerOn, setTimerOn] = useState(false);
    const [timerStart, setTimerStart] = useState(0);
    const [timerTime, setTimerTime] = useState(0);

    let timer: any;

    useEffect(() => startTimer());

    function startTimer() {
        setTimerOn(true)
        setTimerTime(timerTime)
        setTimerStart(timerTime)

        timer = setInterval(() => {
            setTimerTime(Date.now() - timerStart)
        }, 10);
    };

    function stopTimer() {
        console.log("stopTimer");
        setTimerOn(false)
        clearInterval(timer);
    };

    let seconds = ("0" + (Math.floor(timerTime / 1000) % 60)).slice(-2);
    let minutes = ("0" + (Math.floor(timerTime / 60000) % 60)).slice(-2);

    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        return (
            <View style={styles.timeContainer}>
                <View style={styles.timeIndicator}>
                    <Image style={styles.timeIcon} source={require('../assets/images/training/icon-time.png')} />
                    <Text style={styles.timeCounter}>commencée il y à <Text style={styles.timeCounterSpan}> {minutes} : {seconds}</Text></Text>
                </View>
                <TouchableOpacity style={styles.buttonTime} onPress={() => console.log('puff')}>
                    <Text style={styles.buttonTimeText}>{timerOn ? `Arréter la séance` : `Reprendre la séance`}</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default Counter

const styles = StyleSheet.create({
    timeContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 10,
        marginBottom: 10
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
    timeIcon: {
        width: 15,
        height: 15,
        marginRight: 5
    },
    timeCounter: {
        fontFamily: 'openSans-Semibold',
        fontSize: 12,
    },
    timeCounterSpan: {
        fontFamily: 'openSans-Regular',
        fontSize: 12,
    },
    timeIndicator: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center"
    }
});