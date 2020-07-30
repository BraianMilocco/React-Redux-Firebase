import React from 'react';
import ProjectSumary from '../projects/ProjectSumary';
import { Link } from 'react-router-dom';

const ProjectList = ({projects}) =>{

    const proj= projects ? (projects.map(
            project=> {
                
                return(
                    <Link to={'/project/' + project.id } key={project.id} > 
                        <ProjectSumary project={project} />
                    </Link>
                )
            }
        )
    ) : ( <div> No hay Proyectos</div> )

    return(
        <div className="project-list section ">
            { proj }
        </div>
    )
}

export default ProjectList;