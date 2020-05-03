import React from 'react';
import { ImageBackground, Image, StyleSheet, View, Text, TouchableOpacity, CheckBox } from 'react-native';
import { COLORS } from '../../styles/constant'
import { TextInput } from 'react-native-gesture-handler';
import TouchableOpacityButton from '../touchableOpacityButton';
import TitlePageLogin from '../titlePageLogin';

function Register({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/images/background.jpg')} style={styles.backgroundImage} resizeMode='cover'>
        <View style={styles.logoContainer}>
          <Image style={styles.logo} source={require('../assets/images/logo.png')} />
        </View>
        <View style={styles.formContainer}>
          <TitlePageLogin title="Créer mon compte"></TitlePageLogin>
          <TextInput style={styles.inputStyle} placeholder='adresse email' keyboardAppearance="dark"/>
          <TextInput style={styles.inputStyle} placeholder='mot de passe' secureTextEntry={true} />
          <TouchableOpacityButton title="M'identifier" handleFunction={()=>null}></TouchableOpacityButton>
        </View>
      </ImageBackground>
    </View>
  );
}

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.DARK_BLUE
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: "flex-end",
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 30
  },
  inputStyle: {
    color: COLORS.WHITE,
    borderBottomColor: COLORS.WHITE,
    borderBottomWidth: 1,
    fontSize: 20,
    marginBottom: 15,
    paddingTop:5,
    paddingBottom:5
  },
  logo: {
    width: 250,
    height: 85
  },
  formContainer: {
    padding: '4%'
  }
});