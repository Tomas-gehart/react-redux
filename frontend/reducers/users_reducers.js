import { RECEIVE_CURRENT_USER } from '../actions/session_actions';

const UsersReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return user.reports;
        default:
            return oldState;
    }
}

export default UsersReducer;