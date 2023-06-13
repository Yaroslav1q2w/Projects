import Button from "../../../Button";
import {
	ModalContainer,
	ModalWrapp,
	ButtonContainer,
} from "./StyledmodalSubmit";

interface ModalSubmitProps {
	header: string;
	closeModal: () => void;
	onClick: () => void;
	text: string;
}

const ModalSubmit = ({
	header,
	closeModal,
	text,
	onClick,
}: ModalSubmitProps) => {
	return (
		<ModalContainer>
			<ModalWrapp
				onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}
			>
				<div className="modal__submit-content">
					<strong>{header}</strong> <br /> <hr />
					{text}
				</div>
				<ButtonContainer>
					<Button
						className="button__submit_form"
						children="Ok"
						onClick={() => {
							onClick();
							closeModal();
						}}
					/>
				</ButtonContainer>
			</ModalWrapp>
		</ModalContainer>
	);
};

export default ModalSubmit;
