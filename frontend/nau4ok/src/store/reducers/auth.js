import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../utility';

const initialState = {
    token: null,
    error: null,
    loading: false,
    username: null,
    userId: null,
    first_name: null,
    last_name: null,
    birth_date: null,
    location: null,
    avatar: null,
    is_author: null,

}

const authStart = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
    });
}

const authSuccess = (state, action) => {
    return updateObject(state, {
        token: action.user.token,
        error: null,
        loading: false,
        username: action.user.username,
        userId: action.user.userId,
        first_name: action.user.first_name,
        last_name: action.user.last_name,
        birth_date: action.user.birth_date,
        location: action.user.location,
        avatar: action.user.avatar,
        is_author: action.user.is_author,

    });
}

const authFail = (state, action) => {
    return updateObject(state, {
        error: action.error,
        loading: false
    });
}

const authLogout = (state, action) => {
    return updateObject(state, {
        token: null
    });
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.AUTH_START:
            return authStart(state, action);
        case actionTypes.AUTH_SUCCESS:
            return authSuccess(state, action);
        case actionTypes.AUTH_FAIL:
            return authFail(state, action);
        case actionTypes.AUTH_LOGOUT:
            return authLogout(state, action);
        default:
            return state;
    }
}

export default reducer;