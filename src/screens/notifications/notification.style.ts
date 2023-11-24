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
    paddingVertical: 15,
  },
  notification: {
    width: 40,
    height: 40,
  },
  orderIcon: {
    width: 40,
    height: 60,
  },
  headerText: {
    color: theme.black,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '600',
    left: theme.screenWidth * 0.13,
  },
  notifications: {
    flex: 1,
    alignItems: 'center',
    marginVertical: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#DFDFDF',
    borderRadius: 20,
    paddingHorizontal: theme.screenWidth * 0.02,
    paddingTop: theme.screenHeight * 0.03,
    paddingBottom: theme.screenHeight * 0.05,
  },
  message: {
    color: theme.black,
    fontSize: 14,
    top: 8,
    left: -20,
    width: theme.screenWidth * 0.3,
  },
  date: {
    color: theme.grayLight,
    alignSelf: 'flex-end',
    top: 9,
  },
});

export default styles;
