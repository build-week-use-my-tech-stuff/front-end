import axios from 'axios';
// import axiosWithAuth from '../utils/axiosAuth';

// Login Actions
export const LOGIN = 'LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const login = creds => dispatch => {
    dispatch({ type: LOGIN })
    return axios
        .post('https://usemytech.herokuapp.com/api/auth/login', creds)
        .then(response => {
            localStorage.setItem('token', response.data.payload);
            dispatch({ type: LOGIN_SUCCESS, payload: response.data.payload })
        })
        .catch(err => {
            dispatch({ type: LOGIN_FAILURE, payload: err })
        })

}

// Register Actions
export const REGISTER = 'REGISTER';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';

export const register = creds => dispatch => {
    dispatch({ type: REGISTER })
    axios
        .post('https://usemytech.herokuapp.com/api/auth/register', creds)
        .then(response => {
            dispatch({ type: REGISTER_SUCCESS, payload: response.data.payload})
        })
        .catch(err => {
            dispatch({ type: REGISTER_FAILURE, payload: err })
        })
}

// Users Actions
export const FETCHING_USERS = 'FETCHING_USERS';
export const FETCHING_USERS_SUCCESS = 'FETCHING_USERS_SUCCESS';
export const FETCHING_USERS_FAILURE = 'FETCHING_USERS_FAILURE';

export const fetchingUsers = () => dispatch => {
    dispatch({ type: FETCHING_USERS })
    // insert axiosWithAuth here for protected endpoints
    return axios
        .get('')
        .then(response => {
            console.log(response.data);
            dispatch({ type: FETCHING_USERS_SUCCESS, payload: response.data })
        })
        .catch(err => {
            dispatch({ type: FETCHING_USERS_FAILURE, payload: err })
        })
}

// Tech Item Actions
export const FETCHING_ITEM = 'FETCHING_ITEM';
export const FETCHING_ITEM_SUCCESS = 'FETCHING_ITEM_SUCCESS';
export const FETCHING_ITEM_FAILURE = 'FETCHING_ITEM_FAILURE';

export const fetchingItems = () => dispatch => {
    dispatch({ type: FETCHING_ITEM })
    // insert axiosWithAuth here for protected endpoints
    return axios
        .get('')
        .then(response => {
            console.log(response.data);
            dispatch({ type: FETCHING_ITEM_SUCCESS, payload: response.data })
        })
        .catch(err => {
            dispatch({ type: FETCHING_ITEM_FAILURE, payload: err })
        })
}


export const ADD_ITEM = 'ADD_ITEM';
export const ADD_ITEM_SUCCESS = 'ADD_ITEM_SUCCESS';
export const ADD_ITEM_FAILURE = 'ADD_ITEM_FAILURE';

export const addingItem = (item) => dispatch => {
    dispatch({ type: ADD_ITEM })
    // insert axiosWithAuth here for protected endpoints
    return axios
        .post('', item)
        .then(response => {
            console.log(response.data);
            dispatch({ type: ADD_ITEM_SUCCESS, payload: response.data })
        })
        .catch(err => {
            dispatch({ type: ADD_ITEM_FAILURE, payload: err })
        })
}

export const DELETE_ITEM = 'DELETE_ITEM';
export const DELETE_ITEM_SUCCESS = 'DELETE_ITEM_SUCCESS';
export const DELETE_ITEM_FAILURE = 'DELETE_ITEM_FAILURE';

export const deleteItem = (id) => dispatch => {
    dispatch({ type: DELETE_ITEM })
    // insert axiosWithAuth here for protected endpoints
    return axios
        .delete(`/${id}`)
        .then(response => {
            console.log(response.data);
            dispatch({ type: DELETE_ITEM_SUCCESS, payload: response.data })
        })
        .catch(err => {
            dispatch({ type: DELETE_ITEM_FAILURE, payload: err })
        })
}

export const UPDATE_ITEM = 'UPDATE_ITEM';
export const UPDATE_ITEM_SUCCESS = 'UPDATE_ITEM_SUCCESS';
export const UPDATE_ITEM_FAILURE = 'UPDATE_ITEM_FAILURE';

export const updateItem = (item) => dispatch => {
    dispatch({ type: UPDATE_ITEM })
    // insert axiosWithAuth here for protected endpoints
    return axios
        .put(`/${item.id}`)
        .then(response => {
            console.log(response.data);
            dispatch({ type: UPDATE_ITEM_SUCCESS, payload: response.data })
        })
        .catch(err => {
            dispatch({ type: UPDATE_ITEM_FAILURE, payload: err })
        })
}

// Tech Item Comments Actions
export const ADD_COMMENTS = 'ADD_COMMENTS';
export const ADD_COMMENTS_SUCCESS = 'ADD_COMMENTS_SUCCESS';
export const ADD_COMMENTS_FAILURE = 'ADD_COMMENTS_FAILURE'

export const addItem = (comment) => dispatch => {
    dispatch({ type: ADD_COMMENTS })
    // insert axiosWithAuth here for protected endpoints
    return axios
        .post('', comment)
        .then(response => {
            console.log(response.data);
            dispatch({ type: ADD_COMMENTS_SUCCESS, payload: response.data })
        })
        .catch(err => {
            dispatch({ type: ADD_COMMENTS_FAILURE, payload: err })
        })
}