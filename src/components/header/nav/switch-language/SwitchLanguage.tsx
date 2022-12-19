import { useState } from "react"
import { getDataPages } from "../../../../bll/reducers/pageReducer"
import { state } from "../../../../bll/state"
import { useAppDispatch, useAppSelector } from "../../../../common/hooks/appHooks"
import style from "./SwitchLanguage.module.scss"
export const SwitchLanguage = () => {
  const dispatch = useAppDispatch()
  const [animation, setAnimation] = useState(`${style.styleImg}`)
  const [language, setLanguage] = useState(true)
  const animationHandler = () => {
    setAnimation(`${style.styleImg} ${style.rotateImage}`)
    setLanguage(!language)
    if (!language) {
      const stateEN = state.EN()
      dispatch(getDataPages({ data: stateEN }))
    } else {
      const stateRU = state.RU()
      dispatch(getDataPages({ data: stateRU }))
    }
    setTimeout(() => {
      setAnimation(`${style.styleImg}`)
    }, 800)
  }
  return (
    <div className={style.containerImg} onClick={animationHandler}>
      <div className={animation}></div>
    </div>
  )
}
