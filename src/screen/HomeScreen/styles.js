import {StyleSheet}    from 'react-native';
import theme           from '../../theme';

const styles = StyleSheet.create({
  container: {
    flex              : 1,
    marginTop         : 20,
    paddingHorizontal : 16,
    paddingBottom     : 100,
    alignItems        : 'center'
  },
  deleteButton: {
    height            : 40,
    borderRadius      : 20,
    borderWidth       : 1,
    borderColor       : '#8C324C',
  },
  titleContainer: {
    flexDirection     : 'row'
  }, 
  titleDeleteMovie: {
      margin          : 10
  },
  flatlist: {
    alignSelf         : 'center',
    marginTop         : 10,
    width             : '100%',
  },
  title: {
    margin            : 3,
    alignSelf         : 'center',
  },
  containerBlock: {
    marginVertical    : 8,
    padding           : 16,
    flexDirection     : 'row',
    justifyContent    : 'space-between',
    alignItems        : 'center',
    borderRadius      : 16,
    backgroundColor   : theme.LIGHT_MAIN,
  },
  closeModal: {
    position          : 'absolute',
    marginTop         : 50,
    marginLeft        : 10,
  },
  createButton: {
    marginTop         : 40,
    marginLeft        : 10,
    width             : 40,
    height            : 40,
    borderRadius      : 20,
    borderRadius      : 20,
    alignSelf         : 'center',
    borderWidth       : 1,
    borderColor       : '#308745',
  },
  searchBar: {
    width             : '100%',
    marginTop         : 35,
    borderRadius      : 16,
    borderColor       : theme.MAIN,
    borderWidth       : 1,
    height            : 40,
    paddingLeft       : 10,
  },
  titleAdd: {
    alignSelf         : 'center',
    marginTop         : 10,
  },
  resetButton: {
    position          : 'absolute',
    zIndex            : 10,
    bottom            : 50,
    width             : 40,
    height            : 40,
    alignItems        : 'center',
    justifyContent    : 'center',
    borderRadius      : 20,
    borderWidth       : 1,
    borderColor       : 'red',
  },
});
export default styles;
