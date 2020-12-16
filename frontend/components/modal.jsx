import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import PublicchannelsFormContainer from '../channels_form/public_channels_form_container';
import PrivatechannelsFormContainer from '../channels_form/private_channels_form_container';



function Modal({ modal, closeModal }) {
    if (!modal) {
        return null;
    }
    let component;
    switch (modal) {
        case 'new_public_channels':
            component = <PublicchannelsFormContainer />;
            break;
        case 'new_private_channels':
            component = <PrivatechannelsFormContainer />;
            break;
        default:
            return null;
    }
    return (
        <div className='modal-background'>
            <span className='close-modal-x'>
                <h1 onClick={closeModal}>X</h1>
            </span>
            <div className='modal-child' onClick={e => e.stopPropagation()}>
                {component}
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        modal: state.ui.modal
    };
};

const mapDispatchToProps = dispatch => {
    return {
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);