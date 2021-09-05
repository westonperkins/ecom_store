import React, { Component, Fragment } from 'react'

import {connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getListings  } from '../../actions/listings'

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
               <h2>Listings</h2>
                <table className="table tabled-striped">
                    <thead>
                        <tr>
                            <th>brand</th>
                            <th>description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.listings.map(listing => (
                            <tr key = {listing.id}>
                                <td>{listing.description}</td>
                                <td>{listing.title}</td>
                                <td>{listing.sizes}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
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