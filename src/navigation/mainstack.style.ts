import {StyleSheet} from 'react-native';
import theme from '../resources/theme';

export default StyleSheet.create({
  bottomIcons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 12,
  },
  bottomTabTitle: {
    fontSize: 12,
    fontWeight: '500',
    color: theme.white,
    marginTop: 8,
  },
  focused: {
    color: '#1A1B30D9',
    fontSize: 12,
    fontWeight: '500',
    marginTop: 8,
  },
});
