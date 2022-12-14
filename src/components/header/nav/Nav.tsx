import { Link } from "react-scroll"
import { useAppSelector } from "../../../common/hooks/appHooks"
import style from "./Nav.module.scss"
import { SwitchLanguage } from "./switch-language/SwitchLanguage"

export const Nav = () => {
  const state = useAppSelector((state) => state.dataPages.header)

  return (
    <div className={style.nav}>
      <div className={style.container}>
        {state.navTitle.map((el) => {
          return (
            <Link key={el} to={el} activeClass={style.active} spy={true} smooth={true} offset={-75} duration={500}>
              {el}
            </Link>
          )
        })}
        <SwitchLanguage />
      </div>
    </div>
  )
}
