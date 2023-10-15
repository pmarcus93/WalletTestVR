/**
 * @format
 */

import React from 'react';
import 'react-native';

import renderer from 'react-test-renderer';

import App from '../App';

// Note: test renderer must be required after react-native.

// Note: import explicitly to use the types shiped with jest.
import {it} from '@jest/globals';

it('renders correctly', () => {
  renderer.create(<App />);
});
