import { useState } from "react"
import { Fade } from "react-awesome-reveal"
import { Link } from "react-scroll"
import { useAppSelector } from "../../../common/hooks/appHooks"
import { SwitchLanguage } from "../nav/switch-language/SwitchLanguage"
import style from "./BurgerNav.module.scss"

export const BurgerNav = () => {
  const state = useAppSelector((state) => state.dataPages.header)
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const isOpenHandler = () => {
    setIsOpen(!isOpen)
  }
  return (
    <div className={style.burgerNav}>
      <div className={style.burgerMenu} onClick={isOpenHandler}></div>
      <div className={isOpen ? `${style.show} ${style.container}` : style.container}>
        {state.navTitle.map((el) => {
          return (
            <Link onClick={isOpenHandler} key={el} to={el} activeClass={style.active} spy={true} smooth={true} offset={-75} duration={500}>
              {el}
            </Link>
          )
        })}
      </div>
      <SwitchLanguage />
    </div>
  )
}
