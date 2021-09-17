import React, { Component } from "react";
import { ListGroup, Button, Card, ListGroupItem } from "react-bootstrap";
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
    this.props.getListings();
    console.log(this)
  }
  render() {
    const { isAuthenticated, user } = this.props.auth;
    const listings = this.props.listings;
    const car = false;
    const sellerLinks = (
      <div>
        <EditListing props={this} />
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

    const detailCategory = listingDetail.map((listing) => {
      return listing.category;
    });

    const detailId = listingDetail.map((listing) => {
      return listing.id;
    });

    const sameCategory = listings.filter((listings) => {
      return listings.category == detailCategory.toString();
    });




    return (
      <div>
        {listingDetail.map((listing) => {
          return (
            <div className="itemContainer" key={listing.id}>
              <div className="imageContainer">
                <img className="image" src={listing.photo_url} />
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
                <div className="buttons">{user.username == listing.seller ? sellerLinks : buyerLinks}</div>
              </div>
            </div>
          );
        })}
        <hr></hr>
          <h4 className="otherItems">Other Items You Might Like: </h4>
        <div className='related'>
            

          {sameCategory.map((listing) => {
            if (listing.id != detailId.toString()) {
              return (
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
              );
            }
          })}
        </div>
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
