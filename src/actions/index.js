import axios from 'axios';
import axiosWithAuth from '../utils/axiosAuth';

// Login Actions
export const LOGIN = 'LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const login = creds => dispatch => {
    dispatch({ type: LOGIN })
    let userID = null;
    return axios
        .post('https://usemytechstuff.herokuapp.com/api/auth/login', creds)
        .then(response => {
            console.log('login', response.data,);
            userID = response.data.user_id
            localStorage.setItem('token', response.data.token);
            dispatch({ type: LOGIN_SUCCESS, payload: response.data })
            
        })
        .then(() => dispatch(fetchingUser(userID)))
        .catch(err => {
            dispatch({ type: LOGIN_FAILURE, payload: err })
        })
        

}

export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';

export const logout = () => {
    localStorage.removeItem('token');
    return({ type: LOGOUT_SUCCESS })
}

// Register Actions
export const REGISTER = 'REGISTER';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';

export const register = creds => dispatch => {
    dispatch({ type: REGISTER })
    let userID = null;
    return axios
        .post('https://usemytechstuff.herokuapp.com/api/auth/register', creds)
        .then(response => { 
            console.log('register!', response.data);
            userID = response.data.id;
            console.log('register ID', response.data.id);
            dispatch({ type: REGISTER_SUCCESS, payload: response.data})
        })
        .then(() => dispatch(fetchingUser(userID)))
        .catch(err => {
            dispatch({ type: REGISTER_FAILURE, payload: err })
        })
}


// Users Actions
export const FETCHING_USERS = 'FETCHING_USERS';
export const FETCHING_USERS_SUCCESS = 'FETCHING_USERS_SUCCESS';
export const FETCHING_USERS_FAILURE = 'FETCHING_USERS_FAILURE';

export const fetchingUser = (id) => dispatch => {
    dispatch({ type: FETCHING_USERS })
    return axios
        .get(`https://usemytechstuff.herokuapp.com/api/users/${id}`)
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
    return axios
        .get('https://usemytechstuff.herokuapp.com/api/tech')
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
    axiosWithAuth()
        .post('https://usemytechstuff.herokuapp.com/api/tech', item)
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
    axiosWithAuth()
        .delete(`https://usemytechstuff.herokuapp.com/api/tech/${id}`)
        .then(response => {
            console.log('this is the delete', response.data);
            dispatch({ type: DELETE_ITEM_SUCCESS, payload: response.data })
        })
        .catch(err => {
            dispatch({ type: DELETE_ITEM_FAILURE, payload: err })
        })
}

export const UPDATE_ITEM = 'UPDATE_ITEM';
export const UPDATE_ITEM_SUCCESS = 'UPDATE_ITEM_SUCCESS';
export const UPDATE_ITEM_FAILURE = 'UPDATE_ITEM_FAILURE';

export const updateItem = (id, item) => dispatch => {
    dispatch({ type: UPDATE_ITEM })
    // insert axiosWithAuth here for protected endpoints
    console.log("itemid", id);
    axiosWithAuth()
        .put(`https://usemytechstuff.herokuapp.com/api/tech/${id}`, item)
        .then(response => {
            console.log('this is the update', response.data);
            dispatch({ type: UPDATE_ITEM_SUCCESS, payload: response.data })
        })
        .catch(err => {
            dispatch({ type: UPDATE_ITEM_FAILURE, payload: err })
        })
}

// Tech Item Comments Actions
// Stretch
export const ADD_COMMENTS = 'ADD_COMMENTS';
export const ADD_COMMENTS_SUCCESS = 'ADD_COMMENTS_SUCCESS';
export const ADD_COMMENTS_FAILURE = 'ADD_COMMENTS_FAILURE'

export const addingComment = (comment) => dispatch => {
    dispatch({ type: ADD_COMMENTS })
    // insert axiosWithAuth here for protected endpoints
    axiosWithAuth()
        .post('', comment)
        .then(response => {
            console.log(response.data);
            dispatch({ type: ADD_COMMENTS_SUCCESS, payload: response.data })
        })
        .catch(err => {
            dispatch({ type: ADD_COMMENTS_FAILURE, payload: err })
        })
}