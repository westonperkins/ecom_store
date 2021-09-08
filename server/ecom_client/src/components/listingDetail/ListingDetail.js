import React, { Component } from 'react'

import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { listingDetail } from '../../actions/listings'
import { getListings } from '../../actions/listings'

export class ListingDetail extends Component {
    static PropTypes = {
        listings: PropTypes.array.isRequired
    };
    componentDidMount() {
        this.props.listingDetail(this.props.match.params.id);
        {console.log(this)}
    };
    render() {
        return (
            <div>
                <img src={this.props.listings.photo_url}/>
                <p>{this.props.listings.title}</p>
                <p>{this.props.listings.description}</p>
                <p>{this.props.listings.brand}</p>
                <p>{this.props.listings.sizes}</p>
                <p>{this.props.listings.created_at}</p>
                <p>{this.props.listings.price}</p>

            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    listings: state.listings.listings
})





export default connect(mapStateToProps, { listingDetail })(ListingDetail);
