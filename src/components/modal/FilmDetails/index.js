import React           from 'react';
import {
  Modal,
  Text,
  TouchableOpacity,
  View,
}                      from 'react-native';
import { useAppState } from '../../../context/AppState';

import styles          from './styles';

const MOCKED_TEXT = {
  title : 'Actors in Movie',
  close : 'Close'
}
function FilmDetails({data}) {

  const {
      isVisibleDetailedFilmModal,
      setIsVisibleDetailedFilmModal
    } = useAppState();

  return (
       <Modal 
          animationType = "slide"
          visible       = {isVisibleDetailedFilmModal}>
          <TouchableOpacity
            style   = {styles.button}
            onPress = {() => setIsVisibleDetailedFilmModal(false)}>
            <Text>{MOCKED_TEXT.close}</Text>
          </TouchableOpacity>
          <Text
            style = {styles.title}>
            {MOCKED_TEXT.title}
          </Text>
          <View style   = {styles.containerInfo}>
            <Text style = {styles.titleInfo}>{data}</Text>
          </View>
        </Modal>
  );
}

export default React.memo(FilmDetails);