import React from "react"
import { BurgerNav } from "./burger-nav/BurgerNav"
import style from "./Header.module.scss"
import { Nav } from "./nav/Nav"

type HeaderPropsType = {}

export const Header = (props: HeaderPropsType) => {
  return (
    <div className={style.header}>
      <Nav />
      <BurgerNav />
    </div>
  )
}
