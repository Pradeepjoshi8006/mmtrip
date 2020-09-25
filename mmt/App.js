import {Navigation} from 'react-native-navigation';
import {registerScreens} from './src/registerScreens/Screens';

registerScreens();

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      component: {
        name: 'Login'
      }
    },
  });
});
