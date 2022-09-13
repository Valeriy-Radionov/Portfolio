import React from 'react';
import style from './Main.module.scss'

type MainPropsType = {}

export const Main = (props: MainPropsType) => {
    return (
        <div className={style.mainBlock}>
            <div className={style.container}>
                <div className={style.greetings}>
                    <p>Hi There</p>
                    <h1><span>I'm</span> Valeriy Radionov</h1>
                    <p className={style.animationText}>Frontend Developer</p>
                </div>
                <div className={style.avatarImage}></div>
            </div>
        </div>
    );
}