import React from 'react';
import {Pressable, Text} from 'react-native';

import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {COLORS} from '@shared/defaults';

const AddCardButton: React.FC = () => {
  const {navigate} = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  return (
    <Pressable onPress={() => navigate('CardInsertion')}>
      <Text style={{color: COLORS.mainDarkBlue, fontSize: 24}}>+</Text>
    </Pressable>
  );
};

export default AddCardButton;
