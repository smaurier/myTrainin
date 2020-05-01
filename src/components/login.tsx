import React from 'react';
import { ImageBackground, Image, StyleSheet, View, Text, TouchableOpacity, CheckBox } from 'react-native';
import { Input, Icon } from 'react-native-elements'
import { COLORS } from '../styles/constant'

function Login({ navigation }) {
  return (
    // logo
    // input identifiant
    // input mdp
    // input se souvenir de moi

    <View style={styles.container}>
      <ImageBackground source={require('../assets/images/background.jpg')} style={styles.backgroundImage} resizeMode='cover'>
        <View style={styles.logoContainer}>
          <Image style={styles.logo} source={require('../assets/images/logo.png')} />
        </View>
        <View style={styles.formContainer}>
          <Input style={styles.inputStyle} placeholder='identifiant' />
          <Input style={styles.inputStyle} placeholder='mot de passe' secureTextEntry={true} />
          <View style={styles.checkboxContainer}>
            <CheckBox style={styles.checkbox} />
            <Text style={styles.label}>Rester connecté</Text>
          </View>
          <TouchableOpacity style={styles.submitButton}>
            <Text style={styles.textSubmit}>Me connecter</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

export default Login;

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
  logo: {
    width: 250,
    height: 85
  },
  formContainer: {
    padding: '4%'
  },
  submitButton: {
    backgroundColor: COLORS.MAIN_RED,
    height: 40,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30
  },
  textSubmit: {
    color: COLORS.WHITE,
    fontSize: 18
  },
  label: {
    color: COLORS.WHITE
  },
  inputStyle: {
    color: COLORS.WHITE,
    fontSize: 50
  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
    alignItems: 'center'
  },
  checkbox: {
    alignSelf: "center",
  }
});