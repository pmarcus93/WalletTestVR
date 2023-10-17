import React from 'react';
import {Text, View} from 'react-native';

import styles from '@screens/CreditCardList/styles';

function SelectedCard() {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.bottomHeader}>
          <Text style={styles.textBottomHeader}>Meus Cartões</Text>
        </View>
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
