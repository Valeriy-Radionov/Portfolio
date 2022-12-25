import { useAppSelector } from "../../common/hooks/appHooks"
import style from "./Main.module.scss"
import { ParticlesMain } from "./particles/Particles"

export const Main = () => {
  const state = useAppSelector((state) => state.dataPages)
  const id = useAppSelector((state) => state.dataPages.header.navTitle[0])

  return (
    <>
      <ParticlesMain />
      <div id={id} className={style.mainBlock}>
        <div className={style.container}>
          <div className={style.greetings}>
            <p>{state.about.p1}</p>
            <h1>
              <span>{state.about.h1_1}</span>
              {state.about.h1_2}
            </h1>
            <p className={style.animationText}>{state.about.p2}</p>
          </div>
          <div className={style.avatarImage}></div>
        </div>
      </div>
    </>
  )
}
