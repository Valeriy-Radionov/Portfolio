import React from "react"
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
      <h3 className={style.title}>{title}</h3>
      {isProgect && (
        <div className={style.wrapLink}>
          <div>
            <a href={gitLink} target="_blank" style={{ color: "#ff8f2c" }}>
              git
            </a>
          </div>
        </div>
      )}
      <p className={style.description}>{description}</p>
    </div>
  )
}
