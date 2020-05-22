import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { COLORS } from '../styles/constant'
import Icon from 'react-native-vector-icons/FontAwesome';

import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';

function FacebookButton({ title }) {
    let [fontsLoaded] = useFonts({
        'openSans-Regular': require('../assets/fonts/OpenSans-Regular.ttf'),
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        return (
            <TouchableOpacity style={styles.facebookButton}>
                <Icon name="facebook" style={styles.iconFacebook} />
                <Text style={styles.textSubmit}>{title}</Text>
            </TouchableOpacity>
        );
    }
}

export default FacebookButton

const styles = StyleSheet.create({
    facebookButton: {
        backgroundColor: COLORS.MAIN_BLUE,
        height: 40,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.07)',
        flexDirection: 'row',
        marginBottom: 10
    },
    iconFacebook: {
        color: COLORS.WHITE,
        fontSize: 20
    },
    textSubmit: {
        color: COLORS.WHITE,
        fontSize: 18,
        fontFamily: 'openSans-Regular'
    }
});