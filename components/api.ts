import axios, {AxiosResponse} from 'axios';
import CreditCard from '../models/CreditCard';

const API_BASE_URL: string = 'http://10.0.0.103:3000';
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
