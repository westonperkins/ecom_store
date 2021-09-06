import React, { Component, Fragment } from 'react'

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

               {this.props.listings.reverse().map(listing => (
               <Card style={{ width: '18rem'}}>
                <Card.Img style={{height: '300px', alignSelf: 'center', objectFit: 'contain' }}variant="top" src={listing.photo_url} />
                <Card.Body>
                    {console.log(listing.photo_url)}
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
                    <Card.Link href="#">Details</Card.Link>
                    <Card.Link href="#">Buy</Card.Link>
                </Card.Body>
                </Card>
                ))}
           </Fragment>
        )
    }
}
const mapStateToProps = state => ({
    listings: state.listings.listings
})

export default connect(mapStateToProps, { getListings })(Listings);


// <Fragment>
// <h2>Listings</h2>
//  <table className="table tabled-striped">
//      <thead>
//          <tr>
//              <th>brand</th>
//              <th>description</th>
//          </tr>
//      </thead>
//      <tbody>
//          {this.props.listings.map(listing => (
//              <tr key = {listing.id}>
//                  <td>{listing.description}</td>
//                  <td>{listing.title}</td>
//                  <td>{listing.sizes}</td>
//              </tr>
//          ))}
//      </tbody>
//  </table>
// </Fragment>