import React from 'react';
import { IoCloseSharp } from "react-icons/io5"

const CloseIcon = ({onClick}) => {
    return (
        <IoCloseSharp fontSize={36} onClick={onClick}/>
    );
};

export default CloseIcon;