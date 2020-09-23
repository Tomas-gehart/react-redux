import * as APIUTIL from "../util/session_api_util";
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";


export const receiveCurrentUsers = user => ({
    type: RECEIVE_CURRENT_USER,
    user
});

export const receiveCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER,
});

export const receiveErrors = () => ({
    type: RECEIVE_SESSION_ERRORS,
});

export const signup = user => dispatch => (
    APIUTIL.signup(user).then(
        user => (dispatch(receiveCurrentUsers(user)),
        errors => dispatch(receiveErrors(errors.responseJSON)))
    ))
);

export const login = user => dispatch => (
    APIUTIL.login(user).then(
        user => (dispatch(receiveCurrentUser(user)),
        errors => dispatch(receiveErrors(errors.responseJSON)))
    ))
);

export const logout = user => dispatch => (
    APIUTIL.logout(user).then(
        user => (dispatch(receiveCurrentUser(user))
    ))
);


// why doesnt logout need errors?