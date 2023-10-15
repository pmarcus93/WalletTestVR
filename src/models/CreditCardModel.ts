interface CreditCardModel {
  color: string;
  cvv: string;
  expirationDate?: string;
  id: string;
  name: string;
  number: string;
  title: string;
  selected?: boolean;
}

export default CreditCardModel;
