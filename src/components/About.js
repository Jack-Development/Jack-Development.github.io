import React from 'react';
import face from '../images/FaceIMG.png';
import japanFlag from '../images/JapanFlagIMG.png';
import computer from '../images/computerIMG.png';

const About = () => {
    return (
        <div className={'container p-4'}>
            <div className={'card column-2-1 m-4'}>
                <div className={'col'}>
                    <div className={'rightPadding'}>
                        <h1>Jack Shilton</h1>
                        <div className={'divider'}/>
                        <h2>Studying BSc Computer Science w/ Year Abroad</h2>
                        <h2> University of Birmingham</h2>
                    </div>
                    <h6>
                        Hey, I'm <b>Jack!</b> I'm a curious and energetic <b>freelance software developer</b>,
                        with an affinity for Japan and its culture! I've been developing for as long
                        as I can remember, creating my <b>first application in 2013</b>, at the age of 11, using Unity.
                        From there my experience has only grown, letting me develop more things than I could count,
                        anything from <b>mobile games</b> to <b>websites</b> (such as this one)!
                        <br/>
                        <br/>
                        I do hope that you'll take the time to have a look around at what else I have to offer!
                    </h6>
                </div>
                <div className={'col'}>
                    <img src={face} alt={"Jack's Face"} className={'cardImage'}/>
                </div>
            </div>

            <div className={'card column-2-4 m-4'}>
                <div className={'col'}>
                    <img src={computer} alt={'Computer On A Sofa'} className={'cardImage'}/>
                </div>
                <div className={'col'}>
                    <div className={'leftPadding'}>
                        <h1>Development Knowledge</h1>
                        <h2>A Brief Breakdown of my Skills</h2>
                    </div>
                    <h6>
                        Over the years I have been lucky enough to program and develop in many different situations,
                        which has allowed me to gain a huge amount of experience with different system.
                    </h6>
                    <table className={'table fitWidth'}>
                        <thead>
                        <tr>
                            <th>Languages</th>
                            <th>Frameworks</th>
                            <th>Environments</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>C#</td>
                            <td>Bulma</td>
                            <td>IntelliJ</td>
                        </tr>
                        <tr>
                            <td>Java</td>
                            <td>React</td>
                            <td>Unity</td>
                        </tr>
                        <tr>
                            <td>Python</td>
                            <td>PostgreSQL</td>
                            <td>Visual Studio</td>
                        </tr>
                        <tr>
                            <td>HTML5</td>
                            <td> </td>
                            <td>MonoDevelop</td>
                        </tr>
                        <tr>
                            <td>JavaScript</td>
                            <td> </td>
                            <td>Blender</td>
                        </tr>
                        </tbody>
                    </table>
                    <br/>
                </div>
            </div>

            <div className={'card column-4-2 m-4'}>
                <div className={'col'}>
                    <div className={'rightPadding'}>
                        <h1>Japanese Culture</h1>
                        <h2>My Journey Across Language</h2>
                    </div>
                    <h6>
                        During my time at Sixth Form, I embarked on a journey of <b>learning the Japanese language</b>, completely 
                        <b><i>independent</i></b> of my formal education. Beginning with the Genki I textbook, I advanced to 
                        Colloquial Japanese, before finally opting for private tutoring sessions. Throughout this period, 
                        I was unwavering in my commitment to enhance my Japanese speaking, listening, and writing abilities in 
                        every way possible.
                        <br/>
                        After a fruitful journey of learning, I am now proudly ranked <b>between N3 and N2</b> as per the JLPT's evaluation.
                        <br/>
                        <br/>
                        The aspiration of experiencing the Japanese culture and language first-hand drove me to take a year abrod during my degree 
                        to live <b>in Japan</b>. I had the good fortune of spending that year at the esteemed Keio University. Immersed in 
                        the language, culture, and everyday life of Japan, I was able to gain a nuanced understanding and appreciation 
                        of the country and its people.
                        <br/>
                    </h6>
                </div>
                <div className={'col'}>
                    <img src={japanFlag} alt={'Japanese Flag'} className={'cardImage'}/>
                </div>
            </div>
        </div>
    );
}

export default About;
