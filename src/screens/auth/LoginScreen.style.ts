import {StyleSheet, TextStyle} from 'react-native';
import theme from '../../resources/theme';

const styles = StyleSheet.create({
  safeContainer: {
    backgroundColor: theme.white,
  },
  container1: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    position: 'relative',
  },
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginHorizontal: 20,
    flexGrow: 1,
    minHeight: theme.completeScreenHeight * 0.95,
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: theme.gray,
    fontSize: theme.fontSizeLarge,
  },
  textBold: {
    fontSize: theme.fontSizeLarge,
    color: theme.primary,
    marginBottom: 14,
    fontWeight: theme.fontWeightHeavy as TextStyle['fontWeight'],
  },
  inputInvalidText: {
    fontSize: theme.fontSizeExtraSmall,
    color: theme.error,
  },
  formContainer: {
    width: '100%',
  },

  icon: {
    width: 30,
    height: 30,
  },

  signUpContainer: {
    flexDirection: 'row',
    // marginVertical: 40,
  },
  text2: {
    color: theme.black,
    fontSize: theme.fontSizeNormal,
    fontWeight: '600',
  },
  textSignUp: {
    color: theme.primary,
  },
  buttonWrapper: {
    width: '100%',
    marginTop: 30,
  },
  forgotContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 16,
  },
  textForgot: {
    color: theme.primary,
    fontWeight: '600',
  },
  rememberMe: {
    fontWeight: '600',
  },
});

export default styles;
