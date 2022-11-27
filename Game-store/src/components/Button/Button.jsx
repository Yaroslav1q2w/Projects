import React from 'react';
import "./Button.scss"
import PropTypes from "prop-types";

const Button = ({children, onClick,className,type}) => {

    return (
        <button type={type} className={className} onClick={onClick}>{children}</button>
    );
};


// Button.propTypes = {
//     children: PropTypes.string.isRequired,
//     onClick: PropTypes.func.isRequired,
// }

export default Button;
