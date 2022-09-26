import {StyleSheet}      from 'react-native';
import theme             from '../../../theme';

const styles = StyleSheet.create({
  container: {
      paddingHorizontal : 16,
      marginTop         : 70
  },
  headerTitle: {
    alignSelf           : 'center',
    marginTop           : 60,
    fontSize            : 20,
  },
  inputContainer: {
    width               : '100%',
    marginTop           : 10,
    margin              : 12,
    borderRadius        : 16,
    borderColor         : theme.MAIN,
    borderWidth         : 1,
    padding             : 10,
    alignSelf           : 'center',
  },

  TextSecond: {
    alignSelf           : 'center',
    fontSize            : 16,
    marginTop           : 10,
    color               : 'black',
  },
  TextEmail: {
    width               : 300,
    marginTop           : 100,
    height              : 40,
    margin              : 12,
    borderWidth         : 1,
    padding             : 10,
    alignSelf           : 'center',
  },
  TextPassword: {
    marginTop           : 30,
    width               : 300,

    alignSelf           : 'center',
    height              : 40,
    margin              : 12,
    borderWidth         : 1,
    padding             : 10,
  },

  buttonLogin: {
    alignItems          : 'center',
    backgroundColor     : '#416AA8',
    marginTop           : 50,
    padding             : 10,
    width               : 250,
    alignSelf           : 'center',
  },
   button: {
    alignItems          : 'center',
    backgroundColor     : theme.MAIN,
    marginTop           : 50,
    padding             : 16,
    width               : '100%',
    borderRadius        : 16,
    alignSelf           : 'center',
  },
   buttonTitle: {
    fontSize            : 18,
    color               : theme.WHITE
  }
});
export default styles;
