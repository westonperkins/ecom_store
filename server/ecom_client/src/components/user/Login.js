import { connect } from 'react-redux'
import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'
import { Link, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'
import {login} from '../../actions/auth'


import './user.css'


export class Login extends Component {
    state = {
        username: '',
        password: '',
    };

    static propTypes = {
        login: PropTypes.func.isRequired,
        isAuthenticated: PropTypes.bool
    }

    onSubmit = e => {
        e.preventDefault()
        this.props.login(this.state.username, this.state.password)
    }

    onChange = e => {
        console.log(this.state)
        this.setState({ [e.target.name]: e.target.value})
    }

    render() {
        if(this.props.isAuthenticated) {
            return <Redirect to='/shop/'/>
        }
        const { username, password } = this.state
        return (
            <div className="formContainer">
                <h2>Login</h2>
                <Form>
                <Form.Group className="mb-3" >
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="Enter username" name="username" onChange={this.onChange} value={username}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" name="password" onChange={this.onChange} value={password}/>
                </Form.Group>

                <Button variant="primary" type="submit" onClick={this.onSubmit}>
                    Submit
                </Button>
                </Form>
                <div>Don't have an Account? <Link to='/register'>Register</Link></div>
            </div>
        )
    }
}


const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})
export default connect(mapStateToProps, {login}) (Login);