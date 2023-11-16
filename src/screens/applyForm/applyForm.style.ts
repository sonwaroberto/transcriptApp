import {StyleSheet, TextStyle} from 'react-native';
import theme from '../../resources/theme';
import Icons, {IconType} from '../../components/icon/icons.component';


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f2f2f2',
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 20,
      paddingTop: 20,
    },
    headerTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      color: 'black',
      marginLeft: 10,
    },
    headerLine: {
      flex: 1,
      height: 1,
      backgroundColor: '#2372E9',
      marginHorizontal: 10,
    },
    formContainer: {
      width: 400,
      padding: 20,
      borderRadius: 10,
      backgroundColor: '#f2f2f2',
    },
    label: {
      marginBottom: 8,
    },
    input: {
      borderRadius: 5,
      padding: 8,
      marginBottom: 16,
      backgroundColor: 'white',
      borderColor: '#2372E9',
      borderWidth: 1,
    },
    genderContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',     
      marginBottom: 16,
    },
    radioButton: {
      flex: 1, // each button takes equal space
      borderRadius: 5,
      padding: 8,
      backgroundColor: 'white',
      borderColor: '#2372E9',
      borderWidth: 1,
      marginLeft: 10, 
    },
    radioText: {
      marginLeft: 10, 
      color: '#2372E9',
    },
  
    submitButton: {
      backgroundColor: '#2372E9',
      borderRadius: 5,
      padding: 10,
      alignItems: 'center',
      justifyContent: 'center',
      borderColor: '#2372E9',  
      borderWidth: 1,        
    },
    
    // *** Load Screen Styles *** //

    loadingContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f2f2f2',
    },
    loadingText: {
      marginTop: 10,
      fontSize: 18,
      color: '#2372E9',
    },

    // *** Scucess Screen Styles ***//

    successContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f2f2f2',
    },
    fireworksAnimation: {
      width: 200,
      height: 200,
    },
    successText: {
      marginTop: 20,
      fontSize: 24,
      color: '#2372E9',
    },
  });
  
  export default styles;