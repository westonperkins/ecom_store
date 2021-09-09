import React from 'react'
import './Filter.css'

// import PropTypes from 'prop-types'
import { Accordion } from 'react-bootstrap';
// import { getCategories } from '../../../actions/categories'
// import {connect } from 'react-redux'
import { Component } from 'react';

export class Filter extends Component {
    // static propTypes = {
    //     categories: PropTypes.array.isRequired
    // }
    // componentDidMount() {
    //     this.props.getCategories()
    // }
    render() {
        return (
            <Accordion className="filters"> 
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Categories</Accordion.Header>
                    <Accordion.Body className="categories">
                    {/* {this.props.categories.map(category => (
                            <div key = {category.id} className="hoodies">
                                <input className="input" type="checkbox" id="{category.category}" name="{category.category}"/>
                                <label for="{category.category}">{category.category}</label>
                            </div>
                        ))} */}
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Size</Accordion.Header>
                    <Accordion.Body>
                
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Price</Accordion.Header>
                    <Accordion.Body>
                
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>Brand</Accordion.Header>
                    <Accordion.Body>
                
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        );
    }
  }
  

// const mapStateToProps = state => ({
//     categories: state.categories.categories
// })

// export default connect(mapStateToProps, { getCategories })(Filter);

export default Filter