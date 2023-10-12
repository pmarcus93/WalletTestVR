import axios, {AxiosResponse} from 'axios';
import CreditCard from '../models/CreditCard';

const API_BASE_URL: string = 'http://192.168.1.7:3000';
export const getCards = async (): Promise<CreditCard[]> => {
  try {
    const response: AxiosResponse<CreditCard[]> = await axios.get(
      `${API_BASE_URL}/cards`,
    );
    const creditCards: CreditCard[] = response.data;
    console.log(creditCards);
    return creditCards;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export const insertCard = async (
  creditCard: CreditCard,
): Promise<AxiosResponse<CreditCard>> => {
  try {
    const response: AxiosResponse<CreditCard> = await axios.post(
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
