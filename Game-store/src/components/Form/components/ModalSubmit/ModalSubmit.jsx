import React from 'react';
import Button from "../../../Button";

import "./ModalSubmit.scss"
import PropTypes from "prop-types";


const ModalSubmit = ({header, closeModal, text, onClick}) => {

    return (
        <div className="modal__submit" onClick={closeModal}>
            <div className="modal__submit-wrap" onClick={(e) => e.stopPropagation()}>
                <div className="modal__submit-content">
                    <strong>{header}</strong> <br/> <hr/>
                    {text}
                </div>
                <div className="button__submit">
                    <Button
                        className="button__submit_form"
                        children="Ok"
                        backgroundColor="#3c3c64"
                        onClick={() => {onClick(); closeModal()}}
                    />
                </div>
            </div>
        </div>
    );
};

ModalSubmit.propTypes = {
    header: PropTypes.string,
    text: PropTypes.string,
    closeModal: PropTypes.func,
}

export default ModalSubmit;
