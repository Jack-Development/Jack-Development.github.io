import React from "react";
import face from '../images/FaceIMG.png';

const About = () => {
    return(
        <div className={'container p-4'}>
            <div className={'card m-4'}>
                <div className={'col'}>
                    <h1>Jack Shilton</h1>
                    <div className={'divider'}/>
                    <h2>Studying BSc Computer Science w/ Year Abroad</h2>
                    <h2> University of Birmingham</h2>
                    <h5>
                        This is some test text that is talking about me and lots of other things.
                    </h5>
                </div>
                <div className={'col'}>
                    <img src={face} alt={'Jack'} className={'profile'}/>
                </div>
            </div>
        </div>
    );
}

export default About;