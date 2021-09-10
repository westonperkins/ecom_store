import { connect } from 'react-redux'
import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'
import { Link, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'
import {register} from '../../actions/auth'
// import { createMessage } from '../../actions/messages'

import './user.css'

export class Register extends Component {
    state = {
        username: '',
        password: '',
        email: '',
        name: '',
    };

    static propTypes = {
        register: PropTypes.func.isRequired,
        isAuthenticated: PropTypes.bool
    }

    onSubmit = e => {
        e.preventDefault()
        const { username, password, email, name } = this.state;
        const newUser = {
            email,
            name, 
            username, 
            password
        };
        this.props.register(newUser);

    }

    onChange = e => {
        console.log(this.state)
        this.setState({ [e.target.name]: e.target.value})
    }

    render() {
        if(this.props.isAuthenticated){
            return <Redirect to='/shop'/>
        }
        const { username, password, email, name } = this.state
        return (
            <div className="formContainer">
                <h2>Register</h2>
                <Form>
                <Form.Group className="mb-3" >
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="Enter username" name="username" onChange={this.onChange} value={username}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter name" name="name" onChange={this.onChange} value={name}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" name="email" onChange={this.onChange} value={email}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" name="password" onChange={this.onChange} value={password}/>
                </Form.Group>

                <Button variant="primary" type="submit" onClick={()=>this.onSubmit()}>
                    Submit
                </Button>
                </Form>
                <div>Have an Account? <Link to='/login'>Login</Link></div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})
export default connect(mapStateToProps, {register}) (Register);
