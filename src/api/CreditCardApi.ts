import CreditCardModel from '@models/CreditCardModel';

import axios, {AxiosResponse} from 'axios';
import {Fetcher} from 'swr';

export const API_URL = 'http://192.168.31.159:3000/cards';

export const fetcher: Fetcher<CreditCardModel[]> = async (endpoint: string) => {
  const response = await fetch(endpoint);
  return await response.json();
};

const API_BASE_URL: string = 'http://192.168.31.159:3000';

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
