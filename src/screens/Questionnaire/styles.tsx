import {StyleSheet} from 'react-native';
import colors from '../../../res/typography/colors';


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.white,
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 20,
      paddingTop: 10,
    },
    headerText: {
      color: colors.headerText,
      fontSize: 16,
    },
    content: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 20,
    },
    questionText: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 40,
      textAlign: 'center',
    },
    button: {
      backgroundColor: colors.white,
      paddingVertical: 15,
      paddingHorizontal: 30,
      borderRadius: 5,
      marginBottom: 20,
      width: '100%',
      alignItems: 'center',
    },
    buttonText: {
      fontSize: 18,
      color: colors.black,
    },
    nextButton: {
      backgroundColor: colors.primaryColor,
      paddingVertical: 15,
      paddingHorizontal: 30,
      borderRadius: 5,
      margin: 20,
      alignItems: 'center',
    },
    nextButtonText: {
      fontSize: 18,
      color: colors.white,
    },
  });

export default styles;
