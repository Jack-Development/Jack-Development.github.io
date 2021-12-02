import 'bulma/css/bulma.min.css';
import './App.scss';
import React from 'react';
import Home from './components/Home.js';
import About from './components/About.js';
import Portfolio from './components/Portfolio';
import Project from './components/Project';
import Contact from './components/Contact';
import {Switch, Route, withRouter, NavLink} from 'react-router-dom';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faHome, faAddressCard, faUserCircle, faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import projects from './components/projects.json';
import cv from './resources/CV_Jack_Shilton.pdf';

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
                    {projects.map(projects => (
                        <Route path={'/projects/' + projects.shortName} component={Project} key={'{projects}'}/>))}
                    <Route exact path={'/facebook'} component={() => {
                        window.location.href='https://www.facebook.com/JacShilton/';
                        return null;
                    }}/>
                    <Route exact path={'/linkedin'} component={() => {
                        window.location.href='https://www.linkedin.com/in/jack-shilton-60aba7197/';
                        return null;
                    }}/>
                    <Route exact path={'/github'} component={() => {
                        window.location.href='https://github.com/Jack-Development';
                        return null;
                    }}/>
                    <Route exact path={'/EPQ'} component={() => {
                        window.location.href='https://docs.google.com/document/d/1Eb64iFud7CGikWxBkYaNNAKvhO51W4Nq4I5v5dp9EBY/edit?usp=sharing';
                        return null;
                    }}/>
                    <Route exact path={'/cv'} component={() => {
                        window.location.href=cv;
                        return (
                            <br/>
                        );
                    }}/>
                    <Route path={'*'} component={NotFound}/>
                </Switch>
            </div>
            <Footer/>
        </div>
    );
}

class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            terminal: true,
            navbar: false
        };
        this.toggleBurger = this.toggleBurger.bind(this);
    }

    componentDidMount() {
        const self = this;
        this.headerSwitch = setInterval(
            function () {
                self.terminalToggle();
            }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.headerSwitch);
    }

    terminalToggle() {
        this.setState({
            terminal: !this.state.terminal
        });
    }

    toggleBurger() {
        this.setState({
            navbar: !this.state.navbar
        });
    }

    render() {
        return (
            <section className={'hero is-link is-medium'}>
                <div className={'hero-head'}>
                    <nav className={'navbar is-fixed-top'}>
                        <div className={'container'}>
                            <div className={'navbar-brand'}>
                                <NavLink className={'logo navbar-item'} id={'logoText'} to={'/'}>
                                    <p>>Jack{this.state.terminal ? "_" : ""}</p></NavLink>
                                <div role={'button'} className={"navbar-burger burger"} aria-label={'menu'}
                                   aria-expanded={'false'}
                                   data-target={'navbarMenu'} onClick={this.toggleBurger}
                                >
                                    <span aria-hidden={'true'}/>
                                    <span aria-hidden={'true'}/>
                                    <span aria-hidden={'true'}/>
                                </div>
                            </div>
                            <div id={'navbarMenu'} className={`navbar-menu ${this.state.navbar ? "is-active" : ""}`}>
                                <div className={'navbar-end'}>
                                    <NavButton linkAddress='/' linkName='Home' FAIcon={faHome}/>
                                    <NavButton linkAddress='/portfolio' linkName='Portfolio' FAIcon={faAddressCard}/>
                                    <NavButton linkAddress='/about' linkName='About Me' FAIcon={faUserCircle}/>
                                    <NavButton linkAddress='/contact' linkName='Contact' FAIcon={faEnvelope}/>
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

class NavButton extends React.Component {
    render() {
        return (
            <NavLink
                className={window.location.pathname === this.props.linkAddress ? "navbar-item is-active" : "navbar-item"}
                to={this.props.linkAddress}>
                <FontAwesomeIcon icon={this.props.FAIcon} className={'icon'}/><p>{this.props.linkName}</p>
            </NavLink>
        )
    }
}

const NotFound = () => (
    <div>
        <h1 className={'invalidText'}>404 - Not Found</h1>
    </div>
);

export default withRouter(App);
