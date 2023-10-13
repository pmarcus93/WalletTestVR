interface CreditCardModel {
  id: string;
  number: string;
  cvv: string;
  name: string;
  title: string;
  color: string;
  expirationDate?: string;
}

export default CreditCardModel;
