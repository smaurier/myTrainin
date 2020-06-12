import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Prelogin from './src/components/pages/prelogin';
import Login from './src/components/pages/login';
import Register from './src/components/pages/register';
import Training from './src/components/pages/training';
import { AppRegistry } from 'react-native';
import { ApolloClient } from 'apollo-client';
import { ApolloProvider } from '@apollo/react-hooks';
import { InMemoryCache, NormalizedCacheObject } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import Stats from './src/components/pages/stats';

const cache = new InMemoryCache();
const link = new HttpLink({
  uri: `http://192.168.0.43:4000/graphql`
});

const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  cache,
  link
});

const Stack = createStackNavigator();

function App() {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Stats">
          {/* PreLogin */}
          <Stack.Screen name="Prelogin" component={Prelogin} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="Training" component={Training} />
          <Stack.Screen name="Stats" component={Stats} />
        </Stack.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  );
}

export default App;
AppRegistry.registerComponent('MyApplication', () => App);
