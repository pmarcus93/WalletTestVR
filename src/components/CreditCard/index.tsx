import React from 'react';

import CreditCardModel from '@models/CreditCardModel';

import {
  CardText,
  CardTitle,
  CreditCardView,
} from '@components/StyledComponents';
interface CreditCardProps {
  creditCard: CreditCardModel;
}
function CreditCard({creditCard}: CreditCardProps) {
  const {color, title, name, number, expirationDate} = creditCard;

  return (
    <CreditCardView testID="credit-card-container" backgroundColor={color}>
      <CardTitle>{title}</CardTitle>
      <CardText>{name}</CardText>
      <CardText>**** **** **** *{number?.slice(-3)}</CardText>
      <CardText>Validade: {expirationDate}</CardText>
    </CreditCardView>
  );
}

export default CreditCard;
