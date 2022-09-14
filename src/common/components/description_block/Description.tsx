import React from 'react';
import style from "./Description.module.scss"

type DescriptionPropsType = {
    title: string
    description: string
}
export const Description: React.FC<DescriptionPropsType> = ({title, description}) => {
    return (
        <div className={style.container}>
            <h3 className={style.title}>{title}</h3>
            <p className={style.description}>{description}</p>
        </div>
    );
};

