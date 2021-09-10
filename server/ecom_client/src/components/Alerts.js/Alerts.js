import React, { Component } from 'react'
import { Fragment } from 'react'
import {withAlert} from 'react-alert'

import {connect} from 'react-redux'
import PropTypes from 'prop-types'


export class Alerts extends Component {


    static PropTypes = {
        error: PropTypes.object.isRequired
    }
    
    componentDidUpdate(prevProps) {
        const { error, alert, message } = this.props
        if(error !== prevProps.error) {
            if(error.msg.title) alert.error(`Title: ${error.msg.title.join()}`);
            if(error.msg.brand) alert.error(`Brand: ${error.msg.brand.join()}`);
            if(error.msg.price) alert.error(`Price: ${error.msg.price.join()}`);
            if(error.msg.description) alert.error(`Description: ${error.msg.description.join()}`);
            if(error.msg.size) alert.error(`Size: ${error.msg.size.join()}`);
            if(error.msg.photo_url) alert.error(`Photo: ${error.msg.photo_url.join()}`);
        }
        if(message !== prevProps.message) {
            if(message.deleteListing) alert.success(message.deleteListing)
        }
    }

    render() {
        return (
            <Fragment/>
        )
    }
}

const mapStateToProps = state => ({
    error: state.errors,
    message: state.messages
})

export default connect(mapStateToProps)(withAlert()(Alerts));
