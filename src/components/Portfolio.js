import React, {useEffect} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCopy} from '@fortawesome/free-solid-svg-icons';
import projectInfo from '../components/projects.json';

const Portfolio = () => {
    useEffect(() => {
        setButtons();
    }, []);

    function setButtons(){
        let list = document.getElementsByClassName('view-button');
        for( let i = 0; i < list.length; i++){
            if(list[i].getAttribute('href') === ''){
                list[i].setAttribute('style','display:none;')
            }
        }
    }

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
                    <a className={'button view-button'} id={'view'} href={'/projects/' + project.shortName}>
                        <FontAwesomeIcon icon={faCopy} className={'icon'}/> <a>View</a>
                    </a>
                    <a className={'button view-button'} id={'source'} href={project.sourceLink} target={'_blank'} rel={'noopener'}>
                        <a>&#60; Source /&#62;</a>
                    </a>
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