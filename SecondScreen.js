import React from 'react';
import { View, Text } from 'react-native';
import Mapbox from '@mapbox/react-native-mapbox-gl';

const SecondScreen = () => {
  console.log('SecondScreen');
  return (
    <View style={{ flex: 1, backgroundColor: 'red' }}>
      <Mapbox.MapView
        style={{ flex: 1 }}
        centerCoordinate={[24.9284942, 60.1670202]}
        zoomLevel={12}
      />
      </View>
  );
};

export default SecondScreen;