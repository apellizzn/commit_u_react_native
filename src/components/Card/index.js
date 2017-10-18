import React from 'react';
import PropTypes from 'prop-types';
import FlipView from 'react-native-flip-view';
import { Easing, Image, Text, TouchableWithoutFeedback, View } from 'react-native';
import styles from './styles';

const Card = ({ index, label, flipped, flip }) => {
  const back = (
    <TouchableWithoutFeedback>
      <View style={[styles.cardView, styles.frontView]}>
        <Image
          style={styles.cardImage}
          source={{ uri: label }}
        />
      </View>
    </TouchableWithoutFeedback>
  );

  const front = (
    <TouchableWithoutFeedback onPress={() => flip(index, label)}>
      <View style={[styles.cardView, styles.backView]}>
        <Text style={styles.cardText}>{'⭐'}</Text>
      </View>
    </TouchableWithoutFeedback>
  );

  return (
    <FlipView
      front={front}
      back={back}
      isFlipped={flipped}
      flipAxis="y"
      flipEasing={Easing.out(Easing.ease)}
      flipDuration={250}
      perspective={1000}
      style={styles.container}
    />
  );
};

Card.propTypes = {
  index: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  flipped: PropTypes.bool.isRequired,
  flip: PropTypes.func.isRequired,
};

export default Card;
