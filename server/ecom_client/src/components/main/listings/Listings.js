import React, { Component, Fragment } from "react";

import "./Listing.css";

import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getListings } from "../../../actions/listings";
import {
  Card,
  ListGroup,
  ListGroupItem,
  Button,
  Form,
  FormControl,
} from "react-bootstrap";
import store from "../../../store";
import { loadUser } from "../../../actions/auth";
import SearchBar from "../../searchBar/SearchBar";

export class Listings extends Component {
  static propTypes = {
    listings: PropTypes.array.isRequired,
    auth: PropTypes.object.isRequired,
  };

  componentDidMount() {
    this.props.getListings();
  }

  render() {
    const handleFilter = (e) => {
      this.state = [];
      const searchTerm = e.target.value;
      const listings = this.props.listings;
      const searched = listings.filter((value) => {
        return (
          value.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          value.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
          value.seller.toLowerCase().includes(searchTerm.toLowerCase()) ||
          value.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
          value.description.toLowerCase().includes(searchTerm.toLowerCase())
        );
      });
      if (searchTerm == "") {
        this.setState([]);
      } else {
        this.setState({ searched });
      }
        // console.log(searchTerm);
        // console.log(searched)
    };
    console.log(this.state)
    const { token, user } = this.props.auth;
    const listings = this.props.listings;
    const authLinks = (
      <Fragment>
        <div className="cardContainerLarge">
          {this.state == null ? (
            this.props.listings != null ? (
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
                      <Card.Title className="itemtitle">
                        {listing.title}
                      </Card.Title>
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
                      {user.username != listing.seller ? (
                        <div className='buttons'>
                          <Button className="buy" href="#/checkout">
                            Buy
                          </Button>
                          <Button
                            className="detail"
                            href={`#/shop/listing/${listing.id}/`}
                          >
                            Detail
                          </Button>
                        </div>
                      ) : (
                        <div className='yourListingContainer'>
                          <Button
                            className="yourListingButton"
                            href={`#/shop/listing/${listing.id}/`}
                          >
                            View Your Listing
                          </Button>
                        </div>
                      )}
                    </Card.Body>
                  </Card>
                ))}
              </div>
            ) : (
              <div>
                <h2>No Listings</h2>
              </div>
            )
          ) : (
            <div className="cardContainer">
              {this.state.searched.reverse().map((listing) => (
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
                    <Card.Title className="itemtitle">
                      {listing.title}
                    </Card.Title>
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
                    <Button className="buy" href="#/checkout">
                      Buy
                    </Button>
                  </Card.Body>
                </Card>
              ))}
            </div>
          )}
        </div>
      </Fragment>
    );
    const guestLinks = (
      <div>
        <h2>no listings</h2>
      </div>
    );

    return (
      <div>
        <div>
          {/* <SearchBar handleFilter={handleFilter}/> */}
          <div className="searchBar">
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="searchBar"
                aria-label="Search"
                onChange={handleFilter}
              />
            </Form>
          </div>
        </div>
        <div>{token ? authLinks : guestLinks}</div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  listings: state.listings.listings,
  auth: state.auth,
});

export default connect(mapStateToProps, { getListings })(Listings);
