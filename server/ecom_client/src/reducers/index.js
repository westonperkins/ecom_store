import { combineReducers } from "redux";
import listings from './listings';
import categories from './categories';

export default combineReducers({
    listings,
    categories
});

