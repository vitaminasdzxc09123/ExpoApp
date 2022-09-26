import ApiClient               from './ApiClient';
import AuthAPI                 from './Auth';
import DEFAULT_API_PREFIX      from '../constants/api'
import MovieAPI                from './Movies';

export default function apiConstruct() {
    const api = new ApiClient(DEFAULT_API_PREFIX);

    return {
        apiClient            : api,
        auth                 : new AuthAPI({ apiClient : api }),
        movie                : new MovieAPI({ apiClient : api})
    };
}
