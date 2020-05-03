import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { COLORS } from '../styles/constant'

function TouchableOpacityButton({ title, handleFunction }) {
    return (
        <TouchableOpacity style={styles.submitButton} onPress={handleFunction}>
            <Text style={styles.textSubmit}>{title}</Text>
        </TouchableOpacity>
    );
}

export default TouchableOpacityButton

const styles = StyleSheet.create({
    submitButton: {
        backgroundColor: COLORS.MAIN_RED,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20
    },
    textSubmit: {
        color: COLORS.WHITE,
        fontSize: 18
    }
});