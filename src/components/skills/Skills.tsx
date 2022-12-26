import { Fade, Flip } from "react-awesome-reveal"
import { Title } from "../../common/components/title/Title"
import { useAppSelector } from "../../common/hooks/appHooks"
import { Skill } from "./skill/Skill"
import style from "./Skills.module.scss"

type SkillsPropsType = {}

export const Skills = (props: SkillsPropsType) => {
  const state = useAppSelector((state) => state.dataPages)
  const id = useAppSelector((state) => state.dataPages.header.navTitle[1])

  return (
    <div id={id} className={style.skillsBlock}>
      <div className={style.skillsContainer}>
        <Fade direction="down">
          <Title text={state.skills.title} />
        </Fade>
        <div className={style.skills}>
          {state.skills.skillsData.map((skill) => {
            return (
              <Flip direction="horizontal">
                <Skill key={skill.title} titleSkill={skill.title} description={skill.description} styleImg={skill.img} />
              </Flip>
            )
          })}
        </div>
      </div>
    </div>
  )
}
