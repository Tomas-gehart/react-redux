import * as APIUTIL from "../util/session_api_util";
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const CLEAR_ERRORS = 'CLEAR_ERRORS';


export const receiveCurrentUsers = user => ({
    type: RECEIVE_CURRENT_USER,
    user
});

export const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER,
});

export const receiveErrors = (errors) => ({
    type: RECEIVE_SESSION_ERRORS,
    errors 
});

export const clearErrors = () => ({
    type: CLEAR_ERRORS,
});

export const signup = user => dispatch => (
    APIUTIL.signup(user).then(
        user => (dispatch(receiveCurrentUsers(user)),
        errors => dispatch(receiveErrors(errors.responseJSON))
    ))
);

export const login = user => dispatch => {
    return APIUTIL.login(user).then(
        user => { return dispatch(receiveCurrentUsers(user))},
        errors => { 
            debugger 
            return dispatch(receiveErrors(errors.responseJSON))}
    )
};

export const logout = () => dispatch => (
    APIUTIL.logout().then(
        () => (dispatch(logoutCurrentUser())
    ))
);




// why doesnt logout need errors?