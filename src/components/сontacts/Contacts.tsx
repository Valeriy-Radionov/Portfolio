import { useFormik } from "formik"
import { Fade } from "react-awesome-reveal"
import { sendMessageTC } from "../../bll/reducers/messageReducer"
import { SubmitBtn } from "../../common/components/button/Button"
import { Title } from "../../common/components/title/Title"
import { useAppDispatch, useAppSelector } from "../../common/hooks/appHooks"
import style from "./Contacts.module.scss"

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
        <Fade direction="down">
          <Title text={state.title} />
        </Fade>
        <form onSubmit={formik.handleSubmit} className={style.formContainer}>
          <Fade direction="left">
            <div className={style.inputContainer}>
              <input className={style.item} placeholder={state.placeHoldName} {...formik.getFieldProps("senderName")} />
              {formik.touched.senderName && formik.errors.senderName && <div className={style.error}>{formik.errors.senderName}</div>}
            </div>
          </Fade>
          <Fade direction="right">
            <div className={style.inputContainer}>
              <input className={style.item} placeholder={"E-mail"} {...formik.getFieldProps("email")} />
              {formik.touched.email && formik.errors.email && <div className={style.error}>{formik.errors.email}</div>}
            </div>
          </Fade>
          <Fade direction="up">
            <div className={style.messageContainer}>
              <textarea className={style.message} placeholder={state.placeHoldMsg} {...formik.getFieldProps("message")} />
              {formik.touched.message && formik.errors.message && <div className={style.error}>{formik.errors.message}</div>}
            </div>
          </Fade>
        </form>
        <SubmitBtn type={"submit"}>{state.btnName}</SubmitBtn>
      </div>
    </form>
  )
}
