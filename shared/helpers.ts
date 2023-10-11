const VALIDATION_REGEXES = {
  CREDIT_CARD_NUMBER: /^\d{4} \d{4} \d{4} \d{4}$/,
  CREDIT_CARD_EXPIRATION_DATE: /^(0[1-9]|1[0-2])\/\d{2}$/,
  CREDIT_CARD_CVV: /^\d{3}$/,
};

export default VALIDATION_REGEXES;
