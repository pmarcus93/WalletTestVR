import React from 'react';
import {render} from '@testing-library/react-native';
import AddCardButton from '..';

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


describe('AddCardButton', () => {
  beforeEach(() => {
    mockedDispatch.mockClear();
  });

  it('renders correctly', () => {
    render(<AddCardButton />);
  });
});
