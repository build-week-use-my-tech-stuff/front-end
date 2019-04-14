import axios from 'axios';
// import axiosWithAuth from '../utils/axiosAuth';

// Login/Register Actions
export const LOGIN = 'LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const login = creds => dispatch => {
    dispatch({ type: LOGIN })
    return axios
        .post('', creds)
        .then(response => {
            localStorage.setItem('token', response.data.payload);
            dispatch({ type: LOGIN_SUCCESS, payload: response.data.payload })
        })
        .catch(err => {
            dispatch({ type: LOGIN_FAILURE, payload: err})
        })

}

// Tech Item Actions
export const FETCHING = 'FETCHING';
export const FETCHING_SUCCESS = 'FETCHING_SUCCESS';
export const FETCHING_FAILURE = 'FETCHING_FAILURE';

export const fetchingItems = () => dispatch => {
    dispatch({ type: FETCHING })
    // insert axiosWithAuth here for protected endpoints
    return axios
        .get('')
        .then(response => {
            console.log(response.data);
            dispatch({ type: FETCHING_SUCCESS, payload: response.data })
        })
        .catch(err => {
            dispatch({ type: FETCHING_FAILURE, payload: err })
        })
}


export const ADD_ITEM = 'ADD_ITEM';
export const ADD_ITEM_SUCCESS = 'ADD_ITEM_SUCCESS';
export const ADD_ITEM_FAILURE = 'ADD_ITEM_FAILURE';

export const DELETE_ITEM = 'DELETE_ITEM';
export const DELETE_ITEM_SUCCESS = 'DELETE_ITEM_SUCCESS';
export const DELETE_ITEM_FAILURE = 'DELETE_ITEM_FAILURE';

export const UPDATE_ITEM = 'UPDATE_ITEM';
export const UPDATE_ITEM_SUCCESS = 'UPDATE_ITEM_SUCCESS';
export const UPDATE_ITEM_FAILURE = 'UPDATE_ITEM_FAILURE';

// Tech Item Comments Actions
export const ADD_COMMENTS = 'ADD_COMMENTS';
export const ADD_COMMENTS_SUCCESS = 'ADD_COMMENTS_SUCCESS';
export const ADD_COMMENTS_FAILURE = 'ADD_COMMENTS_FAILURE'