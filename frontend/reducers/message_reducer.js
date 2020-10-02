import { RECEIVE_MESSAGE, RECEIVE_ALL_MESSAGES} from "../actions/message_actions";

const messageReducer = (state = {}) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_MESSAGE:
            let newState = Object.assign({}, state);
            newState[action.message.id] = action.message;
            return newState;
        case RECEIVE_ALL_MESSAGES:
            return action.messages;
        default:
            return state;
    }
}

export default messageReducer;