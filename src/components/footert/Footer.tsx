import React from "react"
import { useAppSelector } from "../../common/hooks/appHooks"
import style from "./Footer.module.scss"

type FooterType = {}

export const Footer: React.FC<FooterType> = () => {
  const state = useAppSelector((state) => state.dataPages.footerData)

  return (
    <div className={style.footerBlock}>
      <div className={style.container}>
        <h3>{state.myNameTitle}</h3>
        <div className={style.itemsContainer}>
          {state.footer.map((val, index) => {
            let href: string = ""
            switch (val.title) {
              case "skype":
                href = "skype:Valeriy Radionov?chat"
                break
              case "linkedIn":
                href = "https://www.linkedin.com/in/%D0%B2%D0%B0%D0%BB%D0%B5%D1%80%D0%B0-%D1%80%D0%B0%D0%B4%D0%B8%D0%BE%D0%BD%D0%BE%D0%B2-137465195/"
                break
              case "telegram":
                href = "tg://resolve?domain=@Valeriy_Radionov"
                break
              case "github":
                href = "https://github.com/Valeriy-Radionov"
                break

              default:
                break
            }
            return <a key={index} href={href} className={style.item} style={val.img}></a>
          })}
        </div>
        <span>{state.reserved}</span>
      </div>
    </div>
  )
}
