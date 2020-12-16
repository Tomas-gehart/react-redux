import { RECEIVE_channelsS, RECEIVE_channels, REMOVE_channels} from "../actions/channels_action";

const channelsReducer = (prevState = {}, action) => {
    Object.freeze(prevState);
    const nextState = Object.assign({}, prevState)

    switch (action.type) {
        case RECEIVE_channelsS:
            return Object.assign(action.channelss, nextState);
        case RECEIVE_channels:
             nextState[action.channels.id] = action.channels;
             return nextState;
        case REMOVE_channels:
            delete nextState[action.channels.id];
            return nextState;

        default:
            return state;
    }
}

export default channelsReducer;