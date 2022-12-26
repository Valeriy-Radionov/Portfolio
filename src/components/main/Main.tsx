import { Fade } from "react-awesome-reveal"
import { useAppSelector } from "../../common/hooks/appHooks"
import style from "./Main.module.scss"
import { ParticlesMain } from "./particles/Particles"
import Tilt from "react-parallax-tilt"

export const Main = () => {
  const state = useAppSelector((state) => state.dataPages)
  const id = useAppSelector((state) => state.dataPages.header.navTitle[0])

  return (
    <>
      <ParticlesMain />
      <div id={id} className={style.mainBlock}>
        <div className={style.container}>
          <Fade direction="left">
            <div className={style.greetings}>
              <p>{state.about.p1}</p>
              <h1>
                <span>{state.about.h1_1}</span>
                {state.about.h1_2}
              </h1>
              <p className={style.animationText}>{state.about.p2}</p>
            </div>
          </Fade>
          <Fade direction="down">
            <Tilt tiltMaxAngleX={35} tiltMaxAngleY={35} perspective={900} scale={1.1} transitionSpeed={2000} gyroscope={true}>
              <div className={style.avatarImage}></div>
            </Tilt>
          </Fade>
        </div>
      </div>
    </>
  )
}
