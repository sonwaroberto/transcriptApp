import {StyleSheet} from 'react-native';
import theme from '../../resources/theme';

const styles = StyleSheet.create({
  text: {
    // fontFamily: 'OpenSans-Regular',
    color: theme.black,
    fontSize: theme.fontSizeNormal,
  },
  callToTextWrapper: {
    width: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1.5,
    borderRadius: 30,
    borderColor: theme.secondary,
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: theme.gray,
  },
  callToText: {
    fontWeight: '700',
    fontSize: 18,
    color: theme.tertiary,
    lineHeight: 20,
    // fontFamily: 'Roboto',
  },
});

export default styles;
