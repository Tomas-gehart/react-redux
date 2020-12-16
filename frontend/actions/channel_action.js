export const RECEIVE_CHANNEL = "RECEIVE_CHANNEL";
export const RECEIVE_CHANNELS = "RECEIVE_CHANNELS";
import * as channelsAPI from "../util/channel_api_util";

export const receivechannel = (channels) => {
  return {
    type: RECEIVE_CHANNEL,
    channels,
  };
};

export const receivechannels = (payload) => ({
  type: RECEIVE_CHANNELS,
  payload,
});

export const fetchchannels = () => (dispatch) => {
  return channelsAPI
    .fetchchannels()
    .then((res) => dispatch(receivechannels(res)));
};

export const fetchchannel = (id) => (dispatch) => {
  return channelsAPI
    .fetchchannel(id)
    .then((res) => dispatch(receivechannels(res)));
};

export const createchannels = (channels) => (dispatch) => {
  return channelsAPI
    .createchannel(channels)
    .then((res) => dispatch(receivechannels(res)));
};
