import React from 'react';
import {FaFileAlt} from 'react-icons/fa';
import projectInfo from '../components/projects.json';
import {NavLink} from "react-router-dom";

const Portfolio = () => {
    const renderProject = (project) => {
        let img = require('../images/' + project.shortName + '/' + project.images[0]);
        return (
            <div className={'project'}>
                <img src={img.default} alt={project.altText} className={'project-img'}/>
                <div className={'details'}>
                    <span>{project.title}</span>
                    <p>{project.text}</p>
                </div>
                <br/>
                <div className={'divider'}/>
                <div>
                    <NavLink className={'button view-button'} to={'/projects/' + project.shortName}>
                        <FaFileAlt className='icon'/> <p>View</p>
                    </NavLink>
                    {project.sourceLink && <a className={'button view-button'} id={'source'} href={project.sourceLink} target={'_blank'} rel={'noopener noreferrer'}>
                        <p>&#60; Source /&#62;</p>
                    </a>}
                </div>
            </div>
        );
    };

    return (
        <div className={'projectContainer'}>
            {projectInfo.map(renderProject)}
        </div>
    );
}

export default Portfolio;