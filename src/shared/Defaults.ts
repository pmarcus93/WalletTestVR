import {Platform} from 'react-native';

export const FONTS = {
  fontFamily: Platform.OS === 'ios' ? 'PT Sans Caption' : 'ptsanscaption',
};

export const COLORS = {
  label: '#bbbbbb',
  labelError: '#ff6961',
  mainDarkBlue: '#142995',
  mainLightBlue: '#12C2E9',
  placeholder: '#bbbbbb',
  text: '#ffffff',
};

export const ERROR_MESSAGES = {
  API: {
    title: 'API Indisponível',
    message:
      'Parece que a API com os dados do cartão de crédito não foi encontrada. Certifique-se de executar as instruções no README.md do projeto. ',
  },
};
