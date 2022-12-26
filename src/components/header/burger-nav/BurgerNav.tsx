import { Link } from "react-scroll"
import { useAppSelector } from "../../../common/hooks/appHooks"
import { SwitchLanguage } from "../nav/switch-language/SwitchLanguage"
import style from "./BurgerNav.module.scss"

export const BurgerNav = () => {
  const state = useAppSelector((state) => state.dataPages.header)

  return (
    <div className={style.burherNav}>
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
