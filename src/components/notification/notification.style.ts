import {StyleSheet} from 'react-native';
import theme from '../../resources/theme';

const styles = StyleSheet.create({
  mainContainer: {
    position: 'absolute',
    // borderRadius: 10,
    paddingVertical: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.white,
    width: theme.screenWidth * 0.478,
    shadowColor: theme.primary,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 5,
    elevation: 3,
    alignSelf: 'center',
  },
  notificationText: {
    color: theme.white,
    fontSize: theme.fontSizeExtraSmall + 2,
    fontWeight: '700',
    // fontFamily: 'Roboto',
    textAlign: 'center',
  },
});

export default styles;
