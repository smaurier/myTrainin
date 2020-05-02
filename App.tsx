import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Prelogin from './src/components/prelogin';
import login from './src/components/login';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="PreLogin">
        <Stack.Screen name="PreLogin" component={Prelogin} />
        <Stack.Screen name="Login" component={login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
