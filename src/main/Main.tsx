import React from 'react';
import style from './Main.module.css'
import styleContainer from '../common/styles/Container.module.css'
type MainPropsType = {

}

export const  Main = (props: MainPropsType) => {
    return (
        <div className={style.mainBlock}>
            <div className={styleContainer.container}>
            <div className={style.greetings}>
                <span>Hi There</span>
                <h1>I'm Valeriy Radionov</h1>
                <p>Frontend developer</p>
            </div>
            <div className={style.avatarImage}></div>
            </div>
        </div>
    );
}