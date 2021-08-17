import React from "react";
import gmailLogo from '../images/Icons/gmailIcon.svg';
import facebookLogo from '../images/Icons/facebookIcon.svg';

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
                <a id={'contact'} className={'button contact-button'} id={'gmailButton'}>
                    <img src={gmailLogo}/> <a>Email</a>
                </a>
                <a id={'contact'} className={'button contact-button'} id={'facebookButton'}>
                    <img src={facebookLogo}/> <a>Facebook</a>
                </a>
            </div>
        </div>
    );
}

export default Home;