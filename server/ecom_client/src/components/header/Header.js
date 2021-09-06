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

export class Header extends Component {
  render() {
    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#">Ecom</Navbar.Brand>
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
            <Nav.Link href="#action1">Shop</Nav.Link>
            <Nav.Link href="#action2">Sell</Nav.Link>
            <Nav.Link href="#action3">Favorites</Nav.Link>
            <Nav.Link href="#action4">Profile</Nav.Link>
            {/* <NavDropdown title="bruyh" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="#action3">Favorites</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
                </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Header;
