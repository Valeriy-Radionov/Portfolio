import React from "react"
import style from "./Skill.module.scss"
import { Description } from "../../../common/components/description_block/Description"

export type SkillType = {
  titleSkill: string
  description: string
  styleImg: React.CSSProperties | undefined
}

export const Skill: React.FC<SkillType> = ({ titleSkill, description, styleImg }) => {
  return (
    <div className={style.skill}>
      <div className={style.containerImg}>
        <div className={style.icon} style={styleImg}></div>
      </div>
      <Description title={titleSkill} description={description} isProgect={false} />
    </div>
  )
}
