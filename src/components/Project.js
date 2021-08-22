import React from 'react';
import {Slide} from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import projects from '../components/projects.json';

const Project = () => {
    const name = window.location.pathname.split('/').pop();

    let project = findProject();
    let slides = findSlides();

    function findProject() {
        let foundProject = null;
        for (let i = 0; i < projects.length; i++) {
            if (projects[i].shortName === name) {
                foundProject = projects[i];
                break;
            }
        }
        return foundProject;
    }
    function findSlides() {
        return project.images;
    }

    const renderSlide = (slides) => {
        let img = require('../images/' + project.shortName + '/' + slides);
        return (
            <div className={'div-slide'} key={'{slides}'}>
                <div style={{'backgroundImage': `url(${img.default})`}}/>
            </div>
        )
    }

    return (
        <div className={'container p-4'}>
            <div className={'card'}>
                <div className={'columns'}>
                    <div className={'column is-three-quarters'}>
                        <Slide easing={'ease'}>
                            {slides.map(renderSlide)}
                        </Slide>
                        <div className={'project-content'}>
                            <h1>{project.title}</h1>
                            <div className={'divider'}/>
                            <h2>Skills: </h2>
                            <p>{project.skills}</p>
                            <br/>
                            <h2>Description: </h2>
                            <p>{project.description}</p>
                        </div>
                    </div>
                    <div className={'column'}>
                        <div className={'card upper-card'}>
                            <h2>{project.title}</h2>
                            <p>Client: {project.client}</p>
                            <p>Duration: {project.duration}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Project;