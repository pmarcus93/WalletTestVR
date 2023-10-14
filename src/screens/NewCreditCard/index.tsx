import React from 'react';
import {ImageBackground, KeyboardAvoidingView, Platform} from 'react-native';

import globalStyles from '../../shared/globalStyles';

import NewCreditCardForm from '@screens/NewCreditCardForm';

const backgroundImage = require('../../../assets/background.png');

function NewCreditCard() {
  return (
    <ImageBackground
      source={backgroundImage}
      resizeMode="cover"
      style={globalStyles.containerFluid}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={globalStyles.container}>
        <NewCreditCardForm />
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}

export default NewCreditCard;
