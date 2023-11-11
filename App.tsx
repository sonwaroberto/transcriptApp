import React from 'react';
import {store} from './src/redux/store';
import {Provider} from 'react-redux';
import {StatusBar} from 'react-native';
import theme from './src/resources/theme';
import Router from './src/navigation/index';

const App = () => {
  return (
    <Provider store={store}>
      <StatusBar barStyle={'dark-content'} backgroundColor={theme.primary} />
      <Router />
    </Provider>
  );
};

export default App;
