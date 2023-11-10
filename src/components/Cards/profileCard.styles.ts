import {StyleSheet} from 'react-native';
import theme from 'resources/theme/theme';

export default StyleSheet.create({
  buttonContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: theme.CIRCLE_BORDER_RADIUS,
    height: 53,
    columnGap: 8,
    backgroundColor: '#F1F1F1',
    paddingHorizontal: 24,
  },
  leftContainerButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  btnText: {
    marginLeft: 16,
    fontWeight: theme.FONT_WEIGHT_NORMAL,
    fontSize: theme.FONT_SIZE_NORMAL,
    color: theme.DARK_COLOR_OPACITY_70,
    fontFamily: 'OpenSans-Regular',
  },
  spaceButton: {
    marginTop: 12,
  },
});
