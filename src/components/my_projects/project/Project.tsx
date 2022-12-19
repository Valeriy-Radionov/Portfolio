import React from "react"
import style from "./Project.module.scss"
import { Button } from "../../../common/components/button/Button"
import { Description } from "../../../common/components/description_block/Description"
import { useAppSelector } from "../../../common/hooks/appHooks"

type ProjectType = {
  projectName: string
  description: string
  styleImg: React.CSSProperties | undefined
  gitLink: string
  webLink: string
}

export const Project: React.FC<ProjectType> = ({ projectName, description, styleImg, gitLink, webLink }) => {
  const state = useAppSelector((state) => state.dataPages)

  return (
    <div className={style.project}>
      <div className={style.image} style={styleImg}>
        <Button href={webLink} target="_blank">
          {state.project.btnTitle}
        </Button>
      </div>
      <Description isProgect={true} title={projectName} description={description} gitLink={`${gitLink}`} />
    </div>
  )
}
