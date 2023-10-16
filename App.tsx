import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import NewCreditCardForm from 'src/screens/NewCreditCard';

import AddCardButton from '@components/AddCardButton';

import CreditCardList from '@screens/CreditCardList';
import Home from '@screens/Home';

const Stack = createNativeStackNavigator();

const CardInsertion = () => {
  return (
    <Stack.Navigator initialRouteName="InsertCard">
      <Stack.Screen
        component={NewCreditCardForm}
        name="InsertCard"
        options={{
          headerTintColor: '#12C2E9',
          headerTitle: 'cadastro',
          headerTitleAlign: 'center',
          headerTransparent: true,
        }}
      />
    </Stack.Navigator>
  );
};

const CardsListing = () => {
  return (
    <Stack.Navigator initialRouteName="CreditCardList">
      <Stack.Screen
        component={CreditCardList}
        options={{headerShown: false}}
        name="CreditCardList"
      />
    </Stack.Navigator>
  );
};

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
          component={CardsListing}
          name="CardsListing"
          options={{
            headerRight: AddCardButton,
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
