import { connect } from "react-redux";
import { closeModal } from "../../actions/modal_actions";
import PublicChannelForm from "./public_channel_form";
import { createChannel } from "../../actions/channel_actions";

const mstp = ({ errors }) => {
  return {
    errors: errors.session,
    formType: "new channel",
  };
};

const mdtp = (dispatch) => {
  return {
    processForm: (channel) => dispatch(createChannel(channel)),
    closeModal: () => dispatch(closeModal()),
  };
};

export default connect(mstp, mdtp)(PublicChannelForm);
