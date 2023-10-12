import {StyleSheet} from 'react-native';

const sharedStyles = StyleSheet.create({
  containerFluid: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    backgroundColor: '#142995',
  },
  container: {
    marginHorizontal: 18,
    alignItems: 'center',
    gap: 10,
  },
  label: {
    color: '#BBBBBB',
    fontSize: 14,
  },
  title: {
    fontSize: 32,
    color: '#ffffff',
    alignSelf: 'center',
    fontFamily: 'PT Sans Caption',
  },
  textInput: {
    backgroundColor: '#ffffff',
    borderRadius: 6,
    paddingVertical: 12,
    paddingHorizontal: 12,
    height: 50,
    color: '#000000',
    fontFamily: 'PT Sans Caption',
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    borderRadius: 6,
    width: 300,
    height: 55,
  },
  debug: {
    borderStyle: 'solid',
    borderColor: 'red',
    borderWidth: 3,
  },
});

export default sharedStyles;
