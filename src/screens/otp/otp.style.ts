import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  modal: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  modalBody: {
    flex: 1,
    padding: 24,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  modalContent: {
    backgroundColor: 'white',
    paddingHorizontal: 32,
    marginTop: 220,
    borderRadius: 30,
  },
  taraText: {
    marginTop: 40,
    textAlign: 'center',
    fontFamily: 'Roboto',
  },
  taraDescription: {
    marginTop: 18,
    textAlign: 'center',
    fontFamily: 'Open Sans Regular',
    fontSize: 18,
    fontWeight: '400',
    marginBottom: 32,
    color: '#1A1B30B2',
  },
  taraInputContainer: {
    height: 100,
  },
  taraButtons: {
    marginBottom: 40,
  },
  modalPrimaryButton: {marginBottom: 20},
});

export default styles;
