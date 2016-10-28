import React, {Component} from 'react';
// import ReactBootstrap from 'react-bootstrap';
import {Navbar, NavItem, Nav} from 'react-bootstrap/lib/Navbar';

class Navigation extends Component {
    render() {

        // var Navbar = ReactBootstrap.Navbar,
        //     NavItem = ReactBootstrap.NavItem,
        //     Nav = ReactBootstrap.Nav;

        return (

            // <Navbar inverse collapseOnSelect>
            //     <Navbar.Header>
            //         <Navbar.Brand>
            //             <a className="brand" href="/">Joyce Lin</a>
            //         </Navbar.Brand>
            //         <Navbar.Toggle />
            //     </Navbar.Header>
            //     <Navbar.Collapse>
            //         <Nav pullRight>
            //             <NavItem eventKey={1} href="#about">About</NavItem>
            //             <NavItem eventKey={2} href="#tech">Tech</NavItem>
            //             <NavItem eventKey={3} href="#projects">Projects</NavItem>
            //             <NavItem eventKey={4} href="#contact">Contact</NavItem>
            //         </Nav>
            //     </Navbar.Collapse>
            //
            // </Navbar>

            <nav className="navbar navbar-default navbar-fixed-top topnav" role="navigation">
                <div className="container topnav">
                    <div className="navbar-header navbar">
                        <button type="button" className="navbar-toggle" data-toggle="collapse"
                                data-target="#bs-example-navbar-collapse-1">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="brand" href="/">Joyce Lin</a>
                    </div>

                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav navbar-right right-nav">
                            <li><a href="#about">About</a></li>
                            <li><a href="#tech">Tech</a></li>
                            <li><a href="#projects">Projects</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
};

export default Navigation;
