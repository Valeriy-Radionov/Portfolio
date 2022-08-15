import React from 'react';
import style from "./Nav.module.css"

type NavPropsType = {

}

export const  Nav = (props: NavPropsType) => {
    return (
        <div className={style.nav}>
            <a href="">Main</a>
            <a href="">Skills</a>
            <a href="">Projects</a>
            <a href="">Contacts</a>
         </div>
    );
}

