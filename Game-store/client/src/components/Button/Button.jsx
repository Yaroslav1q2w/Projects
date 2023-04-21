import React from "react";
import "./Button.scss";

const Button = ({ children, onClick, className, type }) => {
	return (
		<button type={type} className={className} onClick={onClick}>
			{children}
		</button>
	);
};

export default Button;
