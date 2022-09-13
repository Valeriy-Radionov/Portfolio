import React from 'react';
import style from "./Header.module.scss"
import {Nav} from "./nav/Nav";

type HeaderPropsType = {}

export const Header = (props: HeaderPropsType) => {
    return (
        <div className={style.header}>
            <Nav/>
        </div>
    );
}

