import React from "react";
import style from "./Footer.module.scss"
import {state} from "../../bll/state";

type FooterType = {}

export const Footer: React.FC<FooterType> = () => {
    return (
        <div className={style.footerBlock}>
            <div className={style.container}>
                <h3>Radionov Valeriy</h3>
                <div className={style.itemsContainer}>
                    {state.footer.map((val, index) => {
                        return <div key={index} className={style.item} style={val.img}></div>
                    })}
                </div>
                <span>©️2022 All rights reserved</span>
            </div>
        </div>
    )
}