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
    alignItems: 'center',
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
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: '600',
  },
  orders: {
    flex: 1,
    alignItems: 'center',
    marginVertical: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#DFDFDF',
    paddingTop: theme.screenHeight * 0.03,
    paddingBottom: theme.screenHeight * 0.05,
  },
  status: {
    textTransform: 'uppercase',
    textAlign: 'center',
    textAlignVertical: 'center',
    borderRadius: 20,
  },
});

export default styles;
