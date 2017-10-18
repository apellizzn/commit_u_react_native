import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  photo: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    margin: 10,
    borderRadius: 5,
    backgroundColor: '#FA5965',
    height: '80%',
    shadowColor: '#666',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  borderRed: {
    borderColor: '#FA5965',
  },
  borderGrey: {
    borderColor: '#CCC',
  },
  buttons: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  separator: {
    width: 30,
    height: 1,
    backgroundColor: '#FFF',
    marginTop: 15,
    marginBottom: 15,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 5,    
  },
});

export default styles;
