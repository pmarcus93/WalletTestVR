import React from 'react';
import {ImageBackground} from 'react-native';
const backgroundImage = require('/assets/background.png');
import NavigationButton from '../../components/NavigationButton';
import globalStyles from '../../shared/globalStyles';

import { Container, Title, ViewGap20 } from "@components/StyledComponents/StyledComponents";

function Home({}) {
  return (
    <ImageBackground
      source={backgroundImage}
      style={globalStyles.containerFluid}>
      <Container>
        <Title>Wallet Test</Title>
        <ViewGap20>
          <NavigationButton
            backgroundColor={'#12C2E9'}
            textColor={'#ffffff'}
            text={'meus cartões'}
            navigateTo={'CardsListing'}
          />
          <NavigationButton
            backgroundColor={'#A5FF32'}
            textColor={'#142995'}
            text={'cadastrar cartão'}
            navigateTo={'CardInsertion'}
          />
        </ViewGap20>
      </Container>
    </ImageBackground>
  );
}

export default Home;
