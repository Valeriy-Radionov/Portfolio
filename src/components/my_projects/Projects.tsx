import React from "react"
import { Title } from "../../common/components/title/Title"
import { useAppSelector } from "../../common/hooks/appHooks"
import { Project } from "./project/Project"
import style from "./Projects.module.scss"

type ProjectsPropsType = {}

export const Projects: React.FC<ProjectsPropsType> = () => {
  const state = useAppSelector((state) => state.dataPages)
  const id = useAppSelector((state) => state.dataPages.header.navTitle[2])

  return (
    <div id={id} className={style.projectsBlock}>
      <div className={style.container}>
        <Title text={state.projects.title} />
        <div className={style.projects}>
          {state.projects.projectData.map((res) => {
            return <Project key={res.title} projectName={res.title} description={res.description} styleImg={res.img} gitLink={res.linkGit} webLink={res.linkGhPage} />
          })}
        </div>
      </div>
    </div>
  )
}
