import React from "react";
import style from "./Skill.module.css"

export type SkillType = {
    titleSkill: string
    description: string
}

export const Skill = (props: SkillType) => {
    return (
        <div className={style.skill}>
            <div className={style.icon}></div>
            <h3>{props.titleSkill}</h3>
            <span className={style.description}>{props.description}</span>
        </div>
    )
}