import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
  },
  cardView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: '#FA5965',
    height: '80%',
    shadowColor: '#666',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  frontView: {
    backgroundColor: '#85C981',
  },
  backView: {
    backgroundColor: '#FA5965',
  },
  cardText: {
    fontSize: 36,
  },
  cardImage: {
    width: '100%',
    height: '100%',
    borderRadius: 5,
  },
});

export default styles;
