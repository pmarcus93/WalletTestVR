import React from 'react';
import {StyleSheet, Text, Pressable} from 'react-native';
import CreditCardModel from '../../models/CreditCardModel';

const styles = StyleSheet.create({
  creditCard: {
    backgroundColor: '#820ad1',
    width: 300,
    height: 180,
    paddingHorizontal: 16,
    alignContent: 'center',
    justifyContent: 'center',
    borderRadius: 16,
    borderWidth: 1,
    gap: 3,
  },
  cardTitle: {
    fontSize: 18,
    color: '#ffffff',
    marginBottom: 12,
  },
  text: {
    fontSize: 14,
    color: '#ffffff',
  },
  container: {
    gap: 5,
  },
});

type Props = {
  creditCard: CreditCardModel;
};

const CreditCardComponent: React.FC<Props> = ({creditCard}) => {
  return (
    <Pressable
      onPress={() => {
        console.log('clicado no cartão: ' + creditCard.title);
      }}
      style={[styles.creditCard, {backgroundColor: creditCard.color}]}>
      <Text style={styles.cardTitle}>{creditCard.title}</Text>
      <Text style={styles.text}>{creditCard.name}</Text>
      <Text style={styles.text}>
        **** **** **** *{creditCard.number.slice(-3)}
      </Text>
      <Text style={styles.text}>Validade: {creditCard.expirationDate}</Text>
    </Pressable>
  );
};

export default CreditCardComponent;
