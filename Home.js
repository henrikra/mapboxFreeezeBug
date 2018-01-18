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
        />
        <TouchableOpacity onPress={() => this.props.navigator.showModal({
          screen: 'SecondScreen',
          navigatorStyle: { navBarHidden: true }
        })} style={{height: 100, width: 100, backgroundColor: 'red', position: 'absolute', bottom: 20, right: 20}}>
          <Text>New screen</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default TestBug;