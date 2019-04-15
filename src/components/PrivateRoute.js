import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: ItemList, ...rest }) => {
    return (
        <Route 
            {...rest}
            render = {props =>
                localStorage.getItem('token') ? (
                    <ItemList {...props} />
                ) : (
                    <Redirect to = '/login' />
                )
            }
        />
    );
};

export default PrivateRoute;