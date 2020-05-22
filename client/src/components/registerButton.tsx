import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { COLORS } from '../styles/constant'

import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';

function RegisterButton({ title, handleFunction }) {
    let [fontsLoaded] = useFonts({
        'openSans-Regular': require('../assets/fonts/OpenSans-Regular.ttf'),
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        return (
            <TouchableOpacity style={styles.registerButton} onPress={handleFunction}>
                <Text style={styles.textSubmit}>{title}</Text>
            </TouchableOpacity>
        );
    }
}

export default RegisterButton

const styles = StyleSheet.create({
    registerButton: {
        backgroundColor: 'transparent',
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20
    },
    textSubmit: {
        color: COLORS.WHITE,
        fontSize: 18,
        fontFamily: 'openSans-Regular'
    }
});