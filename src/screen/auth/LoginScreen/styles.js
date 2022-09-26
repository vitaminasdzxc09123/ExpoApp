import {StyleSheet}   from 'react-native';
import theme          from '../../../theme';

const styles = StyleSheet.create({
  container: {
   paddingHorizontal : 16,
   marginTop         : 120
  },
  headerTitle: {
    alignSelf        : 'center',
    marginBottom     : 60,
    fontSize         : 20,
  },
  inputContainer: {
    width            : '100%',
    marginTop        : 10,
    margin           : 12,
    borderRadius     : 16,
    borderColor      : theme.MAIN,
    borderWidth      : 1,
    padding          : 10,
    alignSelf        : 'center',
  },
  button: {
    alignItems       : 'center',
    backgroundColor  : theme.MAIN,
    marginTop        : 50,
    padding          : 16,
    width            : '100%',
    borderRadius     : 16,
    alignSelf        : 'center',
  },
  buttonTitle: {
    fontSize         : 18,
    color            : theme.WHITE
  }

});
export default styles;
