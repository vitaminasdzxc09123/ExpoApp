import AsyncStorage from "@react-native-async-storage/async-storage";

const CONTENT_TYPES = {
    'JSON'                  : 'application/json; charset=utf-8',
    'X_WWW_FORM_URLENCODED' : 'application/x-www-form-urlencoded; charset=utf-8'
};
export default class ApiClient {
    
    constructor(prefix = '') {
         this.token = '';

        if (!prefix) throw new Error('[prefix] required');

        this.prefix = prefix;

        const methods = [ 'get', 'post', 'put', 'patch', 'delete' ];

        methods.forEach(method => {
            this[method] = ({ requestURL, queryParams = {}, payload = {}}) => {
                return this._request({ requestURL, method, queryParams, payload });
            };
        });
    }

    async _request({ requestURL, method, payload = {}, queryParams = {} }) {
        const url     = this._getUrl(requestURL, queryParams);
        const options = this._getRequestOptions(method, payload, queryParams);
        const response = await fetch(url, options);

        return this.processResponse(response, url, requestURL);
    }

    async processResponse(response) {
            const resp = await response.json();

            return resp;
        
    }

    _getUrl(url, params) {
        this._getToken()
        const query = Object.keys(params).length ? `?${this._encodeQueryString(params)}` : '';

        return `${this.prefix}/${url}${query}`;
    }

    async _getToken() {
           const userToken = await AsyncStorage.getItem('token')

        return this.token = userToken;
    }
     _getRequestOptions(method, payload, params) {
        const contentType = this._getContentTypeByMethod(method);
        const body = this._getBodyByContentType(method, payload);

        return {
            headers : {
                'Content-Type'     : contentType,
                'Authorization'    : this.token || '',
            },
            ...(method !== 'get' && { body }),
            method,
            params
        };
    }

    _getContentTypeByMethod(method) {
        return method === 'get'
            ? CONTENT_TYPES.X_WWW_FORM_URLENCODED
            : CONTENT_TYPES.JSON;
    }

    _getBodyByContentType(method, payload) {
        return method !== 'get'
            ? JSON.stringify(payload)
            : {};
    }

    _encodeQueryString(params) {
        return Object.keys(params).map(key => `${key}=${params[key]}`).join('&');
    }
}
