import * as ChannelApiUtil from '../util/channel_api_util';
export const RECEIVE_CHANNELS = 'RECEIVE_CHANNELS';
export const RECEIVE_CHANNEL = 'RECEIVE_CHANNEL';
export const REMOVE_CHANNEL = 'REMOVE_CHANNEL';
export const RECEIVE_CHANNEL_ERRORS = 'RECEIVE_CHANNEL_ERRORS';
export const CLEAR_CHANNEL_ERRORS = 'CLEAR_CHANNEL_ERRORS';


export const receiveChannels = (channels) => { //we need a channel
    return {
        type: RECEIVE_CHANNELS,
        channels
    }
}

export const receiveChannel = (channel) => { //we need channels
    return {
        type: RECEIVE_CHANNEL,
        channel
    }
}

export const removeChannel = (channel) => { //we need to be able to remove a channel
    return {
        type: REMOVE_CHANNEL,
        channel
    }
}

export const receiveErrors = (errors) => { //we need to be able to get errors
    return {
        type: RECEIVE_CHANNEL_ERRORS,
        errors
    }
}

export const clearErrors = () => { //clear errors as well
    return {
        type: CLEAR_CHANNEL_ERRORS
    }
}


export const fetchChannels = () => dispatch => ( //grab channels
  ChannelApiUtil.getChannels().then(channels => (
    dispatch(receiveChannels(channels)))
    ));

export const fetchChannel = channelId => dispatch => ( //grab a channel
  ChannelApiUtil.getChannel(channelId).then(channel => (
    dispatch(receiveChannel(channel)))
    ));

export const createChannel = channel => dispatch => ( //create channel
  ChannelApiUtil.postChannel(channel).then(channel => dispatch(
    receiveChannel(channel)), errors => dispatch(receiveErrors(errors.responseJSON))
    ));

export const updateChannel = (channel) => dispatch => ( //update channel
  ChannelApiUtil.patchChannel(channel).then(channel => (
    dispatch(receiveChannel(channel))
)));

export const deleteChannel = (channel) => dispatch => ( //delete channel
  ChannelApiUtil.deleteChannel(channel).then(channel => (
    dispatch(removeChannel(channel))
)));