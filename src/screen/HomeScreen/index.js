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

function HomeScreen({navigation}) {
  const dispatch = useDispatch();

  const [info, setInfo] = useState('');
  const [search, setSearch] = useState('');

  const { setIsVisibleDetailedFilmModal, setIsVisibleCreateFilmModal} = useAppState();
  const movieList = useSelector(homeMovieListSelector)

  const inputDataSearch = useMemo(() => {
    const sortData = movieList?.data.sort((a, b) => a.title.localeCompare(b.title))
    const filterData = sortData?.filter(el => el.title.includes(search))

    return filterData

    }, [movieList]);

  const removeMovie = async (id) => {
      await dispatch(deleteMovie(id));
  };

  const getInfo = async(id) => {
      const getDataMovies = await dispatch(getInfoMovie(id));
        setInfo(getDataMovies.data.actors.map((item)=> item.name));
        setIsVisibleDetailedFilmModal(true);
  };

  const handleResetAccount = () => {
     navigation.replace(ROUTES.AUTH_STACK)
  }

   const renderItem = useCallback((item) => {
        return (
           <View style = {styles.containerBlock}>
              <TouchableOpacity
                onPress = {() => removeMovie(item.id)}
                style   = {styles.deleteButton}>
                <Text style = {styles.titleDeleteMovie}>Delate</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress = {() => getInfo(item.id)}>
              <Text style = {styles.title}>{item.title}</Text>
              <Text style = {styles.title}>{item.year}</Text>
              <Text style = {styles.title}>{item.format}</Text>
            </TouchableOpacity>

          </View>
        );
    }, []);

  return (
    <View style = {styles.container}>
      <CreateMovieModal/>
       <FilmDetails data = {info}/>
     <TextInput
        style        = {styles.searchBar}
        value        = {search}
        placeholder  = {'search'}
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
        <Text style = {styles.titleReset}>exit</Text>
      </TouchableOpacity>
    </View>
  );
}

export default React.memo(HomeScreen);