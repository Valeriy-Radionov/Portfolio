import React from "react";
import style from "./Contacts.module.scss"
import {Button} from "../../common/components/button/Button";
import {Title} from "../../common/components/title/Title";
import {useFormik} from "formik";

type ContactsType = {}
type FormikErrorType = {
    email?: string
    name?: string
    message?: string
}
export const Contacts = (props: ContactsType) => {

    const formik = useFormik({
        initialValues: {
            email: "",
            name: "",
            message: ""
        },
        validate: (values) => {
            const errors: FormikErrorType = {}
            if (!values.email) {
                errors.email = "Required field"
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
            }
            if (!values.name) {
                errors.name = "Required field"
            }
            if (!values.message) {
                errors.message = "Required field"
            }
            return errors;
        },
        onSubmit: values => {
            console.log(values)
            // dispatch(loginTC(values))
            formik.resetForm()
        },
    });
    return (
        <div className={style.contactsBlock}>
            <div className={style.container}>
                <Title text={"Contacts"}/>
                <form onSubmit={formik.handleSubmit} className={style.formContainer}>
                    <div className={style.inputContainer}>
                        <input className={style.item}
                               placeholder={"Name"} {...formik.getFieldProps("name")}/>
                        {formik.touched.name && formik.errors.name &&
                            <div className={style.error}>{formik.errors.name}</div>}
                    </div>
                    <div className={style.inputContainer}>
                        <input className={style.item}
                               placeholder={"E-mail"} {...formik.getFieldProps("email")}/>
                        {formik.touched.email && formik.errors.email &&
                            <div className={style.error}>{formik.errors.email}</div>}
                    </div>
                    <div className={style.messageContainer}>
                        <textarea className={style.message}
                                  placeholder={"Your message"} {...formik.getFieldProps("message")}/>
                        {formik.touched.message && formik.errors.message &&
                            <div className={style.error}>{formik.errors.message}</div>}
                    </div>
                </form>
                <Button type={"submit"}>Send</Button>
            </div>
        </div>
    )
}