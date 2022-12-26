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
    </div>
  )
}
