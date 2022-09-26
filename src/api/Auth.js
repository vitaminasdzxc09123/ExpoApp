import Base from './Base.js';

export default class AuthAPI extends Base {
    async signUp(payload) {
        return this.apiClient.post({
            requestURL : '/users',
            payload
        });
    }
    async signIn(payload) {
        return this.apiClient.post({
            requestURL : '/sessions',
            payload
        });
    }
}
