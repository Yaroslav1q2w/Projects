interface IProps {
	children: React.ReactNode;
	onClick: () => void;
	className: string;
	type: "submit" | "reset" | "button";
}

const Button = ({ children, onClick, className, type }: IProps) => {
	return (
		<button type={type} className={className} onClick={onClick}>
			{children}
		</button>
	);
};

export default Button;
