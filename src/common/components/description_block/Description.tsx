import React from "react"
import { Fade, AttentionSeeker } from "react-awesome-reveal"
import style from "./Description.module.scss"

type DescriptionPropsType = {
  title: string
  description: string
  gitLink?: string
  isProgect: boolean
}
export const Description: React.FC<DescriptionPropsType> = ({ title, description, gitLink, isProgect }) => {
  return (
    <div className={style.container}>
      <AttentionSeeker>
        <h3 className={style.title}>{title}</h3>
      </AttentionSeeker>
      {isProgect && (
        <div className={style.wrapLink}>
          <div>
            <Fade direction="left">
              <a href={gitLink} target="_blank" style={{ color: "#ff8f2c" }}>
                git
              </a>
            </Fade>
          </div>
        </div>
      )}
      <Fade direction="up">
        <p className={style.description}>{description}</p>
      </Fade>
    </div>
  )
}
