import React, { Component } from 'react';
import '../css/App.css';
import Navigation from '../components/navigation.js';
import tigerhat from '../img/tigerhat.png';
import robot from '../img/robot.png';

class App extends Component {

  render() {
    return (
      <div className="App">

        <Navigation />

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

        <div id="about" className="section">
            {/*<img src={tigerhat} id="portrait" alt="joyce-tigerhat"/>*/}
            {/*<div className="accompany-text">*/}
                {/*<h2>Joyce Lin: </h2>*/}
                {/*<h2>Full Stack Engineer with Product Experience</h2>*/}
                {/*<p>I enjoy the challenge of keeping up with the entire stack because it keeps you sharp on a bunch of new technologies, and I get some flexibility to move around when I get tired of working too closely in one area.</p>*/}
            {/*</div>*/}
            {/*</div>*/}

          <div className="row">
              <div className="col-lg-5 col-lg-offset-1 col-sm-push-6  col-sm-6">
                  <div className="clearfix"></div>
                  <h2 className="section-heading">Joyce Lin: <br />Full Stack Engineer <br />with Product Experience</h2>
                  <p className="lead">I enjoy the challenge of keeping up with the entire stack because it keeps you sharp on
                      a bunch of new technologies, and I get some flexibility to move around when I get tired of working
                      too closely in one area.</p>
                  {/*<a data-toggle="collapse" data-target="#accordion-about">+ Read more</a>*/}
                  {/*<div id="accordion-about" className="collapse">*/}
                      {/*<p className="lead">I'm a chameleon, and I can do anything that I've set my mind to, so far! I've done*/}
                          {/*operations, business, product and marketing.</p>*/}
                      {/*<p className="lead">Being a programmer, there is always something new to learn, and the rapid*/}
                          {/*pace of change keeps things fresh.</p>*/}
                      {/*<h3>Other interests</h3>*/}
                      {/*<p className="lead">Interested in health and wellness, travel and technology.</p>*/}
                      {/*<p className="lead">National Exercise & Sports Trainers Association (NESTA) certified sport yoga, indoor*/}
                          {/*cycling, and bootcamp*/}
                          {/*instructor.</p>*/}
                      {/*<div className="list-group">*/}
                          {/*<a className="list-group-item" href="https://medium.com/@joycelin.codes"><i className="fa fa-medium fa-fw" aria-hidden="true"></i>&nbsp; I have things to say about coding and tech.</a>*/}
                      {/*</div>*/}
                  {/*</div>*/}
              </div>
              <div className="col-lg-5 col-sm-pull-6  col-sm-6">
                  <img className="img-responsive" src={tigerhat} alt="joyce-tigerhat" />
              </div>
          </div>
        </div>

        <div id="tech" className="section">
            {/*<img src={robot} id='robotic' alt="robot"/>*/}
            {/*<div className="col-lg-5 col-lg-offset-1 col-sm-push-6  col-sm-6">*/}
                {/*<div className="clearfix"></div>*/}
                {/*<h2 className="section-heading tech3"><i className="fa fa-cog fa-spin fa-2x fa-fw"></i>  Technologies<br /></h2>*/}
                {/*<span className="tech">languages</span>*/}
                {/*<p className="tech2">Python, JavaScript, HTML/CSS, AJAX, SQL</p><br />*/}
                {/*<span className="tech">frameworks/libraries</span>*/}
                {/*<p className="tech2">Flask, jQuery, Bootstrap, Node.js, Express, React</p><br />*/}
                {/*<span className="tech">industry tools</span>*/}
                {/*<p className="tech2">PostgreSQL, Redis, WebSockets, Git, Heroku</p><br />*/}
                {/*<span className="tech">industry software</span>*/}
                {/*<p className="tech2">JIRA, Omniture, Google Analytics</p><br />*/}
            {/*</div>*/}
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

        <div id="projects" className="section">
            <h2>PROJECTS</h2>
        </div>

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

      </div>
    );
  }
}

export default App;
