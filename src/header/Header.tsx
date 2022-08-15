import React from 'react';
import style from "./Header.module.css"
import {Nav} from "./nav/Nav";
type HeaderPropsType = {

}

export const  Header = (props: HeaderPropsType) => {
    return (
        <div className={style.header}>
            <Nav/>
        </div>
    );
}

