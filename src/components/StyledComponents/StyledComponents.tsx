import styled from 'styled-components/native';

import {COLORS, FONTS} from '@shared/defaults';

export const Container = styled.View`
  margin-right: 10px;
  margin-left: 10px;
`;

export const Title = styled.Text`
  align-self: center;
  color: ${COLORS.text};
  font-family: ${FONTS.fontFamily};
  font-size: 32px;
`;

export const Subtitle = styled.Text`
  align-self: center;
  color: ${COLORS.text};
  font-family: ${FONTS.fontFamily};
  font-size: 20px;
  margin-bottom: 10px;
`;

export const Label = styled.Text`
  color: ${COLORS.label};
  font-size: 14px;
  margin-bottom: 5px;
`;

export const PressableButton = styled.Pressable`
  align-items: center;
  border-radius: 6px;
  height: 55px;
  justify-content: center;
  padding-left: 10px;
  padding-right: 10px;
  width: 300px;
`;

interface PressableButtonTextProps {
  color?: string;
}
export const PressableButtonText = styled.Text<PressableButtonTextProps>`
  font-size: 20px;
  color: ${props => props.color || COLORS.mainDarkBlue};
`;
