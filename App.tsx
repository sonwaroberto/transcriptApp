import React from 'react';
import {store} from './src/redux/store';
import {Provider} from 'react-redux';
import {StatusBar} from 'react-native';
import theme from './src/resources/theme';
import Router from './src/navigation/index';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const App = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <Provider store={store}>
        <StatusBar barStyle={'dark-content'} backgroundColor={theme.primary} />
        <Router />
      </Provider>
    </GestureHandlerRootView>
  );
};

export default App;
