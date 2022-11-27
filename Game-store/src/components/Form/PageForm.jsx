import React from 'react';
import {Formik, Form,} from 'formik';
import Input from "./components/Input/Input";
import CloseIcon from "../../pages/components/CloseIcon";
import {modalSubmitOpen} from "../../reducers"
import {validationSchema} from "./validation"

import {useDispatch} from 'react-redux'
import {formClose} from "../../reducers";
import Button from "../Button";

import "./PageForm.scss"


const PageForm = () => {
    const dispatch = useDispatch()

    const formInfoUser = (values) => {
        const infoBasketUser = JSON.parse(localStorage.getItem("basketCount"))
        console.log(infoBasketUser,values)
        dispatch(formClose())
        dispatch(modalSubmitOpen())
    }


    return (
        <div className="page__dashboard">
            <Formik
                initialValues={{
                    name: "",
                    lastName: "",
                    age: "",
                    region: "",
                    phone: "",
                }}
                onSubmit={values => formInfoUser(values)}
                validationSchema={validationSchema}
            >
                {({errors, touched}) => (
                    <Form>
                        <header className="header__form">
                            <h3 className="header__form-title">Заполните свои данные</h3>
                            <div className="close__form">
                                <CloseIcon onClick={() => dispatch(formClose())}/>
                            </div>
                        </header>
                        <Input name="name" placeholder="Имя"
                               error={errors.name && touched.name} type="text"/>
                        <Input name="lastName" placeholder="Фамилия"
                               error={errors.lastName && touched.lastName} type="text"/>
                        <Input name="age" placeholder="Возраст"
                               error={errors.age && touched.age} type="number"/>
                        <Input name="region" placeholder="Адрес доставки"
                               error={errors.region && touched.region}  type="text" />
                        <Input name="phone" placeholder="Телефон"
                               error={errors.phone && touched.phone} type="tel" />
                        <div className="form__submit">
                            <Button type="submit" children="Отправить" className="form__button" />
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default PageForm;