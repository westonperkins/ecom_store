import axios from "axios";
import { dispatch } from "rxjs/internal/observable/pairs";
import { GET_LISTINGS } from "./types";



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