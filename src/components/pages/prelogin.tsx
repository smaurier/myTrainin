import React from 'react';
import { ImageBackground, Image, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { COLORS } from '../../styles/constant'
import FacebookButton from '../facebookButton';
import TouchableOpacityButton from '../touchableOpacityButton';
import RegisterButton from '../registerButton';

function Prelogin({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../../assets/images/background.jpg')} style={styles.backgroundImage} resizeMode='cover'>
        <View style={styles.logoContainer}>
          <Image style={styles.logo} source={require('../../assets/images/logo.png')} />
        </View>
        <View style={styles.formContainer}>
          <FacebookButton title="M'identifier avec Facebook" ></FacebookButton>
          <TouchableOpacityButton title="M'identifier avec l'application" handleFunction={() => navigation.navigate('Login')}></TouchableOpacityButton>
          <RegisterButton title="M'enregistrer" handleFunction={() => navigation.navigate('Register')}></RegisterButton>
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
    marginBottom: 30,
    marginTop: 20
  },
  logo: {
    width: 250,
    height: 85
  },
  formContainer: {
    padding: '4%',
    marginTop: 20
  }
});