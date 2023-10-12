import React from 'react';
import {
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  Text,
} from 'react-native';

const backgroundImage = require('../../assets/background.png');
import sharedStyles from '../../shared/sharedStyles';
import FormCard from '../FormCard/FormCard';

function AddCard() {
  return (
    <ImageBackground
      source={backgroundImage}
      resizeMode="cover"
      style={sharedStyles.containerFluid}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={sharedStyles.container}>
        <FormCard />
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}

export default AddCard;
