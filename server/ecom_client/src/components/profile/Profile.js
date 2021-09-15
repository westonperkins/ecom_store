import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getMyListings } from "../../actions/listings";
import { loadUser } from "../../actions/auth";
import store from "../../store";
import { Card, ListGroup, ListGroupItem, Button } from "react-bootstrap";

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
        <div>
          <h2>{user ? `test ${user.username}` : "no"}</h2>
          <h2>{user ? `test ${user.email}` : "no"}</h2>
        </div>
        {listings ? (
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
                  <Button
                    className="detail"
                    href={`#/shop/listing/${listing.id}/`}
                  >
                    Detail
                  </Button>
                </Card.Body>
              </Card>
            ))}
          </div>
        ) : (
          <div>
            <h2>no listings</h2>
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
