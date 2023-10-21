import styled from 'styled-components/native';

import {COLORS, FONTS} from '@shared/Defaults';

export const Container = styled.View`
  align-items: center;
  gap: 10px;
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

export const ErrorLabel = styled.Text`
  color: ${COLORS.labelError};
  font-size: 14px;
  margin-top: 5px;
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

export const ViewGap10 = styled.View`
  display: flex;
  gap: 10px;
`;

export const ViewGap20 = styled.View`
  display: flex;
  gap: 20px;
`;

export const CardTitle = styled.Text`
  font-family: ${FONTS.fontFamily};
  font-size: 12px;
  margin-bottom: 12px;
  color: #ffffff;
`;

export const CardText = styled.Text`
  font-family: ${FONTS.fontFamily};
  font-size: 16px;
  color: #ffffff;
`;

interface CreditCardViewProps {
  backgroundColor?: string;
}
export const CreditCardView = styled.View<CreditCardViewProps>`
  align-content: center;
  background-color: ${props => props.backgroundColor || '#000000'};
  border-radius: 16px;
  border-width: 1px;
  height: 180px;
  justify-content: center;
  padding-left: 16px;
  padding-right: 16px;
  width: 300px;
`;

export const BottomHeader = styled.View`
  background-color: #ffffff;
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;
`;

export const BottomHeaderText = styled.Text`
  align-self: center;
  font-size: 20px;
  padding: 20px;
  color: #12c2e9;
`;
