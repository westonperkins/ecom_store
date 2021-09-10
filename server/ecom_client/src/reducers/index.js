import { combineReducers } from "redux";
import listings from './listings';
import errors from './errors'
import auth from './auth'
import messages from './messages'

export default combineReducers({
    listings,
    auth,
    errors,
    messages
});

