import { Formik, Form } from "formik";
import {
	Wrapper,
	InputsWrappRegister,
	ButtonRegister,
	ErrorMessage,
	Header,
} from "./StyledRegister";
import { validationRegisterSchema } from "./validation";
import Input from "../../../Form/components/Input";
import { useDispatch, useSelector } from "react-redux";

import { errorDataRegister } from "../../../../selectors";
import { registerFetchData } from "../../../../reducers";

const Register = () => {
	const dispatch = useDispatch();

	const errorMessage = useSelector(errorDataRegister);

	const handleSubmit = (values) => {
		dispatch(registerFetchData(values));
	};
	return (
		<Wrapper>
			<Formik
				initialValues={{
					firstName: "",
					lastName: "",
					login: "",
					email: "",
					password: "",
					confirmPassword: "",
				}}
				validationSchema={validationRegisterSchema}
				onSubmit={handleSubmit}
			>
				{() => (
					<Form>
						<Header>
							Будь ласка, введіть свої дані для створення облікового запису
						</Header>
						<InputsWrappRegister>
							<label>
								<p className="label__text">login</p>
								<Input
									className="form__elem-register"
									name="login"
									placeholder="Логін"
									type="text"
								/>
							</label>
							<label>
								<p className="label__text">Your first name</p>
								<Input
									className="form__elem-register"
									name="firstName"
									placeholder="Ваше ім'я"
									type="text"
								/>
							</label>

							<label>
								<p className="label__text">Your last name</p>
								<Input
									className="form__elem-register"
									name="lastName"
									placeholder="Ваше прізвище"
									type="text"
								/>
							</label>

							<label>
								<p className="label__text">E-mail</p>
								<Input
									className="form__elem-register"
									name="email"
									placeholder="E-mail"
									type="text"
								/>
							</label>

							<label>
								<p className="label__text">Password</p>
								<Input
									className="form__elem-register"
									name="password"
									placeholder="Пароль"
									type="password"
								/>
							</label>

							<label>
								<p className="label__text">Confirm your password</p>
								<Input
									className="form__elem-register"
									name="confirmPassword"
									placeholder="Підтвердіть пароль"
									type="password"
								/>
							</label>

							{errorMessage && (
								<ErrorMessage className="error-message">
									{errorMessage.message}
								</ErrorMessage>
							)}

							<ButtonRegister>
								<button type="submit">register</button>
							</ButtonRegister>
						</InputsWrappRegister>
					</Form>
				)}
			</Formik>
		</Wrapper>
	);
};

export default Register;
