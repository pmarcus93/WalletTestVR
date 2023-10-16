import {StyleSheet} from 'react-native';

import {COLORS, FONTS} from './defaults';

const globalStyles = StyleSheet.create({
  button: {
    alignItems: 'center',
    borderRadius: 6,
    height: 55,
    justifyContent: 'center',
    paddingVertical: 10,
    width: 300,
  },
  container: {
    alignItems: 'center',
    gap: 10,
    marginHorizontal: 18,
  },
  containerFluid: {
    backgroundColor: COLORS.mainDarkBlue,
    flex: 1,
    justifyContent: 'center',
    width: '100%',
  },
  debug: {
    borderColor: 'red',
    borderStyle: 'solid',
    borderWidth: 3,
  },
  label: {
    color: COLORS.label,
    fontSize: 14,
    marginBottom: 5,
  },
  labelError: {
    color: COLORS.labelError,
    fontSize: 14,
    marginTop: 5,
  },
  rowContainer: {
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'space-between',
  },
  textInput: {
    backgroundColor: COLORS.text,
    borderRadius: 6,
    color: '#000000',
    fontFamily: FONTS.fontFamily,
    height: 50,
    paddingHorizontal: 12,
    paddingVertical: 12,
  },
  textInputError: {
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: COLORS.labelError,
  },
  title: {
    alignSelf: 'center',
    color: COLORS.text,
    fontFamily: FONTS.fontFamily,
    fontSize: 32,
  },
  subtitle: {
    alignSelf: 'center',
    color: COLORS.text,
    fontFamily: FONTS.fontFamily,
    fontSize: 20,
    marginBottom: 10,
  },
});

export default globalStyles;
