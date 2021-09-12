import { GET_MESSAGES, GET_SEARCHED } from "../actions/types";

const initialState = {
    listings: []
}

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_SEARCHED:
            return {
                ...state,
                listings: action.payload
            }
    }
}