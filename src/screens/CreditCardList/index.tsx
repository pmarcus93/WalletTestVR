import React, {useEffect, useRef, useState} from 'react';
import {
  Alert,
  Animated,
  FlatList,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

import styles from './styles';

import {getCards} from '@api/CreditCardApi';

import CreditCardModel from '@models/CreditCardModel';

import {COLORS, ERROR_MESSAGES} from '@shared/Defaults';

import AnimatedCreditCard from '@components/AnimatedCreditCard';
import CreditCard from '@components/CreditCard';
import CustomButton from '@components/CustomButton';
import {
  BottomHeader,
  BottomHeaderText,
} from '@components/StyledComponents/StyledComponents';

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
      Alert.alert(ERROR_MESSAGES.API.title, ERROR_MESSAGES.API.message, [
        {
          text: 'OK',
          onPress: () => {
            navigation.navigate('Home');
          },
        },
      ]);
    }
  };

  return (
    <View style={styles.container}>
      <BottomHeader>
        <BottomHeaderText>Meus Cartões</BottomHeaderText>
      </BottomHeader>

      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          gap: 20,
        }}>
        {selectedCreditCard && !loading && (
          <>
            <CreditCard creditCard={selectedCreditCard} />
            <CustomButton
              text={'pagar com este cartão'}
              textColor={'#ffffff'}
              backgroundColor={COLORS.mainLightBlue}
            />
          </>
        )}
      </View>

      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
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
