import axios from 'axios';
import * as actionTypes from './actionTypes';
import * as constants from '../../constants';

export const searchChanged = text => {
    return {
        type: actionTypes.SEARCH_CHANGED,
        text: text
    }
};

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    }
};

export const authSuccess = user => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        user: user
    }
};

export const authFail = error => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    }
};

export const logout = () => {
    localStorage.removeItem('user');
    return {
        type: actionTypes.AUTH_LOGOUT
    };
};

export const checkAuthTimeout = expirationTime => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout());
        }, expirationTime * 1000)
    }
};

export const authLogin = (username, password) => {

    return dispatch => {
        dispatch(authStart());

        axios.post(`${constants.LOCALHOST}/rest-auth/login/`, {
            username: username,
            password: password
        })
            .then(res => {
                const user = {
                    token: res.data.key,
                    username: res.data.user_info.username,
                    userId: res.data.user,
                    first_name: res.data.user_info.first_name,
                    last_name: res.data.user_info.last_name,
                    birth_date: res.data.user_info.birth_date,
                    location: res.data.user_info.location,
                    avatar: res.data.user_info.avatar,
                    is_author: res.data.user_info.is_author,
                    expirationDate: new Date(new Date().getTime() + 86400 * 1000)
                };
                localStorage.setItem("user", JSON.stringify(user));

                dispatch(authSuccess(user));
                dispatch(checkAuthTimeout(86400));
            })
            .catch(err => {
                dispatch(authFail(err))
            })
    }
};

export const authSignup = (username, first_name, last_name, email, password1, password2) => {
    return dispatch => {
        dispatch(authStart());

        const is_author = 0;

        const user = {
            username, first_name, last_name, email, password1, password2, is_author
        };
        axios.post(`${constants.LOCALHOST}/rest-auth/registration/`, user)
            .then(res => {
                const user = {
                    token: res.data.key,
                    username: res.data.user_info.username,
                    userId: res.data.user,
                    first_name: res.data.user_info.first_name,
                    last_name: res.data.user_info.last_name,
                    birth_date: res.data.user_info.birth_date,
                    location: res.data.user_info.location,
                    avatar: res.data.user_info.avatar,
                    is_author: res.data.user_info.is_author,
                    expirationDate: new Date(new Date().getTime() + 86400 * 1000)
                };

                localStorage.setItem("user", JSON.stringify(user));

                dispatch(authSuccess(user));
                dispatch(checkAuthTimeout(86400));
            })
            .catch(err => {
                dispatch(authFail(err))
            })
    }
};

export const authCheckState = () => {
    return dispatch => {
        const user = JSON.parse(localStorage.getItem("user"));
        if (user === undefined || user === null) {
            dispatch(logout());
        } else {
            const expirationDate = new Date(user.expirationDate);
            if (expirationDate <= new Date()) {
                dispatch(logout());
            } else {
                dispatch(authSuccess(user));
                dispatch(checkAuthTimeout((expirationDate.getTime() - new Date().getTime()) / 1000));
            }
        }
    }
};

