import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Mapbox from '@mapbox/react-native-mapbox-gl';
import {config} from './config';

Mapbox.setAccessToken(config.accessToken);

class TestBug extends Component {
  state = { visibleBounds: undefined };

  getVisibleBounds = async () => {
    const visibleBounds = await this.map.getVisibleBounds();
    this.setState({ visibleBounds });
  };

  render() {
    const { visibleBounds } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <Mapbox.MapView
          style={{ flex: 1 }}
          centerCoordinate={[24.9284942, 60.1670202]}
          zoomLevel={12}
          onDidFinishRenderingMapFully={this.getVisibleBounds}
          ref={(map) => {
            this.map = map;
          }}
        />
        <Text>
          1st corner: {visibleBounds ? `${visibleBounds[0][0]}, ${visibleBounds[0][1]}` : ''}
        </Text>
        <Text>
          2nd corner: {visibleBounds ? `${visibleBounds[1][0]}, ${visibleBounds[1][1]}` : ''}
        </Text>
      </View>
    );
  }
}

export default TestBug;