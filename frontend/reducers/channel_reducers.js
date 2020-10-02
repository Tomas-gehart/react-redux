import { RECEIVE_CHANNELS, RECEIVE_CHANNEL, REMOVE_CHANNEL} from "../actions/channel_action";

const channelReducer = (prevState = {}, action) => {
    Object.freeze(prevState);
    const nextState = Object.assign({}, prevState)

    switch (action.type) {
        case RECEIVE_CHANNELS:
            return Object.assign(action.channels, nextState);
        case RECEIVE_CHANNEL:
             nextState[action.channel.id] = action.channel;
             return nextState;
        case REMOVE_CHANNEL:
            delete nextState[action.channel.id];
            return nextState;

        default:
            return state;
    }
}

export default channelReducer;