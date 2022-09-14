import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react';
import style from "./Button.module.scss"

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
type SuperButtonPropsType = DefaultButtonPropsType & {}

export const Button: React.FC<SuperButtonPropsType> = ({...restProps}) => {
    return (
        <button className={style.btn + " " + style.third} {...restProps}/>
    );
};

