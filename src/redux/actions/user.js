import { USER_LOGIN, USER_LOGOUT } from '../actionTypes';

export function userLogin(login, password) {
    return {
        type: USER_LOGIN,
        payload: {
            login,
            password,
        },
    };
}

export function userLogout() {
    return {
        type: USER_LOGOUT
    };
}