import React, { Component } from 'react'
import { Form, Button, ListGroupItem, Image } from 'react-bootstrap'
import {connect} from 'react-redux';
import PropTypes from 'prop-types'
import { addListing } from '../../actions/listings';
import './addlistingform.css'
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
        addListing: PropTypes.func.isRequired,
        auth: PropTypes.object.isRequired,
    }
    onChange = e => this.setState({ 
        [e.target.name]: e.target.value
    }, console.log(this.state))
 

    componentDidMount = ()=> {
        {console.log(this)}
    }
    onSubmit = e => {
        e.preventDefault();
        console.log(this.state)
        const {category, price, title, brand, description, sizes, photo_url, csrfmiddlewaretoken } = this.state
        const listing = {category, price, title, brand, description, sizes, photo_url, csrfmiddlewaretoken};
        this.props.addListing(listing)
    }
    render() {
        {console.log()}
        // return <Redirect to='/shop'/>
        const {category, price, title, brand, description, sizes, photo_url, csrfmiddlewaretoken } = this.state
        return (
            <div className='formContainer'>
                <Form className='form'>
                    <Form.Group className="mb-3" controlId="floatingTextarea">
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" placeholder="Enter title" value={title} name="title" onChange={this.onChange}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="floatingTextarea">
                        <Form.Label>Brand</Form.Label>
                        <Form.Control type="text" placeholder="Enter Brand" value={brand} name="brand" onChange={this.onChange}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="floatingTextarea">
                        <Form.Label>Description</Form.Label>
                        <Form.Control type="text" placeholder="Enter Description" value={description} name="description" onChange={this.onChange}/>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Categories</Form.Label>
                        <Form.Select aria-label="Default select example" value={category} name="category" onChange={this.onChange}>
                        <option>Select Category</option>
                        <option value="Hoodies">Hoodies</option>
                        <option value="Sweaters">Sweaters</option>
                        <option value="Jackets">Jackets</option>
                        <option value="T-Shirts">T-Shirts</option>
                        <option value="Button Down Top">Button Down Top</option>
                        <option value="Pants">Pants</option>
                        <option value="Denim">Denim</option>
                        <option value="Shorts">Shorts</option>
                        <option value="Sweatpants">Sweatpants</option>
                        <option value="Swimwear">Swimwear</option>
                        <option value="Accessories">Accessories</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Sizes</Form.Label>
                        <Form.Select aria-label="Default select example" value={sizes} name="sizes" onChange={this.onChange}>
                        <option>Select Size</option>
                        <option value="XS">XS</option>
                        <option value="S">S</option>
                        <option value="M">M</option>
                        <option value="L">L</option>
                        <option value="XL">XL</option>
                        <option value="XXL">XXL</option>
                        <option value="XXL">XXL</option>
                        <option value="6">6 / 39</option>
                        <option value="6.5">6.5 / 39</option>
                        <option value="7">7 / 40</option>
                        <option value="7.5">7.5 / 40-41</option>
                        <option value="8">8 / 41</option>
                        <option value="8.5">8.5 / 41-42</option>
                        <option value="9">9 / 42</option>
                        <option value="9.5">9.5 / 42-43</option>
                        <option value="10">10 / 43</option>
                        <option value="10.5">10.5 / 43-44</option>
                        <option value="11">11 / 44</option>
                        <option value="11.5">11.5 / 44-45</option>
                        <option value="12">12 / 45</option>
                        <option value="13">13 / 46</option>
                        <option value="14">14 / 47</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="floatingTextarea">
                        <Form.Label>Price</Form.Label>
                        <Form.Control type="text" placeholder="Enter Price" value={price} name="price" onChange={this.onChange}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="floatingTextarea">
                        <Form.Label>Photo</Form.Label>
                        <Form.Control type="text" placeholder="Enter URL" value={photo_url} name="photo_url" onChange={this.onChange}/>
                    </Form.Group>


                    <Button variant="primary" type="submit" onClick={this.onSubmit}>
                        Submit
                    </Button>
                </Form>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    auth: state.auth
  })

export default connect(mapStateToProps, {addListing})(AddListingForm)
