import React from "react";
import marioIMG from '../images/MarioTitle.png';
import jabberIMG from '../images/Jabber.png'
import cv from "../resources/CV_Jack_Shilton.pdf";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCopy} from "@fortawesome/free-solid-svg-icons";

const Portfolio = () => {
    const projectInfo = [
        {
            link: "https://google.com",
            sourceLink: "https://google.com",
            image: marioIMG,
            altText: "Mario Screenshot",
            title: "Super Mario Bros C#",
            text: "This game acted as my submission to my final year project during my time at Sixth Form, alongside\n" +
                "a writeup that documented the development, bug fixes, the reference system, and other smaller details.",
        },
        {
            link: "https://google.com",
            sourceLink: "https://google.com",
            image: jabberIMG,
            altText: "Jabber Screenshot",
            title: "Jabber",
            text: "'Jabber' was a week-long assignment that I was assigned to complete in a pair with Ryan Arrowsmith at the end\n" +
                "of my first year at the University of Birmingham. I worked mainly on the frontend development, using JavaFX with Scene Builder\n" +
                "to create the style of the application.",
        },
    ]

    const renderProject = (project, index) => {
        return (
            <div className={'project'}>
                <img src={project.image} alt={project.altText} className={'project-img'}/>
                <div className={'details'}>
                    <span>{project.title}</span>
                    <p>{project.text}</p>
                </div>
                <br/>
                <div className={'divider'}/>
                <div>
                    <a className={'button view-button'} href={project.link}>
                        <FontAwesomeIcon icon={faCopy} className={'icon'}/> <a>View</a>
                    </a>
                    <a className={'button view-button'}
                       href={project.sourceLink} target={'_blank'} rel={'noopener'}>
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