import React from 'react';

import AddCardButton from '@components/AddCardButton';

import {render} from '@testing-library/react-native';

const mockedDispatch = jest.fn();

jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: jest.fn(),
      dispatch: mockedDispatch,
    }),
  };
});

describe('AddCardButton', () => {
  beforeEach(() => {
    mockedDispatch.mockClear();
  });

  it('renders correctly', () => {
    render(<AddCardButton />);
  });
});
