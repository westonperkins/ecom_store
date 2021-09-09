import React, { Component } from 'react'
import { Fragment } from 'react'
import {withAlert} from 'react-alert'

import {connect} from 'react-redux'
import PropTypes from 'prop-types'


export class Alerts extends Component {


    static PropTypes = {
        error: PropTypes.object.isRequired
    }
    
    componentDidUpdate() {
        this.props.alert.show('it works')
    }

    render() {
        return (
            <Fragment/>
        )
    }
}

const mapStateToProps = state => ({
    error: state.errors
})

export default connect(mapStateToProps)(withAlert()(Alerts));
