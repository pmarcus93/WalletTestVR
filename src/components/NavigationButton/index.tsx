import React from 'react';
import {ColorValue} from 'react-native';

import {
  PressableButton,
  PressableButtonText,
} from '@components/StyledComponents';

import {useNavigation} from '@react-navigation/native';

type Props = {
  text: String;
  textColor: string;
  backgroundColor: ColorValue | string;
  navigateTo: any;
};

const NavigationButton: React.FC<Props> = props => {
  const navigation = useNavigation();

  return (
    <PressableButton
      onPress={() => navigation.navigate(props.navigateTo)}
      style={{backgroundColor: props.backgroundColor}}>
      <PressableButtonText color={props.textColor}>
        {props.text}
      </PressableButtonText>
    </PressableButton>
  );
};

export default NavigationButton;
