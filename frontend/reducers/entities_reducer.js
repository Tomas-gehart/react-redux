import {combineReducers} from 'redux';
import usersReducer from './users_reducers';
import channelsReducer from './channel_reducers';
import messagesReducer from './message_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    channels: channelsReducer,
    messages: messagesReducer,
});

export default entitiesReducer;