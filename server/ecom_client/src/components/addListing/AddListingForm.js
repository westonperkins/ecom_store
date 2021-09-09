import React, { Component } from 'react'
import { Form, Button, ListGroupItem, Image } from 'react-bootstrap'
import {connect} from 'react-redux';
import PropTypes from 'prop-types'
import { addListing } from '../../actions/listings';

import getCookie from '../../csrftoken'
import { Redirect } from 'react-router';
// console.log({CSRFToken})
export class AddListingForm extends Component {
    state = {
        category: '',
        price: '',
        title: '',
        brand: '',
        description: '',
        sizes: '',
        photo_url: '',
        csrfmiddlewaretoken: getCookie('csrftoken')
    }

    static propTypes = {
        addListing: PropTypes.func.isRequired
    }
    onChange = e => this.setState({ [e.target.name]: e.target.value })

    onSubmit = e => {
        e.preventDefault();
        console.log(this.state)
        const {category, price, title, brand, description, sizes, photo_url, csrfmiddlewaretoken } = this.state
        const listing = {category, price, title, brand, description, sizes, photo_url, csrfmiddlewaretoken};
        this.props.addListing(listing)
        Redirect('/#/shop/')
    }
    render() {
        const {category, price, title, brand, description, sizes, photo_url, csrfmiddlewaretoken } = this.state
        return (
            <div style={{width: '25rem'}}>
                <Form>

                <Form.Group className="mb-3" controlId="floatingTextarea">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" placeholder="Enter title" value={title} name="title" onChange={this.onChange}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="floatingTextarea">
                    <Form.Label>Brand</Form.Label>
                    <Form.Control type="text" placeholder="Brand" value={brand} name="brand" onChange={this.onChange}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="floatingTextarea">
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="text" placeholder="Description" value={description} name="description" onChange={this.onChange}/>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Categories</Form.Label>
                    <Form.Select aria-label="Default select example" value={category} name="category" onChange={this.onChange}>
                    <option>Select Category</option>
                    <option value="Hoodies">Hoodies</option>
                    <option value="Pants">Pants</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Sizes</Form.Label>
                    <Form.Select aria-label="Default select example" value={sizes} name="sizes" onChange={this.onChange}>
                    <option>Select Size</option>
                    <option value="XS">XS</option>
                    <option value="M">M</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3" controlId="floatingTextarea">
                    <Form.Label>Price</Form.Label>
                    <Form.Control type="text" placeholder="Price" value={price} name="price" onChange={this.onChange}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="floatingTextarea">
                    <Form.Label>Photo</Form.Label>
                    <Form.Control type="text" placeholder="URL" value={photo_url} name="photo_url" onChange={this.onChange}/>
                </Form.Group>

                <Button variant="primary" type="submit" onClick={this.onSubmit}>
                    Submit
                </Button>
                </Form>
            </div>
        )
    }
}

export default connect(null, {addListing})(AddListingForm)
