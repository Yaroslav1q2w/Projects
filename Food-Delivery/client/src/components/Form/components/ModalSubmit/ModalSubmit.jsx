import Button from "../../../Button";
import {
	ModalContainer,
	ModalWrapp,
	ButtonContainer,
} from "./StyledmodalSubmit";

const ModalSubmit = ({ header, closeModal, text, onClick }) => {
	return (
		<ModalContainer>
			<ModalWrapp onClick={(e) => e.stopPropagation()}>
				<div className="modal__submit-content">
					<strong>{header}</strong> <br /> <hr />
					{text}
				</div>
				<ButtonContainer>
					<Button
						className="button__submit_form"
						children="Ok"
						backgroundColor="#3c3c64"
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
