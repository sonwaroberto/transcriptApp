import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingTop: 10,
    paddingBottom: 10,
  },
  backArrow: {
    display: 'flex',
    marginLeft: 12,
  },
  headerName: {
    // fontFamily: 'Roboto',
    fontWeight: '700',
    fontSize: 25,
    color: '#3C3D4F',
    lineHeight: 29,
    marginLeft: 'auto',
    marginRight: 'auto',
    alignSelf: 'center',
  },
});

export default styles;
