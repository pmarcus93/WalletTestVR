import axios, {AxiosResponse} from 'axios';

import CreditCardModel from '@models/CreditCardModel';

const API_BASE_URL: string = 'http://192.168.1.2:3000';
export const getCards = async (): Promise<CreditCardModel[]> => {
  try {
    const response: AxiosResponse<CreditCardModel[]> = await axios.get(
      `${API_BASE_URL}/cards`,
      {
        timeout: 3000,
      },
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const insertCard = async (
  creditCard: CreditCardModel,
): Promise<AxiosResponse<CreditCardModel>> => {
  try {
    return await axios.post(`${API_BASE_URL}/cards`, creditCard, {
      timeout: 3000,
    });
  } catch (error) {
    throw error;
  }
};
