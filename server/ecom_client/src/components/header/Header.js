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
import { logout } from '../../actions/auth'
import PropTypes from 'prop-types'
import {connect} from "react-redux"

export class Header extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired,
    logout: PropTypes.func.isRequired
  }
  render() {
    const { isAuthenticated, user } = this.props.auth;

    const authLinks = (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#/shop/">Ecom</Navbar.Brand>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="mr-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="mr-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#/shop/">Shop</Nav.Link>
              <Nav.Link href="#/sell/new/">Sell</Nav.Link>
              <Nav.Link href="#action3">Favorites</Nav.Link>
              <Nav.Link href="#action3">Profile</Nav.Link>
              <Nav.Link href="#action4">{user ? `Logged in as ${user.username}` : ""}</Nav.Link>
              <Nav.Link onClick={this.props.logout} href="/#/login">Logout</Nav.Link>
            </Nav>
        </Navbar.Collapse>
      </Navbar>
    )

    const guestLinks = (
      <Navbar bg="light" expand="lg">
        <Nav>
          <Nav.Link href="/#/login">Login</Nav.Link>
          <Nav.Link href="/#/register">Register</Nav.Link>
        </Nav>
      </Navbar>
    );

    return (
      <div>
        { isAuthenticated ? authLinks : guestLinks}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps, {logout})(Header);
