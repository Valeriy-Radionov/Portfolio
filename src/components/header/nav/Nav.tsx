import React from "react"
import { useAppSelector } from "../../../common/hooks/appHooks"
import style from "./Nav.module.scss"
import { SwitchLanguage } from "./switch-language/SwitchLanguage"

type NavPropsType = {}

export const Nav = (props: NavPropsType) => {
  const state = useAppSelector((state) => state.dataPages.header)
  return (
    <div className={style.nav}>
      {state.navTitle.map((el) => {
        return (
          <a
            key={el}
            onClick={() => {
              const element = document.getElementById(el)
              if (element) {
                element.scrollIntoView({ behavior: "smooth" })
              }
            }}
          >
            {el}
          </a>
        )
      })}
      <SwitchLanguage />
    </div>
  )
}
