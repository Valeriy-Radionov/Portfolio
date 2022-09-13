import React from "react";
import style from "./JobOption.module.scss"
import {Button} from "../../common/components/button/Button";
import {Title} from "../../common/components/title/Title";

type JobOptionPropsType = {}

export const JobOption = (props: JobOptionPropsType) => {
    return (
        < div className={style.jobOptionBlock}>
            <div className={style.container}>
                <div className={style.items}>
                    <Title text={"Considering remote work options"}/>
                    <Button>Hire me</Button>
                </div>
            </div>
        </div>
    )
}