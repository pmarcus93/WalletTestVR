import randomcolor from 'randomcolor';
import colornamer from 'color-namer';

const capitalize = (text: String) => {
  return text.charAt(0).toUpperCase() + text.slice(1);
};

export const VALIDATION_REGEXES = {
  CREDIT_CARD_NUMBER: /^\d{4} \d{4} \d{4} \d{4}$/,
  CREDIT_CARD_EXPIRATION_DATE: /^(0[1-9]|1[0-2])\/\d{2}$/,
  CREDIT_CARD_CVV: /^\d{3}$/,
};

export const getRandomColor = () => {
  const color = randomcolor({luminosity: 'dark'});

  const colorDictionaries: String[] = [
    'roygbiv',
    'basic',
    'x11',
    'pantone',
    'ntc',
  ];
  const randomColorDictionaryIndex = Math.floor(
    Math.random() * colorDictionaries.length,
  );
  let randomColorDictionary = colorDictionaries[randomColorDictionaryIndex];
  const colorName = colornamer(color, {omit: ['html']});

  // @ts-ignore
  return {
    color: color,
    colorName: capitalize(colorName[randomColorDictionary][0].name),
  };
};
