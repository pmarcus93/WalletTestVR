import React from 'react';

import {render} from '@testing-library/react-native';

import NewCreditCardForm from '@screens/NewCreditCardForm';

const mockedDispatch = jest.fn();

jest.mock("@react-navigation/native", () => {
  const actualNav = jest.requireActual("@react-navigation/native");
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: jest.fn(),
      dispatch: mockedDispatch,
    }),
  };
});

describe('NewCreditCardForm', () => {
  beforeEach(() => {
    mockedDispatch.mockClear();
  });

  describe('Basic rendering', () => {
    it('should render basic fields', () => {
      render(<NewCreditCardForm />);
    });
  });
});
