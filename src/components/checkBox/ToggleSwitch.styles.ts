import {StyleSheet} from 'react-native';
import theme from '../../resources/theme';

const styles = StyleSheet.create({
  switch: {
    width: 51,
    height: 31,
  },
  checkWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    columnGap: 8,
  },
  checkBox: {
    height: 20,
    aspectRatio: 1,
    borderRadius: 5,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  roundcheckBox: {
    height: 20,
    aspectRatio: 1,
    borderRadius: 20,
    borderWidth: 1.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  roundCheck: {
    height: 11.1,
    aspectRatio: 1,
    borderRadius: 30,
  },
  checkText: {
    fontSize: 16,
    opacity: 0.7,
    color: theme.black,
  },
});

export default styles;
