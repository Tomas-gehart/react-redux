import React from "react";
import { connect } from "react-redux";
import { createchannels } from "../../actions/channel_action";
import { withRouter } from "react-router-dom";
import { closeModal } from "../../actions/modal_actions";

import channelsForm from "./channelform";

const mSTP = (state) => {
  return {
    channels: { name: "", details: "", private: false },
  };
};

const mDTP = (dispatch) => {
  return {
    processForm: (channels) => dispatch(createchannels(channels)),
    closeModal: () => dispatch(closeModal()),
  };
};

export default withRouter(connect(mSTP, mDTP)(channelsForm));
