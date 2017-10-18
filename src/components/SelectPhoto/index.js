import React from 'react';
import PropTypes from 'prop-types';
import { Image, TouchableWithoutFeedback, View } from 'react-native';
import { ImagePicker } from 'expo';
import { Ionicons } from '@expo/vector-icons';

import styles from './styles';

export default class SelectPhoto extends React.Component {
  static propTypes = {
    onImageSelected: PropTypes.func.isRequired,
  }

  state = {
    image: null,
  };

  pickImage = async (source) => {
    const pickPhoto = {
      library: ImagePicker.launchImageLibraryAsync,
      camera: ImagePicker.launchCameraAsync,
    };
    const result = await pickPhoto[source]({
      allowsEditing: true,
      aspect: [16, 9],
    });
    if (!result.cancelled) {
      this.setState({ image: result.uri }, () => {
        this.props.onImageSelected(result.uri);
      });
    }
  };

  render() {
    const { image } = this.state;
    const photoClass = image ? styles.borderGrey : styles.borderRed;

    return (
      <View style={[styles.photo, photoClass]}>
        {image ?
          <Image
            style={styles.image}
            source={{ uri: image }}
          />
          :
          <View style={styles.buttons}>
            <TouchableWithoutFeedback onPress={() => this.pickImage('camera')}>
              <Ionicons color="#FFF" name="md-camera" size={32} />
            </TouchableWithoutFeedback>
            <View style={styles.separator} />
            <TouchableWithoutFeedback onPress={() => this.pickImage('library')}>
              <Ionicons color="#FFF" name="md-images" size={32} />
            </TouchableWithoutFeedback>
          </View>
        }
      </View>
    );
  }
}
