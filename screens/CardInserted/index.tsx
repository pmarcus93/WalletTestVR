import React from 'react';
import {
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import CreditCardModel from '../../models/CreditCardModel';

import {RouteProp} from '@react-navigation/native';

import {FONTS} from '@shared/defaults';
import globalStyles from '@shared/globalStyles';

import CreditCardComponent from '@components/CreditCard';
import NavigationButton from '@components/NavigationButton';
const backgroundImage = require('../../assets/background.png');

type CardInsertedRouteProp = RouteProp<
  {CardInserted: {creditCard: CreditCardModel}},
  'CardInserted'
>;
interface CardInsertedProps {
  route: CardInsertedRouteProp;
}

const styles = StyleSheet.create({
  subtitle: {
    color: '#ffffff',
    fontFamily: FONTS.fontFamily,
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
      style={globalStyles.containerFluid}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={globalStyles.container}>
        <View style={globalStyles.container}>
          <Text style={globalStyles.title}>Wallet Test</Text>
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
