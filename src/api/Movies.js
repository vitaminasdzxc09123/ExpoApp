import Base from './Base.js';

export default class MovieAPI extends Base {
    async list() {
        return this.apiClient.get({
            requestURL : '/movies',
        });
    }
    async delete(id) {
        return this.apiClient.delete({
            requestURL : `/movies/${id}`,
        });
    }
    async add(payload) {
        return this.apiClient.post({
            requestURL : '/movies',
            payload,
        });
    }
    async details(id) {
        return this.apiClient.get({
            requestURL : `/movies/${id}`,
        });
    }
}
