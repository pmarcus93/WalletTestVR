import React from 'react';
import {Button} from 'react-native';
import {COLORS} from '../../shared/defaults';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

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
