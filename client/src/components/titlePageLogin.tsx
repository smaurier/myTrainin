import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { COLORS } from '../styles/constant'

function TitlePageLogin({ title }) {
    return (
        <Text style={styles.titlePage}>{title}</Text>
    );
}

export default TitlePageLogin

const styles = StyleSheet.create({
    titlePage: {
        fontSize: 24,
        color: COLORS.WHITE,
        paddingBottom: 10,
        marginBottom: 20,
        borderBottomColor: COLORS.MAIN_RED,
        borderBottomWidth: 1
      },
});