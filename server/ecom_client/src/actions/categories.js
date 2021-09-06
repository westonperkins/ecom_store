import axios from 'axios';
import {dispatch} from "rxjs/internal/observable/pairs";
import {GET_CATEGORIES} from './types';

export const getCategories = () => dispatch => {
    axios.get('/categories/')
    .then(res => {
        dispatch({
            type: GET_CATEGORIES,
            payload: res.data
        });
    })
    .catch(err => console.log(err))
}