import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import firebase from '@react-native-firebase/app';

// Your Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDPCI3PeODDo46nhY5B0Mkm9UkGcTYJa24',
  //authDomain: 'YOUR_AUTH_DOMAIN',
  databaseURL: 'https://schoolattendance-9d8c6-default-rtdb.firebaseio.com/',
  projectId: 'schoolattendance-9d8c6',
  storageBucket: 'schoolattendance-9d8c6.appspot.com',
 // messagingSenderId: 'YOUR_MESSAGING_SENDER_ID',
  appId: '1:817088709211:android:950d4a88eb88ba093fb57e',
};

// Initialize Firebase if it hasn't been initialized already
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
AppRegistry.registerComponent(appName, () => App);
