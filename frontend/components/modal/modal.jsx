import React from 'react';
import { connect } from "react-redux";
import { closeModal } from '../../actions/modal_actions';
import SearchbarContainer from '../searchbar/searchbar_container';

function Modal({ modal, closeModal }) {

    if (!modal) {
        return null;
    }

    let component;
    let modalClass;
    let modalBackgroundClass;

    switch (modal) {
        case "addChannel":
            component = <NewChannelContainer/>; //build this
            break;
        case "addDirectMessage":
            component = <NewDMContainer/>; //build this
            break;
        case "searchChannel":
            component = <SearchbarContainer/>;
            break;
        default:
            return null;
    }

    return (
        <div className={modalBackgroundClass} onClick={closeModal}>
            <div className={modalClass} onClick={(e) => e.stopPropagation()}>
                {component}
            </div>
        </div>
    );
}

const mstp = (state) => {
    return {
        modal: state.ui.modal,
    };
};

const mdtp = (dispatch) => {
    return {
        closeModal: () => dispatch(closeModal()),
    };
};

export default connect(mstp, mdtp)(Modal);