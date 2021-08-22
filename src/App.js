import 'bulma/css/bulma.min.css';
import './App.scss';
import React, {useEffect} from 'react';
import Home from './components/Home.js';
import About from './components/About.js';
import Portfolio from './components/Portfolio';
import Project from './components/Project';
import Contact from './components/Contact';
import {Switch, Route, withRouter} from 'react-router-dom';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faHome, faAddressCard, faUserCircle, faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import projects from './components/projects.json';

const pages = ['about', 'portfolio', 'contact'];

function App() {
    return (
        <div className={'App'}>
            <div className={'navbar-top-offset'}> Go Away</div>
            <Header/>
            <div className={'content-block'}>
                <Switch>
                    <Route exact path={'/'} component={Home}/>
                    <Route exact path={'/portfolio'} component={Portfolio}/>
                    <Route exact path={'/about'} component={About}/>
                    <Route exact path={'/contact'} component={Contact}/>
                    {projects.map(projects => (<Route path={'/projects/' + projects.shortName} component={Project} key={'{projects}'}/>))}
                    <Route path={'*'} component={NotFound}/>
                </Switch>
            </div>
            <Footer/>
        </div>
    );
}

function Header() {
    useEffect(() => {
        headerActive();
        setInterval(function () {
            terminalToggle();
        }, 1000);
    }, []);

    function terminalToggle() {
        let currentText = '';
        if (document.getElementById('logoText') != null) {
            currentText = document.getElementById('logoText').innerText;
            if (currentText.charAt(currentText.length - 1) === '_') {
                currentText = currentText.substring(0, currentText.length - 1);
            } else {
                currentText = currentText + '_';
            }
            document.getElementById('logoText').innerText = currentText;
        }
    }

    function headerActive() {
        let address = window.location.href;
        for (let i = address.length; i > 0; i--) {
            if (address.charAt(i) === '/') {
                address = address.substring(i, address.length);
                break;
            }
        }
        if (address === '/') {
            document.getElementById('home').className += ' is-active';
        } else if (pages.includes(address.substring(1, address.length))) {
            document.getElementById(address.substring(1, address.length)).className += ' is-active';
        }
    }

    function toggleBurger() {
        document.querySelector('.navbar-menu').classList.toggle('is-active');
        terminalToggle();
    }

    return (
        <section className={'hero is-link is-medium'}>
            <div className={'hero-head'}>
                <nav className={'navbar is-fixed-top'}>
                    <div className={'container'}>
                        <div className={'navbar-brand'}>
                            <a className={'logo navbar-item'} id={'logoText'} href={'/'}>>Jack_</a>
                            <a role={'button'} className={`navbar-burger burger`} aria-label={'menu'}
                               aria-expanded={'false'}
                               data-target={'navbarMenu'} onClick={toggleBurger}
                            >
                                <span aria-hidden={'true'}/>
                                <span aria-hidden={'true'}/>
                                <span aria-hidden={'true'}/>
                            </a>
                        </div>
                        <div id={'navbarMenu'} className={`navbar-menu`}>
                            <div className={'navbar-end'}>
                                <a id={'home'} className={'navbar-item'} onClick={toggleBurger} href={'/'}>
                                    <FontAwesomeIcon icon={faHome} className={'icon'}/><p>Home</p>
                                </a>
                                <a id={'portfolio'} className={'navbar-item'} onClick={toggleBurger} href={'/portfolio'}>
                                    <FontAwesomeIcon icon={faAddressCard} className={'icon'}/><p>Portfolio</p>
                                </a>
                                <a id={'about'} className={'navbar-item'} onClick={toggleBurger} href={'/about'}>
                                    <FontAwesomeIcon icon={faUserCircle} className={'icon'}/><p>About Me</p>
                                </a>
                                <a id={'contact'} className={'navbar-item'} onClick={toggleBurger} href={'/contact'}>
                                    <FontAwesomeIcon icon={faEnvelope} className={'icon'}/><p>Contact</p>
                                </a>
                                <span className={'navbar-item'}>
                            <a className={'button is-link is-inverted is-rounded'}
                               href={'https://github.com/Jack-Development'}>
                                <span className={'icon'}>
                                    <FontAwesomeIcon icon={faGithub}/>
                                </span>
                                <span>GitHub</span>
                            </a>
                        </span>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </section>
    );
}

class Footer extends React.Component {
    render() {
        return (
            <div className={'footerContainer'}>
                <footer className={'footerCopyright'}>
                    <div><p>© 2021 Jack Shilton</p></div>
                </footer>
            </div>
        );
    }
}

const NotFound = () => (
    <div>
        <h1 className={'invalidText'}>404 - Not Found</h1>
    </div>
);

export default withRouter(App);
