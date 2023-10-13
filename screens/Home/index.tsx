import React from 'react';
import {ImageBackground, Text, View} from 'react-native';
const backgroundImage = require('../../assets/background.png');
import globalStyles from '@shared/globalStyles';

import NavigationButton from '@components/NavigationButton';

function Home({}) {
  return (
    <ImageBackground
      source={backgroundImage}
      style={globalStyles.containerFluid}>
      <View style={{...globalStyles.container}}>
        <Text style={globalStyles.title}>Wallet Test</Text>
        <View style={{gap: 20}}>
          <NavigationButton
            backgroundColor={'#12C2E9'}
            textColor={'#ffffff'}
            text={'meus cartões'}
            navigateTo={'MyCards'}
          />
          <NavigationButton
            backgroundColor={'#A5FF32'}
            textColor={'#142995'}
            text={'cadastrar cartão'}
            navigateTo={'CardInsertion'}
          />
        </View>
      </View>
    </ImageBackground>
  );
}

export default Home;
