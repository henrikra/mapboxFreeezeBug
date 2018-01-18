import { Navigation } from 'react-native-navigation';

import Home from './Home';
import SecondScreen from './SecondScreen';

// register all screens of the app (including internal ones)
export function registerScreens() {
  Navigation.registerComponent('Home', () => Home);
  Navigation.registerComponent('SecondScreen', () => SecondScreen);
}