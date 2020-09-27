import { connect } from 'react-redux';
import SessionForm from './session_form';
import { signup } from '../actions/session_action';


const mstp = (state, ownProps) => {
    const userId = ownProps.match.params.id;
    return {
        currentUser: state.entities.users[userId],
        formType: 'Signup',
        errors: state.errors
    }
}

const mdtp = dispatch => {
    return {processForm: user => dispatch(signup(user)),};

};

export default connect(mstp, mdtp)(SessionForm);