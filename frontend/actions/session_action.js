export const RECEIVE_CURRENT_USERS = 'RECEIVE_CURRENT_USERS';
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

export const receiveCurrentUsers = user => ({
    type: RECEIVE_CURRENT_USERS,
    user
});

export const receiveCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER,
});

export const receiveErrors = () => ({
    type: RECEIVE_SESSION_ERRORS,
});

export const signup = (user) => (
    APIUTIL.signup(user).then(user => (
        dispatch(receiveCurrentUser(user))
    ))
);

export const login = (user) => (
    APIUTIL.login(user)
        .then(user => (dispatch(receiveCurrentUsers(user))
    ))
);

export const logout = (user) => (
    APIUTIL.logout(user)
        .then(user => (dispatch(receiveCurrentUser(user))
    ))
);
