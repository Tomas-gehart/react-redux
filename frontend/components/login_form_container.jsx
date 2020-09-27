import { connect } from 'react-redux';
import { login } from '../actions/session_action';
import SessionForm from './session_form';

const mstp = ({ session, entities: { users } }) => {
    return {
    currentUser: users[session.id] }
};

const mdtp = dispatch => ({
    processForm: user => dispatch(login(user))
});

export default connect(mstp, mdtp)(SessionForm);
