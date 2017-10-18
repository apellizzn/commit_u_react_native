import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row, Grid } from 'react-native-easy-grid';

import SelectPhoto from '../SelectPhoto';
import styles from './styles';

export default class SelectPhotos extends React.PureComponent {
  static propTypes = {
    nPhotos: PropTypes.number.isRequired,
    onImageSelected: PropTypes.func.isRequired,
  };

  render() {
    const rows = this.props.nPhotos <= 2 ? 1 : 2;
    const columns = this.props.nPhotos / rows;
    let photoIndex = 0;

    const renderCols = () => {
      const colsToRender = [];
      for (let c = 0; c < columns; c++) {
        colsToRender.push(
          <Col key={c}>
            {(photoIndex < this.props.nPhotos) &&
              <SelectPhoto
                onImageSelected={this.props.onImageSelected(photoIndex)}
              />
            }
          </Col>,
        );
        photoIndex++;
      }
      return colsToRender;
    };

    const renderRows = () => {
      const rowsToRender = [];
      for (let r = 0; r < rows; r++) {
        rowsToRender.push(
          <Row key={r}>{renderCols()}</Row>,
        );
      }
      return rowsToRender;
    };

    return (
      <Grid style={styles.container}>
        {renderRows()}
      </Grid>
    );
  }
}
