import {StyleSheet} from 'react-native';
import theme from '../../resources/theme';

const styles = StyleSheet.create({
  button: {
    marginHorizontal: 10,
  },
  buttonText: {
    fontSize: 16,
    color: theme.white,
  },
  dot: {
    width: 8,
    height: 8,
    marginHorizontal: 3,
    borderRadius: 50,
  },
});

export default styles;
