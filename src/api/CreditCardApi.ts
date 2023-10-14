import axios, {AxiosResponse} from 'axios';

import CreditCardModel from '@models/CreditCardModel';

const API_BASE_URL: string = 'http://192.168.1.2:3000';
export const getCards = async (): Promise<CreditCardModel[]> => {
  try {
    const response: AxiosResponse<CreditCardModel[]> = await axios.get(
      `${API_BASE_URL}/cards`,
    );
    const creditCards: CreditCardModel[] = response.data;
    console.log(creditCards);
    return creditCards;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export const insertCard = async (
  creditCard: CreditCardModel,
): Promise<AxiosResponse<CreditCardModel>> => {
  try {
    const response: AxiosResponse<CreditCardModel> = await axios.post(
      `${API_BASE_URL}/cards`,
      creditCard,
    );
    console.log('Credit card inserted successfully:', response.data);
    return response;
  } catch (error) {
    console.error('Error inserting credit card:', error);
    throw error;
  }
};
