import React, { Component, Fragment } from 'react'

import './Listing.css'

import {connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getListings  } from '../../../actions/listings'
import { Card, ListGroup, ListGroupItem, Image } from 'react-bootstrap'

export class Listings extends Component {
    static propTypes = {
        listings: PropTypes.array.isRequired
    };

    componentDidMount() {
        this.props.getListings();
    }
    
    render() {
        return (
           <Fragment>
            <div className='cardContainer'>
               {this.props.listings.reverse().map(listing => (
               <Card className='card' key={listing.id}>
                    <Card.Img style={{height: '300px', alignSelf: 'center', objectFit: 'contain' }}variant="top" src={listing.photo_url} />
                    <Card.Body>
                        <Card.Title>{listing.title}</Card.Title>
                        <Card.Text>
                        {listing.description}
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroupItem>${listing.price}</ListGroupItem>
                        <ListGroupItem>{listing.sizes}</ListGroupItem>
                        <ListGroupItem>On {new Date(listing.created_at).toDateString()}</ListGroupItem>
                    </ListGroup>
                    <Card.Body>
                        <Card.Link href={`#/shop/listing/${listing.id}/`}>Detail</Card.Link>
                        <Card.Link href="#">Buy</Card.Link>
                    </Card.Body>
                </Card>
                ))}
            </div>
           </Fragment>
        )
    }
}
const mapStateToProps = state => ({
    listings: state.listings.listings
})

export default connect(mapStateToProps, { getListings })(Listings);


