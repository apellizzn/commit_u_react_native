import React from 'react';
import { View } from 'react-native';
import CardList from '../../components/CardList';
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
      previousCard: null,
    };
  }

  show = card => ({ ...card, flipped: true })

  hide = card => ({ ...card, flipped: false })

  reveal = index =>
    this.state.cards.map(card => (card.index === index ? this.show(card) : card))

  rollback = (indexA, indexB) => {
    this.setState({
      cards: this.state.cards.map((card) => {
        if (card.index === indexA || card.index === indexB) {
          return this.hide(card);
        }
        return card;
      }),
    });
  }


  flip = (index, label) => {
    const previousCard = this.state.previousCard;
    if (!previousCard) {
      this.setState({ cards: this.reveal(index), previousCard: { index, label } });
    } else {
      if (label !== previousCard.label) {
        setTimeout(() => this.rollback(previousCard.index, index), 1500);
      }
      this.setState({ cards: this.reveal(index), previousCard: null });
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <CardList {...this.state} flip={this.flip} />
      </View>
    );
  }
}

export default CardsScreen;
