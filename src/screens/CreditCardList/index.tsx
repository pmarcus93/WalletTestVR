import React, {useEffect, useRef, useState} from 'react';
import {
  Alert,
  Animated,
  Button,
  FlatList,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

import styles from './styles';

import {getCards} from '@api/CreditCardApi';

import CreditCardModel from '@models/CreditCardModel';

import AnimatedCreditCard from '@components/AnimatedCreditCard';
import CreditCard from '@components/CreditCard';

// @ts-ignore
function CreditCardList({navigation}) {
  const [creditCards, setCreditCards] = useState<CreditCardModel[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedCreditCard, setSelectedCreditCard] = useState<CreditCardModel>(
    {} as CreditCardModel,
  );
  const y = new Animated.Value(0);
  const onScroll = Animated.event([{nativeEvent: {contentOffset: {y}}}], {
    useNativeDriver: true,
  });

  useEffect(() => {
    fetchData();
  }, []);

  const flatListRef = useRef<FlatList | null>(null);
  const scrollToTop = () => {
    if (flatListRef.current) {
      flatListRef.current.scrollToOffset({offset: 0, animated: true});
    }
  };

  const fetchData = async () => {
    try {
      setLoading(true);
      const data: CreditCardModel[] = await getCards();
      setCreditCards(data);
      setSelectedCreditCard(data[0]);
      setLoading(false);
    } catch (e) {
      Alert.alert(
        'API Indisponível',
        'Parece que a API com os dados do cartão de crédito não foi encontrada. ' +
          '\nCertifique-se de executar as instruções no README.md do projeto. ' +
          '\nVocê será redirecionado à tela inicial.',
        [
          {
            text: 'OK',
            onPress: () => {
              navigation.navigate('Home');
            },
          },
        ],
      );
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.bottomHeader}>
        <Text style={styles.textBottomHeader}>Meus Cartões</Text>
      </View>

      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        {selectedCreditCard && !loading && (
          <>
            <CreditCard creditCard={selectedCreditCard} />
            <Button title={'pagar com este cartão'} />
          </>
        )}
      </View>

      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 75,
        }}>
        {loading ? (
          <Text>Carregando... </Text>
        ) : (
          <Animated.FlatList
            ref={flatListRef}
            scrollEventThrottle={16}
            data={creditCards}
            renderItem={({index, item}) => (
              <TouchableWithoutFeedback
                onPress={() => {
                  setSelectedCreditCard(item);
                  scrollToTop();
                }}>
                <View>
                  <AnimatedCreditCard y={y} index={index} creditCard={item} />
                </View>
              </TouchableWithoutFeedback>
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
