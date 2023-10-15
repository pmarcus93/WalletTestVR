import React, {useEffect, useState} from 'react';
import {Animated, Text, View} from 'react-native';

import styles from './styles';

import {getCards} from '@api/CreditCardApi';

import CreditCardModel from '@models/CreditCardModel';

import AnimatedCreditCard from '@components/AnimatedCreditCard';

function CreditCardList() {
  const [creditCards, setCreditCards] = useState<CreditCardModel[]>([]);
  const [loading, setLoading] = useState(false);

  const y = new Animated.Value(0);
  const onScroll = Animated.event([{nativeEvent: {contentOffset: {y}}}], {
    useNativeDriver: true,
  });

  useEffect(() => {
    fetchData();
  }, []);

  //const cardClickHandler = item => {};

  const fetchData = async () => {
    setLoading(true);
    const data: CreditCardModel[] = await getCards();
    setCreditCards(data);
    setLoading(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.bottomHeader}>
        <Text style={styles.textBottomHeader}>Meus Cartões</Text>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 10,
          width: '100%',
        }}>
        {loading ? (
          <Text>Loading... </Text>
        ) : (
          <Animated.FlatList
            scrollEventThrottle={16}
            data={creditCards}
            renderItem={({index, item}) => (
              <AnimatedCreditCard y={y} index={index} creditCard={item} />
            )}
            keyExtractor={item => item.id}
            onScroll={onScroll}
            bounces={false}
            showsVerticalScrollIndicator={false}
          />
        )}
      </View>
    </View>
  );
}

export default CreditCardList;
