import {StyleSheet} from 'react-native';
import theme from '../../resources/theme';

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: theme.white,
    minHeight: theme.completeScreenHeight * 0.99,
  },
  header: {
    width: theme.screenWidth,
    height: theme.screenHeight * 0.6,
    backgroundColor: theme.primary,
  },
  avatar: {
    width: 80,
    height: 80,
    backgroundColor: theme.white,
    borderRadius: 50,
    alignItems: 'center',
    position: 'absolute',
    alignSelf: 'center',
    top: theme.screenHeight * 0.5,
    borderWidth: 1,
    borderColor: theme.primary
  },
  username: {
    color: theme.primary,
    fontSize: 20,
    fontWeight: '600',
    top: theme.screenHeight * 0.07,

  },
  notification: {
    width: 25,
    height: 25,
    left: theme.screenWidth * 0.03,
    top: theme.screenHeight * 0.02
  },
});

export default styles;
