export const RECEIVE_USER_channelsS = 'RECEIVE_USER_channelsS';
export const RECEIVE_USER_channels = 'RECEIVE_USER_channels';
import * as userchannelsAPI from '../util/userchannels_api_util';

export const receiveUserchannelss = (user_channelss) => {
    return {
        type: RECEIVE_USER_channelsS,
        user_channelss
    };
};

export const receiveUserchannels = (payload) => {
    return {
        type: RECEIVE_USER_channels,
        payload
    };
};

export const fetchUserchannelss = () => (dispatch) => {
    return userchannelsAPI.fetchUserchannelss().then(res => dispatch(receiveUserchannelss(res)));
};

export const createUserchannels = (userchannels) => (dispatch) => {
    return userchannelsAPI.createUserchannels(userchannels).then(res => dispatch(receiveUserchannels(res)));
};