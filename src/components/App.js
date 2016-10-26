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
            <h1>I'm Joyce</h1>
            <h2>Working on something interesting?  Talk to me.</h2>
            {/*<hr className="intro-divider" />*/}
            {/*<ul className="list-inline intro-social-buttons">*/}
                {/*<li>*/}
                    {/*<a href="https://twitter.com/PetuniaGray" className="btn btn-default btn-lg"><i*/}
                        {/*class="fa fa-twitter fa-fw"></i> <span className="network-name">Twitter</span></a>*/}
                {/*</li>*/}
                {/*<li>*/}
                    {/*<a href="https://github.com/loopDelicious" className="btn btn-default btn-lg"><i*/}
                        {/*class="fa fa-github fa-fw"></i> <span className="network-name">Github</span></a>*/}
                {/*</li>*/}
                {/*<li>*/}
                    {/*<a href="https://www.linkedin.com/in/joyce-lin" className="btn btn-default btn-lg"><i*/}
                        {/*className="fa fa-linkedin fa-fw"></i> <span className="network-name">Linkedin</span></a>*/}
                {/*</li>*/}
            {/*</ul>*/}
        </div>

        <div id="about" className="section">
            <img src={tigerhat} id="portrait" alt="joyce-tigerhat"/>
            <h2>Joyce Lin: Full Stack Engineer with Product Experience</h2>
            <p>I enjoy the challenge of keeping up with the entire stack because it keeps you sharp on a bunch of new technologies, and I get some flexibility to move around when I get tired of working too closely in one area.</p>
        </div>

        <div id="tech" className="section">
            <img src={robot} id='robotic' alt="robot"/>
            <div className="col-lg-5 col-lg-offset-1 col-sm-push-6  col-sm-6">
                <div className="clearfix"></div>
                <h2 className="section-heading tech3"><i className="fa fa-cog fa-spin fa-2x fa-fw"></i>  Technologies<br /></h2>
                <span className="tech">languages</span>
                <p className="tech2">Python, JavaScript, HTML/CSS, AJAX, SQL</p><br />
                <span className="tech">frameworks/libraries</span>
                <p className="tech2">Flask, jQuery, Bootstrap, Node.js, Express, React</p><br />
                <span className="tech">industry tools</span>
                <p className="tech2">PostgreSQL, Redis, WebSockets, Git, Heroku</p><br />
                <span className="tech">industry software</span>
                <p className="tech2">JIRA, Omniture, Google Analytics</p><br />
            </div>
        </div>

        <div id="projects" className="section">
            <h2>PROJECTS</h2>
        </div>

        <div id="contact" className="section">
            <h2>Working on something interesting?  Talk to me.</h2>
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
    );
  }
}

export default App;
