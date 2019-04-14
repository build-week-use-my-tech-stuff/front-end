import {

}
from '../actions';

const initialState = {
    items: [],
    loggingIn: false,
    gettingItems: false,
    addingItems: false,
    deletingItems: false,
    updatingItems: false,
    error: null,
}

export const itemListReducer = ( state = initialState, action ) => {
    switch(action.type) {
        case LOGIN:
            return {
                ...state,
                loggingIn: true,
                gettingItems: false,
                error: null
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                loggingIn: false,
                error: null,
            }
        case LOGIN_FAILURE:
            return {
                ...state,
                loggingIn: false,
                error: action.payload
            }

        case FETCHING:
            return {
                ...state,
                gettingItems: true,
            }
        case FETCHING_SUCCESS:
            return {
                ...state,
                friends: action.payload,
                gettingItems: false,
                error: null,
            }
        case FETCHING_FAILURE:
            return {
                ...state,
                gettingItems: false,
                error: action.payload,
            }
        default:
            return state;

    }
}