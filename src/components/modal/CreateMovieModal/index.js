import React, {useCallback} from 'react';
import {
  Modal,
  Text,
  TouchableOpacity,
  View,
}                           from 'react-native';
import { useAppState }      from '../../../context/AppState';

import CreateMovie          from '../../ui/CreateMovie';

import styles               from './styles';

const MOCKED_TEXT = {
  headerTitle : 'New Movie',
  close : 'Close'
}

function CreateMovieModal() {
  const { isVisibleCreateFilmModal, setIsVisibleCreateFilmModal} = useAppState();

  const fetchData = useCallback(async() => {
      const getDataMovies = await dispatch(getMovies());
      dispatch(setMovies(getDataMovies.data)); 
   }, []);

  return (
    <Modal visible = {isVisibleCreateFilmModal}>
        <TouchableOpacity
            style   = {styles.closeButton}
            onPress = {() => setIsVisibleCreateFilmModal(false)}>
            <Text>
              {MOCKED_TEXT.close}
            </Text>
        </TouchableOpacity>
          <Text style = {styles.headerTitle}>
           {MOCKED_TEXT.headerTitle}
          </Text>
          <CreateMovie updateData = {fetchData}/>
      </Modal>
  );
}

export default React.memo(CreateMovieModal);