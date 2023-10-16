import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import CreditCardModel from '@models/CreditCardModel';

import {MARGIN} from '@components/AnimatedCreditCard';

const styles = StyleSheet.create({
  creditCard: {
    alignContent: 'center',
    backgroundColor: '#820ad1',
    borderRadius: 16,
    borderWidth: 1,
    height: 180,
    justifyContent: 'center',
    paddingHorizontal: 16,
    width: 300,
  },
  cardTitle: {
    color: '#ffffff',
    fontSize: 18,
    marginBottom: 12,
  },
  text: {
    fontSize: 14,
    color: '#ffffff',
  },
  container: {
    gap: 5,
  },
  card: {
    marginVertical: MARGIN / 2,
    alignSelf: 'center',
  },
});

interface CreditCardProps {
  creditCard: CreditCardModel;
}

function CreditCard({creditCard}: CreditCardProps) {
  const {color, title, name, number, expirationDate} = creditCard;

  return (
    <View testID="credit-card-container" 
          style={[styles.creditCard, {backgroundColor: color}]}>
      <Text style={styles.cardTitle}>{title}</Text>
      <Text style={styles.text}>{name}</Text>
      <Text style={styles.text}>**** **** **** *{number?.slice(-3)}</Text>
      <Text style={styles.text}>Validade: {expirationDate}</Text>
    </View>
  );
}

export default CreditCard;
