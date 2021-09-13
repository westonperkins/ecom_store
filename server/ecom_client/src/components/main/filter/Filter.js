import React from "react";
import "./Filter.css";

// import PropTypes from 'prop-types'
import { Dropdown, DropdownButton, NavDropdown } from "react-bootstrap";
// import { getCategories } from '../../../actions/categories'
// import {connect } from 'react-redux'
import { Component } from "react";

export class Filter extends Component {
  // static propTypes = {
  //     categories: PropTypes.array.isRequired
  // }
  // componentDidMount() {
  //     this.props.getCategories()
  // }
  render() {
    return (
      <div className='filters'>
       <NavDropdown className='filter' title='Categories' id="nav-dropdown">
                <NavDropdown.Item eventKey="4.2">Profile</NavDropdown.Item>
                <NavDropdown.Item eventKey="4.1">Favorites</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item eventKey="4.4" onClick={this.props.logout} href="/#/login">Logout</NavDropdown.Item>
              </NavDropdown>
      </div>
    );
  }
}

// const mapStateToProps = state => ({
//     categories: state.categories.categories
// })

// export default connect(mapStateToProps, { getCategories })(Filter);

export default Filter;
