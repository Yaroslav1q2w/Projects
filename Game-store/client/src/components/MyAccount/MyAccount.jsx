import { useDispatch } from "react-redux";
import { useUserData } from "../../hooks/useUserData";

import {
	Wrapper,
	ContentInner,
	Header,
	MainButtons,
	ButtonItem,
	IconOrders,
	IconFavourite,
	IconExit,
} from "./StyledMyAccount";
import { clearDataAuth, clearDataRegister } from "../../reducers";
import { useNavigate } from "react-router-dom";

const MyAccount = () => {
	const { firstName, lastName } = useUserData();

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const ExitUser = () => {
		dispatch(clearDataRegister());
		dispatch(clearDataAuth());

		navigate("/");
	};

	return (
		<Wrapper>
			<ContentInner>
				<Header>
					<span>Hello, </span> {firstName} {lastName}
				</Header>
				<MainButtons>
					<ButtonItem>
						<IconOrders /> <span>Мої Замовлення</span>
					</ButtonItem>
					<ButtonItem>
						<IconFavourite />
						<span>Вибрані</span>
					</ButtonItem>
					<ButtonItem onClick={ExitUser}>
						<IconExit />
						<span>Вийти</span>
					</ButtonItem>
				</MainButtons>
			</ContentInner>
		</Wrapper>
	);
};

export default MyAccount;
