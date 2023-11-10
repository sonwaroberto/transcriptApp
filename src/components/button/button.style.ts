import {StyleSheet} from 'react-native';
import theme from '../../resources/theme';

const styles = StyleSheet.create({
  button: {
    backgroundColor: theme.primary,
    padding: 12,
    width: '100%',
    borderRadius: theme.borderImage,
    cursor: 'pointer',
    color: theme.white,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    textAlign: 'center',
    fontWeight: '600',
    fontSize: theme.fontSizeLarge,
    color: theme.white,
  },
  primaryButton: {
    color: theme.white,
    backgroundColor: theme.primary,
  },
  secondaryButton: {
    color: theme.white,
    backgroundColor: theme.secondary,
  },
  disableBtn: {
    opacity: 0.7,
  },
  loading: {
    marginLeft: 10,
  },
});

export default styles;
