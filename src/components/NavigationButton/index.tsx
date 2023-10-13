import React from 'react';
import {Text, Pressable, ColorValue} from 'react-native';

import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import globalStyles from '@shared/globalStyles';

type Props = {
  text: String;
  textColor: String;
  backgroundColor: ColorValue;
  navigateTo: String;
};

const NavigationButton: React.FC<Props> = props => {
  const {navigate} = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  return (
    <Pressable
      onPress={() => navigate(props.navigateTo)}
      style={[globalStyles.button, {backgroundColor: props.backgroundColor}]}>
      <Text
        style={{
          fontSize: 20,
          color: props.textColor,
        }}>
        {props.text}
      </Text>
    </Pressable>
  );
};

export default NavigationButton;
