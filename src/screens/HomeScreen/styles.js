import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
  },
  text: {
    flex: 1,
    flexDirection: 'column',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 40,
    borderBottomWidth: 1,
    borderBottomColor: '#E4EDF0',
  },
  title: {
    fontSize: 44,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  caption: {
    fontSize: 18,
    marginTop: 10,
    textAlign: 'left',
    color: '#AEBCBC',
    fontWeight: 'bold',
  },
  playButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
});

export default styles;
