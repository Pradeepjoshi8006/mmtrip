import { Navigation } from 'react-native-navigation';
import { RNNDrawer } from 'react-native-navigation-drawer-extension';
import Drawer from '../screen/Drawer';

export function registerScreens() {
  Navigation.registerComponent('Splash', () => require('../authentication/screen/Splash').default);
  Navigation.registerComponent('Login', () => require('../authentication/screen/Login').default);
  Navigation.registerComponent('Signup', () => require('../authentication/screen/Signup').default);
  Navigation.registerComponent('Home', () => require('../screen/Home').default);
  Navigation.registerComponent('PhoneAuth', () => require('../authentication/screen/PhoneAuth').default);
  Navigation.registerComponent('Mytrip', () => require('../screen/Mytrip').default);
  Navigation.registerComponent('Offers', () => require('../screen/Offers').default);
  Navigation.registerComponent('Tripideas', () => require('../screen/Tripideas').default);
  Navigation.registerComponent('Wallet', () => require('../screen/Wallet').default);
  Navigation.registerComponent('Language', () => require('../screen/Language').default);
  Navigation.registerComponent('UpdateProfile', () => require('../authentication/screen/UpdateProfile').default);
  Navigation.registerComponent('Drawer', () => RNNDrawer.create(Drawer));
}