import {
    LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE,
    REGISTER, REGISTER_SUCCESS, REGISTER_FAILURE,
    FETCHING_USERS, FETCHING_USERS_SUCCESS, FETCHING_USERS_FAILURE,
    FETCHING_ITEM, FETCHING_ITEM_SUCCESS, FETCHING_ITEM_FAILURE,
    DELETE_ITEM, DELETE_ITEM_SUCCESS, DELETE_ITEM_FAILURE,
    UPDATE_ITEM, UPDATE_ITEM_SUCCESS, UPDATE_ITEM_FAILURE,
    ADD_ITEM, ADD_ITEM_SUCCESS, ADD_ITEM_FAILURE, LOGOUT_SUCCESS,
    // ADD_COMMENTS, ADD_COMMENTS_SUCCESS, ADD_COMMENTS_FAILURE, 
}
from '../actions';

const initialState = {
    tech: [],
    user: {},
    gettingUser: false,
    loggingIn: false,
    isLoggedIn: false,
    isRegistered: false,
    gettingItems: false,
    addingItem: false,
    deletingItem: false,
    updatingItem: false,
    addingComment: false,
    error: null,
    user_id: null,
}

const reducer = ( state = initialState, action ) => {
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
                isLoggedIn: true,
                error: null,
                user_id: action.payload.user_id,
            }
        case LOGIN_FAILURE:
            return {
                ...state,
                loggingIn: false,
                error: action.payload
            }
// Logout Case
        case LOGOUT_SUCCESS:
            return {
                ...state,
                loggingIn: false,
                isLoggedIn: false,
                isRegistered: false,
                gettingItems: false,
                addingItem: false,
                deletingItem: false,
                updatingItem: false,
                addingComment: false,
                error: null,
                user_id: null
            }
// Getting Users Data Cases
        case FETCHING_USERS:
            return {
                ...state,
                gettingUser: true,
                error: null,
            }
        case FETCHING_USERS_SUCCESS:
            return {
                ...state,
                gettingUser: false,
                error: null,
                user: action.payload
            }
        case FETCHING_USERS_FAILURE:
            return {
                ...state,
                gettingUser: false,
                error: action.payload
            }
// Register User Cases
        case REGISTER:
            return {
                ...state,
                isRegistered: true,
                gettingItems: false,
                error: null,
            }
        case REGISTER_SUCCESS:
            return {
                ...state,
                isRegistered: false,
                isLoggedIn: true,
                user_id: action.payload.id,
                error: null,
            }
        case REGISTER_FAILURE:
            return {
                ...state,
                isRegistered: false,
                error: action.payload
            }
// Getting Item Data Cases
        case FETCHING_ITEM:
            return {
                ...state,
                gettingItems: true,
                error: null,
            }
        case FETCHING_ITEM_SUCCESS:
        console.log('PAYLOAD:',action.payload)
            return {
                ...state,
                tech: action.payload,
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
        case ADD_ITEM:
            return {
                ...state,
                addingItem: true,
                error: null
            }
        case ADD_ITEM_SUCCESS:
            return {
                ...state,
                addingItem: false,
                tech: [...state.tech,{ ...action.payload, user: state.user.username}],
                error: null
            }
        case ADD_ITEM_FAILURE:
            return {
                ...state,
                addingItem: false,
                error: action.payload
            }
// Deleting Item Cases
        case DELETE_ITEM:
            return {
                ...state,
                deletingItem: true,
                error: null
            }
        case DELETE_ITEM_SUCCESS:
            return {
                ...state,
                deletingItem: false,
                tech: [...state.tech.filter(item => item.id.toString() !== action.payload.toString())],
                error: null
            }
        case DELETE_ITEM_FAILURE:
            return {
                ...state,
                deletingItem: false,
                error: action.payload
            }
// Updating Item Cases
        case UPDATE_ITEM:
            return {
                ...state,
                updatingItem: true,
                error: null,
            }
        case UPDATE_ITEM_SUCCESS:
            return {
                ...state,
                updatingItem: false,
                tech: [...state.tech.map(item => {
                    if(item.id.toString() === action.payload.id.toString()) {
                        item = action.payload
                        return item;
                    } 
                    return item;     
                })],
                error: null,
            }
        case UPDATE_ITEM_FAILURE:
            return {
                ...state,
                updatingItem: false,
                error: null
            }
// Adding Comment Cases
        // case ADD_COMMENTS:
        // case ADD_COMMENTS_SUCCESS:
        // case ADD_COMMENTS_FAILURE:
// Default Case
        default:
            return state;
    }
}

export default reducer;