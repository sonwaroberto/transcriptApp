import {StyleSheet} from 'react-native';
import theme from '../../resources/theme';

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: theme.white,
    minHeight: theme.completeScreenHeight * 0.95,
  },
  section: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flex: 1,
  },
  section1: {
    // marginHorizontal: 24,
  },
  section2: {
    flex: 2,
    borderTopRightRadius: theme.largeBorderRadius,
    borderTopLeftRadius: theme.largeBorderRadius,
    backgroundColor: theme.white,
    marginHorizontal: 20,
  },
  title: {
    fontSize: theme.fontSizeLarge,
    fontWeight: '900',
    color: theme.black,
    textAlign: 'center',
  },
  appName: {
    color: theme.primary,
  },
  appTitle: {
    fontSize: theme.fontSizeXlarge,
  },
  subtitle: {
    fontSize: theme.fontSizeNormal,
    fontWeight: '400',
    color: theme.secondary,
    textAlign: 'center',
    marginVertical: 20,
    lineHeight: 30,
  },
  button: {
    backgroundColor: theme.primary,
    padding: 20,
    width: '100%',
    borderRadius: theme.borderImage,
    cursor: 'pointer',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    resizeMode: 'contain',
    width: '100%',
    height: '100%',
  },
  btnText: {
    color: theme.white,
    textAlign: 'center',
    fontWeight: '600',
    fontSize: theme.fontSizeLarge,
  },
  brandImage: {
    // width: null,
    // height: null,
    resizeMode: 'cover',
  },
  brandWrapper: {
    width: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 300,
  },
  terms: {
    color: theme.secondary,
    fontSize: theme.fontSizeSmall,
  },
  divider: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // marginVertical: 14,
  },
  horizontalRule: {
    width: 100,
    borderTopWidth: 1,
    borderColor: '#1E1E1E80',
  },
  orText: {
    marginHorizontal: 10,
    color: '#1E1E1EB2',
  },
  mapContainer: {
    flex: 1,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },  
});

export default styles;
