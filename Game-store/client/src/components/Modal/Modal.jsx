import Button from "../Button";

import {
	Container,
	MainWrapp,
	Header,
	Content,
	ModalButtons,
} from "./StyledModal";
import "./Modal.scss";

const Modal = ({ header, closeModal, text, onClick }) => {
	return (
		<Container onClick={closeModal}>
			<MainWrapp onClick={(e) => e.stopPropagation()}>
				<Header>
					{header}
					<span className="modal__icon-delete" onClick={closeModal}></span>
				</Header>
				<Content>{text}</Content>
				<ModalButtons>
					<Button
						className="button"
						children="Ok"
						backgroundColor="#3c3c64"
						onClick={() => {
							onClick();
							closeModal();
						}}
					/>
					<Button
						className="button"
						children="Cancel"
						backgroundColor="#2b2b46"
						onClick={closeModal}
					/>
				</ModalButtons>
			</MainWrapp>
		</Container>
	);
};

export default Modal;
