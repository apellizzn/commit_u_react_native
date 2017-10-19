import React from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';
import Modal from 'react-native-modalbox';
import CardList from '../../components/CardList';
import styles from './styles';

class CardsScreen extends React.PureComponent {
  static navigationOptions = {
    title: 'Memory',
  };

  constructor(props) {
    super(props);
    this.state = this.seed();
  }

  shuffle = (cards) => {
    const array = cards;
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  seed = () => {
    const { navigation: { state: { params: { photos } } } } = this.props;
    const seed = photos.map(photo => (
      { label: photo, flipped: false }
    ));
    const cards = this.shuffle([...seed, ...seed])
      .map((card, index) => ({ ...card, index }))
      .sort(() => Math.round(Math.random()));
    const columns = Math.ceil(Math.sqrt(cards.length));
    const rows = Math.floor(cards.length / columns);

    return { cards, rows, previousCard: null, win: false };
  }

  show = card => ({ ...card, flipped: true })

  hide = card => ({ ...card, flipped: false })

  reset = () => this.props.navigation.navigate('Home', { photos: [] });

  reveal = index => this.state.cards.map(card => (card.index === index ? this.show(card) : card))

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
    let win = false;
    const previousCard = this.state.previousCard;
    if (!previousCard) {
      this.setState({ cards: this.reveal(index), previousCard: { index, label } });
    } else {
      if (label !== previousCard.label) {
        setTimeout(() => this.rollback(previousCard.index, index), 1500);
      } else {
        win = this.state.cards.filter(({ flipped }) => !flipped).length === 1;
      }
      this.setState({ cards: this.reveal(index), previousCard: null, win });
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <CardList {...this.state} flip={this.flip} />
        <Modal style={styles.modal} coverScreen isOpen={this.state.win} onClosed={this.reset} position="center">
          <Text style={styles.text}>You won! Swipe down to play again</Text>
        </Modal>
      </View>
    );
  }
}

CardsScreen.defaultProps = {
  navigation: {
    state: {
      params: {
        photos: [],
      },
    },
  },
}

CardsScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
    state: PropTypes.shape({
      params: PropTypes.shape({
        photos: PropTypes.arrayOf(PropTypes.string),
      }),
    }),
  }).isRequired,
}

export default CardsScreen;
