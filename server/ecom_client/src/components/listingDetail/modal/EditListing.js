import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { editListing } from "../../../actions/listings";
import { Modal, Button, Form } from "react-bootstrap";

import getCookie from "../../../csrftoken";
import { Redirect } from "react-router";
// console.log({CSRFToken})
export class EditListing extends Component {
  state = {
    isOpen: false,
  };

  openModal = () => this.setState({ isOpen: true });
  closeModal = () => this.setState({ isOpen: false });

  state = {
    category: "",
    price: "",
    title: "",
    brand: "",
    description: "",
    sizes: "",
    photo_url: "",
    csrfmiddlewaretoken: getCookie("csrftoken"),
  };


  static propTypes = {
    editListing: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
  };
  onChange = (e) => this.setState(
      {[e.target.name]: e.target.value},
    //   console.log(this.props.props)
    );


onSubmit = (e) => {
    e.preventDefault();
    // console.log(this.state);
    const { category, price, title, brand, description, sizes, photo_url, csrfmiddlewaretoken } = this.state;
    const listing = { category, price, title, brand, description, sizes, photo_url, csrfmiddlewaretoken };
    this.props.editListing(this.props.props.id, listing);
    {console.log(this);}
  };
  render() {
    { console.log() }
    // return <Redirect to='/shop'/>
    const { category, price, title, brand, description, sizes, photo_url, csrfmiddlewaretoken } = this.state;
    return (
      <>
        <Button variant="primary" onClick={this.openModal}>
          Edit
        </Button>

        <Modal show={this.state.isOpen} onHide={this.closeModal}>
          <Modal.Header closeButton>
            <Modal.Title>Edit your listing</Modal.Title>
          </Modal.Header>
          <Form>
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
                <option value="Pants">Pants</option>
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
                <option value="XS">XS</option>
                <option value="M">M</option>
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

          <Modal.Footer>
            <Button variant="secondary" onClick={this.closeModal}>
              Close
            </Button>
            <Button variant="primary" onClick={(this.onSubmit)}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
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
