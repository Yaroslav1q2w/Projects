import * as yup from "yup";

export const validationSchema = yup.object({
	name: yup
		.string()
		.required("Введите свое имя!")
		.min(2, "Имя слишком короткое!"),
	lastName: yup
		.string()
		.required("Ваша фамилия!")
		.min(2, "Фамилия слишком короткая!"),
	age: yup
		.number()
		.positive("Введите правильный возраст")
		.integer("Введите целое число")
		.required("Введите ваш возраст!"),
	region: yup
		.string()
		.required("Адреса доставки обязательная!")
		.min(5, "Слишком мало символов!"),
	phone: yup.number("Введите ваш телефон!").required("Введите ваш телефон!"),
});
