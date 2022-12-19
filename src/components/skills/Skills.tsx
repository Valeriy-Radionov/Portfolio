import React from "react"
import style from "./Skills.module.scss"
import { Skill } from "./skill/Skill"
import { Title } from "../../common/components/title/Title"
import { state } from "../../bll/state"
import { useAppSelector } from "../../common/hooks/appHooks"

type SkillsPropsType = {}

export const Skills = (props: SkillsPropsType) => {
  const state = useAppSelector((state) => state.dataPages)
  const id = useAppSelector((state) => state.dataPages.header.navTitle[1])

  return (
    <div id={id} className={style.skillsBlock}>
      <div className={style.skillsContainer}>
        <Title text={state.skills.title} />
        <div className={style.skills}>
          {state.skills.skillsData.map((skill) => {
            return <Skill key={skill.title} titleSkill={skill.title} description={skill.description} styleImg={skill.img} />
          })}
        </div>
      </div>
    </div>
  )
}
