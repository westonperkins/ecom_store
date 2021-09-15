import axios from "axios";
import getCookie from "../csrftoken";
import { tokenConfig } from "./auth";
import {MAKE_PAYMENT, GET_ERRORS} from './types'

axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
axios.defaults.xsrfCookieName = "XCSRF-TOKEN";

export const makePayment = (card) => (dispatch, getState) => {
    axios.post('api/checkout', card, tokenConfig(getState), {
        headers: {"X-CSRFToken": getCookie("csrftoken")}
    })
    .then(res => {
        dispatch({
            type: MAKE_PAYMENT,
            payload: res.data
        })
    }).then(res=> console.log(res))
    .catch(err => {
        const errors = {
            msg: err.response.data,
            status: err.response.status
        }
        dispatch({
            type: GET_ERRORS,
            payload: errors
        })
    })
}