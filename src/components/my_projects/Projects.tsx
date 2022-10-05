import React from "react";
import style from "./Projects.module.scss"
import {Title} from "../../common/components/title/Title";
import {Project} from "./project/Project";
import {state} from "../../bll/state";

type ProjectsPropsType = {}

export const Projects: React.FC<ProjectsPropsType> = () => {

    return (
        <div className={style.projectsBlock}>
            <div className={style.container}>
                <Title text={"My projects"}/>
                <div className={style.projects}>
                    {state.projects.map(res => {
                        return <Project
                            key={res.title}
                            projectName={res.title}
                            description={res.description}
                            styleImg={res.img}
                        />
                    })
                    }
                </div>
            </div>
        </div>
    )
}