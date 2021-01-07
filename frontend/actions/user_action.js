import { receiveCurrentUsers } from './session_action';
import * as UserApiUtil from '../util/user_api';

export const RECEIVE_USERS = 'RECEIVE_USERS';

const receiveUsers = users => ({
    type: RECEIVE_USERS,
    users
});

export const fetchUsers = () => dispatch => UserApiUtil.fetchUsers()
    .then(users => dispatch(receiveUsers(users)));

export const fetchUser = userId => dispatch => UserApiUtil.fetchUser(userId)
    .then(user => dispatch(receiveCurrentUsers(user)));

export const updateUser = user => dispatch => (
    patchUser(user).then(user => dispatch(receiveUser(user)))
);