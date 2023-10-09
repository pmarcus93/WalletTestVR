/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './components/screens/Home';
import MyCards from './components/screens/MyCards';
import InsertCard from './components/screens/InsertCard';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="MyCards"
          component={MyCards}
          options={{
            headerTitle: 'meus cartões',
          }}
        />
        <Stack.Screen
          name="InsertCard"
          component={InsertCard}
          options={{
            headerTitle: 'cadastro',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
