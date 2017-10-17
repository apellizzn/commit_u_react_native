import React from 'react';
import CardList from '../../components/CardList';
import { Text, View } from 'react-native';
import styles from './styles';

class CardsScreen extends React.PureComponent {

  constructor(props) {
    super(props);

    const seed = Array(8).fill().map((_, index) => ({ label: index, flipped: false }));
    const cards = [...seed, ...seed]
      .map((card, index) => ({ ...card, index }))
      .sort(() => Math.round(Math.random()));
    const columns = Math.ceil(Math.sqrt(cards.length));
    const rows = cards.length / columns;

    this.state = {
      cards,
      rows,
    };
  }

  show = card => ({ ...card, flipped: true })

  reveal = index =>
    this.state.cards.map(card => card.index === index ? this.show(card) : card)

  flip = (index, label) => {
    this.setState({ cards: this.reveal(index) })
  }

  render() {
    return(
      <View style={styles.container}>
        <CardList {...this.state} flip={this.flip} />
      </View>
    );
  }
}

export default CardsScreen;
