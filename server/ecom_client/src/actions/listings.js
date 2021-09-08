import axios from "axios";
import { dispatch } from "rxjs/internal/observable/pairs";
import { GET_LISTINGS, DELETE_LISTING, LISTING_DETAIL, ADD_LISTING } from "./types";

axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
axios.defaults.xsrfCookieName = "XCSRF-TOKEN";

// function getCookie(name) {
//     let cookieValue = null;
//     if (document.cookie && document.cookie !== '') {
//         const cookies = document.cookie.split(';');
//         for (let i = 0; i < cookies.length; i++) {
//             const cookie = cookies[i].trim();
//             // Does this cookie string begin with the name we want?
//             if (cookie.substring(0, name.length + 1) === (name + '=')) {
//                 cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
//                 break;
//             }
//         }
//     }
//     return cookieValue;
// }
// const csrftoken = getCookie('csrftoken');

const headers = {
    'X-CSRF-Token': window.CSRF_TOKEN
}


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
    axios.post("/shop/", listing, {
        xsrfHeaderName: "X-CSRFToken",
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
    axios.delete(`/shop/${id}/`)
    .then(res => {
        dispatch({
            type: DELETE_LISTING,
            payload: id
        });
    })
    .catch(err => console.log(err))
};

