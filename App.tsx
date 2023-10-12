/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {
  NavigationContainer,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import Home from './screens/Home/Home';
import ListCard from './screens/ListCard/ListCard';
import AddCard from './screens/AddCard/AddCard';
import CardInserted from './screens/CardInserted/CardInserted';
import {Button} from 'react-native';
import {COLORS} from './shared/defaults';
import AddCardButton from "./components/AddCardButton/AddCardButton";

const Stack = createNativeStackNavigator();

function CardInsertion() {
  return (
    <Stack.Navigator initialRouteName="InsertCard">
      <Stack.Screen
        name="InsertCard"
        component={AddCard}
        options={{
          headerTitle: 'cadastro',
          headerTitleAlign: 'center',
          headerTransparent: true,
          headerTintColor: '#12C2E9',
        }}
      />
      <Stack.Screen
        name="CardInserted"
        component={CardInserted}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

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
          name="CardInsertion"
          component={CardInsertion}
          options={{
            headerShown: false,
            headerTitle: 'Wallet Test',
            headerTitleAlign: 'center',
            headerTintColor: '#142995',
          }}
        />
        <Stack.Screen
          name="MyCards"
          component={ListCard}
          options={{
            headerTitle: 'Wallet Test',
            headerTitleAlign: 'center',
            headerTintColor: '#142995',
            headerRight: () => (
              <AddCardButton />
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
