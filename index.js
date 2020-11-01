/**
 * @format
 */
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import Login from './srcFirebase/LoginPage';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Login);
