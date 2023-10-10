import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import CreditCardComponent from '../../components/elements/CreditCardComponent';
import {getCards} from '../../components/api';
import CreditCard from '../../models/CreditCard';
import styles from './CardListStyles';

function CardList() {
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
    <View style={styles.container}>
      <View style={styles.bottomHeader}>
        <Text style={styles.textBottomHeader}>Meus Cartões</Text>
      </View>
      <View style={styles.cardsList}>
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

export default CardList;
