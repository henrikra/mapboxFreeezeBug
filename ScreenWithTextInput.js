import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import Mapbox from '@mapbox/react-native-mapbox-gl';

const ScreenWithTextInput = ({navigator}) => {
  console.log('ScreenWithTextInput');
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <TextInput autoFocus />
      <TouchableOpacity onPress={() => navigator.dismissModal()} style={{width: 75, height: 75, backgroundColor: 'green'}} />
    </View>
  );
};

export default ScreenWithTextInput;