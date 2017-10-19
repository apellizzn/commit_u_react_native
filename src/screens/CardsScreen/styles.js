import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
  },
  modal: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  text: {
    flexDirection: 'column',
    color: 'white',
    fontSize: 24,
    padding: 40,
    textAlign: 'center',
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
});

export default styles;
