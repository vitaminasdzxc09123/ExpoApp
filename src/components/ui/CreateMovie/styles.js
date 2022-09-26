import {StyleSheet}   from 'react-native';
import theme          from '../../../theme';

const styles = StyleSheet.create({
  container: {
  paddingHorizontal  : 16
  },
  input: {
    width            : '100%',
    marginTop        : 50,
    height           : 40,
    paddingLeft      : 10,
    borderRadius     : 10,
    backgroundColor  : theme.LIGHT_MAIN,
    alignSelf        : 'center',
  },
  formatMovieContainer: {
    width            : '100%',
    alignSelf        : 'center',
  },
  buttonContainer: {
    alignSelf        : 'center',
    marginTop        : 30,
    height           : 40,
    borderRadius     : 16,
    backgroundColor  : theme.MAIN,
  },
  buttonTitle: {
    marginTop        : 10,
    marginHorizontal : 50,
    alignSelf        : 'center',
    color            : theme.WHITE
  }
});
export default styles;
