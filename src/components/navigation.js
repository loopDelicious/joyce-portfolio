import React, {Component} from 'react';

class Navigation extends Component {
    render() {
        return (
            <div className="navbar">
                <a className="brand" href="/">joyce</a>

                    <ul className="right-nav">
                        <li><a href="#about">about</a></li>
                        <li><a href="#tech">tech</a></li>
                        <li><a href="#projects">projects</a></li>
                        <li><a href="#contact">contact</a></li>
                    </ul>
            </div>
        )
    }
};

export default Navigation;
