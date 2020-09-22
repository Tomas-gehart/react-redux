import {
    RECEIVE_CURRENT_USERS,
    RECEIVE_CURRENT_USER,
} from '../actions/session_actions';

const nullState = Object.freeze({
    UserId: null
});

const sessionReducer = (state = nullState, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_USERS:
            return { UserId: action.User.id };
        case RECEIVE_CURRENT_USER:
            return _nullState;
        default:
            return state;
    }
};

export default sessionReducer;