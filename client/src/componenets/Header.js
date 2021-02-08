import React, { Component } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <>
        <Navbar expand="lg" bg="info" variant="dark" className="header__navbar">
          <Navbar.Brand className="header__brand">emaily</Navbar.Brand>
          <Nav className="ml-auto header__nav" fill>
            <Nav.Item>
              <Nav.Link href="/surveys">login with google</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#">login with facebook</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#">login with github</Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar>
      </>
    );
  }
}

export default Header;
