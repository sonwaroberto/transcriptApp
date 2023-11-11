import React from 'react';
import {store} from './src/redux/store';
import {Provider} from 'react-redux';
import {StatusBar} from 'react-native';
import theme from './src/resources/theme';
import Router from './src/navigation/index';

<<<<<<< HEAD
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import DashboardScreen from './src/screens/dashboard/DashboardScreen';

function App(): JSX.Element {


  return (
    <SafeAreaView>
      <DashboardScreen/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});
=======
const App = () => {
  return (
    <Provider store={store}>
      <StatusBar barStyle={'dark-content'} backgroundColor={theme.primary} />
      <Router />
    </Provider>
  );
};
>>>>>>> 02c2af5da8c5e32aa0aef56e71f1d22c2e926def

export default App;
