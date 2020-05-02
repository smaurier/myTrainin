import React from 'react';
import { ImageBackground, Image, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { COLORS } from '../styles/constant'
import Icon from 'react-native-vector-icons/FontAwesome';

function Prelogin({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/images/background.jpg')} style={styles.backgroundImage} resizeMode='cover'>
        <View style={styles.logoContainer}>
          <Image style={styles.logo} source={require('../assets/images/logo.png')} />
        </View>
        <View style={styles.formContainer}>
          {/* Mettre icon devant */}
          <TouchableOpacity style={styles.facebookButton}>
            <Icon name="facebook" style={styles.iconFacebook} />
              <Text style={styles.textSubmit}>M'identifier avec facebook</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.submitButton} onPress={() => navigation.navigate('Login')}>
            <Text style={styles.textSubmit}>M'identifier avec l'application</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.registerButton}>
            <Text style={styles.textSubmit}>M'enregistrer</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

export default Prelogin;

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
  registerButton: {
    backgroundColor: 'transparent',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20
  },
  submitButton: {
    backgroundColor: COLORS.MAIN_RED,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10
  },
  facebookButton: {
    backgroundColor: COLORS.MAIN_BLUE,
    height: 40,
    marginTop: 25,
    alignItems: 'center' ,
    justifyContent: 'space-evenly',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.07)',
    marginBottom: 10,
    flexDirection: 'row'
  },
  iconFacebook: {
    color: COLORS.WHITE,
    fontSize: 20
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