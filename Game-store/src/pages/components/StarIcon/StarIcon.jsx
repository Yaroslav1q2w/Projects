import React from 'react';
import { AiFillStar } from "react-icons/ai"

const StarIcon = ({onClick}) => {
    return (
        <div className="close-card">
            <AiFillStar fontSize={30} onClick={onClick}/>
        </div>
    );
};

export default StarIcon;