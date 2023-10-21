import React, {useRef, useState} from 'react';
import {
  Animated,
  FlatList,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

import {API_URL, fetcher} from '@api/CreditCardApi';

import CreditCardModel from '@models/CreditCardModel';

import {COLORS} from '@shared/Defaults';

import AnimatedCreditCard from '@components/AnimatedCreditCard';
import CreditCard from '@components/CreditCard';
import CustomButton from '@components/CustomButton';
import {BottomHeader, BottomHeaderText} from '@components/StyledComponents';

import styles from './styles';
import useSWR from 'swr';

function CreditCardList() {
  const [selectedCreditCard, setSelectedCreditCard] = useState<
    CreditCardModel | undefined
  >(undefined);
  const y = new Animated.Value(0);
  const onScroll = Animated.event([{nativeEvent: {contentOffset: {y}}}], {
    useNativeDriver: true,
  });

  const flatListRef = useRef<FlatList | null>(null);
  const scrollToTop = () => {
    if (flatListRef.current) {
      flatListRef.current.scrollToOffset({offset: 0, animated: true});
    }
  };

  const {data, isLoading} = useSWR<CreditCardModel[], Error>(API_URL, fetcher);

  return (
    <View style={styles.generalContainer}>
      <BottomHeader>
        <BottomHeaderText>Meus Cartões</BottomHeaderText>
      </BottomHeader>

      <View
        style={selectedCreditCard ? styles.selectedCreditCardContainer : []}>
        {selectedCreditCard && (
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

      <View style={styles.cardListContainer}>
        {isLoading ? (
          <Text>Carregando... </Text>
        ) : (
          <Animated.FlatList
            ref={flatListRef}
            scrollEventThrottle={16}
            data={data}
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
