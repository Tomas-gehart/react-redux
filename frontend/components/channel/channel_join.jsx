import { connect } from "react-redux";
import { closeModal } from "../../actions/modal_action";
import JoinChannelForm from "./channel_join_container";
import { fetchChannels } from "../../actions/channel_action";
import {createUserChannel,fetchUserChannels} from "../../actions/userchannel_action";

const mapStateToProps = (state) => {
  return {
    errors: state.errors.session,
    formType: "Join Channel",
    currentUser: state.entities.users[state.session.id],
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    processForm: (userChannel) => {
      return dispatch(createUserChannel(userChannel));
    },
    closeModal: () => dispatch(closeModal()),
    fetchChannels: () => dispatch(fetchChannels()),
    fetchUserChannels: () => dispatch(fetchUserChannels()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(JoinChannelForm);
