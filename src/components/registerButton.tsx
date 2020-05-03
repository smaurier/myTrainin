import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { COLORS } from '../styles/constant'

function RegisterButton({ title, handleFunction }) {
    return (
        <TouchableOpacity style={styles.registerButton} onPress={handleFunction}>
            <Text style={styles.textSubmit}>{title}</Text>
        </TouchableOpacity>
    );
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
        fontSize: 18
    }
});