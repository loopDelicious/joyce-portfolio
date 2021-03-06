import React, { Component } from 'react';

import Toggle from '../components/toggle.js';

import tigerhat from '../img/tigerhat.png';
import robot from '../img/robot.png';
import pen from '../img/pen.png';
import hackerrank from '../img/hackerrank-desktop.png';
import caturl from '../img/catURL-laptop.png';
import lights from '../img/lights-tablet.png';
import walking from '../img/walking-desktop.png';
import nitrousgiphy from '../img/nitrousgiphy.gif';
import regional from '../img/radar-desktop.png';
import catfit from '../img/pushup-tablet.png';
import os from '../img/zoom.gif';
// import nitrous from '../img/nitrous.png';

class Portfolio extends Component {

    render() {
        return (
            <div className="portfolio">

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
                                            <a target="_blank" href="https://twitter.com/PetuniaGray" className="btn btn-default btn-lg">
                                                <i className="fa fa-twitter fa-fw" />
                                                <span className="network-name">Twitter</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a target="_blank" href="https://github.com/loopDelicious" className="btn btn-default btn-lg">
                                                <i className="fa fa-github fa-fw" />
                                                <span className="network-name">Github</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a target="_blank" href="https://www.linkedin.com/in/joyce-lin" className="btn btn-default btn-lg">
                                                <i className="fa fa-linkedin fa-fw" />
                                                <span className="network-name">Linkedin</span>
                                            </a>
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
                        <div className="col-lg-5 col-sm-6">
                            <div className="clearfix"></div>
                            <h3 className="section-heading">Joyce Lin: <br />Full Stack Engineer <br />with Product Experience</h3>
                            <p className="lead">I enjoy the challenge of keeping up with the entire stack because it keeps you sharp on
                                a bunch of new technologies, and I get some flexibility to move around when I get tired of working
                                too closely in one area.</p>
                            <Toggle>
                                <div className="about-joyce">
                                    <p className="lead">I'm a chameleon, and I can do anything that I've set my mind to, so far! I've done
                                        operations, business, product and marketing.</p>
                                    <p className="lead">Being a programmer, there is always something new to learn, and the rapid
                                        pace of change keeps things fresh.</p>
                                    <h3>Other interests</h3>
                                    <p className="lead">Interested in health and wellness, travel and technology.</p>
                                    <p className="lead">National Exercise & Sports Trainers Association (NESTA) certified sport yoga, indoor
                                        cycling, and bootcamp instructor.</p>
                                    <div className="list-group">
                                        <a className="list-group-item" target="_blank" href="https://medium.com/@joycelin.codes">
                                            <i className="fa fa-medium fa-fw" aria-hidden="true" />&nbsp; I have things to say about coding and tech.
                                        </a>
                                    </div>
                                </div>
                            </Toggle>
                        </div>
                        <div className="col-lg-5 col-lg-offset-2 col-sm-6">
                            <img className="img-responsive" src={tigerhat} alt="joyce-tigerhat" />
                        </div>
                    </div>
                </div>

                {/* TECH =====================================================*/}

                <div id="tech" className="section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5 col-lg-offset-1 col-sm-push-6 col-sm-6">
                                <div className="clearfix"></div>
                                <h2 className="section-heading tech3"><i className="fa fa-cog fa-spin slow-spin fa-2x fa-fw" />  Technologies<br /></h2>
                                <span className="tech">languages</span>
                                <p className="tech2">Python, JavaScript, HTML/CSS, AJAX, SQL</p><br />
                                <span className="tech">frameworks/libraries</span>
                                <p className="tech2">React, Flask, Node.js, Express, jQuery, SASS, Bootstrap</p><br />
                                <span className="tech">industry tools</span>
                                <p className="tech2">PostgreSQL, Redis, Git, Heroku</p><br />
                                <span className="tech">industry software</span>
                                <p className="tech2">JIRA, Omniture, Google Analytics</p><br />
                            </div>
                            <div className="col-lg-5 col-sm-pull-6 col-sm-6">
                                <img className="img-responsive" src={robot} alt="robot" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* PROJECT SECTIONS ==========================================*/}

                <div id="projects"></div>

                {/*<div className="banner projects-intro">*/}
                {/*<div className="container">*/}
                {/*<div className="row">*/}
                {/*<div className="col-lg-6">*/}
                {/*<h2>Other stuff</h2>*/}
                {/*</div>*/}
                {/*</div>*/}
                {/*</div>*/}
                {/*</div>*/}

                <div id="nitrous" className="section content-section-a cf">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5 col-lg-offset-1 col-sm-push-6 col-sm-6">
                                <hr className="section-heading-spacer"/>
                                <div className="clearfix"></div>
                                <h2 className="section-heading">Nitrous.io</h2>
                                <p className="lead">Lead developer for website rebrand using Node.js framework, React components, Jade/Pug templating, SASS preprocessor, and Gulp task runner.</p>
                                <Toggle>
                                    <div className="nitrous">
                                        <p className="lead">Building a new website by consolidating content from four existing subdomains into one, and using media queries and fluid graphics to create an adaptive design.</p>
                                        <p className="lead">React, Node.js, JavaScript, Jade/Pug, Bootstrap, HTML5, SASS</p>
                                        <p className="lead">Developer Evangelist creating demos, content and tutorials for the developer community.</p>
                                        <div className="list-group">
                                            <a className="list-group-item" target="_blank" href="https://youtu.be/xCDpXgWsuU4">
                                                <i className="fa fa-youtube-play fa-fw" aria-hidden="true" />&nbsp; YouTube demo
                                            </a>
                                        </div>
                                    </div>
                                </Toggle>
                            </div>
                            <div className="col-lg-5 col-sm-pull-6 col-sm-6">
                                <div className="img-responsive" id='nitrousgiphy' alt="nitrous-site" ></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="christopherWalken" className="section content-section-b cf">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5 col-sm-6">
                                <hr className="section-heading-spacer" />
                                <div className="clearfix"></div>
                                <h2 className="section-heading">Christopher Walken</h2>
                                <p className="lead">Geovisualization app using Flask, PostgreSQL, and machine learning to recommend walking
                                    destinations throughout San Francisco.</p>
                                <Toggle>
                                    <div className="walking">
                                        <p className="lead">Integration with the Mapbox and Google Maps API's allows users to plan the optimal
                                            walking routes to visit local parks and public art works.</p>
                                        <p className="lead">Using machine learning and other user's reviews, Christopher Walken recommends other
                                            landmarks within proximity of your planned route.</p>
                                        <p className="lead">PostgreSQL, SQLAlchemy, Python, Flask, JavaScript, JQuery, Ajax, Bootstrap, HTML5,
                                            CSS3</p>
                                        <p className="lead">Leaflet, Mapbox.js, Mapbox Directions, Mapbox Geocoding, Google Maps Distance
                                            Matrix, Google Maps Streetview, Imgur photo upload</p>
                                        <div className="list-group">
                                            <a className="list-group-item" target="_blank" href="https://github.com/loopDelicious/walking">
                                                <i className="fa fa-github fa-fw" aria-hidden="true" />&nbsp; GitHub
                                            </a>
                                            <a className="list-group-item" target="_blank" href="https://www.youtube.com/watch?v=T7kwK7rYwOY">
                                                <i className="fa fa-youtube-play fa-fw" aria-hidden="true" />&nbsp; YouTube demo
                                            </a>
                                        </div>
                                    </div>
                                </Toggle>
                            </div>
                            <div className="col-lg-5 col-lg-offset-2 col-sm-6">
                                <img className="img-responsive" src={walking} alt="screenshot" />
                            </div>
                        </div>
                    </div>
                </div>

                <div id="'outsidelights" className="section content-section-a cf">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5 col-lg-offset-1 col-sm-push-6 col-sm-6">
                                <hr className="section-heading-spacer" />
                                <div className="clearfix"></div>
                                <h2 className="section-heading">Outside Lights</h2>
                                <p className="lead">Node.js app using WebSockets and GPS enabling DJs to push color and animation updates to
                                    create a synchronized light show on audience phones.</p>
                                <Toggle>
                                    <div className="lights">
                                        <p className="lead">Developed in 24 hours for the Outside Hacks hackathon, we set out to build something
                                            that enhances the experience for Artists and/or Fans at Outside Lands music festival.</p>
                                        <p className="lead">Using web sockets, DJ's can interact with the audience, pushing changes in
                                            background color and animations based on GPS location of the audience member's phone.</p>
                                        <p className="lead">Node.js, HTML5, socket.io, React, jQuery, Webpack</p>
                                        <div className="list-group">
                                            <a className="list-group-item" target="_blank" href="https://github.com/loopDelicious/outsidehacks">
                                                <i className="fa fa-github fa-fw" aria-hidden="true" />&nbsp; GitHub
                                            </a>
                                        </div>
                                    </div>
                                </Toggle>
                            </div>
                            <div className="col-lg-5 col-sm-pull-6 col-sm-6">
                                <img className="img-responsive" src={lights} alt="tabletUI" />
                            </div>
                        </div>
                    </div>
                </div>

                <div id="caturl" className="section content-section-b cf">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5 col-sm-6">
                                <hr className="section-heading-spacer" />
                                <div className="clearfix"></div>
                                <h2 className="section-heading">CatURL Shortener</h2>
                                <p className="lead">Cat-themed URL shortener using PostgreSQL and Redis. It's a litter bit amazing!</p>
                                <Toggle>
                                    <div className="catUrl">
                                        <p className="lead">Using a random selection of cat verbs, cat nouns, and cat emojis, create your own
                                            unique URL.</p>
                                        <p className="lead">PostgreSQL, SQLAlchemy, Redis, Python, Flask, JavaScript, JQuery, Ajax, HTML5, CSS3,
                                            Clipboard.JS, Heroku</p>
                                        <div className="list-group">
                                            <a className="list-group-item" target="_blank" href="https://github.com/loopDelicious/cat-url-mangler">
                                                <i className="fa fa-github fa-fw" aria-hidden="true" />&nbsp; GitHub
                                            </a>
                                            <a className="list-group-item" target="_blank" href="https://caturl.herokuapp.com/">
                                                <i className="fa fa-paw fa-fw" aria-hidden="true" />&nbsp; Check it out, meow
                                            </a>
                                        </div>
                                    </div>
                                </Toggle>
                            </div>
                            <div className="col-lg-5 col-lg-offset-2 col-sm-6">
                                <a target="_blank" href="https://caturl.herokuapp.com/">
                                    <img className="img-responsive" src={caturl} alt="screenshot" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="hackerrank" className="section content-section-a cf">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5 col-lg-offset-1 col-sm-push-6  col-sm-6">
                                <hr className="section-heading-spacer" />
                                <div className="clearfix"></div>
                                <h2 className="section-heading">30 Days of Coding</h2>
                                <p className="lead">Data visualization using Chart.js to demonstrate the dropout rate from 30 days of coding challenge - only 8.2% make it to the last day.</p>
                                <Toggle>
                                    <div className="hackerrank">
                                        <p className="lead">Developed as a data illustration for a Medium blog post, and deployed on Digital Ocean using Nginx.</p>
                                        <p className="lead">JavaScript, HTML5, Chart.js, Nginx, CloudFlare, Digital Ocean</p>
                                        <div className="list-group">
                                            <a className="list-group-item" target="_blank" href="https://github.com/loopDelicious/dataviz">
                                                <i className="fa fa-github fa-fw" aria-hidden="true" />&nbsp; GitHub
                                            </a>
                                            <a className="list-group-item" target="_blank" href="https://medium.com/@joycelin.codes/30-days-of-coding-56f4e6c72aa2#.de9wrhwss">
                                                <i className="fa fa-medium fa-fw" aria-hidden="true" />&nbsp; Medium blog
                                            </a>
                                            <a className="list-group-item" target="_blank" href="http://192.241.206.83/">
                                                <i className="fa fa-bar-chart-o fa-fw" aria-hidden="true" />&nbsp; Check it out
                                            </a>
                                        </div>
                                    </div>
                                </Toggle>
                            </div>
                            <div className="col-lg-5 col-sm-pull-6  col-sm-6">
                                <a target="_blank" href="http://192.241.206.83/">
                                    <img className="img-responsive" src={hackerrank} alt="graph" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="regional" className="section content-section-b cf">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5 col-sm-6">
                                <hr className="section-heading-spacer" />
                                <div className="clearfix"></div>
                                <h2 className="section-heading">Regional Differences in Programming</h2>
                                <p className="lead">Data visualization using React-Chart.JS to illustrate job postings by programming language by US city.</p>
                                <Toggle>
                                    <div className="regional">
                                        <p className="lead">Developed as a data illustration for a Medium blog post, and deployed on Digital Ocean using Nginx.</p>
                                        <p className="lead">React, Chart.js, Redis, JavaScript, JQuery, Ajax, HTML5, CSS3, Digital Ocean</p>
                                        <div className="list-group">
                                            <a className="list-group-item" target="_blank" href="https://github.com/loopDelicious/indeed">
                                                <i className="fa fa-github fa-fw" aria-hidden="true" />&nbsp; GitHub
                                            </a>
                                            <a className="list-group-item" target="_blank" href="https://medium.com/@joycelin.codes/always-be-coding-regional-differences-in-programming-languages-9957785dd4e6#.76xivr9nh">
                                                <i className="fa fa-medium fa-fw" aria-hidden="true" />&nbsp; Medium blog
                                            </a>
                                            <a className="list-group-item" target="_blank" href="http://indeed.meowsergirl.com/">
                                                <i className="fa fa-bar-chart-o fa-fw" aria-hidden="true" />&nbsp; Check it out
                                            </a>
                                        </div>
                                    </div>
                                </Toggle>
                            </div>
                            <div className="col-lg-5 col-lg-offset-2 col-sm-6">
                                <a target="_blank" href="http://indeed.meowsergirl.com/">
                                    <img className="img-responsive" src={regional} alt="screenshot" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="catfit" className="section content-section-a cf">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5 col-lg-offset-1 col-sm-push-6  col-sm-6">
                                <hr className="section-heading-spacer" />
                                <div className="clearfix"></div>
                                <h2 className="section-heading">Fitness Generator</h2>
                                <p className="lead">Generate workouts based on random selection from MongoDB, with an admin view to add, edit and delete exercises, using RESTful APIs.</p>
                                <Toggle>
                                    <div className="hackerrank">
                                        <p className="lead">React-Chart.js, MongoDB, Redis, JavaScript, JQuery, Ajax, HTML5, CSS3, Digital Ocean</p>
                                        <div className="list-group">
                                            <a className="list-group-item" target="_blank" href="https://github.com/loopDelicious/feline-good">
                                                <i className="fa fa-github fa-fw" aria-hidden="true" />&nbsp; GitHub
                                            </a>
                                            <a className="list-group-item" target="_blank" href="https://medium.com/@joycelin.codes/feline-good-a-crud-fitness-app-623d15bd5775#.uztvmpbrn">
                                                <i className="fa fa-medium fa-fw" aria-hidden="true" />&nbsp; Medium blog
                                            </a>
                                            <a className="list-group-item" target="_blank" href="http://catfit.meowsergirl.com/">
                                                <i className="fa fa-bar-chart-o fa-fw" aria-hidden="true" />&nbsp; Check it out
                                            </a>
                                        </div>
                                    </div>
                                </Toggle>
                            </div>
                            <div className="col-lg-5 col-sm-pull-6  col-sm-6">
                                <a target="_blank" href="http://catfit.meowsergirl.com/">
                                    <img className="img-responsive" src={catfit} alt="app" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="operatingSystem" className="section content-section-b cf">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5 col-sm-6">
                                <hr className="section-heading-spacer" />
                                <div className="clearfix"></div>
                                <h2 className="section-heading">Evolution of Web Server Operating Systems</h2>
                                <p className="lead">Data visualization using React and D3 to illustrate web server operating systems by lineage and market share.</p>
                                <Toggle>
                                    <div className="os">
                                        <p className="lead">Developed as a data illustration for a Medium blog post, and deployed on Digital Ocean using Nginx.</p>
                                        <p className="lead">React, D3, JavaScript, HTML5, CSS3, Digital Ocean</p>
                                        <div className="list-group">
                                            <a className="list-group-item" target="_blank" href="https://github.com/loopDelicious/operating-systems">
                                                <i className="fa fa-github fa-fw" aria-hidden="true" />&nbsp; GitHub
                                            </a>
                                            <a className="list-group-item" target="_blank" href="https://medium.com/@joycelin.codes/evolution-of-web-server-operating-systems-ba1cf1c1e3d8">
                                                <i className="fa fa-medium fa-fw" aria-hidden="true" />&nbsp; Medium blog
                                            </a>
                                            <a className="list-group-item" target="_blank" href="http://os.meowsergirl.com/">
                                                <i className="fa fa-bar-chart-o fa-fw" aria-hidden="true" />&nbsp; Check it out
                                            </a>
                                        </div>
                                    </div>
                                </Toggle>
                            </div>
                            <div className="col-lg-5 col-lg-offset-2 col-sm-6">
                                <a target="_blank" href="https://os.meowsergirl.com/">
                                    <img className="img-responsive" src={os} alt="screenshot" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CONTENT ===================================================*/}

