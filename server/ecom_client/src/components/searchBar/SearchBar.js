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
import Listings from '../main/listings/Listings';

const SearchBar = (props) => {
    // propTypes = {
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
        })
        if(searchTerm == '') {
            setFilteredData([])
        }else {
            setFilteredData(searched)
        }
    }
    
        return (
            <div>
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
                {/* <Listings/> */}
            </div>
        )
    
}

const mapStateToProps = state => ({
    listings: state.listings.listings,
    auth: state.auth
})

export default connect(mapStateToProps, { getListings })(SearchBar);
