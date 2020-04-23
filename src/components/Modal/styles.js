import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: { 
   textAlign: 'center',
   fontSize: 16,
   paddingVertical: 12
  },
  closeButton: {
    paddingRight: 12,
  },
  header: { 
    flex: 1,
    backgroundColor: 'white',
    marginHorizontal: 16 
  },
  submitButton: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0
  },
});