import React from "react";
import style from "./JobOption.module.css"
type JobOptionPropsType = {}

export const JobOption = (props: JobOptionPropsType) => {
    return (
        < div className={style.jobOptionBlock}>
            <div className={style.container}>
                <div className={style.items}>
                <h3>Considering remote work options</h3>
                <button className={style.button}>Hire me</button>
                </div>
            </div>
        </div>
    )
}