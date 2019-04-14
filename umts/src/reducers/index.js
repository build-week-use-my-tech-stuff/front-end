import {
    LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE,
    REGISTER, REGISTER_SUCCESS, REGISTER_FAILURE,
    FETCHING_USERS, FETCHING_USERS_SUCCESS, FETCHING_USERS_FAILURE,
    FETCHING_ITEM, FETCHING_ITEM_SUCCESS, FETCHING_ITEM_FAILURE,
    DELETE_ITEM, DELETE_ITEM_SUCCESS, DELETE_ITEM_FAILURE,
    UPDATE_ITEM, UPDATE_ITEM_SUCCESS, UPDATE_ITEM_FAILURE,
    ADD_COMMENTS, ADD_COMMENTS_SUCCESS, ADD_COMMENTS_FAILURE,
}
from '../actions';

const initialState = {
    items: [],
    loggingIn: false,
    isRegistered: false,
    gettingItems: false,
    addingItem: false,
    deletingItem: false,
    updatingItem: false,
    addingComment: false,
    error: null,
}

export const itemListReducer = ( state = initialState, action ) => {
    switch(action.type) {
// Login User Cases
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
// Register User Cases
// Getting Users Data Cases
// Getting Item Data Cases
        case FETCHING_ITEM:
            return {
                ...state,
                gettingItems: true,
            }
        case FETCHING_ITEM_SUCCESS:
            return {
                ...state,
                friends: action.payload,
                gettingItems: false,
                error: null,
            }
        case FETCHING_ITEM_FAILURE:
            return {
                ...state,
                gettingItems: false,
                error: action.payload,
            }
// Adding Item Cases
// Deleting Item Cases
// Updating Item Cases
// Adding Comment Cases
// Default Case
        default:
            return state;

    }
}