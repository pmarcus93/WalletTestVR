import React from 'react';
import {Text, View} from 'react-native';
import styles from '../styles';

function MyCards() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#142995',
      }}>
      <View
        style={{
          backgroundColor: '#ffffff',
          borderBottomLeftRadius: 50,
          borderBottomRightRadius: 50,
        }}>
        <Text
          style={{
            alignSelf: 'center',
            fontSize: 20,
            padding: 20,
            color: '#12C2E9',
          }}>
          Meus Cartões
        </Text>
      </View>
      <Text>My Cards</Text>
    </View>
  );
}

export default MyCards;
