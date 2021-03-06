import axios from "axios";
import { dispatch } from "rxjs/internal/observable/pairs";
import {
  GET_LISTINGS,
  DELETE_LISTING,
  LISTING_DETAIL,
  ADD_LISTING,
  GET_ERRORS,
  EDIT_LISTING,
  USER_LOADING,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_FAIL
} from "./types";
import getCookie from "../csrftoken";
import { tokenConfig } from "./auth";
import { createMessage } from "./messages";

axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
axios.defaults.xsrfCookieName = "XCSRF-TOKEN";


export const getListings = () => (dispatch, getState) => {
  axios
    .get("api/shop/", tokenConfig(getState))
    .then((res) => {
      dispatch(
        {
          type: GET_LISTINGS,
          payload: res.data,
        },
      );
    })
    .catch((err) => {
      const errors = {
        msg: err.response.data,
        status: err.response.status,
      };
      dispatch({
        type: GET_ERRORS,
        payload: errors,
      });
    });
};

export const getMyListings = () => (dispatch, getState) => {
  axios
    .get("api/profile", tokenConfig(getState))
    .then((res) => {
      dispatch(
        {
          type: GET_LISTINGS,
          payload: res.data,
        },
        // console.log(res)
      );
    })
    .catch((err) => {
      const errors = {
        msg: err.response.data,
        status: err.response.status,
      };
      dispatch({
        type: GET_ERRORS,
        payload: errors,
      });
    });
};

export const listingDetail = (id) => (dispatch, getState) => {
  axios
    .get(`api/shop/${id}`, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: LISTING_DETAIL,
        payload: res.data,
      });
    })
    .catch((err) => {
      const errors = {
        msg: err.response.data,
        status: err.response.status,
      };
      dispatch({
        type: GET_ERRORS,
        payload: errors,
      });
    });
};

export const addListing = (listing) => (dispatch, getState) => {
  // const params = Object.entries(listing)
  // .reduce((a,b) => {
  //    return a + b[0] + "=" + encodeURI(b[1]) + "&"
  // }, "" )
  axios
    .post("api/shop/", listing, tokenConfig(getState), {
      headers: { "X-CSRFToken": getCookie("csrftoken") },
    })
    .then((res) => {
      dispatch({
        type: ADD_LISTING,
        payload: res.data,
      });
    })
    .catch((err) => {
      const errors = {
        msg: err.response.data,
        status: err.response.status,
      };
      dispatch({
        type: GET_ERRORS,
        payload: errors,
      });
    });
};

export const editListing = (id, listing) => (dispatch, getState) => {
  axios
    .put(`api/shop/${id}/`, listing, tokenConfig(getState), {
      headers: { "X-CSRFToken": getCookie("csrftoken") },
    })
    .then((res) => {
      dispatch({
        type: EDIT_LISTING,
        payload: res.data,
      });
    })
    .catch((err) => {
      const errors = {
        msg: err.response.data,
        status: err.response.status,
      };
      dispatch({
        type: GET_ERRORS,
        payload: errors,
      });
    });
};

export const deleteListing = (id) => (dispatch, getState) => {
  axios
    .delete(`api/shop/${id}`, tokenConfig(getState), {
      headers: { "X-CSRFToken": getCookie("csrftoken") },
    })
    .then((res) => {
      dispatch(createMessage({ deleteListing: "Listing Deleted" }));
      dispatch({
        type: DELETE_LISTING,
        payload: id,
      });
    })
    .catch((err) => {
      const errors = {
        msg: err.response.data,
        status: err.response.status,
      };
      dispatch({
        type: GET_ERRORS,
        payload: errors,
      });
    });
};
