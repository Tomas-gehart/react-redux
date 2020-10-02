import * as ChannelApiUtil from '.././util/channel_api_util';
export const RECEIVE_CHANNELS = "RECEIVE_CHANNELS";
export const RECEIVE_CHANNEL = "RECEIVE_CHANNEL";
export const REMOVE_CHANNEL = "REMOVE_CHANNEL";

const receiveChannels = channels => ({
    type: RECEIVE_CHANNELS,
    channels
});

const receiveChannel = channel => ({
    type: RECEIVE_CHANNEL,
    channel
});

const removeChannel = channelId => ({
    type: REMOVE_CHANNEL,
    channelId
});

export const fetchChannels = () => dispatch => (
    ChannelApiUtil.fetchChannels().then(channels => (
        dispatch(receiveChannels(channels))
    ))
);

export const fetchChannel = id => dispatch => (
    ChannelApiUtil.fetchChannel(id).then(channel => (
        dispatch(receiveChannel(channel))
    ))
);

export const createChannel = channel => dispatch => (
    ChannelApiUtil.createChannel(channel).then(channel => (
        dispatch(receiveChannel(channel))
    ))
);

export const deleteChannel = id => dispatch => (
    ChannelApiUtil.deleteChannel(id).then(channel => (
        dispatch(removeChannel(channel))
    ))
);