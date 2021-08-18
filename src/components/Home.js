import React from "react";
import gmailLogo from '../images/Icons/gmailIcon.svg';
import facebookLogo from '../images/Icons/facebookIcon.svg';
import linkedInLogo from '../images/Icons/linkedInIcon.svg';
import githubLogo from '../images/Icons/githubIcon.svg';
import {faCopy, faHome} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import cv from '../resources/CV_Jack_Shilton.pdf';

const Home = () => {
    return (
        <div>
            <section className={'hero is-primary is-medium'}>
                <div className={'hero-body'}>
                    <div className={'container'}>
                        <h1>Jack Shilton</h1>
                        <h2>Software Developer</h2>
                    </div>
                </div>
            </section>
            <div>
                <a id={'contact'} className={'button contact-button'} id={'gmailButton'} href={'https://shiltonjack@gmail.com'} target={'_blank'} rel={'noopener'}>
                    <img src={gmailLogo} alt={'Gmail Logo'}/> <a>Gmail</a>
                </a>
                <a id={'contact'} className={'button contact-button'} id={'facebookButton'} href={'https://www.facebook.com/JacShilton/'} target={'_blank'} rel={'noopener'}>
                    <img src={facebookLogo} alt={'Facebook Logo'}/> <a>Facebook</a>
                </a>
                <a id={'contact'} className={'button contact-button'} id={'linkedInButton'} href={'https://uk.linkedin.com/in/jack-shilton-60aba7197'} target={'_blank'} rel={'noopener'}>
                    <img src={linkedInLogo} alt={'LinkedIn Logo'}/> <a>LinkedIn</a>
                </a>
                <a id={'contact'} className={'button contact-button'} id={'gitHubButton'} href={'https://github.com/Jack-Development'} target={'_blank'} rel={'noopener'}>
                    <img src={githubLogo} alt={'Github Logo'}/> <a>GitHub</a>
                </a>
            </div>
            <div>
                <a id={'contact'} className={'button cv-button'} id={'cvButton'} href={cv} target={'_blank'} rel={'noopener'}>
                    <FontAwesomeIcon icon={faCopy} className={'icon'}/> <a>View CV</a>
                </a>
                <a id={'contact'} className={'button cv-button'} id={'cvButton'} href={'https://github.com/Jack-Development/Jack-Development.github.io'} target={'_blank'} rel={'noopener'}>
                    <a>&#60; Source /&#62;</a>
                </a>
            </div>
        </div>
    );
}

export default Home;