import { Formik, Form } from "formik";
import Input from "./components/Input/Input";
import { createOrder, modalSubmitOpen } from "../../reducers";
import { validationSchema } from "./validation";
import { useDispatch, useSelector } from "react-redux";
import { formClose } from "../../reducers";
import Button from "../Button";
import { ContainerForm, Header, CloseItemForm } from "./StyledPageForm";
import { basketSelector } from "../../selectors";

const PageForm = () => {
	const dispatch = useDispatch();
	const cards = useSelector(basketSelector);

	const formInfoUser = (values) => {
		const data = {
			name: values.name,
			lastName: values.lastName,
			region: values.region,
			phone: values.phone,
			age: values.age,
			products: cards,
		};

		console.log(data);

		dispatch(createOrder(data));
		dispatch(formClose());
		dispatch(modalSubmitOpen());
	};

	return (
		<ContainerForm>
			<Formik
				initialValues={{
					name: "",
					lastName: "",
					age: "",
					region: "",
					phone: "",
				}}
				onSubmit={(values) => formInfoUser(values)}
				validationSchema={validationSchema}
			>
				{() => (
					<Form>
						<Header>
							<h3 className="header__title">Заполните свои данные</h3>
							<div className="close__form">
								<CloseItemForm
									onClick={() => {
										dispatch(formClose());
									}}
								/>
							</div>
						</Header>
						<Input
							name="name"
							placeholder="Имя"
							type="text"
							className="form-control"
						/>
						<Input
							name="lastName"
							placeholder="Фамилия"
							type="text"
							className="form-control"
						/>
						<Input
							name="age"
							placeholder="Возраст"
							type="number"
							className="form-control"
						/>
						<Input
							name="region"
							placeholder="Адрес доставки"
							type="text"
							className="form-control"
						/>
						<Input
							name="phone"
							placeholder="Телефон"
							type="tel"
							className="form-control"
						/>
						<div className="btn__form">
							<Button
								type="submit"
								children="Отправить"
								className="form__button"
							/>
						</div>
					</Form>
				)}
			</Formik>
		</ContainerForm>
	);
};

export default PageForm;
