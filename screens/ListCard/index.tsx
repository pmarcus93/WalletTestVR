import React, {useEffect, useState} from 'react';
import {FlatList, Text, View} from 'react-native';
import CreditCardComponent from '@components/CreditCard';
import {getCards} from '../../components/api';
import CreditCard from '../../models/CreditCard';
import styles from './styles';

function ListCard() {
  const [creditCards, setCreditCards] = useState<CreditCard[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

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
          <FlatList
            data={creditCards}
            renderItem={({item}) => <CreditCardComponent creditCard={item} />}
            keyExtractor={item => item.id}
          />
        )}
      </View>
    </View>
  );
}

export default ListCard;
