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
  headerText: {
    color: theme.black,
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: '600'
  }
});

export default styles;
