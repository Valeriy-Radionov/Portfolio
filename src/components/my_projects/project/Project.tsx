import React from "react";
import style from "./Project.module.scss"
import {Button} from "../../../common/components/button/Button";
import {Description} from "../../../common/components/description_block/Description";

type ProjectType = {
    projectName: string,
    description: string
    styleImg: React.CSSProperties | undefined
}

export const Project: React.FC<ProjectType> = ({projectName, description, styleImg}) => {
    return (
        <div className={style.project}>
            <div className={style.image} style={styleImg}>
                <Button>Watch</Button>
            </div>
            <Description title={projectName} description={description}/>
        </div>
    )
}