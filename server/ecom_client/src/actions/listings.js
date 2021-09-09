import axios from "axios";
import { dispatch } from "rxjs/internal/observable/pairs";
import { GET_LISTINGS, DELETE_LISTING, LISTING_DETAIL, ADD_LISTING } from "./types";
import getCookie from '../csrftoken'

axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
axios.defaults.xsrfCookieName = "XCSRF-TOKEN";

export const getListings = () => dispatch => {
    axios.get('/shop/')
    .then(res => {
        dispatch({
            type: GET_LISTINGS,
            payload: res.data
        });
    })
    .catch(err => console.log(err))
};

export const listingDetail = (id) => dispatch => {
    axios.get(`/shop/${id}`)
    .then(res => {
        dispatch({
            type: LISTING_DETAIL,
            payload: res.data,
        });
    })
    .catch(err => console.log(err))
};

export const addListing = (listing) => dispatch => {
    const params = Object.entries(listing)
    .reduce((a,b) => {
       return a + b[0] + "=" + encodeURI(b[1]) + "&"
    }, "" )
    console.log(params)
    axios.post("/shop/", params, {
        headers: {"X-CSRFToken": getCookie("csrftoken")}
    })
    .then(res => {
        dispatch({
            type: ADD_LISTING,
            payload: res.data
        })
    })
    .catch(err => console.log(err))
}



export const deleteListing = (id) => dispatch => {
    axios.delete(`/shop/${id}`, {
        headers: {"X-CSRFToken": getCookie("csrftoken")}
    })
    .then(res => {
        dispatch({
            type: DELETE_LISTING,
            payload: id
        });
    })
    .catch(err => console.log(err))
};

