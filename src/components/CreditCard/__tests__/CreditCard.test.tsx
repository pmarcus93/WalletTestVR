import React from 'react';

import CreditCardModel from '@models/CreditCardModel';

import CreditCard from '@components/CreditCard';

import {render} from '@testing-library/react-native';

const mockedCreditCard: CreditCardModel = {
  cvv: '123',
  color: '#ffff00',
  expirationDate: '12/29',
  id: '123456',
  number: '1234 5678 9102 3456',
  name: 'Marcus Pereira',
  title: 'Mocked Credit Card',
};

describe('CreditCard', () => {
  describe('Credit Card was passed as a parameter', () => {
    it('rendered the credit card number with asterisks', () => {
      const {getByText} = render(<CreditCard creditCard={mockedCreditCard} />);
      expect(getByText('**** **** **** *456')).toBeTruthy();
    });

    it('rendered the owner name correctly', () => {
      const {getByText} = render(<CreditCard creditCard={mockedCreditCard} />);
      expect(getByText('Marcus Pereira')).toBeTruthy();
    });

    it('rendered the credit card title correctly', () => {
      const {getByText} = render(<CreditCard creditCard={mockedCreditCard} />);
      expect(getByText('Mocked Credit Card')).toBeTruthy();
    });

    it('rendered the expiration date correctly', () => {
      const {getByText} = render(<CreditCard creditCard={mockedCreditCard} />);
      expect(getByText('Validade: 12/29')).toBeTruthy();
    });
  });
});
