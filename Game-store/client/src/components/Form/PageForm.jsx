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
				{({ errors, touched }) => (
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
							error={errors.name && touched.name}
							type="text"
						/>
						<Input
							name="lastName"
							placeholder="Фамилия"
							error={errors.lastName && touched.lastName}
							type="text"
						/>
						<Input
							name="age"
							placeholder="Возраст"
							error={errors.age && touched.age}
							type="number"
						/>
						<Input
							name="region"
							placeholder="Адрес доставки"
							error={errors.region && touched.region}
							type="text"
						/>
						<Input
							name="phone"
							placeholder="Телефон"
							error={errors.phone && touched.phone}
							type="tel"
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
