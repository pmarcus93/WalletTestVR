import {StyleSheet} from 'react-native';

import {COLORS} from '@shared/Defaults';

const styles = StyleSheet.create({
  generalContainer: {
    flex: 1,
    backgroundColor: COLORS.mainDarkBlue,
  },
  container: {
    flex: 1,
    backgroundColor: '#142995',
  },
  bottomHeader: {
    backgroundColor: '#ffffff',
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
  textBottomHeader: {
    alignSelf: 'center',
    fontSize: 20,
    padding: 20,
    color: '#12C2E9',
  },
  cardsList: {
    paddingHorizontal: 16,
    flex: 1,
    alignItems: 'center',
  },
});

export default styles;
