import React from "react";
import style from './Skills.module.scss'
import {Skill} from "./skill/Skill";
import {Title} from "../../common/components/title/Title";

type SkillsPropsType = {
    // skills: SkillType[]
}

export const Skills = (props: SkillsPropsType) => {
    return (
        <div className={style.skillsBlock}>
            <div className={style.skillsContainer}>
                <Title text={"Skills"}/>
                <div className={style.skills}>
                    <Skill titleSkill={"JS"}
                           description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius et provident voluptatem! Dolor impedit iure iusto minus, pariatur quod soluta."}/>
                    <Skill titleSkill={"HTML"}
                           description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut consectetur consequuntur cumque dicta distinctio ea eaque eos, et facere fugiat illo maiores, maxime nulla odit optio quae quas quasi recusandae repudiandae, sit tempora vel."}/>
                    <Skill titleSkill={"CSS"}
                           description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aut, blanditiis consequuntur eum eveniet fugit in, inventore officia omnis perferendis qui ratione ut voluptate! Laborum."}/>
                    <Skill titleSkill={"CSS"}
                           description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aut, blanditiis consequuntur eum eveniet fugit in, inventore officia omnis perferendis qui ratione ut voluptate! Laborum."}/>
                    <Skill titleSkill={"CSS"}
                           description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aut, blanditiis consequuntur eum eveniet fugit in, inventore officia omnis perferendis qui ratione ut voluptate! Laborum."}/>
                    <Skill titleSkill={"CSS"}
                           description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aut, blanditiis consequuntur eum eveniet fugit in, inventore officia omnis perferendis qui ratione ut voluptate! Laborum."}/>
                    <Skill titleSkill={"CSS"}
                           description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aut, blanditiis consequuntur eum eveniet fugit in, inventore officia omnis perferendis qui ratione ut voluptate! Laborum."}/>

                </div>
            </div>
        </div>
    )
}