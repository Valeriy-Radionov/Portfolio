import React from "react";
import style from "./Contacts.module.css"
type ContactsType = {

}

export const Contacts = (props: ContactsType) => {
    return (
        <div className={style.contactsBlock}>
            <div className={style.container}>
                <h3>Contacts</h3>
                <form className={style.formContainer}>
                    <input/>
                    <input/>
                    <textarea/>
                </form>
                <button className={style.button}>Send</button>
            </div>
        </div>
    )
}