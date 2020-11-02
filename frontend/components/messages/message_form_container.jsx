import { connect } from "react-redux";
import MessageForm from "./message_form";
import { withRouter } from "react-router-dom";
import {receiveMessage} from "../../actions/message_actions";

const msp = (state, ownProps) => {
  return {
    currentUser: state.entities.users[state.session.id],
    channel: state.entities.channels[ownProps.match.params.channelId],
  };
};

const mdp = (dispatch) => {
  return {
    newMessage: (message) => dispatch(receiveMessage(message)),
  };
};
export default withRouter(connect(msp, mdp)(MessageForm));