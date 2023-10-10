import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import CreditCardComponent from '../elements/CreditCardComponent';
import {getCards} from '../api';
import CreditCard from '../../models/CreditCard';

function MyCards() {
  const [creditCards, setCreditCards] = useState<CreditCard[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedCardId, setSelectedCardId] = useState('');

  useEffect(() => {
    fetchData();
  }, []); // The empty dependency array ensures this effect runs only once, like componentDidMount

  const fetchData = async () => {
    setLoading(true);
    const data: CreditCard[] = await getCards();
    setCreditCards(data);
    setLoading(false);
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#142995',
      }}>
      <View
        style={{
          backgroundColor: '#ffffff',
          borderBottomLeftRadius: 50,
          borderBottomRightRadius: 50,
        }}>
        <Text
          style={{
            alignSelf: 'center',
            fontSize: 20,
            padding: 20,
            color: '#12C2E9',
          }}>
          Meus Cartões
        </Text>
      </View>
      <View
        style={{
          paddingHorizontal: 16,
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          gap: 10,
        }}>
        {loading ? (
          <Text>Loading... </Text>
        ) : (
          creditCards.map(item => {
            if (item.id !== selectedCardId) {
              return <CreditCardComponent key={item.id} creditCard={item} />;
            } else {
              return (
                <View key={item.id} style={{backgroundColor: 'red'}}>
                  <CreditCardComponent creditCard={item} />
                </View>
              );
            }
          })
        )}
      </View>
    </View>
  );
}

export default MyCards;
