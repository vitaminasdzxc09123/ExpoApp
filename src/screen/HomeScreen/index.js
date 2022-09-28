import React, {
  useCallback, 
  useEffect, 
  useMemo, 
  useState
}                            from 'react';
import {
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
}                                from 'react-native';

import {
  useDispatch,
  useSelector
}                                from 'react-redux';
import ROUTES                    from '../../constants/Routs';

import styles                    from './styles';
import CreateMovieModal          from '../../components/modal/CreateMovieModal';
import { useAppState }           from '../../context/AppState';
import { 
  getMovies, 
  deleteMovie, 
  getInfoMovie
}                                from '../../store/actions/Movies';
import FilmDetails               from '../../components/modal/FilmDetails';
import { homeMovieListSelector } from '../../store/selectors/Movie';
import AsyncStorage              from '@react-native-async-storage/async-storage';

function HomeScreen({navigation}) {
  const dispatch = useDispatch();

  const [info, setInfo] = useState('');
  const [search, setSearch] = useState('');

  const { setIsVisibleDetailedFilmModal, setIsVisibleCreateFilmModal} = useAppState();
  const movieList = useSelector(homeMovieListSelector)

  const inputDataSearch = useMemo(() => {
    const sortData = movieList.data?.sort((a, b) => a.title.localeCompare(b.title)) 
    const filterData = sortData?.filter(el => el.title.includes(search))

    return filterData || []

    }, [movieList,search]);

  const removeMovie = async (id) => {
      await dispatch(deleteMovie(id));
  };

  const getInfo = async(id) => {
      const getDataMovies = await dispatch(getInfoMovie(id));
        setInfo(getDataMovies.data.actors.map((item)=> item.name));
        setIsVisibleDetailedFilmModal(true);
  };

  const handleResetAccount = async () => {
     await AsyncStorage.removeItem('token')
     navigation.replace(ROUTES.AUTH_STACK)
  }

   const renderItem = useCallback((item) => {
        return (
           <TouchableOpacity 
              onPress = {() => getInfo(item.id)}
              style   = {styles.containerBlock}>
           <View style = {styles.titleContainer}>
              <Text style = {styles.title}>{item.title}</Text>
              <Text style = {styles.title}>{item.year}</Text>
              <Text style = {styles.title}>{item.format}</Text>
            </View>
              <TouchableOpacity
                onPress = {() => removeMovie(item.id)}
                style   = {styles.deleteButton}>
                <Text style = {styles.titleDeleteMovie}>Delate</Text>
              </TouchableOpacity>
          </TouchableOpacity>
        );
    }, []);

  return (
    <View style = {styles.container}>
      <CreateMovieModal/>
       <FilmDetails data = {info}/>
     <TextInput
        style        = {styles.searchBar}
        value        = {search}
        placeholder  = {'Search'}
        onChangeText = {setSearch}
      />
      <TouchableOpacity
         onPress = {() => setIsVisibleCreateFilmModal(true)}
         style   = {styles.createButton}>

        <Text style={styles.titleAdd}>Add</Text>

      </TouchableOpacity>
   
      <FlatList
        style        = {styles.flatlist}
        data         = {inputDataSearch}
        renderItem   = {({item}) => renderItem(item)}
        keyExtractor = {(item, index) => index.toString()}
      />
      <TouchableOpacity
        onPress = {handleResetAccount}
        style   = {styles.resetButton}>
        <Text style = {styles.titleReset}>Exit</Text>
      </TouchableOpacity>
    </View>
  );
}

export default React.memo(HomeScreen);