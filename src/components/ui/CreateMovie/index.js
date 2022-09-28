import React, {useCallback, useState} from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
}                                     from 'react-native';
import { Picker }                     from '@react-native-picker/picker';
import { useDispatch}                 from 'react-redux';

import { addMovie, getMovies }        from '../../../store/actions/Movies';

import styles                         from './styles';
import theme                          from '../../../theme';
import { useAppState }                from '../../../context/AppState';

const FORMAT_MOVIE = {
  VHS : 'VHS',
  DVD : 'DVD',
  BLU_RAY : 'Blu-Ray'
}
const MOCKED_TEXT = {
  buttonTitle : 'Add Movie',
}

function CreateNewFilm() {
  const dispatch = useDispatch();

  const { setIsVisibleCreateFilmModal} = useAppState();

  const [name, setName] = useState();
  const [year, setYear] = useState();
  const [format, setFormat] = useState(FORMAT_MOVIE.VHS);
  const [actors, setActors] = useState();

  const fetchData = useCallback(async() => {
      await dispatch(getMovies());
       }, []);

  const CreateMovie = useCallback(async() => {
     const createNewMovie = await dispatch(addMovie({
        title: name,
        year: year,
        format: format,
        actors: [actors],
    }));
    if(createNewMovie.error) {
      alert(createNewMovie.error.code)
    } else {
      Alert.alert(
      "Success",
      "Movie add",
      [
        {
          text: "ok",
          onPress: () => setIsVisibleCreateFilmModal(false),
        }
      ]
    );
      fetchData()
    }
  },[name,year,format,actors])

  const chooseFormat = useCallback((format) => {
   setFormat(format)
  },[])

  return (
    <View style = {styles.container}>
      <KeyboardAvoidingView
        behavior = {Platform.OS === 'ios' ? 'padding' : 'height'}
        style    = {styles.container}>
        <TextInput
          style                = {styles.input}
          value                = {name}
          placeholder          = "Movie Title"
          placeholderTextColor = {theme.MAIN}
          onChangeText         = {setName}
        />
        <TextInput
          keyboardType         = "default"
          style                = {styles.input}
          value                = {year}
          placeholder          = "Year"
          placeholderTextColor = {theme.MAIN}
          onChangeText         = {setYear}
        />
        <TextInput
          style                = {styles.input}
          value                = {actors}
          placeholder          = "Actors"
          placeholderTextColor = {theme.MAIN}
          onChangeText         = {setActors}
        />
        <Picker
          style          = {styles.formatMovieContainer}
          selectedValue  = {format}
          placeholder    = "video format"
          onValueChange  = {(itemValue) => chooseFormat(itemValue)}>
          <Picker.Item 
            label = {FORMAT_MOVIE.VHS} 
            value = {FORMAT_MOVIE.VHS} 
            />
          <Picker.Item 
            label = {FORMAT_MOVIE.DVD} 
            value = {FORMAT_MOVIE.DVD} 
            />
          <Picker.Item 
            label = {FORMAT_MOVIE.BLU_RAY} 
            value = {FORMAT_MOVIE.BLU_RAY} 
            />
        </Picker>
        <TouchableOpacity 
          onPress = {CreateMovie} 
          style   = {styles.buttonContainer}>
          <Text style = {styles.buttonTitle}>{MOCKED_TEXT.buttonTitle}</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

export default React.memo(CreateNewFilm);