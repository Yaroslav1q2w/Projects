import * as yup from "yup";

export const validationSchema = yup.object({
	name: yup
		.string()
		.required("Введіть ваше ім'я!")
		.min(2, "Ім'я занадто коротке!"),
	lastName: yup
		.string()
		.required("Введіть ваше прізвище!")
		.min(2, "Прізвище занадто коротке!"),
	age: yup
		.number()
		.positive("Введіть коректний вік")
		.integer("Введіть ціле число")
		.required("Введіть ваш вік!"),
	region: yup
		.string()
		.required("Адреса доставки обов'язкова до заповнення!")
		.min(5, "Занадто мало символів!"),
	phone: yup.number("Введіть ваш телефон!").required("Введіть ваш телефон!"),
});
