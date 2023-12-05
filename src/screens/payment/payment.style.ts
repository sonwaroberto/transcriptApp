import {StyleSheet, TextStyle} from 'react-native';
import theme from '../../resources/theme';
import Icons, {IconType} from '../../components/icon/icons.component';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: '90%',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    elevation: 3, // For Android shadow
    shadowColor: '#000', // For iOS shadow
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  cardImage: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 10,
  },
  cardText: {
    fontSize: theme.fontSizeSmall,
    fontWeight: '300',
    marginBottom: 10,
  },
  inputField: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    marginBottom: 10,
    width: '100%',
  },

  submitButton: {
    backgroundColor: '#2372E9',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#fff',
    borderWidth: 1,
    marginTop: 15,
    marginBottom: 15,
  },

  submitButton2: {
    backgroundColor: 'red',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#fff',
    borderWidth: 1,
    marginBottom: 10,
  },
  buttonWrapper: {
    width: '100%',
    marginTop: 30,
  },
  wrapper2: {
    width: '90%',
    marginTop: 30,
    padding: 16,
  },
});

export default styles;
