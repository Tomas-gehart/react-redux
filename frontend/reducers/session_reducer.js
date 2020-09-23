import {LOGOUT_CURRENT_USER,RECEIVE_CURRENT_USER,} from "../actions/session_action";

const nullState = Object.freeze({
    id: null
});

const sessionReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return { UserId: action.User.id };
        case LOGOUT_CURRENT_USER:
            return nullState;
        default:
            return state;
    }
};

export default sessionReducer;