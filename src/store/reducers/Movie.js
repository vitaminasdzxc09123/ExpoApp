import ACTIONS from '../constants/actionsTypes';

const initialState = {
    list     : []
};

export default (state = initialState, action = {}) => {
    const { type } = action;

    switch (type) {
        case ACTIONS.GET_MOVIE_LIST:
            return { ...state, list : action.data };
        default:
            return state;
    }
};
