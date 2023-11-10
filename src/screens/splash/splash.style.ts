import {StyleSheet} from 'react-native';
import theme from '../../resources/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: theme.white,
  },
  logoWrapper: {
    width: 320,
    height: 90,
    marginHorizontal: 'auto',
  },
  logo: {
    width: '100%',
    height: '100%',
  },
});

export default styles;
