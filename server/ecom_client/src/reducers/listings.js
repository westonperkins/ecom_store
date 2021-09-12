import { GET_LISTINGS, DELETE_LISTING, LISTING_DETAIL, ADD_LISTING, EDIT_LISTING } from '../actions/types.js'

const initialState = {
    listings: []
}

export default function(state = initialState, action ) {
    switch(action.type) {
        case GET_LISTINGS:
            return {
                ...state,
                listings: action.payload
            };
        case LISTING_DETAIL:
            return {
                ...state,
                listings: action.payload
            }
        case EDIT_LISTING:
            return {
                ...state,
                listings: [...state.listings, action.payload]
            }
        case ADD_LISTING:
            return {
                ...state,
                listings: [...state.listings, action.payload]
            }
        case DELETE_LISTING:
            return {
                ...state,
                listings: state.listings.filter(listing => listing.id !== action.payload)
            }
        default:
            return state
    }
}

