import {StyleSheet}  from 'react-native';
import theme         from '../../../theme';

const styles = StyleSheet.create({
  title: {
     alignSelf      : 'center',
     marginTop      : 100,
     fontSize       : 20,
  },
  containerInfo: {
    marginTop       : 100,
    width           : '90%',
    height          : 100,
    backgroundColor : theme.LIGHT_MAIN,
    borderRadius    : 16,
    alignItems      : 'center',
    justifyContent  : 'center',
    alignSelf       : 'center',
  },
  button: {
    marginTop       : 50,
    marginLeft      : 10,
  },
});
export default styles;
