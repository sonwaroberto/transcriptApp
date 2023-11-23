import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  headerWrapper: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  headerIcon: {
    left: 20,
    bottom: 8,
    marginBottom: 15,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2372E9',
    marginLeft: 80,
    marginBottom: 10,
  },
  headerLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#2372E9',
    marginHorizontal: 10,
    marginTop: 10,
  },
  tableBlock: {
    flexDirection: 'row',
    marginBottom: 10,
    padding: 10,
  },
  column: {
    flex: 1,
  },
  spaceColumn: {
    width: 10,
  },
  label: {
    fontWeight: 'bold',
  },
  value: {
    flex: 1,
  },
  marginBottom: {
    marginBottom: 5,
  },
  downloadButton: {
    marginTop: 20,
    backgroundColor: '#2372E9',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 50,
    width: 150,
    alignSelf: 'center'
  },
  downloadButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default styles;
