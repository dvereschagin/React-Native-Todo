import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderBottomColor: 'gray',
    borderBottomWidth: 0.5
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 12,
  },
  image: {
    width: 32,
    height: 32,
    borderRadius: 5
  },
});