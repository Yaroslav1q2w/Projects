import { Formik, Form } from "formik";
import Input from "./components/Input/Input";
import { createOrder } from "../../reducers";
import { validationSchema } from "./validation";
import { useDispatch, useSelector } from "react-redux";
import {
	ContainerOrder,
	TitleOrder,
	WrappContent,
	FormWrapperOrder,
	StyledLabelOrder,
	StyledButtonSubmit,
	ContentInner,
	CardsOrder,
	CountItem,
	CardWrappOrder,
	TitleCards,
	ImageWrappOrder,
	DescriptionOrder,
	NameItemOrder,
	PriceOrder,
	FooterContentOrder,
	TotalPriceOrder,
	ButtonShoppingBagOrder,
} from "./StyledOrderForm";
import { basketSelector } from "../../selectors";
import { useUserData } from "../../hooks/useUserData";

const OrderForm = () => {
	const dispatch = useDispatch();
	const cards = useSelector(basketSelector);
	console.log(cards);

	const user = useUserData();

	// const formInfoUser = (values) => {
	// 	const data = {
	// 		name: values.name,
	// 		lastName: values.lastName,
	// 		region: values.region,
	// 		phone: values.phone,
	// 		age: values.age,
	// 		products: cards,
	// 	};

	// 	dispatch(createOrder(data));
	// 	dispatch(formClose());
	// };

	const orderCards = cards?.map((card) => (
		<CardWrappOrder key={card._id}>
			<ImageWrappOrder>
				<img src={card.image} alt="" />
			</ImageWrappOrder>
			<DescriptionOrder>
				<NameItemOrder>{card.title}</NameItemOrder>
				<CountItem>Кількість: {card.count} шт.</CountItem>
				<PriceOrder>{card.price * card.count} грн.</PriceOrder>
			</DescriptionOrder>
		</CardWrappOrder>
	));

	const totalPrice = cards?.reduce(
		(acum, elem) => acum + elem.price * elem.count,
		0
	);

	return (
		<ContainerOrder>
			<ContentInner>
				<TitleOrder>Оформлення замовлення</TitleOrder>

				<WrappContent>
					<FormWrapperOrder>
						<Formik
							initialValues={{
								login: user.login || "",
								email: user.email || "",
								firstName: user.firstName || "",
								lastName: user.lastName || "",
								age: user.age || "",
								region: "",
								phone: "",
							}}
							onSubmit={(values) => console.log(values)}
							validationSchema={validationSchema}
						>
							{() => (
								<Form>
									<StyledLabelOrder>
										<p className="label__text">Логін</p>
										<Input
											name="login"
											placeholder="Логін"
											type="text"
											className="input__elem-order"
										/>
									</StyledLabelOrder>
									<StyledLabelOrder>
										<p className="label__text">E-mail</p>
										<Input
											name="email"
											placeholder="E-mail"
											type="text"
											className="input__elem-order"
										/>
									</StyledLabelOrder>
									<StyledLabelOrder>
										<p className="label__text">Ім'я</p>
										<Input
											name="firstName"
											placeholder="Ім'я"
											type="text"
											className="input__elem-order"
										/>
									</StyledLabelOrder>
									<StyledLabelOrder>
										<p className="label__text">Прізвище</p>
										<Input
											name="lastName"
											placeholder="Прізвище"
											type="text"
											className="input__elem-order"
										/>
									</StyledLabelOrder>
									<StyledLabelOrder>
										<p className="label__text">Вік</p>
										<Input
											name="age"
											placeholder="Вік"
											type="number"
											className="input__elem-order"
										/>
									</StyledLabelOrder>
									<StyledLabelOrder>
										<p className="label__text">Адреса доставки</p>
										<Input
											name="region"
											placeholder="Адреса доставки"
											type="text"
											className="input__elem-order"
										/>
									</StyledLabelOrder>
									<StyledLabelOrder>
										<p className="label__text">Телефон</p>
										<Input
											name="phone"
											placeholder="Телефон"
											type="tel"
											className="input__elem-order"
										/>
									</StyledLabelOrder>
									<StyledButtonSubmit type="submit">
										Замовити
									</StyledButtonSubmit>
								</Form>
							)}
						</Formik>
					</FormWrapperOrder>

					<CardsOrder>
						<>
							<TitleCards>Ваше замовлення</TitleCards>
							{orderCards}

							<FooterContentOrder>
								<TotalPriceOrder>
									Загальна сума : <span>{totalPrice} грн.</span>
								</TotalPriceOrder>
								<ButtonShoppingBagOrder to="/api/basket">
									Редагувати замовлення
								</ButtonShoppingBagOrder>
							</FooterContentOrder>
						</>
					</CardsOrder>
				</WrappContent>
			</ContentInner>
		</ContainerOrder>
	);
};

export default OrderForm;
