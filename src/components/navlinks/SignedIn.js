import React from 'react';
import { Link } from 'react-router-dom';
import {NavBar} from './Links.styled'

const SignedIn = props => {
    return (
        <NavBar>
            <Link to = '/'>Dashboard</Link>
            <Link to = '/listing'>Add Listing</Link>
            <Link to = '/profile'>Account</Link>
            <Link to = '/' onClick = {props.logout}>Logout</Link> 
        </NavBar>
    )
}

export default SignedIn;