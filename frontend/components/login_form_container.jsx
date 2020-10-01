import { connect } from 'react-redux';
import { login, clearErrors } from '../actions/session_action';
import SessionForm from './session_form';

const mstp = ({ session, errors, entities: { users } }) => {
    return {
        currentUser: users[session.id], errors: errors }
};

const mdtp = dispatch => ({
    processForm: user => dispatch(login(user)),
    clearErrors: () => dispatch(clearErrors())
});

export default connect(mstp, mdtp)(SessionForm);
