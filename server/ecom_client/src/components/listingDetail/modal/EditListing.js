import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { editListing } from "../../../actions/listings";
import { Modal, Button, Form } from "react-bootstrap";
 import './modal.css'
import getCookie from "../../../csrftoken";
import { Redirect } from "react-router";

export class EditListing extends Component {
  state = {
    isOpen: false,
  };

  openModal = () => this.setState({ isOpen: true });
  closeModal = () => this.setState({ isOpen: false });

  static propTypes = {
    editListing: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
  };

  componentDidMount=()=> {
    // console.log(this.props)
    // console.log(this.state)
  }

  
  onChange = (e) => this.setState(
    {[e.target.name]: e.target.value},
    // console.log(this.props.props)
    );
    
    state = {
      category: this.props.props.price,
      price: this.props.props.price,
      title: this.props.props.title,
      brand: this.props.props.brand,
      description: this.props.props.description,
      sizes: this.props.props.sizes,
      photo_url: this.props.props.photo_url,
      csrfmiddlewaretoken: getCookie("csrftoken"),
    };
  

  onSubmit = (e) => {
      e.preventDefault();
      // console.log(this.state);
      const { category, price, title, brand, description, sizes, photo_url, csrfmiddlewaretoken } = this.state;
      const listing = { category, price, title, brand, description, sizes, photo_url, csrfmiddlewaretoken };
      this.props.editListing(this.props.props.id, listing);
      // {console.log(this.props.props.category);}
  };
  render() {

    // return <Redirect to='/shop'/>
    const { category, price, title, brand, description, sizes, photo_url, csrfmiddlewaretoken } = this.state;
    return (
      <>
        <Button className='edit' variant="primary" onClick={this.openModal}>
          Edit
        </Button>
        <div className='modalContainer'>
        <Modal className='modal' show={this.state.isOpen} onHide={this.closeModal}>
          <Modal.Header closeButton>
            <Modal.Title>Edit your listing</Modal.Title>
          </Modal.Header>
          <Form className='form'>
            <Form.Group className="mb-3" controlId="floatingTextarea">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder={this.props.props.title}
                value={title}
                name="title"
                onChange={this.onChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="floatingTextarea">
              <Form.Label>Brand</Form.Label>
              <Form.Control
                type="text"
                placeholder={this.props.props.brand}
                value={brand}
                name="brand"
                onChange={this.onChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="floatingTextarea">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                placeholder={this.props.props.description}
                value={description}
                name="description"
                onChange={this.onChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Categories</Form.Label>
              <Form.Select
                aria-label="Default select example"
                value={category}
                name="category"
                onChange={this.onChange}
              >
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
              <Form.Select
                aria-label="Default select example"
                value={sizes}
                name="sizes"
                onChange={this.onChange}
              >
                <option>Select Size</option>
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
              <Form.Control
                type="text"
                placeholder={this.props.props.price}
                value={price}
                name="price"
                onChange={this.onChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="floatingTextarea">
              <Form.Label>Photo</Form.Label>
              <Form.Control
                type="text"
                placeholder={this.props.props.photo_url}
                value={photo_url}
                name="photo_url"
                onChange={this.onChange}
              />
            </Form.Group>
          </Form>

          <Modal.Footer className='buttons'>
            <Button variant="secondary" onClick={this.closeModal}>
              Close
            </Button>
            <Button className='save' variant="primary" onClick={(this.onSubmit)}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { editListing })(EditListing);

// import { useState } from "react";
// import getCookie from "../../../csrftoken";
// import {Modal, Button, Form} from "react-bootstrap";
// import { editListing } from "../../../actions/listings";

// function EditListing(props) {
//     const [show, setShow] = useState(false);

//     const handleClose = () => setShow(false);
//     const handleShow = () => setShow(true);

//     const initialState = {
//         category: '',
//         price: '',
//         title: '',
//         brand: '',
//         description: '',
//         sizes: '',
//         photo_url: '',
//         csrfmiddlewaretoken: getCookie('csrftoken')
//     }

//     const [state, setState] = useState(initialState)

//     const onChange =(e)=> {
//         setState({...state, [e.target.id]: e.target.value})
//         console.log(state)
//     }

//     const onSubmit = e => {
//         e.preventDefault();

//         // const {category, price, title, brand, description, sizes, photo_url, csrfmiddlewaretoken } = state
//         // const listing = {category, price, title, brand, description, sizes, photo_url, csrfmiddlewaretoken};
//         const edit = {
//             category: state.category,
//             price: state.price,
//             title: state.title,
//             brand: state.brand,
//             description: state.description,
//             sizes: state.sizes,
//             photo_url: state.photo_url,
//         }
//         editListing(state)
//     }
//     // console.log(props)
//     return (
//       <>
//         <Button variant="primary" onClick={handleShow}>
//             Edit
//         </Button>

//         <Modal show={show} onHide={handleClose}>
//           <Modal.Header closeButton>
//             <Modal.Title>Edit your listing</Modal.Title>
//           </Modal.Header>
//           <Form>

//             <Form.Group className="mb-3" controlId="floatingTextarea">
//                 <Form.Label>Title</Form.Label>
//                 <Form.Control type="text" placeholder={props.props.title}  value={state.title} name="title" onChange={onChange}/>
//             </Form.Group>

//             <Form.Group className="mb-3" controlId="floatingTextarea">
//                 <Form.Label>Brand</Form.Label>
//                 <Form.Control type="text" placeholder={props.props.brand} value={state.brand} name="brand" onChange={onChange}/>
//             </Form.Group>

//             <Form.Group className="mb-3" controlId="floatingTextarea">
//                 <Form.Label>Description</Form.Label>
//                 <Form.Control type="text" placeholder={props.props.description} value={state.description} name="description" onChange={onChange}/>
//             </Form.Group>

//             <Form.Group className="mb-3">
//                 <Form.Label>Categories</Form.Label>
//                 <Form.Select aria-label="Default select example" value={state.category} name="category" onChange={onChange}>
//                 <option>Select Category</option>
//                 <option value="Hoodies">Hoodies</option>
//                 <option value="Pants">Pants</option>
//                 </Form.Select>
//             </Form.Group>

//             <Form.Group className="mb-3">
//                 <Form.Label>Sizes</Form.Label>
//                 <Form.Select aria-label="Default select example" value={state.sizes} name="sizes" onChange={onChange}>
//                 <option>Select Size</option>
//                 <option value="XS">XS</option>
//                 <option value="M">M</option>
//                 </Form.Select>
//             </Form.Group>

//             <Form.Group className="mb-3" controlId="floatingTextarea">
//                 <Form.Label>Price</Form.Label>
//                 <Form.Control type="text" placeholder={props.props.price} value={state.price} name="price" onChange={onChange}/>
//             </Form.Group>

//             <Form.Group className="mb-3" controlId="floatingTextarea">
//                 <Form.Label>Photo</Form.Label>
//                 <Form.Control type="text" placeholder={props.props.photo_url} value={state.photo_url} name="photo_url" onChange={onChange}/>
//             </Form.Group>
//             </Form>

//           <Modal.Footer>
//             <Button variant="secondary" onClick={handleClose}>
//               Close
//             </Button>
//             <Button variant="primary" onClick={onSubmit, handleClose}>
//               Save Changes
//             </Button>
//           </Modal.Footer>
//         </Modal>
//       </>
//     );
//   }

// export default EditListing
