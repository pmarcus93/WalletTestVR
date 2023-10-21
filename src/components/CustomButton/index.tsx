import React from 'react';
import {ColorValue} from 'react-native';

import {
  PressableButton,
  PressableButtonText,
} from '@components/StyledComponents';

type Props = {
  text: String;
  textColor: string;
  backgroundColor: ColorValue | string;
};

const CustomButton: React.FC<Props> = props => {
  return (
    <PressableButton style={{backgroundColor: props.backgroundColor}}>
      <PressableButtonText color={props.textColor}>
        {props.text}
      </PressableButtonText>
    </PressableButton>
  );
};

export default CustomButton;
