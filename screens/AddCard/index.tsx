import React from 'react';
import {ImageBackground, KeyboardAvoidingView, Platform} from 'react-native';

const backgroundImage = require('../../assets/background.png');
import globalStyles from '@shared/globalStyles';

import FormCard from '@screens/FormCard';

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
