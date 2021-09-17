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
    this.props.getMyListings();
    store.dispatch(loadUser());
  }
  render() {
    const { isAuthenticated, user } = this.props.auth;
    const listings = this.props.listings;

    // const num = [1,2,3,4,5,6,7,8,9,10]

    // const test = num.filter(item => {
    //   return item > 6
    // }).map(item => {
    //   return item + 1
    // })
    // console.log(test)

    {
      user
        ? listings
            .filter((listing) => {
              return listing.seller.toString() == user.username.toString();
            })
            .map((items) => {
              console.log(items);
            })
        : console.log("boobies");
    }

    const authLinks = (
      <div>
        <div className="creds">
          <h2>{user ? `${user.username}` : "no"}</h2>
          <h2>{user ? `${user.email}` : "no"}</h2>
        </div>
        <hr></hr>
        <h3 className="listingTitle">Your listings</h3>
        <div className='container'>
        {listings.length > 0 ? (
          user ? (
            listings
              .filter((listing) => {
                return listing.seller.toString() == user.username.toString();
              })
              .map((item) => {
                return (
                    <Card className="card" key={item.id}>
                      <Card.Img
                        style={{
                          height: "300px",
                          alignSelf: "center",
                          objectFit: "contain",
                        }}
                        variant="top"
                        src={item.photo_url}
                      />
                      <Card.Body>
                        <Card.Title>{item.brand}</Card.Title>
                        <Card.Title className="itemtitle">
                          {item.title}
                        </Card.Title>
                      </Card.Body>
                      <ListGroup className="list-group-flush">
                        <ListGroupItem>${item.price}</ListGroupItem>
                        <ListGroupItem>{item.sizes}</ListGroupItem>
                        <ListGroupItem>
                          On {new Date(item.created_at).toDateString()}
                        </ListGroupItem>
                        <ListGroupItem>Listed by: {item.seller}</ListGroupItem>
                      </ListGroup>
                      <Card.Body className="links">
                        <div className="editDelete">
                          <EditListing props={this.props.listings} />
                          <Button
                            className="delete"
                            onClick={() => {
                              this.props.deleteListing(
                                this.props.match.params.id
                              ),
                                (window.location = "/#/shop");
                            }}
                          >
                            Delete
                          </Button>
                        </div>
                      </Card.Body>
                    </Card>
                );
              })
          ) : null
        ) : (
          <div className="noListings">
            <h2>
              You have not listed anything yet, click{" "}
              <a href="/#/sell/new/">here</a> to sell your first item
            </h2>
          </div>
        )}
        </div>
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
