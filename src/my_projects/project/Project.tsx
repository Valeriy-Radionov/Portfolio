import React from "react";
import style from "./Project.module.css"
type ProjectType = {
    projectName: string,
    description: string
}

export const Project = (props: ProjectType) => {
    return (
        <div className={style.project}>
            <div className={style.image}>
                <button className={style.button}>Watch</button>
            </div>
            <h3>{props.projectName}</h3>
            <span>{props.description}</span>
        </div>
    )
}