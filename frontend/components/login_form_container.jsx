import React from 'react';
import { connect } from 'react-redux';
import SessionForm from 'session_form';

const mstp = ({ errors }) => {

    return {
        errors: errors,
        formType: "Login",
    };
};

const mdtp = dispatch => {
    return {
        processForm: user => dispatch(login(user)),
    };
};

export default connect(mstp, mdtp)(SessionForm);
