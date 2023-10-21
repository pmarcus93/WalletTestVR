import {StyleSheet} from 'react-native';

import {COLORS} from '@shared/Defaults';

const styles = StyleSheet.create({
  generalContainer: {
    flex: 1,
    backgroundColor: COLORS.mainDarkBlue,
  },
  cardListContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedCreditCardContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
  },
  errorMessageContainer: {
    flex: 1,
    marginHorizontal: 16,
    justifyContent: 'center',
    textAlign: 'justify',
  },
});

export default styles;
