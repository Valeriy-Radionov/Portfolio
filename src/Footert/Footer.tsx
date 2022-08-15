import React from "react";
import style from "./Footer.module.css"

type FooterType = {}

export const Footer = (props: FooterType) => {
    return (
        <div className={style.footerBlock}>
            <div className={style.container}>
                <h3>Radionov Valeriy</h3>
                <div className={style.itemsContainer}>
                    <div className={style.item}></div>
                    <div className={style.item}></div>
                    <div className={style.item}></div>
                    <div className={style.item}></div>
                </div>
                <span>©️2022 All rights reserved</span>
            </div>
        </div>
    )
}