import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  addButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: -25,
    elevation: 16
  },
  button: { 
    backgroundColor: '#fff',
    height: 52, width: 52,
    borderRadius: 52 / 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#000',
    elevation: 16,
    borderWidth: 0.5,
  },
  icon: { 
    width: 26,
    height: 26,
  },
});