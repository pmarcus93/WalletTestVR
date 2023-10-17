import React from 'react';
import {StyleSheet} from 'react-native';
import {Animated, Dimensions} from 'react-native';

export const MARGIN = 16;
export const CARD_HEIGHT = 180 + MARGIN * 2;

const {height: wHeight} = Dimensions.get('window');
const height = wHeight - 64;

import CreditCardModel from '@models/CreditCardModel';

import CreditCard from '@components/CreditCard';

const styles = StyleSheet.create({
  card: {
    marginVertical: MARGIN / 2,
    alignSelf: 'center',
  },
});

type CardProps = {
  y: Animated.Value;
  index: number;
  creditCard: CreditCardModel;
};

const AnimatedCreditCard = ({creditCard, y, index}: CardProps) => {
  const position = Animated.subtract(index * CARD_HEIGHT, y);
  const isDisappearing = -CARD_HEIGHT;
  const isTop = 0;
  const isBottom = height - CARD_HEIGHT / 2;
  const isAppearing = height;
  const translateY = Animated.add(
    Animated.add(
      y,
      y.interpolate({
        inputRange: [0, 0.00001 + index * CARD_HEIGHT],
        outputRange: [0, -index * CARD_HEIGHT],
        extrapolateRight: 'clamp',
      }),
    ),
    position.interpolate({
      inputRange: [isBottom, isAppearing],
      outputRange: [0, -CARD_HEIGHT / 4],
      extrapolate: 'clamp',
    }),
  );
  const scale = position.interpolate({
    inputRange: [isDisappearing, isTop, isBottom, isAppearing],
    outputRange: [0.5, 1, 1, 0.5],
    extrapolate: 'clamp',
  });
  const opacity = position.interpolate({
    inputRange: [isDisappearing, isTop, isBottom, isAppearing],
    outputRange: [0.5, 1, 1, 0.5],
  });

  return (
    <Animated.View
      style={[styles.card, {opacity, transform: [{translateY}, {scale}]}]}
      key={index}>
      <CreditCard creditCard={creditCard} />
    </Animated.View>
  );
};

export default AnimatedCreditCard;
