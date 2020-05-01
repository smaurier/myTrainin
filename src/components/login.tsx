import React from 'react';
import { ImageBackground, Image, StyleSheet, View, Text, TouchableOpacity, CheckBox } from 'react-native';
import { Input } from 'react-native-elements'

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
          <Input placeholder='identifiant' />
          <Input placeholder='mot de passe' secureTextEntry={true} />
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
    backgroundColor: 'black',
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: "center",
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 40
  },
  logo: {
    width: 250,
    height: 85
  },
  formContainer: {
    padding: '4%'
  },
  submitButton: {
    backgroundColor: '#da1705',
    height: 40,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textSubmit: {
    color: 'white'
  },
  label: {
    color: 'white'
  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
    alignItems: 'center'
  },
  checkbox: {
    alignSelf: "center",
    color: 'white'
  },

});