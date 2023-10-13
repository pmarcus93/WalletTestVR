import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import AddCardButton from '@components/AddCardButton';

import AddCard from '@screens/AddCard';
import CardInserted from '@screens/CardInserted';
import Home from '@screens/Home';
import ListCard from '@screens/ListCard';

const Stack = createNativeStackNavigator();

function CardInsertion() {
  return (
    <Stack.Navigator initialRouteName="InsertCard">
      <Stack.Screen
        component={AddCard}
        name="InsertCard"
        options={{
          headerTintColor: '#12C2E9',
          headerTitle: 'cadastro',
          headerTitleAlign: 'center',
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        component={CardInserted}
        name="CardInserted"
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
          component={Home}
          name="Home"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          component={CardInsertion}
          name="CardInsertion"
          options={{
            headerShown: false,
            headerTintColor: '#142995',
            headerTitle: 'Wallet Test',
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          component={ListCard}
          name="MyCards"
          options={{
            headerRight: () => <AddCardButton />,
            headerTintColor: '#142995',
            headerTitle: 'Wallet Test',
            headerTitleAlign: 'center',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
