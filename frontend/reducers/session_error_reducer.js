import { RECEIVE_CURRENT_USER, RECEIVE_SESSION_ERRORS} from "../actions/session_action";

//
const SessionErrorsReducer = (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return state;
        case RECEIVE_SESSION_ERRORS:
            return action.errors;
        default:
            return state;
    }
};

export default SessionErrorsReducer;