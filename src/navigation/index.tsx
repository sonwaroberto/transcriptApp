import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthStack from './AuthStack';
// import Loader from '../loader/loader';

const App = () => {
  return (
    <NavigationContainer>
      <AuthStack />
    </NavigationContainer>
  );
};

export default App;
