import React from 'react';
import CardList from '../../components/CardList';
import { Text, View } from 'react-native';
import styles from './styles';

class CardsScreen extends React.PureComponent {

  constructor(props) {
    super(props);

    const seed = Array(8).fill().map((_, index) => ({ label: index }));
    const cards = [...seed, ...seed]
      .sort(() => Math.round(Math.random()))
      .map((card, index) => ({ ...card, index }));
    const columns = Math.ceil(Math.sqrt(cards.length));
    const rows = cards.length / columns;

    this.state = {
      cards,
      columns,
      rows,
    };
  }

  render() {
    return(
      <View style={styles.container}>
        <CardList {...this.state} />
      </View>
    );
  }
}

export default CardsScreen;
