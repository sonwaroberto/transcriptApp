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
    padding: theme.screenWidth * 0.025,
    paddingTop: theme.screenHeight * 0.02,
  },
  header: {},
  head: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  notification: {
    width: 40,
    height: 40,
  },
  applyContainer: {
    marginTop: 20,
    width: theme.screenWidth * 0.42,
    height: theme.screenHeight * 0.55,
    backgroundColor: theme.primary,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  transContainer: {
    width: theme.screenWidth * 0.42,
    height: theme.screenHeight * 0.25,
    borderWidth: 1,
    borderColor: theme.primary,
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
  },
});

export default styles;
