import React from 'react';
import { ImageBackground, Image, StyleSheet, View, Text, TouchableOpacity, CheckBox } from 'react-native';
import { COLORS } from '../styles/constant'
import { TextInput } from 'react-native-gesture-handler';

function Login({ navigation }) {
  return (
    // logo
    // input identifiant
    // input mdp
    // Deconnection possible dans les options

    <View style={styles.container}>
      <ImageBackground source={require('../assets/images/background.jpg')} style={styles.backgroundImage} resizeMode='cover'>
        <View style={styles.logoContainer}>
          <Image style={styles.logo} source={require('../assets/images/logo.png')} />
        </View>
        <View style={styles.formContainer}>
          <TextInput style={styles.inputStyle} placeholder='identifiant' keyboardAppearance="dark"/>
          <TextInput style={styles.inputStyle} placeholder='mot de passe' secureTextEntry={true} />
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
  },
  submitButton: {
    backgroundColor: COLORS.MAIN_RED,
    height: 40,
    marginTop: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20
  },
  textSubmit: {
    color: COLORS.WHITE,
    fontSize: 18
  },
  label: {
    color: COLORS.WHITE
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