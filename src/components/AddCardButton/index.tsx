import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';

import {COLORS} from '@shared/Defaults';

import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

const styles = StyleSheet.create({
  textStyles: {
    color: COLORS.mainDarkBlue,
    fontSize: 24,
  },
});

const AddCardButton: React.FC = () => {
  const {navigate} = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  return (
    <Pressable onPress={() => navigate('CardInsertion')}>
      <Text style={styles.textStyles}>+</Text>
    </Pressable>
  );
};

export default AddCardButton;
