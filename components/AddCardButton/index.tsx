import React from 'react';
import {Button} from 'react-native';

import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {COLORS} from '@shared/defaults';

const AddCardButton: React.FC = () => {
  const {navigate} = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  return (
    <Button
      onPress={() => navigate('CardInsertion')}
      title="+"
      color={COLORS.mainDarkBlue}
    />
  );
};

export default AddCardButton;
