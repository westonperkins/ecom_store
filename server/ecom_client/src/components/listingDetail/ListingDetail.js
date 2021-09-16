import React, { Component } from "react";
import { ListGroup, Button } from "react-bootstrap";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { listingDetail, deleteListing } from "../../actions/listings";
import EditListing from "./modal/EditListing";
import store from "../../store";
import { loadUser } from "../../actions/auth";
import { getListings } from "../../actions/listings";
import "./ListingDetail.css";

export class ListingDetail extends Component {
  static propTypes = {
    listings: PropTypes.array.isRequired,
    auth: PropTypes.object.isRequired,
  };
  componentDidMount() {
    // store.dispatch(loadUser());
    // this.props.listingDetail(this.props.match.params.id);
    this.props.getListings();
    // console.log(this.props.listings)
  }
  render() {
    const { isAuthenticated, user } = this.props.auth;
    const car = false;
    const sellerLinks = (
      <div>
        <EditListing props={this.props.listings} />
        <Button
          className="delete"
          onClick={() => {
            this.props.deleteListing(this.props.match.params.id),
              (window.location = "/#/shop");
          }}
        >
          Delete
        </Button>
      </div>
    );

    const buyerLinks = (
      <div>
        <Button>View Seller</Button>
        <Button>Purchase</Button>
      </div>
    );
    const listingDetail = this.props.listings.filter((listing) => {
      return listing.id == this.props.match.params.id;
    });
    listingDetail.map(s => {
        s.category
    })
    console.log(listingDetail[0].category);
    listingDetail.map((s) => {
      console.log(s.category);
    });

    return (
      <div >

          {listingDetail.map((listing) => {
            return (
              <div className="itemContainer">
                <div className='imageContainer'>
                    <img className='image' src={listing.photo_url} />
                </div>
                <div className="info">
                  <ListGroup className="itemDesc">
                    <ListGroup.Item className="brand item">
                      {listing.brand}
                    </ListGroup.Item>
                    <ListGroup.Item className="titles item">
                      {listing.title}
                    </ListGroup.Item>
                    <ListGroup.Item className="description item">
                      Product Description: {listing.description}
                    </ListGroup.Item>
                    <ListGroup.Item className="size item">
                      Size: {listing.sizes}
                    </ListGroup.Item>
                    <ListGroup.Item className="price item">
                      ${listing.price}
                    </ListGroup.Item>{" "}
                    <ListGroup.Item className="date item">
                      Listed On {new Date(listing.created_at).toDateString()}
                    </ListGroup.Item>
                    <ListGroup.Item className="seller item">
                      Listed by: {listing.seller}
                    </ListGroup.Item>
                  </ListGroup>
                  <div className="buttons">
                    {car ? sellerLinks : buyerLinks}
                  </div>
                </div>
              </div>
            );
          })}
          <hr></hr>

      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  listings: state.listings.listings,
  auth: state.auth,
});

export default connect(mapStateToProps, { getListings, deleteListing })(
  ListingDetail
);
