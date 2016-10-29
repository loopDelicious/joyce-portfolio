import React, {Component} from 'react';
import {Navbar, NavItem, Nav} from 'react-bootstrap';

class Navigation extends Component {
    render() {

        return (

            <Navbar collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a className="brand" href="/">Joyce Lin</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight>
                        <NavItem eventKey={1} href="#about">About</NavItem>
                        <NavItem eventKey={2} href="#tech">Tech</NavItem>
                        <NavItem eventKey={3} href="#projects">Projects</NavItem>
                        <NavItem eventKey={4} href="#contact">Contact</NavItem>
                    </Nav>
                </Navbar.Collapse>

            </Navbar>

        )
    }
};

export default Navigation;
