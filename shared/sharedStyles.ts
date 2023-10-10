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
  },
  label: {
    color: '#BBBBBB',
    fontSize: 14,
  },
  title: {
    fontSize: 32,
    color: '#ffffff',
    paddingBottom: 12,
    alignSelf: 'center',
    fontFamily: 'PTSansCaption-Regular',
  },
  textInput: {
    backgroundColor: '#ffffff',
    borderRadius: 6,
    paddingVertical: 12,
    paddingHorizontal: 12,
    width: '100%',
    color: '#000000',
    fontFamily: 'PT Sans Caption',
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
    marginTop: 12,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    borderRadius: 12,
    width: '100%',
  },
  debug: {
    borderStyle: 'solid',
    borderColor: 'red',
    borderWidth: 3,
  },
});

export default sharedStyles;
