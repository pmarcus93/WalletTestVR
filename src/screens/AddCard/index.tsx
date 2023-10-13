import React from 'react';
import {ImageBackground, KeyboardAvoidingView, Platform} from 'react-native';

import globalStyles from '../../shared/globalStyles';
import FormCard from '../FormCard';

const backgroundImage = require('../../../assets/background.png');

function AddCard() {
  return (
    <ImageBackground
      source={backgroundImage}
      resizeMode="cover"
      style={globalStyles.containerFluid}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={globalStyles.container}>
        <FormCard />
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}

export default AddCard;
