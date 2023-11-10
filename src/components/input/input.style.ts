import {StyleSheet} from 'react-native';
import theme from '../../resources/theme';

const styles = StyleSheet.create({
  textInput: {
    borderRadius: 10,
    color: theme.gray,
    flex: 1,

    // padding: 14,
    height: 50,
  },
  textInputContainer: {
    width: '100%',
  },
  inputInvalidText: {
    fontSize: theme.fontSizeExtraSmall,
    color: theme.error,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: theme.whiteShape,
    borderRadius: 12,
    paddingHorizontal: 16,
    columnGap: 8,
    height: 50,
    marginVertical: 10,
  },
});

export default styles;
