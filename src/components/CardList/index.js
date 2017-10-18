import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row, Grid } from 'react-native-easy-grid';
import Card from '../Card';

const CardList = ({ cards, rows, flip }) => {
  const rowsToRender = Array(rows).fill().map((_, rIndex) =>
    (
      <Row key={rIndex}>
        {
          cards
            .filter(({ index }) => index % rows === rIndex)
            .map(card => (<Col key={card.index}><Card flip={flip} {...card} /></Col>))
        }
      </Row>
    ),
  );
  return (
    <Grid>{rowsToRender}</Grid>
  );
};

CardList.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      index: PropTypes.number,
      label: PropTypes.string,
    }),
  ).isRequired,
  rows: PropTypes.number.isRequired,
  flip: PropTypes.func.isRequired,
};

export default CardList;
