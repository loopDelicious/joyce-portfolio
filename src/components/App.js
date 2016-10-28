import React, { Component } from 'react';
import '../css/App.css';

import Navigation from '../components/navigation.js';
import ToggleMain from '../components/toggleMain.js';
import ToggleHacker from '../components/toggleHacker.js';
import ToggleCat from '../components/toggleCat.js';
import ToggleLights from '../components/toggleLights.js';
import ToggleWalking from '../components/toggleWalking.js';
import ToggleNitrous from '../components/toggleNitrous.js';

import tigerhat from '../img/tigerhat.png';
import robot from '../img/robot.png';
import hackerrank from '../img/hackerrank.png';
import caturl from '../img/catURL.png';
import lights from '../img/lights.png';
import walking from '../img/walking.png';
import nitrous from '../img/nitrous.png';


class App extends Component {

  render() {
    return (
      <div className="App">

        <Navigation />

        {/* INTRO ===================================================*/}

        <div id="intro" className="section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="intro-message">
                            <h1>I'm Joyce.</h1>
                            <h3>Working on something interesting? Talk to me.</h3>
                            <hr className="intro-divider" />
                                <ul className="list-inline intro-social-buttons">
                                    <li>
                                        <a href="https://twitter.com/PetuniaGray" className="btn btn-default btn-lg"><i
                                            className="fa fa-twitter fa-fw"></i> <span className="network-name">Twitter</span></a>
                                    </li>
                                    <li>
                                        <a href="https://github.com/loopDelicious" className="btn btn-default btn-lg"><i
                                            className="fa fa-github fa-fw"></i> <span className="network-name">Github</span></a>
                                    </li>
                                    <li>
                                        <a href="https://www.linkedin.com/in/joyce-lin" className="btn btn-default btn-lg"><i
                                            className="fa fa-linkedin fa-fw"></i> <span className="network-name">Linkedin</span></a>
                                    </li>
                                </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* ABOUT ===================================================*/}

        <div id="about" className="section">
          <div className="row">
              <div className="col-lg-5 col-lg-offset-1 col-sm-push-6  col-sm-6">
                  <div className="clearfix"></div>
                  <h2 className="section-heading">Joyce Lin: <br />Full Stack Engineer <br />with Product Experience</h2>
                  <p className="lead">I enjoy the challenge of keeping up with the entire stack because it keeps you sharp on
                      a bunch of new technologies, and I get some flexibility to move around when I get tired of working
                      too closely in one area.</p>
                  <ToggleMain />
              </div>
              <div className="col-lg-5 col-sm-pull-6  col-sm-6">
                  <img className="img-responsive" src={tigerhat} alt="joyce-tigerhat" />
              </div>
          </div>
        </div>

        {/* TECH =====================================================*/}

        <div id="tech" className="section">
            <div className="container">
            <div className="row">
                <div className="col-lg-5 col-lg-offset-1 col-sm-push-6  col-sm-6">
                    <div className="clearfix"></div>
                    <h2 className="section-heading tech3"><i className="fa fa-cog fa-spin fa-2x fa-fw"></i>  Technologies<br /></h2>
                    <span className="tech">languages</span>
                    <p className="tech2">Python, JavaScript, HTML/CSS, AJAX, SQL</p><br />
                    <span className="tech">frameworks/libraries</span>
                    <p className="tech2">React, Flask, Node.js, Express, jQuery, Bootstrap</p><br />
                    <span className="tech">industry tools</span>
                    <p className="tech2">PostgreSQL, Redis, WebSockets, Git, Heroku</p><br />
                    <span className="tech">industry software</span>
                    <p className="tech2">JIRA, Omniture, Google Analytics</p><br />
                </div>
                <div className="col-lg-5 col-sm-pull-6  col-sm-6">
                    <img className="img-responsive" src={robot} alt="robot" />
                </div>
            </div>
            </div>
        </div>

        {/* PROJECT SECTIONS ==========================================*/}

        <div id="projects"></div>

        <div id="nitrous" className="section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5 col-lg-offset-1 col-sm-push-6 col-sm-6">
                        <hr className="section-heading-spacer"/>
                            <div className="clearfix"></div>
                            <h2 className="section-heading">Nitrous.io</h2>
                            <p className="lead">Lead developer for website rebrand using Node.js framework, React components, Jade/Pug templating, SASS preprocessor, and Gulp task runner.</p>
                            <ToggleNitrous />
                    </div>
                    <div className="col-lg-5 col-sm-pull-6 col-sm-6">
                        <img className="img-responsive" src={nitrous} alt="homepage" />
                    </div>
                </div>
            </div>
        </div>

        <div id="christopherWalken" className="section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5 col-sm-6">
                        <hr className="section-heading-spacer" />
                            <div className="clearfix"></div>
                            <h2 className="section-heading">Christopher Walken</h2>
                            <p className="lead">Geovisualization app using Flask, PostgreSQL, and machine learning to recommend walking
                                destinations throughout San Francisco.</p>
                            <ToggleWalking />
                    </div>
                    <div className="col-lg-5 col-lg-offset-2 col-sm-6">
                        <img className="img-responsive" src={walking} alt="screenshot" />
                    </div>
                </div>
            </div>
        </div>

        <div id="'outsidelights" className="section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5 col-lg-offset-1 col-sm-push-6 col-sm-6">
                        <hr className="section-heading-spacer" />
                            <div className="clearfix"></div>
                            <h2 className="section-heading">Outside Lights</h2>
                            <p className="lead">Node.js app using WebSockets and GPS enabling DJs to push color and animation updates to
                                create a synchronized light show on audience phones.</p>
                            <ToggleLights />
                    </div>
                    <div className="col-lg-5 col-sm-pull-6 col-sm-6">
                        <img className="img-responsive" src={lights} alt="tabletUI" />
                    </div>
                </div>
            </div>
        </div>

        <div id="caturl" className="section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5 col-sm-6">
                          <hr className="section-heading-spacer" />
                              <div className="clearfix"></div>
                              <h2 className="section-heading">CatURL Shortener</h2>
                              <p className="lead">Cat-themed URL shortener using PostgreSQL and Redis. It's a litter bit amazing!</p>
                              <ToggleCat />
                    </div>
                    <div className="col-lg-5 col-lg-offset-2 col-sm-6">
                        <a href="https://caturl.herokuapp.com/"><img className="img-responsive" src={caturl} alt="screenshot" /></a>
                    </div>
                </div>
            </div>
        </div>

        <div id="hackerrank" className="section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5 col-lg-offset-1 col-sm-push-6  col-sm-6">
                        <hr className="section-heading-spacer" />
                            <div className="clearfix"></div>
                            <h2 className="section-heading">30 Days of Coding</h2>
                            <p className="lead">Data visualization using Chart.js to demonstrate the dropout rate from 30 days of coding challenge - only 8.2% make it to the last day.</p>
                            <ToggleHacker />
                    </div>
                    <div className="col-lg-5 col-sm-pull-6  col-sm-6">
                        <img className="img-responsive" src={hackerrank} alt="graph" />
                    </div>
                </div>
            </div>
        </div>

        {/* CONTACT ===================================================*/}

        <div id="contact" className="section banner">
            <div className="container">
                <div className="row">
                    <h2>Working on something interesting?  Talk to me.</h2>
                </div>
                <div className="col-lg-6">
                    <ul className="list-inline banner-social-buttons">
                        <li>
                            <a href="https://twitter.com/PetuniaGray" className="btn btn-default btn-lg"><i
                                className="fa fa-twitter fa-fw"></i> <span className="network-name">Twitter</span></a>
                        </li>
                        <li>
                            <a href="https://github.com/loopDelicious" className="btn btn-default btn-lg"><i
                                className="fa fa-github fa-fw"></i> <span className="network-name">Github</span></a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/joyce-lin" className="btn btn-default btn-lg"><i
                                className="fa fa-linkedin fa-fw"></i> <span className="network-name">Linkedin</span></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <ul className="list-inline">
                            <li>
                                <a href="#">Home</a>
                            </li>
                            <li className="footer-menu-divider">&sdot;</li>
                            <li>
                                <a href="#about">About</a>
                            </li>
                            <li className="footer-menu-divider">&sdot;</li>
                            <li>
                                <a href="#tech">Tech</a>
                            </li>
                            <li className="footer-menu-divider">&sdot;</li>
                            <li>
                                <a href="#projects">Projects</a>
                            </li>
                            <li className="footer-menu-divider">&sdot;</li>
                            <li>
                                <a href="#contact">Contact</a>
                            </li>
                      </ul>
                    </div>
                </div>
            </div>
        </footer>

      </div>
    );
  }
}

export default App;
