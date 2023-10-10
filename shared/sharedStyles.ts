import {StyleSheet} from 'react-native';

const sharedStyles = StyleSheet.create({
  label: {
    color: '#BBBBBB',
    fontSize: 14,
  },
  title: {
    fontSize: 32,
    color: '#ffffff',
    paddingBottom: 12,
    alignSelf: 'center',
  },
  textInput: {
    backgroundColor: '#ffffff',
    borderRadius: 6,
    paddingVertical: 12,
    paddingHorizontal: 12,
    width: '100%',
    color: '#000000',
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
});

export default sharedStyles;
