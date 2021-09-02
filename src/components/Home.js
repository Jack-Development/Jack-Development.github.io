import React from 'react';
import {FcGoogle} from 'react-icons/fc';
import {FaFacebook, FaLinkedin, FaGithub, FaFileAlt} from 'react-icons/fa';
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
                <LinkButton linkAddress='mailto:shiltonjackofficial@gmail.com' icon={<FcGoogle className='icon'/>} class='gmailButton' linkName='Gmail'/>
                <LinkButton linkAddress='https://www.facebook.com/JacShilton/' icon={<FaFacebook className='icon'/>} class='facebookButton' linkName='Facebook'/>
                <LinkButton linkAddress='https://uk.linkedin.com/in/jack-shilton-60aba7197' icon={<FaLinkedin className='icon'/>} class='linkedInButton' linkName='LinkedIn'/>
                <LinkButton linkAddress='https://github.com/Jack-Development' icon={<FaGithub className='icon'/>} class='gitHubButton' linkName='GitHub'/>
            </div>
            <div>
                <a className={'button cv-button'} href={cv} target={'_blank'} rel={'noreferrer noopener'}>
                    <FaFileAlt className='icon'/> <p> View CV</p>
                </a>
                <a className={'button cv-button'} href={'https://github.com/Jack-Development/Jack-Development.github.io'} target={'_blank'} rel={'noreferrer noopener'}>
                    <p>&#60; Source /&#62;</p>
                </a>
            </div>
        </div>
    );
}

class LinkButton extends React.Component{
    render() {
        return(
            <a className={'button contact-button ' + this.props.class} href={this.props.linkAddress} target={'_blank'} rel={'noreferrer noopener'}>
                {this.props.icon} <p>{this.props.linkName}</p>
            </a>
        )
    }
}

export default Home;