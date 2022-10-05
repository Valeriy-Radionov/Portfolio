import React from "react";
import style from './Skills.module.scss'
import {Skill} from "./skill/Skill";
import {Title} from "../../common/components/title/Title";
import {state} from "../../bll/state";

type SkillsPropsType = {}

export const Skills = (props: SkillsPropsType) => {
    return (
        <div className={style.skillsBlock}>
            <div className={style.skillsContainer}>
                <Title text={"Skills"}/>
                <div className={style.skills}>
                    {state.skills.map(skill => {
                        return <Skill key={skill.title}
                                      titleSkill={skill.title}
                                      description={skill.description} styleImg={skill.img}/>
                    })}
                </div>
            </div>
        </div>
    )
}