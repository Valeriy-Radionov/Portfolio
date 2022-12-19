import React, { AnchorHTMLAttributes, ButtonHTMLAttributes, DetailedHTMLProps } from "react"
import style from "./Button.module.scss"

type DefaultLinkPropsType = DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>
type SuperLinkPropsType = DefaultLinkPropsType & {}
type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
type SuperButtonPropsType = DefaultButtonPropsType & {}
export const Button: React.FC<SuperLinkPropsType> = ({ ...restProps }) => {
  return <a className={style.btn + " " + style.third} {...restProps} />
}
export const SubmitBtn: React.FC<SuperButtonPropsType> = ({ ...restProps }) => {
  return <button className={style.btn + " " + style.third} {...restProps} />
}
