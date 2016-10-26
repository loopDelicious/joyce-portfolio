import React, {Component} from 'react';

class Navigation extends Component {
    render() {
        return (
            <div className="navbar">
                <a className="brand" href="/">Joyce Lin</a>

                    <ul className="right-nav">
                        <li><a href="#about">About</a></li>
                        <li><a href="#tech">Tech</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
            </div>
        )
    }
};

export default Navigation;
