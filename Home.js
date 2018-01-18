import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Mapbox from '@mapbox/react-native-mapbox-gl';
import {config} from './config';

Mapbox.setAccessToken(config.accessToken);

class TestBug extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Mapbox.MapView
          style={{ flex: 1 }}
          centerCoordinate={[24.9284942, 60.1670202]}
          zoomLevel={12}
          ref={(map) => {
            this.map = map;
          }}
        />
        <TouchableOpacity onPress={() => this.props.navigator.showModal({
          screen: 'SecondScreen'
        })} style={{height: 100}}>
          <Text>New screen</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default TestBug;