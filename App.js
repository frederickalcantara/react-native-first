import { Navigation } from 'react-native-navigation';
import { registerScreens } from './src/screens/screens';

registerScreens();

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [{
          component: {
            name: 'AuthScreen',
            options: {
              topBar: {
                title: {
                  text: 'Login',
                  alignment: 'center'
                }
              }
            }
          }
        }]
      }
    }
  });
});