import React from 'react';
import PropTypes from 'prop-types';
import { Button, Text, View } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';

import SelectPhotos from '../../components/SelectPhotos';
import styles from './styles';

class HomeScreen extends React.Component {
  static navigationOptions = {
    headerStyle: { display: 'none' },
  };

  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
  };

  state = {
    photos: [],
    nPhotos: 6,
  }

  onImageSelected = id => (photo) => {
    const photos = this.state.photos;
    photos[id] = photo;
    this.setState({ photos: photos.filter(p => p !== undefined) });
  }

  render() {
    return (
      <Grid style={styles.container}>
        <Row size={1}>
          <Col>
            <View style={styles.text}>
              <Text style={styles.caption}>
                {'Select photos and play!'.toUpperCase()}
              </Text>
              <Text style={styles.title}>Memory Game</Text>
            </View>
          </Col>
        </Row>
        <Row size={3}>
          <SelectPhotos
            nPhotos={this.state.nPhotos}
            onImageSelected={this.onImageSelected}
          />
        </Row>
        <Row size={1}>
          <View style={styles.playButton}>
            <Button
              title="Play!"
              disabled={this.state.photos.length !== this.state.nPhotos}
              onPress={() => this.props.navigation.navigate('Cards', { photos: this.state.photos })}
            />
          </View>
        </Row>
      </Grid>
    );
  }
}

export default HomeScreen;
