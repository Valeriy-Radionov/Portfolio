import React from "react"
import style from "./Contacts.module.scss"
import { Button, SubmitBtn } from "../../common/components/button/Button"
import { Title } from "../../common/components/title/Title"
import { useFormik } from "formik"
import { useAppDispatch, useAppSelector } from "../../common/hooks/appHooks"
import { sendMessageTC } from "../../bll/reducers/messageReducer"

type ContactsType = {}
type FormikErrorType = {
  email?: string
  senderName?: string
  message?: string
}
export const Contacts = (props: ContactsType) => {
  const state = useAppSelector((state) => state.dataPages.contacts)
  const id = useAppSelector((state) => state.dataPages.header.navTitle[3])
  const dispatch = useAppDispatch()
  const formik = useFormik({
    initialValues: {
      email: "",
      senderName: "",
      message: "",
    },
    validate: (values) => {
      const errors: FormikErrorType = {}
      if (!values.email) {
        errors.email = "Required field"
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = "Invalid email address"
      }
      if (!values.senderName) {
        errors.senderName = "Required field"
      }
      if (!values.message) {
        errors.message = "Required field"
      }
      return errors
    },
    onSubmit: (values) => {
      console.log(values)
      dispatch(sendMessageTC(values))
      formik.resetForm()
    },
  })
  return (
    <form id={id} className={style.contactsBlock} onSubmit={formik.handleSubmit}>
      <div className={style.container}>
        <Title text={state.title} />
        <form onSubmit={formik.handleSubmit} className={style.formContainer}>
          <div className={style.inputContainer}>
            <input className={style.item} placeholder={state.placeHoldName} {...formik.getFieldProps("senderName")} />
            {formik.touched.senderName && formik.errors.senderName && <div className={style.error}>{formik.errors.senderName}</div>}
          </div>
          <div className={style.inputContainer}>
            <input className={style.item} placeholder={"E-mail"} {...formik.getFieldProps("email")} />
            {formik.touched.email && formik.errors.email && <div className={style.error}>{formik.errors.email}</div>}
          </div>
          <div className={style.messageContainer}>
            <textarea className={style.message} placeholder={state.placeHoldMsg} {...formik.getFieldProps("message")} />
            {formik.touched.message && formik.errors.message && <div className={style.error}>{formik.errors.message}</div>}
          </div>
        </form>
        <SubmitBtn type={"submit"}>{state.btnName}</SubmitBtn>
      </div>
    </form>
  )
}
