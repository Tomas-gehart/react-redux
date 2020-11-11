import React from "react";
import { connect } from "react-redux";
import { createroom } from "../../actions/room_action";
import { withRouter } from "react-router-dom";
import { closeModal } from "../../actions/modal_actions";

import roomForm from "./roomForm";

const mSTP = (state) => {
  return {
    room: { name: "", details: "", private: false },
  };
};

const mDTP = (dispatch) => {
  return {
    processForm: (room) => dispatch(createroom(room)),
    closeModal: () => dispatch(closeModal()),
  };
};

export default withRouter(connect(mSTP, mDTP)(roomForm));
