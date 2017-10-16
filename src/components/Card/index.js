import React from 'react';
import PropTypes from 'prop-types';
import FlipView from 'react-native-flip-view';
import { Easing, Text, TouchableWithoutFeedback, View } from 'react-native';
import styles from './styles';

const Card = ({ label }) => {
  const back = (
    <TouchableWithoutFeedback>
      <View style={[styles.cardView, styles.frontView]}>
        <Text>{label}</Text>
      </View>
    </TouchableWithoutFeedback>
  );

  const front = (
    <TouchableWithoutFeedback>
      <View style={[styles.cardView, styles.backView]}>
        <Text style={styles.cardText}>{'⭐'}</Text>
      </View>
    </TouchableWithoutFeedback>
  );

  return (
    <FlipView
      front={front}
      back={back}
      flipAxis="y"
      flipEasing={Easing.out(Easing.ease)}
      flipDuration={500}
      perspective={1000}
      style={styles.container}
    />
  );
};

Card.propTypes = {
  label: PropTypes.number.isRequired,
};

export default Card;
