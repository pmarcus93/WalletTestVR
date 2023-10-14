import React from 'react';
import {Text, Pressable, ColorValue} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import globalStyles from '@shared/globalStyles';

type Props = {
  text: String;
  textColor: String;
  backgroundColor: ColorValue;
  navigateTo: any;
};

const NavigationButton: React.FC<Props> = props => {
  const navigation = useNavigation();

  return (
    <Pressable
      onPress={() => navigation.navigate(props.navigateTo)}
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
