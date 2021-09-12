import React, { Component } from 'react'
import {ListGroup, Button} from "react-bootstrap";
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { listingDetail, deleteListing } from '../../actions/listings'
import EditListing from './modal/EditListing';

import './ListingDetail.css'

export class ListingDetail extends Component {
    static PropTypes = {
        listings: PropTypes.array.isRequired,
        auth: PropTypes.object.isRequired,
    };
    componentDidMount() {
        this.props.listingDetail(this.props.match.params.id);
        {console.log(this.props)}
    };
    render() {
        const { isAuthenticated, user } = this.props.auth;

        const sellerLinks = (
            <div>
                <EditListing props={this.props.listings}/>
                <Button onClick={() => {this.props.deleteListing(this.props.match.params.id)}}>Delete</Button>
            </div>
        )

        const buyerLinks = (
            <div>
                <Button>Message Seller</Button>
                <Button>Purchase</Button>
            </div>
        )

        return (
            <div className="itemContainer">
                <img src={this.props.listings.photo_url}/>
                    <div className="info">
                    <ListGroup className="itemDesc">
                        <ListGroup.Item className="brand">{this.props.listings.brand}</ListGroup.Item>
                        <ListGroup.Item>{this.props.listings.title}</ListGroup.Item>
                        <ListGroup.Item>{this.props.listings.sizes}</ListGroup.Item>
                        <ListGroup.Item>${this.props.listings.price}</ListGroup.Item>
                        <ListGroup.Item>{this.props.listings.description}</ListGroup.Item>
                        <ListGroup.Item>Listed On {new Date(this.props.listings.created_at).toDateString()}</ListGroup.Item>
                    </ListGroup>
                    <div className="buttons">
                    { isAuthenticated ? sellerLinks : buyerLinks}
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    listings: state.listings.listings,
    auth: state.auth
})





export default connect(mapStateToProps, { listingDetail, deleteListing })(ListingDetail);
