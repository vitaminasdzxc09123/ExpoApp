import api from '../../apiSingleton';

export function createAccounts(payload) {
    return async () => {
        try {
            const createAccounts = await api.auth.signUp(payload);
            return createAccounts
         
        } catch (err) {
            console.log('[ERROR] createAccounts', err);
        }
    };
}
export function loginAccounts(payload) {
    return async () => {
        try {
            const loginAccounts = await api.auth.signIn(payload);
            return loginAccounts
         
        } catch (err) {
            console.log('[ERROR] loginAccounts', err);
        }
    };
}