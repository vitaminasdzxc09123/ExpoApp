import api from '../../apiSingleton';
import ACTIONS from '../constants/actionsTypes';

export function getMovies() {
    return async (dispatch) => {
        try {
            const getMovies = await api.movie.list();

             dispatch({
                type : ACTIONS.GET_MOVIE_LIST,
                data : getMovies
            });

            return getMovies
         
        } catch (err) {
            console.log('[ERROR] getMovies', err);
        }
    };
}

export function deleteMovie(id) {
    return async (dispatch) => {
        try {
            const removeMovie = await api.movie.delete(id);
              dispatch(getMovies())
            return removeMovie
  
        } catch (err) {
            console.log('[ERROR] deleteMovie', err);
        }
    };
}

export function addMovie(payload) {
    return async (dispatch) => {
        try {
            const addMovie = await api.movie.add(payload);
              dispatch(getMovies())
            return addMovie
  
        } catch (err) {
            console.log('[ERROR] addMovie', err);
        }
    };
}

export function getInfoMovie(id) {
    return async () => {
        try {
            const details = await api.movie.details(id);
            return details
  
        } catch (err) {
            console.log('[ERROR] getInfoMovie', err);
        }
    };
}