import React from "react";
import style from "./Contacts.module.scss"
import {Button} from "../../common/components/button/Button";
import {Title} from "../../common/components/title/Title";

type ContactsType = {}

export const Contacts = (props: ContactsType) => {
    return (
        <div className={style.contactsBlock}>
            <div className={style.container}>
                <Title text={"Contacts"}/>
                <form className={style.formContainer}>
                    <input/>
                    <input/>
                    <textarea/>
                </form>
                <Button type={"submit"}>Send</Button>
            </div>
        </div>
    )
}