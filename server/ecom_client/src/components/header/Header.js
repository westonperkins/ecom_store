import React, { Component } from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import "./Header.css";
import SearchBar from "../searchBar/SearchBar";
import { logout } from '../../actions/auth'
import PropTypes from 'prop-types'
import {connect} from "react-redux"
import { Link } from "react-router-dom";

export class Header extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired,
    logout: PropTypes.func.isRequired
  }
  render() {
    const { isAuthenticated, user } = this.props.auth;
    const authLinks = (

      <Navbar bg="light" expand="lg" className="loggedIn">
        <Navbar.Brand href="#/shop/">Ecom</Navbar.Brand>

          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll" className="navItems">
            <Nav
              className="mr-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#/shop/">Shop</Nav.Link>
              <Nav.Link href="#/sell/new/">Sell</Nav.Link>

              <NavDropdown title={user ? `Logged in as ${user.username}` : ""} id="nav-dropdown">
                <NavDropdown.Item className='profileContainer' eventKey="4.2"><Link className='profile' to='/profile'>Profile</Link></NavDropdown.Item>

                <NavDropdown.Divider />
                <NavDropdown.Item eventKey="4.4" onClick={this.props.logout} >Logout</NavDropdown.Item>
              </NavDropdown>
            </Nav>
        </Navbar.Collapse>
      </Navbar>
    )

    const guestLinks = (
      <Navbar bg="light" expand="lg" className="loggedOut">
        <Nav className='loginNav'>
          <Nav.Link href="/#/login">Login</Nav.Link>
          <Nav.Link href="/#/register">Register</Nav.Link>
        </Nav>
      </Navbar>
    );

    return (
      <div className="nav">
        { isAuthenticated ? authLinks : guestLinks}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps, {logout})(Header);
