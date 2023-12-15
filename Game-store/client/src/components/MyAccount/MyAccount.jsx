import { useDispatch, useSelector } from "react-redux";
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
import {
	clearDataAuth,
	clearDataRegister,
	fetchUserInfo,
} from "../../reducers";
import { useNavigate } from "react-router-dom";
import { userSelector } from "../../selectors";
import { useEffect } from "react";

const MyAccount = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const user = useSelector(userSelector);

	console.log(user);

	const userToken = useUserData();

	const ExitUser = () => {
		dispatch(clearDataRegister());
		dispatch(clearDataAuth());

		navigate("/");
	};

	useEffect(() => {
		dispatch(fetchUserInfo(userToken._id));
	}, []);

	return (
		<Wrapper>
			<ContentInner>
				{/* <Header>
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
				</MainButtons> */}
			</ContentInner>
		</Wrapper>
	);
};

export default MyAccount;
