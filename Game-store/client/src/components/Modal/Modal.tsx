import Button from "../Button";

import {
	Container,
	MainWrapp,
	Header,
	Content,
	ModalButtons,
} from "./StyledModal";
import "./Modal.scss";

interface ModalProps {
	header: string;
	closeModal: () => void;
	text: React.ReactNode;
	onClick: () => void;
}

const Modal: React.FC<ModalProps> = ({ header, closeModal, text, onClick }) => {
	return (
		<Container onClick={closeModal}>
			<MainWrapp
				onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}
			>
				<Header>
					{header}
					<span className="modal__icon-delete" onClick={closeModal}></span>
				</Header>
				<Content>{text}</Content>
				<ModalButtons>
					<Button
						type="button"
						className="button"
						children="Ok"
						onClick={() => {
							onClick();
							closeModal();
						}}
					/>
					<Button className="button" children="Cancel" onClick={closeModal} />
				</ModalButtons>
			</MainWrapp>
		</Container>
	);
};

export default Modal;
