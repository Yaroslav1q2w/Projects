import React from 'react';
import Button from "../Button";

import "./Modal.scss"
import PropTypes from "prop-types";


const Modal = ({header, closeModal, text, onClick}) => {

    return (
        <div className="modal" onClick={closeModal} data-testid="modal">
            <div className="modal__content" onClick={(e) => e.stopPropagation()}>
                <header className="modal__header">
                    {header}
                    <span className="modal__icon-delete" data-testid="modal-exit" onClick={closeModal}></span>
                </header>
                <div className="main__content">
                    {text}
                </div>
                <div className="button__modals">
                    <Button
                        className="button"
                        children="Ok"
                        backgroundColor="#3c3c64"
                        onClick={() => {onClick(); closeModal()}}
                    />
                    <Button
                        className="button"
                        children="Cancel"
                        backgroundColor="#2b2b46"
                        onClick={closeModal}
                    />
                </div>
            </div>
        </div>
    );
};

Modal.propTypes = {
    header: PropTypes.string,
    text: PropTypes.string,
    closeModal: PropTypes.func,
}

export default Modal;
