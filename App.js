import React from 'react';
import { Provider } from 'react-native-paper';
import App from './src';
import { theme } from './src/core/theme';
import * as firebase from 'firebase';
import apiKeys from './key';

const Main = () => {
  if (!firebase.apps.length) {
    console.log('Connected with Firebase');
    firebase.initializeApp(apiKeys.firebaseConfig);
  }

  return (
    <Provider theme={theme}>
      <App />
    </Provider>
  );
};

export default Main;
