import React from 'react';
import {StyleSheet, Text, Pressable} from 'react-native';
import CreditCard from '../../models/CreditCard';

const styles = StyleSheet.create({
  creditCard: {
    backgroundColor: '#820ad1',
    width: 300,
    height: 180,
    paddingHorizontal: 16,
    alignContent: 'center',
    justifyContent: 'center',
    borderRadius: 16,
    marginTop: -110,
    borderColor: 'red',
    borderStyle: 'solid',
    borderWidth: 1,
    color: '#ffffff',
  },
});

type Props = {
  creditCard: CreditCard;
};

const CreditCardComponent: React.FC<Props> = ({creditCard}) => {
  return (
    <Pressable
      onPress={() => {
        console.log('clicado no cartão: ' + creditCard.title);
      }}
      style={[styles.creditCard, {backgroundColor: creditCard.color}]}>
      <Text style={{fontSize: 18, marginBottom: 12}}>{creditCard.title}</Text>
      <Text>{creditCard.name}</Text>
      <Text>{creditCard.number}</Text>
      <Text>Validade: {creditCard.expirationDate}</Text>
    </Pressable>
  );
};

export default CreditCardComponent;
