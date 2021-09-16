import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getMyListings } from "../../actions/listings";
import { loadUser } from "../../actions/auth";
import store from "../../store";
import { Card, ListGroup, ListGroupItem, Button } from "react-bootstrap";
import "./Profile.css";
import { deleteListing } from "../../actions/listings";
import EditListing from "../listingDetail/modal/EditListing";

export class Profile extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired,
    listings: PropTypes.array.isRequired,
  };

  componentDidMount() {
    // console.log(this.props.listings);
    this.props.getMyListings();
    store.dispatch(loadUser());
  }
  render() {
    const { isAuthenticated, user } = this.props.auth;
    const listings = this.props.listings;
    const authLinks = (
      <div>
        <div className="creds">
          <h2>{user ? `${user.username}` : "no"}</h2>
          <h2>{user ? `${user.email}` : "no"}</h2>
        </div>
        <hr></hr>
        <h3 className="listingTitle">Your listings</h3>
        {listings.length > 0 ? (
          <div className="cardContainer">
            {this.props.listings.reverse().map((listing) => (
              <Card className="card" key={listing.id}>
                <Card.Img
                  style={{
                    height: "300px",
                    alignSelf: "center",
                    objectFit: "contain",
                  }}
                  variant="top"
                  src={listing.photo_url}
                />
                <Card.Body>
                  <Card.Title>{listing.brand}</Card.Title>
                  <Card.Title className="itemtitle">{listing.title}</Card.Title>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroupItem>${listing.price}</ListGroupItem>
                  <ListGroupItem>{listing.sizes}</ListGroupItem>
                  <ListGroupItem>
                    On {new Date(listing.created_at).toDateString()}
                  </ListGroupItem>
                  <ListGroupItem>Listed by: {listing.seller}</ListGroupItem>
                </ListGroup>
                <Card.Body className="links">
                  <div className='editDelete'>
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
                </Card.Body>
              </Card>
            ))}
          </div>
        ) : (
          <div className='noListings'>
            <h2>You have not listed anything yet, click <a href='/#/sell/new/'>here</a> to sell your first item</h2>
          </div>
        )}
      </div>
    );

    const guestLinks = (
      <div>
        <h2>no info</h2>
      </div>
    );

    return <div>{isAuthenticated ? authLinks : guestLinks}</div>;
  }
}

const mapStateToProps = (state) => ({
  listings: state.listings.listings,
  auth: state.auth,
});

export default connect(mapStateToProps, { getMyListings })(Profile);
