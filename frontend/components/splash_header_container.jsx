import { connect } from 'react-redux';
import { login } from '../actions/session_action';
import SplashPage from './splash_header';

const mstp =  (state) => {
    debugger
    return {
        currentUser: state.entities.users[state.session.id]
    }
};

const mdtp = dispatch => {
    debugger
    return {
        processForm: user => dispatch(login(user)) 
    }
};

export default connect(mstp, mdtp)(SplashPage);