import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { COLORS } from '../styles/constant'

import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';

function TitlePageLogin({ title }) {
    let [fontsLoaded] = useFonts({
        'openSans-Regular': require('../assets/fonts/OpenSans-Regular.ttf'),
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        return (
            <Text style={styles.titlePage}>{title}</Text>
        );
    }
}

export default TitlePageLogin

const styles = StyleSheet.create({
    titlePage: {
        fontSize: 24,
        color: COLORS.WHITE,
        paddingBottom: 10,
        marginBottom: 20,
        borderBottomColor: COLORS.MAIN_RED,
        borderBottomWidth: 1,
        fontFamily: 'openSans-Regular'
    },
});