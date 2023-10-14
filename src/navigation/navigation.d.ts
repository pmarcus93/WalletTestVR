import CreditCardModel from "@models/CreditCardModel";

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      CreditCardList: undefined;
      CreditCardSuccessfullyInserted: {
        creditCard: CreditCardModel
      };
      Home: undefined;
      NewCreditCard: undefined;
      SelectedCard: undefined;
    }
  }
}
