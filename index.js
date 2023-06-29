/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import MainApp from './src/nav/MainApp'
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => MainApp);