                <div id="content" className="section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5 col-lg-offset-1 col-sm-push-6 col-sm-6">
                                <div className="clearfix"></div>
                                <h2 className="section-heading tech3">  Content<br /></h2>
                                <span className="tech">blog, tutorials, and demos</span><br />
                                <a target="_blank" href="https://medium.com/@joycelin.codes"><p className="tech2">joycelin codes on Medium</p></a>
                                <a target="_blank" href="http://blog.getpostman.com/author/joyce/"><p className="tech2">Developer Evangelist for Postman</p></a>
                                <a target="_blank" href="https://www.getpostman.com/docs"><p className="tech2">Postman Documentation for Developer Tools</p></a>
                                <a target="_blank" href="http://blog.getpostman.com/2017/12/29/10-tips-for-working-with-postman-variables/"><p className="tech2">10 tips for working with Postman variables</p></a>
                                <a target="_blank" href="http://blog.getpostman.com/2017/12/13/keep-it-dry-with-collection-and-folder-elements/"><p className="tech2">Keep it DRY with collection elements</p></a>
                                <a target="_blank" href="http://blog.getpostman.com/2017/11/08/using-a-postman-monitor-to-water-my-plants/"><p className="tech2">Schedule an Arduino to water my plants</p></a>
                                <a target="_blank" href="http://blog.getpostman.com/2017/10/25/writing-tests-in-postman/"><p className="tech2">Writing tests in Postman</p></a>
                                <a target="_blank" href="http://blog.getpostman.com/2017/10/03/send-asynchronous-requests-with-postmans-pm-api/"><p className="tech2">Send asynchronous requests</p></a>
                                <a target="_blank" href="http://blog.getpostman.com/2017/09/01/write-to-your-local-file-system-using-a-postman-collection/"><p className="tech2">Write to your local file system</p></a>
                                <a target="_blank" href="http://blog.getpostman.com/2017/08/23/integrate-api-tests-with-postman-newman-and-travis-ci/"><p className="tech2">Integrate API tests with Postman, Newman, and Travis CI</p></a>
                                <a target="_blank" href="http://www.devopsdigest.com/crisis-management-what-should-you-do-when-things-go-wrong"><p className="tech2">What should you do when things go wrong?</p></a>
                                <a target="_blank" href="https://www.itproportal.com/features/eight-habits-of-effective-api-developers/"><p className="tech2">Eight habits of effective API developers</p></a>
                                <a target="_blank" href="http://blog.getpostman.com/2017/06/23/check-for-broken-links-on-your-website-using-a-postman-collection/"><p className="tech2">Check for broken links using recursion</p></a>
                                <a target="_blank" href="http://blog.getpostman.com/2017/05/27/not-your-grandmas-postman/"><p className="tech2">Not your grandma's Postman</p></a>
                                <a target="_blank" href="https://medium.com/@joycelin.codes/quickstart-for-react-and-webpack-in-8-minutes-or-less-eb736da7480b"><p className="tech2">Tutorial for React and Webpack</p></a><br />
                            </div>
                            <div className="col-lg-5 col-sm-pull-6 col-sm-6">
                                {/*<div className="pen-icon">*/}
                                    {/*<i className="fa fa-pencil-square-o fa-5x fa-fw" />*/}
                                {/*</div>*/}
                                <img className="img-responsive img-pen" src={pen} alt="pen" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* CONTACT ===================================================*/}

                <div id="contact" className="section banner">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <h2>Working on something interesting?  Talk to me.</h2>
                            </div>
                            <div className="col-lg-6">
                                <ul className="list-inline banner-social-buttons">
                                    <li>
                                        <a target="_blank" href="https://twitter.com/PetuniaGray" className="btn btn-default btn-lg">
                                            <i className="fa fa-twitter fa-fw" />
                                            <span className="network-name">Twitter</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a target="_blank" href="https://github.com/loopDelicious" className="btn btn-default btn-lg">
                                            <i className="fa fa-github fa-fw" />
                                            <span className="network-name">Github</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a target="_blank" href="https://www.linkedin.com/in/joyce-lin" className="btn btn-default btn-lg">
                                            <i className="fa fa-linkedin fa-fw" />
                                            <span className="network-name">Linkedin</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
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
        )
    }
}

export default Portfolio;
