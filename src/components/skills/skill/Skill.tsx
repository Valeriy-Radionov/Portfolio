import React from "react";
import style from "./Skill.module.scss"
import {Description} from "../../../common/components/description_block/Description";

export type SkillType = {
    titleSkill: string
    description: string
}

export const Skill: React.FC<SkillType> = ({titleSkill, description}) => {
    return (
        <div className={style.skill}>
            <div className={style.icon}></div>
            <Description title={titleSkill} description={description}/>
        </div>
    )
}