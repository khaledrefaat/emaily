import React, { Component } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './Payments';
import './Header.css';

class Header extends Component {
  componentDidMount() {}

  renderContent = () => {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <Nav className="ml-auto header__nav" fill>
            <Nav.Item>
              <Nav.Link href="/auth/google">login with google</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/auth/facebook">login with facebook</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/auth/github">login with github</Nav.Link>
            </Nav.Item>
          </Nav>
        );

      default:
        return (
          <Nav className="ml-auto header__nav" fill>
            <Nav.Item>
              <Nav.Link href="/surveys">add credits</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Payments />
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/api/logout">logout</Nav.Link>
            </Nav.Item>
          </Nav>
        );
    }
  };

  render() {
    return (
      <>
        <Navbar expand="lg" bg="info" variant="dark" className="header__navbar">
          <Link
            to={this.props.auth ? '/surveys' : '/'}
            className="header__brand">
            emaily
          </Link>
          {this.renderContent()}
        </Navbar>
      </>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  return { auth };
};

export default connect(mapStateToProps)(Header);
