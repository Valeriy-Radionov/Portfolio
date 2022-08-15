import React from "react";
import style from "./Projects.module.css"
import styleContainer from "../common/styles/Container.module.css"
import {Project} from "./project/Project";
type ProjectsPropsType = {

}

export const Projects = (props: ProjectsPropsType) => {
    return (
        <div className={style.projectsBlock}>
            <div className={style.container}>
                <h3>My projects</h3>
                <div className={style.projects}>
                <Project projectName={"First Project"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores expedita ipsam iste labore magnam officiis sint sit voluptas voluptates. Eos pariatur, voluptatem."}/>
                <Project projectName={"Second Project"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores expedita ipsam iste labore magnam officiis sint s."}/>
                </div>
            </div>
        </div>
    )
}