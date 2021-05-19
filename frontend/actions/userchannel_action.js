export const RECEIVE_USER_channels = 'RECEIVE_USER_channels';
export const RECEIVE_USER_channels = 'RECEIVE_USER_channels';
import * as userchannelsAPI from '../util/userchannels_api_util';

export const receiveUserchannels = (user_channels) => {
    return {
        type: RECEIVE_USER_channels,
        user_channels
    };
};

export const receiveUserchannels = (payload) => {
    return {
        type: RECEIVE_USER_channels,
        payload
    };
};

export const fetchUserchannels = () => (dispatch) => {
    return userchannelsAPI.fetchUserchannels().then(res => dispatch(receiveUserchannels(res)));
};

export const createUserchannels = (userchannels) => (dispatch) => {
    return userchannelsAPI.createUserchannels(userchannels).then(res => dispatch(receiveUserchannels(res)));
};