import React, { Component } from 'react'
import {
    Navbar,
    Nav,
    NavDropdown,
    Form,
    FormControl,
    Button,
  } from "react-bootstrap";
import { useState } from 'react';
import {connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getListings } from '../../actions/listings';

const SearchBar = (props) => {
    // static propTypes = {
    //     listings: PropTypes.array.isRequired,
    //     auth: PropTypes.object.isRequired
    // };

       
    
    
    const [filteredData, setFilteredData] = useState([])
    
    // console.log(props)

    const handleFilter = (e) => {
        
        const searchTerm = e.target.value
        const listings = props.listings

        const searched = listings.filter((value) => {
            return (((value.title.toLowerCase().includes(searchTerm.toLowerCase()))) 
            || ((value.category.toLowerCase().includes(searchTerm.toLowerCase())))
            || ((value.seller.toLowerCase().includes(searchTerm.toLowerCase())))
            || ((value.brand.toLowerCase().includes(searchTerm.toLowerCase())))
            || ((value.description.toLowerCase().includes(searchTerm.toLowerCase())))
            )
            // console.log(value.title)
        })
        console.log(searched)
        if (searchTerm === "") {
            setFilteredData([])
        } else {
            setFilteredData(searched);
        }

    }
    
        return (
            <div>
            <Form className="d-flex">
                <FormControl
                type="search"
                placeholder="Search"
                className="mr-2"
                aria-label="Search"
                onChange={handleFilter}
                />
                <Button variant="outline-success">Search</Button>
            </Form>
            </div>
        )
    
}

const mapStateToProps = state => ({
    listings: state.listings.listings,
    auth: state.auth
})

export default connect(mapStateToProps, { getListings })(SearchBar);
