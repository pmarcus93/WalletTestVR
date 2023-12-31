/**
 * @format
 */

import React from 'react';
import 'react-native';

import renderer from 'react-test-renderer';

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

import App from '../App';
// Note: test renderer must be required after react-native.

// Note: import explicitly to use the types shiped with jest.
import {it} from '@jest/globals';

describe('App', () => {
  beforeEach(() => {
    mockedDispatch.mockClear();
  });

  it('renders correctly', () => {
    renderer.create(<App />);
  });
  
});