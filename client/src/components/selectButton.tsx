import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { COLORS } from '../styles/constant'
import RNPickerSelect from "react-native-picker-select";

import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';

function SelectButton(options) {

    let optionsSelect = options.map(option => {
    <Text>{option.label},{option.value}</Text>
    });

    console.log(optionsSelect);
    
    

    let [fontsLoaded] = useFonts({
        'openSans-Regular': require('../assets/fonts/OpenSans-Regular.ttf'),
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        return (
            <RNPickerSelect style={{
                placeholder: styles.pickerSelect,
                inputAndroid: styles.pickerSelect,
                iconContainer: styles.pickerSelectIcon
              }}
              onValueChange={value => console.log(value)}
              items={[
                { label: "Tous les exercices", value: "all" },
                { label: "Exercice 1", value: "exercice1" },
                { label: "Exercice 2", value: "exercice2" }
              ]}
              placeholder={{
                label: "Selectionner une option",
                value: null
              }}
            />
        );
    }
}

export default SelectButton

const styles = StyleSheet.create({
    pickerSelect: {
        backgroundColor: COLORS.DARK_BLUE,
        height: 30,
        marginBottom: 10,
        borderRadius: 5,
        padding: 3,
        fontSize: 15,
        fontFamily: "openSans-Regular"
      },
      pickerSelectIcon: {
        backgroundColor: COLORS.MAIN_RED,
        color: COLORS.WHITE
      }
});