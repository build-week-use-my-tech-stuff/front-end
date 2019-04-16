import React from 'react';
import { Link } from 'react-router-dom';
import {NavBar} from './Links.styled'

const SignedOut = props => {
    return (
        <NavBar>
            <Link to = '/'>Dashboard</Link>
            <Link to = '/login'>Login</Link>
            <Link to = '/register'>Register</Link>
        </NavBar>
    )
}

export default SignedOut;