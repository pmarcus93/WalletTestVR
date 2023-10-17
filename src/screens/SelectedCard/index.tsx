import React from 'react';
import {Text, View} from 'react-native';

import {
  BottomHeader,
  BottomHeaderText,
} from '@components/StyledComponents/StyledComponents';

import styles from '@screens/CreditCardList/styles';

function SelectedCard() {
  return (
    <>
      <View style={styles.generalContainer}>
        <BottomHeader>
          <BottomHeaderText>Meus Cartões</BottomHeaderText>
        </BottomHeader>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 10,
            width: '100%',
          }}>
          <Text>Selected Card</Text>
        </View>
      </View>
    </>
  );
}

export default SelectedCard;
