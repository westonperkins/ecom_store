import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types'

export class Profile extends Component {
    static propTypes = {
        auth: PropTypes.object.isRequired
    };

    componentDidMount() {
        console.log(this.props.auth.user)
    }
    render() {
        return (
            <div>
                <h2>{this.props.auth.user.username}</h2>
                <h4>{this.props.auth.user.email}</h4>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps)(Profile);
