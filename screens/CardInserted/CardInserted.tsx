import React from 'react';
import {
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import sharedStyles from '../../shared/sharedStyles';
import CreditCardComponent from '../../components/CreditCard/CreditCardComponent';
import {RouteProp} from '@react-navigation/native';
import CreditCard from '../../models/CreditCard';
import NavigationButton from '../../components/NavigationButton/NavigationButton';
const backgroundImage = require('../../assets/background.png');

type CardInsertedRouteProp = RouteProp<
  {CardInserted: {creditCard: CreditCard}},
  'CardInserted'
>;
interface CardInsertedProps {
  route: CardInsertedRouteProp;
}

const styles = StyleSheet.create({
  subtitle: {
    fontFamily: 'PT Sans Caption',
    color: '#ffffff',
    fontSize: 20,
    marginBottom: 12,
  },
});

function CardInserted({route}: CardInsertedProps) {
  const {creditCard} = route.params;

  return (
    <ImageBackground
      source={backgroundImage}
      resizeMode="cover"
      style={sharedStyles.containerFluid}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={sharedStyles.container}>
        <View style={sharedStyles.container}>
          <Text style={sharedStyles.title}>Wallet Test</Text>
          <Text style={styles.subtitle}>cartão cadastrado com sucesso!</Text>
          <CreditCardComponent creditCard={creditCard} />
        </View>
        <NavigationButton
          text="avançar"
          textColor="#ffffff"
          backgroundColor="#12C2E9"
          navigateTo="MyCards"
        />
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}

export default CardInserted;
